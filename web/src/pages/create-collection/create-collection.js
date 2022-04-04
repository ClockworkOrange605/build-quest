import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useMetaMask } from "../../providers/MetaMaskProvider"

import CollectionDetails from "./steps/collection-details"
import CollectionMetadata from "./steps/collection-metadata"
import SaleDetails from "./steps/sale-details"

const CreateCollection = () => {
  const navigate = useNavigate()

  const { address, ethereum } = useMetaMask()

  const [currentStep, setCurrentStep] = useState(1)

  // const [collectionId, setCollectionId] = useState()
  const [collectionData, setCollectionData] = useState({})

  const saveCollection = async () => {
    const token = sessionStorage.getItem(address)

    const response = await fetch(`/account/${address}/collections/create`, {
      headers: { 'Content-type': 'application/json', 'x-auth-token': token },
      method: 'POST',
      body: JSON.stringify(collectionData)
    })

    const { id } = await response.json()
    // setCollectionId(id)
    return id
  }

  const updateCollection = async (collectionId, txHash) => {
    const token = sessionStorage.getItem(address)
    const response = await fetch(
      `/account/${address}/collections/${collectionId}/update`,
      {
        headers: { 'Content-type': 'application/json', 'x-auth-token': token },
        method: 'POST',
        body: JSON.stringify({
          txHash
        })
      }
    )
    console.log(await response.json())
  }

  const deployCollection = async (collectionId) => {
    const token = sessionStorage.getItem(address)
    const response = await fetch(
      `/account/${address}/collections/${collectionId}/deploy`,
      {
        headers: { 'Content-type': 'application/json', 'x-auth-token': token },
        method: 'POST',
        body: JSON.stringify({
          name: collectionData.name,
          symbol: collectionData.symbol,
          targetTimeBetweenMints: collectionData.targetBlocksPerSale,
          startingPrice: collectionData.startingPrice
        })
      }
    )
    const { tx: txData } = await response.json()

    const txHash = await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: address,
          data: txData,
        },
      ]
    })

    return txHash
  }

  const uploadFile = async (event) => {
    console.log(event)
    const response = await fetch('/utils/upload', {
      method: 'POST',
      body: event.target.files[0]
    })

    const { file } = await response.json()

    handleChange(event.target.name)({ target: { value: file } })
  }

  const nextStep = () =>
    setCurrentStep(currentStep + 1)

  const prevStep = () =>
    setCurrentStep(currentStep - 1)

  const handleChange = (input) => (e) =>
    setCollectionData({
      ...collectionData,
      [input]: e.target.value,
    })

  const submit = async () => {
    const id = await saveCollection()
    const tx = await deployCollection(id)
    await updateCollection(id, tx)

    navigate(`/collection/${id}`)
  }

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <CollectionDetails
            values={collectionData}
            handleChange={handleChange}
            uploadFile={uploadFile}
            nextStep={nextStep}
          />
        )

      case 2:
        return (
          <CollectionMetadata
            values={collectionData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )

      case 3:
        return (
          <SaleDetails
            values={collectionData}
            handleChange={handleChange}
            nextStep={submit}
            prevStep={prevStep}
          />
        )
    }
  }

  return (<div>{renderSwitch(currentStep)}</div>)
}

export default CreateCollection
