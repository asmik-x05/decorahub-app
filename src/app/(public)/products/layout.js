import Banner from "@/components/Product/Banner";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Banner />
      {children}
    </>
  );
};

export default layout;
