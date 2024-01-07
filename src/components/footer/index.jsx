import { Link } from "@mui/material";
import React from "react";
import logo from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-5 gap-[30px]">
          <div className="item">
            <h3 className="text-black font-bold">Company</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                About Us
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                History
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Purpose, Mission, and Values
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Partners
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Corporate Social Responsibility
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Careers</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Explore
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Jobs
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Interviews
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Teams
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Employee Benefits
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Press</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Media Coverage
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Press Releases
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                In the News
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Company Announcements
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Press Kit
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="s text-black font-bold">FAQ</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                General Questions
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Account Information
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Product Inquiries
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Technical Support
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Troubleshooting
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Terms and Conditions</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                General Terms
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Service Terms
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Sales Terms
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Returns and Exchanges
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Warranty Information
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Privacy</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Data Protection
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Confidentiality
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Information Security
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                User Consent
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Cookies</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Cookie Policy
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Preferences
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Opt-out Options
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Third-Party Cookies
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Cookie Settings
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Terms of Use</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                User Agreemen
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Acceptable Use
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Site Policies
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Content Guidelines
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Intellectual Property Rights
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Contact</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Customer Support
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Feedback
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Reach Us
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Sales Inquiries
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Business Partnerships
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Payments</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Payment Methods
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Billing Information
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Refunds
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Payment Security
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Subscription Payments
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">User Rights</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                User Entitlements
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Content Usage
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Licensing
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Permissions
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Fair Use Policy
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Copyright</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Intellectual Property
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Copyright Notice
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Permissions
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                DMCA Information
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Copyright Complaints
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Imprint</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Legal Information
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Regulatory Compliance
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Registered Address
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Company Registration
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Executive Team
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Social Media</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Connect with Us
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Follow Us
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Share Your Thoughts
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Social Media Policy
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Community Guidelines
              </li>
            </ul>
          </div>
          <div className="item">
            <h3 className="text-black font-bold">Products</h3>
            <ul className="mt-5 flex flex-col gap-[5px]">
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Branches
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Functions
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Chatbot
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Dashboard
              </li>
              <li className="text-black text-sm font-medium opacity-50 hover:opacity-100 hover:text-blue-500 cursor-pointer">
                Consulting
              </li>
            </ul>
          </div>
        </div>


      </div>
      <div className="bottom-footerr mt-10 border-t border-blue-500 pt-10">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img src={logo} className="w-[120px]" alt="" />
            </Link>

          </div>

          <div className="mt-5">
            <div className="text-center">
              <p className="text-gray-800 mb-2 text-decoration-none">
                © 2021 Company, Inc. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm">
                When you visit or interact with our sites, services or tools,we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
