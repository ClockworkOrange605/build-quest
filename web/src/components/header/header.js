import './header.scss'
import logo from './../../assets/drop.png'
import { useEffect } from 'react'


export function Header(props){

  useEffect(()=>console.log(props))


  return(
    <div className='header'>
      <div className='logo'>
        <img src={logo} />
        <div className='name'>Dynamic Drops</div>
      </div>
      <div className='tabs'>
        <a href='www.google.com' className='docs'>Docs</a>
        <button className='create'>Create Collection</button>
        { !props.account ?
          <button className='wallet' onClick={props.connectWallet}>Connect Wallet</button>
          : <div className='eth-address'>{props.account}</div>}
      </div>
    </div>
  )
}

//#38B6FF