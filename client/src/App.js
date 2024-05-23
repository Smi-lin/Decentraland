import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreateLand from './components/CreateLand/CreateLand';
import TransferLand from './components/TransferLand/TransferLand';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateLand />} />
        <Route path="/transfer" element={<TransferLand />} />
      </Routes>
    </Router>
  );
}

export default App;
