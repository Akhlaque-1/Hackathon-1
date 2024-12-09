import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-6">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-bold mb-4">SHOP.CO</h2>
          <p className="text-sm text-gray-400 mb-4">
            We have clothes that suit your style and that you’re proud to wear.
            From women to men.
          </p>
          <p className="text-sm text-gray-400 mb-4">Get 10% off your first order</p>
          
        </div>



        <div className="flex justify-center md:justify-start mt-10 gap-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaTwitter className="w-6 h-6" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </div>

        {/* Column 2 */}
        <div className="grid grid-cols-5 gap-x-48">
        <div>
          <h2 className=" flex text-lg font-bold mb-4">Company</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Carers</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Help</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Custmer Support</li>
            <li>Delivery Supports</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        

        {/* Column 5*/}
        <div>
          <h2 className="text-lg font-bold mb-4">FAQ</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Account</li>
            <li>Manage Delivers</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>


          
        {/* Column 6 */}
        <div>
          <h2 className="text-lg font-bold mb-4">RESOURCES</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to- Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
      <img src="Frame 53.png" alt="" className="ml-[900px]" />
       
      </div>
      © {new Date().getFullYear()} SHOP.CO @2000-2023.All Rights Reserved
    </footer>



  );
};

export default Footer;