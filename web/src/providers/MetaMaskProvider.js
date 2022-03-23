import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const MetaMaskContext = createContext({})

function MetaMaskProvider({ children }) {
  const [status, setStatus] = useState('initializing')
  const [account, setAccount] = useState()

  const [rpc, setRpc] = useState(null)

  useEffect(async () => {
    const { ethereum } = window

    if (ethereum && ethereum.isMetaMask) {
      setStatus('connecting')

      // console.log(ethereum._state.initialized)
      check(ethereum)

      setRpc(ethereum)
    } else {
      setStatus('unavailable')
    }
  }, [window.ethereum])

  const check = async (rpc) => {
    console.log(rpc.selectedAddress)
    if (rpc.selectedAddress) {
      setAccount(rpc.selectedAddress)
      setStatus('connected')
    } else {
      setStatus('notConnected')
    }
  }

  const connect = async () => {
    setStatus('connecting')
    await rpc.request({ method: "eth_requestAccounts" })
    setAccount(rpc.selectedAddress)
    setStatus('connected')
  }

  const context = useMemo(
    () => ({ status, account, rpc, connect }),
    [status, account, rpc]
  )

  return (
    <MetaMaskContext.Provider value={context}>
      {children}
      <div className="Overlay" style={{
        // visibility: (connecting || authorizing) ? 'visible' : 'hidden'
      }}>
        {/* {connecting && <p>Connect To Metamask</p>} */}
        {/* {authorizing && <p>Sign Message to continue</p>} */}
      </div>
    </MetaMaskContext.Provider>
  )
}

const useMetaMask =
  () => useContext(MetaMaskContext)

export default MetaMaskProvider
export { useMetaMask }