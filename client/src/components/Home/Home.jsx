import React, { useState } from "react";
import Footer from "../Footer/Footer";

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
            Subscribe for platform news, exciting in world events and developments for the Decentraland community
            </p>
         <div>
         <input type="text" placeholder="Input your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[30vw] h-[7vh] p-2 border rounded text-[#000] mr-5 "/>
         <button type="submit" className="text-white  p-2 rounded bg-blue-500 w-[8vw] h-[3rem]">View</button>
         </div>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  );
}

export default Home;
