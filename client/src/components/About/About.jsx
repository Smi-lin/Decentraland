import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[100px]">
        <div className="text-center ">
          {/* <h2 className="text-[4rem] text-indigo-600 font-semibold tracking-wide uppercase">
            About Us
          </h2> */}
          <p className="mt-2 text-[2rem] leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Revolutionizing Land Property Sales
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our decentralized app leverages blockchain technology to provide a
            secure, transparent, and efficient platform for buying and selling
            land properties. Explore the future of real estate with us.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h4l3-8 3 8h4M10 20h4M6 10v12m12-12v12"
                    ></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Decentralized Platform
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Built on blockchain technology, our platform ensures complete
                transparency and security in all transactions.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12l6 6m0-6l-6 6"
                    ></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Smart Contracts
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Utilize smart contracts to automate and secure property
                transactions without the need for intermediaries.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m4-4H8"
                    ></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Global Marketplace
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Connect with buyers and sellers from around the world in a
                seamless and borderless marketplace.
              </dd>
            </div>
          </dl>
        </div>
      </div>

     <Footer/>
    </section>
  );
};

export default About;
