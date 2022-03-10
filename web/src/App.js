import React, { useEffect, useState } from "react";
import "./App.scss";
import "./components/project-card/project-card";
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Collections } from "./pages/collections/collections";
import { Homepage } from "./pages/homepage/homepage";
import { CollectionDetail } from "./pages/collection-detail/collection-detail";
import { CreateCollection } from "./pages/create-collection/create-collection";

function App() {
    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="App">
            <Header account={currentAccount} connectWallet={connectWallet} />
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
    );
}

export default App;
