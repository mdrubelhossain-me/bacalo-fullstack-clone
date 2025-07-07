import React, { useState } from "react";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import LocationModal from "../LocationModal/LocationModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("Alaska");

  // New state for language and currency dropdowns
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  // To toggle dropdown visibility
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  // Language and currency options
  const languages = ["English", "Spanish", "French", "German"];
  const currencies = ["USD", "EUR", "GBP", "BDT"];

  return (
    <header className="w-full">
      {/* Top Blue Notice */}
      <div className="bg-blue-900 text-white text-center text-sm py-2 px-4">
        Due to the <strong>COVID 19</strong> epidemic, orders may be processed
        with a slight delay
      </div>

      {/* Secondary Navigation Bar */}
      <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 py-2 px-4 border-b">
        <div className="flex gap-4 flex-wrap">
          <a href="#" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="hover:text-blue-600">
            My Account
          </a>
          <a href="#" className="hover:text-blue-600">
            Wishlist
          </a>
          <a href="#" className="hover:text-blue-600">
            Order Tracking
          </a>
        </div>
        <div className="flex gap-4 flex-wrap mt-2 md:mt-0 items-center relative">
          <span className="cursor-pointer">
            🛡️ 100% Secure delivery without contacting the courier
          </span>
          <span>
            Need help? Call Us:{" "}
            <span className="text-blue-500 font-semibold">+0020 500</span>
          </span>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setCurrencyDropdownOpen(false);
              }}
              className="flex items-center cursor-pointer select-none"
            >
              {language} <IoMdArrowDropdown className="inline" />
            </button>
            {langDropdownOpen && (
              <ul className="absolute right-0 mt-1 bg-white border rounded shadow-md text-sm w-28 z-10">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangDropdownOpen(false);
                    }}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setCurrencyDropdownOpen(!currencyDropdownOpen);
                setLangDropdownOpen(false);
              }}
              className="flex items-center cursor-pointer select-none"
            >
              {currency} <IoMdArrowDropdown className="inline" />
            </button>
            {currencyDropdownOpen && (
              <ul className="absolute right-0 mt-1 bg-white border rounded shadow-md text-sm w-24 z-10">
                {currencies.map((cur) => (
                  <li
                    key={cur}
                    onClick={() => {
                      setCurrency(cur);
                      setCurrencyDropdownOpen(false);
                    }}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {cur}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
     <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4 py-4 px-4">
  {/* Logo */}
  <div className="flex items-center text-blue-800 font-bold text-xl">
    <span className="text-3xl">🛍️</span>
    <span className="ml-2">bacola</span>
  </div>

  {/* Search Area with Location */}
  <div className="flex flex-wrap md:flex-nowrap items-center gap-4 flex-grow">
    {/* Location Selector */}
    <button
      onClick={() => setIsModalOpen(true)}
      className="flex items-center justify-between border px-4 py-2 rounded w-full md:w-[200px] hover:shadow-sm"
    >
      <div className="text-left leading-tight">
        <p className="text-gray-500 text-xs">Your Location:</p>
        <p className="font-semibold">{location}</p>
      </div>
      <IoMdArrowDropdown className="text-lg text-gray-500 ml-2" />
    </button>

    {/* Search Box */}
    <div className="relative flex-grow">
      <IoMdSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-xl" />
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full pl-10 pr-4 py-3 rounded border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  </div>

  {/* User & Cart */}
  <div className="flex items-center gap-6 text-gray-700 text-lg">
    {/* User Icon */}
    <FaUser className="cursor-pointer" />

    {/* Cart Icon with Badge */}
    <div className="relative cursor-pointer">
      <FaShoppingBag />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-[6px] py-[1px] rounded-full">
        1
      </span>
    </div>

    {/* Price Display */}
    <span className="text-sm font-semibold">
      {currency === "USD"
        ? "$3.29"
        : currency === "EUR"
        ? "€2.95"
        : currency === "GBP"
        ? "£2.50"
        : "৳300"}
    </span>
  </div>
</div>


      {/* Location Modal */}
      {isModalOpen && (
        <LocationModal
          onClose={() => setIsModalOpen(false)}
          selected={location}
          setSelected={setLocation}
        />
      )}
    </header>
  );
};

export default Header;
