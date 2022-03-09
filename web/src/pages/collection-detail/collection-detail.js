import './collection-detail.scss'
import image from './../../assets/collection-img.png'

export function CollectionDetail(){

  let miningStarts = '01/03/2022';
  let currentPrice = 0.01;
  return (
    <div className='collection'>
      <div className='title title-extra-bold'>Collection A</div>
      <div className='center'>
        <div className='left'>
          <div className='image'>
            <img src={image}/>
          </div>
          <div className='description'>A community-driven collectibles project featuring art by Amber Park and Mason Rothschild. Across the 10,000 Weirdos in our collection, no two are the same - much like humankind itself. Consider every Weirdo minted representative of that holder’s inner Weirdo, a cosmic embodiment of our one-of-a-kind oddities.</div>
        </div>
        <div className='right'>
          <div className='starts title-regular'>Mining starts: {miningStarts}</div>
          <div className='current-price title-regular'>Current price: {currentPrice} ETH</div>
        </div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}