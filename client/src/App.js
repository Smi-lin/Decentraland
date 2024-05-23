import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CreateLand from "./components/CreateLand/CreateLand";
import TransferLand from "./components/TransferLand/TransferLand";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import Blog from "./components/Pages/Blog/Blog";
import Community from "./components/Pages/Community/Community";
import Create from "./components/Pages/Create/Create";
import Faqs from "./components/Pages/Faqs/Faqs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/pages/community" element={<Community />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/pages/create" element={<Create />} />
        <Route path="/pages/faqs" element={<Faqs />} />
        <Route path="/create" element={<CreateLand />} />
        <Route path="/transfer" element={<TransferLand />} />
      </Routes>
    </Router>
  );
}

export default App;
