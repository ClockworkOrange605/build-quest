// import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import MetaMaskProvider from "./providers/MetaMaskProvider"

import { Header } from "./components/header/header"

import { Homepage } from "./pages/homepage/homepage"
import { Collections } from "./pages/collections/collections"
import { CollectionDetail } from "./pages/collection-detail/collection-detail"
import { CreateCollection } from "./pages/create-collection/create-collection"

import "./App.scss";
// import "./components/project-card/project-card";

const App = () => {
  return (
    <MetaMaskProvider>
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
            <Route path="/create-collection" element={<CreateCollection />} />
          </Routes>
        </div>
      </div>
    </MetaMaskProvider>
  )
}

export default App
