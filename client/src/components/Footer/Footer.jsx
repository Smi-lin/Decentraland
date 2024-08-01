import React from 'react'
import { FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer text-[#000] p-12 mt-12">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="footer-left w-full md:w-1/3 mb-8 md:mb-0">
        <p className="about text-sm mb-6">
          <span className="text-lg font-bold mb-4 block">AvatarAcre</span>
          Decentraland is a decentralized virtual reality platform built on
          the Ethereum blockchain. <br /> It allows users to create,
          experience, and monetize content and applications. <br /> In this
          virtual world, users can purchase virtual plots of land using the
          platform's cryptocurrency.
        </p>
        <div className="icons flex space-x-3">
          <a href="#">
            <FaTwitter className="w-8 h-8 bg-gray-800 p-2 rounded" />
          </a>
          <a href="#">
            <FaLinkedin className="w-8 h-8 bg-gray-800 p-2 rounded" />
          </a>
        </div>
      </div>

      <div className="footer-right w-full md:w-1/3">
        <h2 className="text-3xl font-normal mb-4">
          Avatar<span className="text-blue-500"> Acre</span>
        </h2>
        <p className="menu mb-4">
          <a href="#" className="mr-2">
            Home
          </a>{" "}
          |
          <a href="#" className="mx-2">
            About
          </a>{" "}
          |
          <a href="#" className="mx-2">
            News
          </a>{" "}
          |
          <a href="#" className="ml-2">
            Contact
          </a>
        </p>
        <p className="name text-blue-500">AvatarAcre &copy; 2024</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer