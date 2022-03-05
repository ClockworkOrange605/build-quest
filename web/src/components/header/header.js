import './header.scss'
import logo from './../../assets/dd-logo.svg'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export function Header(props){

  useEffect(()=>console.log(props))


  return(
    <div className='header'>
      <Link to='/' className='logo-a'>
        <div className='logo'>
          <img src={logo} />
          <div className='name'>Dynamic Drops</div>
        </div>
      </Link>
      <div className='tabs'>
        <Link to='/docs' className='link'>Docs</Link>
        <Link to='/collections' className='link'>Collections</Link>
        <button className='create'>Create Collection</button>
        { !props.account ?
          <button className='wallet' onClick={props.connectWallet}>Connect Wallet</button>
          : <div className='eth-address'>{props.account}</div>}
      </div>
    </div>
  )
}

//#38B6FF