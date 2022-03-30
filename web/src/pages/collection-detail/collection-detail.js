import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { useAuth } from "../../providers/AuthProvider"

import './collection-detail.scss'

export function CollectionDetail() {
  const { id } = useParams()
  const { account: address } = useAuth()

  const [data, setData] = useState()

  useEffect(() => {
    const fetchCollection = async (id, address) => {
      const token = sessionStorage.getItem(address)

      const response = await fetch(`/account/${address}/collections/${id}`, {
        headers: { 'Content-type': 'application/json', 'x-auth-token': token }
      })

      const data = await response.json()
      setData(data)
    }

    fetchCollection(id, address)
  }, [id])

  return (
    <div>
      {data && (
        <div className='collection'>
          <div className='title title-extra-bold'>{data.name}</div>
          <div className='center'>
            <div className='left'>
              <div className='image'>
                {/* <img src={info.logo} /> */}
              </div>
              <div className='description'>{data.description}</div>
            </div>
            <div className='right'>
              {/* <div className='current-price title-regular'>Current price: {currentPrice} ETH</div> */}
              <button className='mint-btn'>MINT NFT</button>
              <img src="https://cdn.discordapp.com/attachments/948761722657849364/952208827699314748/Screen_Shot_2022-03-12_at_22.05.48.png" className='graph' />
            </div>
          </div>
          <div className='bottom'></div>
        </div>
      )}
    </div>
  )
}