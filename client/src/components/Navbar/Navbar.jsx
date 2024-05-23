import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../../assets/Avatar.png"

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-[100vw]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white  ">
          <img src={avatar} className='h-[5vh] w-[5vw]'/>
        </Link>
        <div className="space-x-4">
          
          <Link to="/create" className="text-gray-300 hover:text-white">
            Create Land
          </Link>
          <Link to="/transfer" className="text-gray-300 hover:text-white">
            Transfer Land
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
