import Banner from "@/components/Product/Banner";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="bg-bglight dark:bg-bgdark">
      <Banner />
      {children}
    </div>
  );
};

export default layout;
