import ProductForm from "@/components/Product/ProductForm";
import React from "react";

const AddProductPage = () => {
  return (
    <section className="w-full container mx-auto p-4 space-y-4 bg-bg-light">
      <h2 className="text-center text-2xl font-semibold mb-4">Add New Product</h2>
      <div className="flex justify-center items-center w-full">
        <ProductForm />
      </div>
    </section>
  );
};

export default AddProductPage;
