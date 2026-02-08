import ProfileForm from "@/components/profile/ProfileForm";
import React from "react";

const page = () => {
  return (
     <section className="px-4 py-12 text-txt-primary dark:text-txt-primary-dark bg-bglight dark:bg-bgdark/90">
      <div className="container mx-auto p-4 md:w-3/5">
        <ProfileForm />
      </div>
    </section>
  );
};

export default page;
