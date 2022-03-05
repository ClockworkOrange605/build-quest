import './homepage.scss'
import graph from './../../assets/graph.png'
import { ProjectCard } from '../../components/project-card/project-card'


export function Homepage(){
  return(
    <div className='homepage'>
      <div className='left'>
        <div className='title title-extra-bold'>Dynamic Pricing for NFT Drops</div>
        <div className='text'>
          <div className='first'>Drop your NFT collection & let audience demand determine the mint price.</div>
          <div className='second'>Low rate of minting? Price cools off.</div>
          <div className='third'>Lots of minting? Price heats up!</div>
          <br />
          <div className='forth'>Dynamic Drops unleashes the free market economy of NFT sales.</div>
        </div>
      </div>
      <div className='right'>
        <div className='graph-container'>
          <img src={graph} className='graph'/>
        </div>
        <div className='featured'>
          <div className='title title-medium'>Featured Collection</div>
          <ProjectCard className='card'/>
        </div>
      </div>

    </div>
  )
}