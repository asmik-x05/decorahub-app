"use client";
import SideBar from "@/components/admin/SideBar";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const layout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
  }, [user]);
  return (
    <div className="flex w-full">
      <SideBar />
      {children}
    </div>
  );
};

export default layout;
