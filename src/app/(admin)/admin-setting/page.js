import ThemeToggler from "@/components/ThemeToggler";
import React from "react";

const AdminSettingPage = () => {
  return <section className="w-full flex justify-center items-center bg-bglight dark:bg-gray-900">
    <ThemeToggler />;
  </section>
};

export default AdminSettingPage;