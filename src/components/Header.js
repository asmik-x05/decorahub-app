import Link from "next/link";
import React from "react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import {
  FaBars,
  FaMoon,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import Navlink from "./Navlink";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-header-footer dark:bg-header-footer-dark dark:text-gray-100 shadow-lg">
      <div className="container mx-auto py-4">
        {/* This is for large screen view */}
        <div className="md:flex hidden justify-between px-4">
          <Link href="/">
            <div className="flex">
              <h1 className="text-2xl font-semibold hover:text-secondary">
                DecoraHub
              </h1>
              <HiOutlineHomeModern className="text-3xl font-semibold hover:text-secondary" />
            </div>
          </Link>
          <Navlink className="hidden md:block" />
          <div className="flex gap-5 p-2">
            <FaSearch className="text-lg" />
            <FaShoppingCart className="text-lg" />
            <FaUser className="text-lg" />
            <FaMoon className="text-lg" />
            <FaBars className="text-lg" />
          </div>
        </div>
        {/* This is for mobile view */}
        <div className="md:hidden p-2">
          <div className="flex justify-between px-4 py-1 items-center">
            <Link href="/">
              <div className="flex">
                <h1 className="text-2xl font-semibold hover:text-secondary">
                  DecoraHub
                </h1>
                <HiOutlineHomeModern className="text-3xl font-semibold hover:text-secondary" />
              </div>
            </Link>
            <div className="flex gap-5">
              <FaMoon />
              <FaShoppingCart />
              <FaUser />
              <FaBars />
            </div>
          </div>
          <div className="p-2 relative">
            <input
              type="search"
              className="rounded-lg p-2 w-full bg-gray-300 dark:bg-header-footer text-gray-900"
              placeholder="Search Product "
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300">
              <FaSearch />
            </button>
          </div>
          <Navlink className="hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
