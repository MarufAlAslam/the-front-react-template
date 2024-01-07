import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { CiCircleQuestion, CiGlobe, CiSearch, CiUser } from "react-icons/ci";

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
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  Branches
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  Functions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  Chat
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  Pricing
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
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
