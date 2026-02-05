"use client";
import {
  ADMIN_ANALYTICS_ROUTE,
  ADMIN_CUSTOMERS_ROUTE,
  ADMIN_DASHBOARD_ROUTE,
  ADMIN_ORDERS_ROUTE,
  ADMIN_PRODUCTS_ROUTE,
  ADMIN_PROMOTIONS_ROUTE,
  ADMIN_REVIEWS_ROUTE,
  ADMIN_SETTING_ROUTE,
  ADMIN_SHIPPING_ROUTE,
  ADMIN_SUPPORT_ROUTE,
  HOME_ROUTE,
} from "@/constants/routes";
import { logout } from "@/redux/auth/authSlice";
import Link from "next/link";
import React from "react";
import {
  FaBox,
  FaChartLine,
  FaHeadset,
  FaShoppingBag,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import {
  FaGaugeHigh,
  FaGear,
  FaRightFromBracket,
  FaTruckFast,
} from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { RiDiscountPercentFill, RiDiscountPercentLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="md:w-56 w-16 bg-gray-200 text-gray-900 md:block h-screen p-4 md:sticky top-0 dark:bg-gray-800 dark:text-gray-100">
      <Link href={HOME_ROUTE} className="p-4 block">
        <div className="flex  hover:text-secondary">
          <h1 className="text-2xl font-semibold">DecoraHub</h1>
          <HiOutlineHomeModern className="text-3xl font-semibold" />
        </div>
      </Link>
      <nav className="grid gap-6 px-2">
        <Link
          href={ADMIN_DASHBOARD_ROUTE}
          className="hover:bg-primary/90 hover:text-white hover:rounded-2xl p-3 text-xl"
        >
          <div className="flex gap-2 items-center">
            <FaGaugeHigh /> <h2>Dashboard</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_PRODUCTS_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <FaShoppingBag /> <h2>Products</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_ORDERS_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <FaBox /> <h2>Orders</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_CUSTOMERS_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <FaUsers /> <h2>Customers</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_REVIEWS_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <FaStar /> <h2>Reviews</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_PROMOTIONS_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <RiDiscountPercentFill /> <h2>Promotions</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_SHIPPING_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <FaTruckFast /> <h2>Shipping</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_ANALYTICS_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <FaChartLine /> <h2>Analytics</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_SUPPORT_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <FaHeadset /> <h2>Support</h2>
          </div>
        </Link>
        <Link
          href={ADMIN_SETTING_ROUTE}
          className="hover:bg-primary/90 hover:text-white p-3 text-xl hover:rounded-2xl"
        >
          <div className="flex gap-2 items-center">
            <FaGear /> <h2>Setting</h2>
          </div>
        </Link>

        <button
          onClick={() => dispatch(logout())}
          className="hover:bg-red-700 bg-red-600 text-gray-100 p-3 text-xl rounded-lg mt-4 w-full"
        >
          <div className="flex gap-2 items-center">
            <FaRightFromBracket /> <h2>Logout</h2>
          </div>
        </button>
      </nav>
    </div>
  );
};

export default SideBar;
