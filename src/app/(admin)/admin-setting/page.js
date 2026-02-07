import ProfileForm from "@/components/profile/ProfileForm";
import ThemeToggler from "@/components/ThemeToggler";

import React from "react";

const AdminSettingPage = () => {
  return (
    <section className="p-8 w-full bg-bglight dark:bg-gray-900 dark:text-gray-100">
      <div className="p-4 flex-1">
        <div className="flex justify-between">
          {" "}
          <h2 className="font-bold text-2xl">Setting </h2>
          <ThemeToggler />
        </div>
        <hr className="h-1 bg-blue-600 text-blue-600" />
      </div>

      <div className="container mx-auto p-4 md:w-3/5">
        <ProfileForm />
      </div>
    </section>
  );
};

export default AdminSettingPage;
