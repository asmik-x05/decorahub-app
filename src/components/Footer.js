import React from "react";
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaBuildingColumns, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-header-footer dark:bg-header-footer-dark dark:text-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="grid gap-4 md:grid-cols-4 pb-8">
          <div>
            <h3 className="text-xl">DecoraHub</h3>
            <p className="text-left">
              Your one-stop destination for stylish, quality furniture that
              transforms any space into a masterpiece.
            </p>
            <div className="py-4 flex gap-4 text-3xl">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
          <div>
            <h3 className="text-xl">Quick link</h3>
            <div className="grid">
              <a href="index.html">Home</a>
              <a href="#products">Products</a>
              <a href="#blogs">Blogs</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl">Customer Service</h3>
            <div className="grid">
              <a href="">FAQs</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms and condition</a>
              <a href="">Support center</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl">We accept</h3>
            <div className="flex flex-row gap-4 ">
              <span className="bg-white px-0.5 text-3xl rounded">
                <FaCcVisa className="text-blue-600 bg-white" />
              </span>
              <span className="bg-white px-0.5 text-3xl rounded">
                <FaCcMastercard className="text-red-600 bg-white" />
              </span>
              <span className=" text-3xl rounded dark:bg-gray-600">
                <FaCcApplePay />
              </span>
              <span className="bg-white px-0.5 text-3xl rounded">
                <FaBuildingColumns className="text-yellow-600 bg-white" />
              </span>
            </div>
          </div>
        </div>
        <hr className="bg-black h-1 dark:bg-gray-100" />
        <div>
          <p className="text-center text-lg">
            ©2025 DecoraHub All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
