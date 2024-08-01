import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CreateLand from "./components/CreateLand/CreateLand";
import TransferLand from "./components/TransferLand/TransferLand";
import About from "./components/About/About";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import Create from "./components/Pages/Create/Create";
import Faqs from "./components/Pages/Faqs/Faqs";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/pages/create" element={<Create />} />
        <Route path="/pages/faqs" element={<Faqs />} />
        <Route path="/create" element={<CreateLand />} />
        <Route path="/transfer" element={<TransferLand />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
    </Router>
  );
}

export default App;
