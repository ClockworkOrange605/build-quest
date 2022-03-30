import { Link } from "react-router-dom";
import { useMetaMask } from "../../providers/MetaMaskProvider";

import './header.scss'
import logo from './../../assets/dd-logo.svg'

const Header = () => {
  const { status, address, connect } = useMetaMask()

  return (
    <div className='header'>
      <Link to='/' className='logo-a'>
        <div className='logo'>
          <img src={logo} />
          <div className='name title-extra-bold'>Dynamic Drops</div>
        </div>
      </Link>

      <div className='tabs'>
        <Link to='/collections' className='link'>Collections</Link>
        {/* <a href='https://github.com/ClockworkOrange605/build-quest/blob/main/README.md' className='link' target='_blank'>Docs</a> */}

        {address &&
          <Link to='/create-collection' className='create'>Create Collection</Link>
        }

        {address &&
          <div className='eth-address'>{address}</div>
        }

        {!address && status === 'unavailable' &&
          <button className='wallet'>Metamask Required</button>
        }

        {!address && status === 'initializing' &&
          <button className='wallet'>initializing ... </button>
        }

        {!address && status === 'connecting' &&
          <button className='wallet'>Connecting ...</button>
        }

        {!address && status === 'notConnected' &&
          <button className='wallet' onClick={connect}>Connect Wallet</button>
        }
      </div>
    </div>
  )
}

export default Header