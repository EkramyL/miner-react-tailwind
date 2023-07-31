import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <div>
      <nav className=" bg-red-700 flex  justify-between items-center text-slate-50 p-5  font-medium">
        <Link to="/">
          <img src={logo} alt="logo" className=" h-[45px]" />
        </Link>
        <div>
          <ul className=" flex gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/plans">Plans</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About us</NavLink>
            </li>
            <li>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/faq">Faq</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
        <div> User</div>
      </nav>
    </div>
  );
};

export default Header;
