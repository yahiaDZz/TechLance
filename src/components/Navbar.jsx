import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="shadow-lg mb-2 bg-gradient-to-bl from-primary via-secondary to-tertiary text-white font-display py-4 px-10 flex justify-between">
        <img src={logo} alt="logo" className="w-14 h-14" />
        <ul className="mt-2 flex justify-between space-x-4 text-2xl">
        <Link to="/" className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            Home
          </Link>
          <Link to="/about" className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            About
          </Link>
          <Link to="/us" className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            Us
          </Link>
          <Link to="/agenda" className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            Agenda
          </Link>
          <Link to="/speakers" className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            Speakers
          </Link>
          <Link to="/faq" className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            FAQ
          </Link>
          <Link to="/faq" className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
