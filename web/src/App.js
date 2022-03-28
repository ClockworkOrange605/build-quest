import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import MetaMaskProvider, { useMetaMask } from "./providers/MetaMaskProvider"
import AuthProvider, { useAuth } from "./providers/AuthProvider"

import { Header } from "./components/header/header"

import { Homepage } from "./pages/homepage/homepage"
import { Collections } from "./pages/collections/collections"
import { CollectionDetail } from "./pages/collection-detail/collection-detail"
import CreateCollection from "./pages/create-collection/create-collection"

import "./App.scss";
// import "./components/project-card/project-card";

const App = () => {
  return (
    <MetaMaskProvider>
      <AuthProvider>
        <div className="App">
          <Header />

          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/collections" element={<Collections />} />
              <Route
                path="/collection/:id"
                element={<CollectionDetail />}
              />
              <Route path="/create-collection"
                element={
                  <RequireAuth>
                    <CreateCollection />
                  </RequireAuth>
                }
              />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </MetaMaskProvider>
  )
}

const RequireAuth = ({ children }) => {
  const { account: address, connect, rpc: ethereum } = useMetaMask()
  let { account, check, auth, setConnecting, setAuthorizing } = useAuth()

  useEffect(() => {
    async function authorize() {
      if (!address && ethereum) {
        setConnecting(true)
        await connect()
        setConnecting(false)
      }

      if (address) {
        setConnecting(false)
      }

      if (address && !account)
        if (!await check(address)) {
          setAuthorizing(true)

          const signature = await ethereum.request({
            method: 'personal_sign', from: address,
            params: [`${address}@drops`, address]
          })
          await auth(address, signature)

          setAuthorizing(false)
        }
    }

    authorize()
  }, [ethereum, address, account])

  return account ? children : <p></p>
}

export default App
