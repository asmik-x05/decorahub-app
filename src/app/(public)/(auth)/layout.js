"use client";
import { HOME_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Authlayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push(HOME_ROUTE);
    }
  }, [user]);

  return <>{children}</>;
};

export default Authlayout;
