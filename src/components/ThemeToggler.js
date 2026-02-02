"use client";
import { toggleTheme } from "@/redux/userPreferences/userPreferenceSlice";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(toggleTheme())} className="cursor-pointer">
      <FaMoon className="text-lg dark:hidden" />
      <FaSun className="text-lg hidden dark:block" />
    </button>
  );
};

export default ThemeToggler;
