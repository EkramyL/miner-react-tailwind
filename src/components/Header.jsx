import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import userIcon from '../images/user_icon.svg';
import registerIcon from '../images/gift_icon.svg';

const Header = () => {
  return (
    <div>
      <nav className=" bg-[#0f172a] flex  justify-between items-center text-slate-50  py-5 px-2  font-medium">
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
        <div className="flex gap-3">
          <button className="flex gap-2">
            <i className="fill-current text-slate-50">
              <img src={userIcon} alt="user" className="" />
            </i>
            <span>Login</span>
          </button>
          <button className="flex gap-2">
            <i className="fill-current text-slate-50 ">
              <img src={registerIcon} alt="user" className="h-6" />
            </i>
            <span>Registeration</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
