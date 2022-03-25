import React, { Component } from "react";

import CollectionDetails from "./steps/collection-details";
import CollectionMetadata from "./steps/collection-metadata";
import SaleDetails from "./steps/sale-details";

import { txData } from "./txData";

export class CreateCollection extends Component {
  state = {
    step: 1,
    data: {
      targetBlocksPerSale: 0
    }

    // logo: "",
    // header: "",
    // name: "",
    // symbol: "",
    // description: "",
    // twitter: "",
    // discord: "",
    // website: "",

    // metadata: "",
    // numberOfNFTs: 0,

    // startingPrice: 0,
    // saleStartDate: "",
    // targetTimeBetweenMints: 0,
  }

  deployContract = async () => {
    const { ethereum } = window
    try {
      const txHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: ethereum.selectedAddress,
            data: txData,
          },
        ],
      })

      console.log(txHash)

    } catch (error) {
      console.log(error)
    }
  }

  nextStep = () =>
    this.setState({
      step: this.state.step + 1
    })

  prevStep = () =>
    this.setState({
      step: this.state.step - 1,
      metadata: null
    })

  handleChange = (input) => (e) =>
    this.setState({
      data: {
        ...this.state.data,
        [input]: e.target.value
      }
    })

  // submit = () =>
  //   this.deployContract()

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <CollectionDetails
            values={this.state.data}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
          />
        )

      case 2:
        return (
          <CollectionMetadata
            values={this.state.data}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        )

      case 3:
        return (
          <SaleDetails
            values={this.state.data}
            handleChange={this.handleChange}
            nextStep={this.deployContract}
            prevStep={this.prevStep}
          />
        )
    }
  }
}

export default CreateCollection
