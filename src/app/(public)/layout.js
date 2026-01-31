import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
