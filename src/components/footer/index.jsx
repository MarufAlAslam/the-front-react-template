import { Link } from "@mui/material";
import React from "react";
import logo from "../../assets/img/logo.svg";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronUp, FaComments, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="py-10 bg-gray-100">
      <button
        onClick={backToTop}
        className="back-top w-[50px] h-[50px] bg-blue-500 rounded-full flex justify-center items-center fixed bottom-[20px] right-[20px]"
      >
        <FaChevronUp className="text-white text-xl" />
      </button>
      <a
        href="/chatbot"
        className="back-top w-[50px] h-[50px] bg-blue-500 rounded-full flex justify-center items-center fixed bottom-[20px] left-[20px]"
      >
        <FaComments className="text-white text-xl" />
      </a>
      <div className="container">
        <div className="grid grid-cols-7 gap-[30px]">
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Lorem Ipsum Title</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          {/* <div className="item">
            <h3 className="text-black font-bold">User Rights</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                User Entitlements
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Content Usage
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Licensing
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Permissions
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Fair Use Policy
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Copyright</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Intellectual Property
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Copyright Notice
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Permissions
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                DMCA Information
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Copyright Complaints
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Imprint</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Legal Information
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Regulatory Compliance
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Registered Address
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Company Registration
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Executive Team
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Social Media</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Connect with Us
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Follow Us
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Share Your Thoughts
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Social Media Policy
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Community Guidelines
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Products</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Branches
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Functions
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Chatbot
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Dashboard
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-[#1876D1] cursor-pointer">
                Consulting
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="bottom-footerr mt-10 border-t pt-10">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img src={logo} className="w-[120px]" alt="" />
            </Link>
            <div className="flex justify-end items-center gap-5">
              <CiLinkedin className="text-2xl" />
              <BsTwitterX className="text-xl" />
              <FaYoutube className="text-2xl" />
              <AiFillInstagram className="text-2xl" />
            </div>
          </div>

          <div className="mt-5">
            <div className="text-center">
              <p className="text-gray-800 mb-2 text-decoration-none">
                © 2021 Company, Inc. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm">
                When you visit or interact with our sites, services or tools,we
                or our authorised service providers may use cookies for storing
                information to help provide you with a better, faster and safer
                experience and for marketing purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
