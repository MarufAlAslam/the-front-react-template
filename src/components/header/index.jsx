import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import {
  CiCircleQuestion,
  CiGlobe,
  CiMenuBurger,
  CiSearch,
  CiUser,
} from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi2";

// import { FaQuestionCircle, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative z-20 bg-white shadow-md">
      <div className="container">
        <div className="flex justify-between items-center py-5 gap-2">
          <div className="w-2/12">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img src={logo} className="w-[120px]" alt="" />
            </Link>
          </div>

          <div className="w-8/12">
            <ul className="flex justify-center items-center gap-7">
              <li>
                <Link
                  to="/"
                  className="text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                  <span>Overview</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                  <span>Branches</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                  <span>Functions</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                  <span>Chat</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-800 flex items-center gap-1 hover:text-gray-600"
                >
                  <span>Pricing</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-2/12">
            <ul className="flex justify-end items-center gap-7">
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  <CiSearch className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  <CiCircleQuestion className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  <CiGlobe className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  <CiUser className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  <CiMenuBurger className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
