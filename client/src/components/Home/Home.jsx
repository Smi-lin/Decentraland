import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <section
          className="bg-cover bg-center h-screen text-white flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1573885/pexels-photo-1573885.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Virtual Worlds
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Create, explore, and trade in the first-ever virtual world owned
              by its users.
            </p>
            <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Learn More
            </a>
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

        <section className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Get in Touch
            </h2>
            <p className="text-lg mb-8">
              Have questions or want to learn more? Contact us today!
            </p>
            <a
              href="mailto:info@decentraland.org"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        <p>&copy; 2024 AvatarAcre. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
