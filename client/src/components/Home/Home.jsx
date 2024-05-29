import React, { useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function Home() {

  const [email, setEmail] = useState('');


  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <section
          className="home h-screen bg-cover bg-center text-white flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/636342/pexels-photo-636342.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Virtual Worlds
            </h2>
            <p className="text-lg md:text-xl mb-8 text-center">
              As a pioneering example of the decentralized web, Decentraland
              emphasizes user autonomy, digital ownership, <br /> and
              decentralized governance. It represents a new frontier in virtual
              reality, where users have unprecedented freedom <br /> to shape
              their virtual experiences and participate in a truly decentralized
              economy.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Create</h3>
                <p className="text-gray-600">
                  Build your own virtual spaces, experiences, and applications
                  using our easy-to-use tools.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Explore</h3>
                <p className="text-gray-600">
                  Discover new places and experiences created by other users in
                  the community.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Trade</h3>
                <p className="text-gray-600">
                  Buy, sell, and trade virtual assets and land in the
                  Decentraland marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#ced4da] text-[#000]">
          <div className="container mx-auto text-center">
            <h4 className="text-[1rem] md:text-4xl font-bold mb-5">
            Subscribe to our newsletter
            </h4>
            <p className="text-lg mb-8">
            Get real time updates and news.  Contact us today!
            </p>
         <div>
         <input type="text" placeholder="Input your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[30vw] h-[7vh] p-2 border rounded text-[#000] mr-5 "/>
         <button type="submit" className="text-white  p-2 rounded bg-blue-500 w-[8vw] h-[3rem]">View</button>
         </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

export default Home;
