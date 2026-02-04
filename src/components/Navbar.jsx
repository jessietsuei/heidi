import React from 'react';
import Logo from '../assets/scaffold.svg';
import FlagAU from '../assets/flag-au.svg';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#D9D9D9] backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 lg:px-12 xl:px-[100px] py-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Heidi" className="h-[22.5px] w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 lg:gap-3">
          <NavLink text="Product" hasDropdown />
          <NavLink text="Specialties" hasDropdown />
          <NavLink text="Pricing" />
          <NavLink text="Resources" hasDropdown />
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Country Selector */}
          <div className="flex items-center gap-1 px-2 py-5">
            <img src={FlagAU} alt="AU" className="w-[22px] h-[16px] rounded-sm" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-heidi-text">AU</span>
              <ChevronDown />
            </div>
          </div>

          <NavLink text="Contact us" />

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-xl bg-white text-heidi-text text-sm font-medium hover:bg-gray-100 transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 rounded-xl bg-[#348DAF] text-white text-sm font-medium hover:bg-[#2a7a99] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ text, hasDropdown = false }) => {
  return (
    <div className="flex items-center gap-2 px-2 py-5">
      <span className="text-sm font-medium text-heidi-text whitespace-nowrap">{text}</span>
      {hasDropdown && <ChevronDown />}
    </div>
  );
};

const ChevronDown = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-heidi-text"
    >
      <path
        d="M1 3L5 7L9 3"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Navbar;