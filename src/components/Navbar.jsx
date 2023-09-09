import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="shadow-lg mb-2 bg-gradient-to-bl from-primary via-secondary to-tertiary text-white font-display py-4 px-10 flex justify-between">
        <img src={logo} alt="logo" className="w-14 h-14" />
        <ul className="mt-2 flex justify-between space-x-4 text-2xl">
          <li className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            <Link to="/us">Us</Link>
          </li>
          <li className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            <Link to="/agenda">Agenda</Link>
          </li>
          <li className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            <Link to="/speakers">Speakers</Link>
          </li>
          <li className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="hover:cursor-pointer border-[1px] border-transparent hover:border-white rounded-full px-8 py-2 flex">
            <Link to="/faq">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
