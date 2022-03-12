import './collection-detail.scss'
import image from './../../assets/collection-img.png'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";


export function CollectionDetail(){
  let currentPrice = 0.01;

  const { id } = useParams();
  const info = useSelector((state) => state.projectsInfo[id])
  console.log(info)

  return (
    <div className='collection'>
      <div className='title title-extra-bold'>{info.name}</div>
      <div className='center'>
        <div className='left'>
          <div className='image'>
            <img src={info.logo}/>
          </div>
          <div className='description'>{info.description}</div>
        </div>
        <div className='right'>
          <div className='current-price title-regular'>Current price: {currentPrice} ETH</div>
          <button className='mint-btn'>MINT NFT</button>
          <img src="https://cdn.discordapp.com/attachments/948761722657849364/952208827699314748/Screen_Shot_2022-03-12_at_22.05.48.png" className='graph'/>
        </div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}