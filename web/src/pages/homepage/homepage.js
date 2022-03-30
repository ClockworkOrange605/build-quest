import './homepage.scss'
import graph from './../../assets/graph.png'
import { ProjectCard } from '../../components/project-card/project-card'
import { useSelector } from 'react-redux';


export function Homepage(){

  const projectInfo = useSelector((state) => state.projectsInfo);

  return(
    <div className='homepage'>
      <div className='left'>
        <div className='title title-extra-bold'>Dynamic Pricing for NFT Drops</div>
        <div className='text'>
          <div className='first'>Drop your NFT collection & let audience demand determine the mint price.</div>
          <div className='second'>Low rate of minting? Price cools off.</div>
          <div className='third'>Lots of minting? Price heats up!</div>
          <div className='forth bold'>Dynamic Drops unleashes the free market economy of NFT sales.</div>
          <div className='qa'>
            <br/>
            <div className='question bold'>Who is this for?</div>
            <div className='answer'>Dynamic Drops doesn’t make sense for an artist minting a single NFT. But if you are an artist/creator/project with hundreds to thousands in your collection, this is the place to “drop your drop”.</div>
          </div>
          <div className='qa'>
            <br/>
            <div className='question bold'>Why Dynamic Drops?</div>
            <div className='answer'>
            After working hard on designing your collection, you face a sudden choice—what price to put the mint at? Of course you want to find the “Goldilocks number”—not too high, not too low. But how much is that? Why not let the market decide?!
            </div>
          </div>
          <div className='qa'>
            <br/>
            <div className='question bold'>Let your collection price itself!</div>
            <div className='answer'>
            If demand is going crazy, the mint price will climb. Similarly, if sales are stagnating, the price will adjust—dropping until sales pick up again. Dynamic Drops is designed to sell out your collection, whether sales are slow, or you sell out in seconds!
            </div>
          </div>
          <div className='qa'>
            <br/>
            <div className='question bold'>How does it work?</div>
            <div className='answer'>
            Basically, when minting your collection you set a target price and duration of sale. This estimates an expected rate of minting (e.g. 10 NFTs per hour). If less than 10 NFTs are minted per hour, the price begins to drop. Once minting picks up again, the price will begin to increase. This dynamic pricing continues throughout your sale.
            </div>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='graph-container'>
          <img src={graph} className='graph'/>
        </div>
        <div className='featured'>
          <div className='title title-medium'>Featured Collection</div>
          <ProjectCard className='card' projectInfo={projectInfo[7]}/>
        </div>
      </div>

    </div>
  )
}