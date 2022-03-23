import { Link } from "react-router-dom";

import { useMetaMask } from "../../providers/MetaMaskProvider";

//#38B6FF
import './header.scss'
import logo from './../../assets/dd-logo.svg'

const Header = () => {
  const { status, account, connect } = useMetaMask()

  return (
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
        {!account ?
          <button className='wallet' onClick={connect}>Connect Wallet</button> :
          <div className='eth-address'>{account}</div>
        }
      </div>
    </div>
  )
}

export default Header
export { Header }