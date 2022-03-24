import { createContext, useContext, useMemo } from 'react'
import { useState } from 'react'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [account, setAccount] = useState()

  async function auth(address, signature) {
    const response = await fetch(`/auth/${address}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ signature })
    })

    const data = await response.json()
    sessionStorage.setItem(data.account, data.token)
    setAccount(data.account)

    return data.account
  }

  async function check(address) {
    const token = sessionStorage.getItem(address)

    if (token) {
      const response = await fetch(`/auth/${address}/check`, {
        headers: { 'x-auth-token': token }
      })

      const data = await response.json()
      setAccount(data.account)

      return data.account
    }
  }

  const [connecting, setConnecting] = useState(false)
  const [authorizing, setAuthorizing] = useState(false)

  const stateMemo = useMemo(() => ({
    account,
    auth, check,
    setConnecting,
    setAuthorizing
  }), [account])

  return (
    <AuthContext.Provider value={stateMemo}>
      {children}
      <div className="Overlay" style={{
        visibility: (connecting || authorizing) ? 'visible' : 'hidden'
      }}>
        {connecting && <p>Connect To Metamask</p>}
        {authorizing && <p>Sign Message to continue</p>}
      </div>
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export default AuthProvider
export { useAuth }