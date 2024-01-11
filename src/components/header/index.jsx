import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { CiCircleQuestion, CiGlobe, CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";

// import { FaQuestionCircle, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative z-[20000] bg-white shadow-md">
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
                  className="text-gray-800 text-[15px] hover:text-[#1876D1] flex items-center gap-1"
                >
                  <span>Company</span>
                  {/* <HiOutlineChevronDown className="text-[#1876D1]" /> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/branches"
                  className="text-gray-800 text-[15px] flex items-center gap-1 hover:text-[#1876D1]"
                >
                  <span>Branches</span>
                  {/* <HiOutlineChevronDown className="text-[#1876D1]" /> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/functions"
                  className="text-gray-800 text-[15px] flex items-center gap-1 hover:text-[#1876D1]"
                >
                  <span>Functions</span>
                  {/* <HiOutlineChevronDown className="text-[#1876D1]" /> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-800 text-[15px] flex items-center gap-1 hover:text-[#1876D1]"
                >
                  <span>Pricing</span>
                  {/* <HiOutlineChevronDown className="text-[#1876D1]" /> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-800 text-[15px] flex items-center gap-1 hover:text-[#1876D1]"
                >
                  <span>Chatbot</span>
                  {/* <HiOutlineChevronDown className="text-[#1876D1]" /> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/empty-cart"
                  className="text-gray-800 text-[15px] flex items-center gap-1 hover:text-[#1876D1]"
                >
                  <span>Shop</span>
                  {/* <HiOutlineChevronDown className="text-[#1876D1]" /> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-800 text-[15px] flex items-center gap-1 hover:text-[#1876D1]"
                >
                  <span>News</span>
                  {/* <HiOutlineChevronDown className="text-[#1876D1]" /> */}
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-2/12">
            <ul className="flex justify-end items-center gap-4">
              <li>
                <Link to="/search" className="text-gray-800 hover:text-gray-600">
                  <CiSearch className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-800 hover:text-gray-600">
                  <CiCircleQuestion className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800 hover:text-gray-600">
                  <CiGlobe className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-800 hover:text-gray-600">
                  <CiUser className="text-2xl" />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-800 hover:text-gray-600 border-2 border-gray-300 flex rounded-[4px] min-w-[45px] min-h-[45px] justify-center items-center"
                >
                  <FiMenu className="text-2xl text-[#1876D1]" />
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
