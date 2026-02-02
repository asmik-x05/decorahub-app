"use client";
import { LOGIN_ROUTE } from "@/constants/routes";
import { logout } from "@/redux/auth/authSlice";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  if (!user) {
    return (
      <Link
        href={LOGIN_ROUTE}
        className="h-8 px-4 dark:bg-primary bg-secondary text-gray-100 rounded-lg text-lg font-medium cursor-pointer"
        onClick={() => {}}
      >
        Login
      </Link>
    );
  }
  return (
    <div className="relative z-50 mx-5">
      <div className="h-8 w-8 rounded-full bg-green-500 text-white flex justify-center items-center">
        <FaUser
          className="text-lg cursor-pointer"
          onClick={() => setShow(!show)}
        />
      </div>

      {show && (
        <>
          <div
            onClick={() => setShow(false)}
            className="fixed top-0 left-0 bottom-0 right-0"
          ></div>
          <div className="absolute top-10 right-0 shadow rounded-md bg-gray-200 dark:bg-gray-700">
            <div className="border-b border-gray-300 p-4">
              <h2>{user?.Name}</h2>
              <p className="text-blue-600">{user?.Email}</p>
            </div>
            <div className="flex flex-col px-4 py-2">
              <Link
                href={"/"}
                className="py-1 px-4 dark:hover:bg-primary hover:bg-secondary hover:text-gray-100 rounded-lg text-lg font-medium dark:text-gray-100"
              >
                Dashboard
              </Link>
              <Link
                href={"/"}
                className="py-1 px-4 dark:hover:bg-primary hover:bg-secondary hover:text-gray-100 rounded-lg text-lg font-medium dark:text-gray-100"
              >
                Setting
              </Link>
              <button
                className="py-1 hover:bg-red-700 bg-red-600 text-gray-100 rounded-lg text-lg font-medium mt-2 cursor-pointer"
                onClick={() => dispatch(logout())}
              >
                logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
