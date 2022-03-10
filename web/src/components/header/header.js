import './header.scss'
import logo from './../../assets/dd-logo.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export function Header(props){



  return(
    <div className='header'>
      <Link to='/' className='logo-a'>
        <div className='logo'>
          <img src={logo} />
          <div className='name title-extra-bold'>Dynamic Drops</div>
        </div>
      </Link>
      <div className='tabs'>
        <a href='https://github.com/ClockworkOrange605/build-quest/blob/main/README.md' className='link' target='_blank'>Docs</a>
        <Link to='/collections' className='link'>Collections</Link>
        <Link to='/create-collection' className='create'>Create Collection</Link>
        { !props.account ?
          <button className='wallet' onClick={props.connectWallet}>Connect Wallet</button>
          : <div className='eth-address'>{props.account}</div>}
      </div>
    </div>
  )
}

//#38B6FF