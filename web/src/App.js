import React, { useEffect, useState } from "react";
import './App.scss';
import './components/project-card/project-card'
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom';
import { ProjectCard } from './components/project-card/project-card';
import { Header } from './components/header/header'
import { Collections } from './pages/collections/collections'

function App() {

  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    console.log('avb')
    try{
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);




    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Header account={currentAccount} connectWallet={connectWallet}/>
        <Routes>
          <Route
            path='/collections'
            element={<Collections/> }/>
        </Routes>
    </div>
  );
}

export default App;
