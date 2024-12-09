"use client"
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 lg:px-8 py-4 bg-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">SHOP.CO</h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          <ul className="flex gap-6 text-gray-600">
            <li className="flex items-center gap-1 cursor-pointer">
              Shop <SlArrowDown />
            </li>
            <li>
              <a href="/onsale" className="hover:text-gray-800">
                On Sale
              </a>
            </li>
            <li>
              <a href="/newarrivals" className="hover:text-gray-800">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="/brands" className="hover:text-gray-800">
                Brands
              </a>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-md bg-gray-200 px-4 py-2 rounded-full">
          <CiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search For Products"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <FiShoppingCart
            aria-label="Shopping Cart"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <IoPersonOutline
            aria-label="User Account"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4 text-gray-600">
            <li className="flex items-center gap-1 cursor-pointer">
              Shop <SlArrowDown />
            </li>
            <li>
              <a href="/onsale" className="hover:text-gray-800">
                On Sale
              </a>
            </li>
            <li>
              <a href="/newarrivals" className="hover:text-gray-800">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="/brands" className="hover:text-gray-800">
                Brands
              </a>
            </li>
          </ul>

          <div className="mt-4 w-full bg-gray-200 px-4 py-2 rounded-full flex items-center">
            <CiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search For Products"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>
        </nav>
      )}
    </header>
  );
}



