import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const MetaMaskContext = createContext({})

function MetaMaskProvider({ children }) {
  const [status, setStatus] = useState('initializing')
  const [ethereum, setRpc] = useState()
  const [address, setAddress] = useState()

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMetaMask)
      setRpc(window.ethereum)
    else
      setStatus('unavailable')
  }, [])

  useEffect(() => {
    ethereum && check()
    //TODO: events processing
  }, [ethereum])

  async function check() {
    const accounts = await ethereum.request({
      method: "eth_accounts"
    })

    if (accounts.length) {
      setAddress(accounts[0])
      setStatus('connected')
    } else {
      setStatus('notConnected')
    }
  }

  async function connect() {
    setStatus('connecting')
    await ethereum.request({ method: "eth_requestAccounts" })
    setAddress(ethereum.selectedAddress)
    setStatus('connected')
  }

  const context = useMemo(() => ({
    status, address, ethereum, connect
  }), [status, address, ethereum])

  return (
    <MetaMaskContext.Provider value={context}>
      {children}
    </MetaMaskContext.Provider>
  )
}

const useMetaMask =
  () => useContext(MetaMaskContext)

export default MetaMaskProvider
export { useMetaMask }