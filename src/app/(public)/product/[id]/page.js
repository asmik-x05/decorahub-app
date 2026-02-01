import React from "react";

const page = async ({ params }) => {
  const productId = (await params).id;
  return <div>product id : {productId}</div>;
};

export default page;
