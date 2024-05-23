import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        setNavClass("affix");
      } else {
        setNavClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`nav w-full fixed top-0 bg-blue-900 ${navClass}`}>
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="logo h-[20px] w-[30px]">
          <a href="/" className="text-gray-200 text-2xl">
            ACRE
          </a>
          {/* Uncomment this line if you want to use an image for the logo */}
          {/* <img src={Avatar} alt="logo" className="h-full w-full object-contain" /> */}
        </div>
        <div className={`main_list ${isMenuOpen ? 'show_list' : ''}`}>
          <ul className="navlinks flex gap-[25px] space-x-8">
            <Link to="/about" className="text-gray-200">
              About
            </Link>
            <Link to="/explore" className="text-gray-200">
              Explore
            </Link>
            <Link to="/marketplace" className="text-gray-200">
              Marketplace
            </Link>
            <div className="relative">
              <button
                onClick={handleDropdown}
                className="text-gray-200 focus:outline-none"
              >
                Pages
              </button>
              {isDropdownOpen && (
                <div className="absolute top-10 right-0 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link
                    to="/pages/create"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Create
                  </Link>
                  <Link
                    to="/pages/blog"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/pages/community"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Community
                  </Link>
                  <Link
                    to="/pages/faqs"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    FAQ's
                  </Link>
                </div>
              )}
            </div>
            <Link to="/connect-wallet" className="text-gray-200">
              Connect Wallet
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
