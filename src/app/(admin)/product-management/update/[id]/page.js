import { getProductById } from "@/api/products";
import ProductForm from "@/components/Product/ProductForm";
import React from "react";

const EditProductPage = async ({ params }) => {
  const id = (await params).id;
  const product = await getProductById(id);
  // console.log(product)
  return (
    <section className="p-8 w-full bg-bglight dark:bg-gray-900 dark:text-gray-100">
      <div className="p-4 flex-1">
        <h2 className="font-bold text-2xl">Update Product</h2>
        <hr className="h-1 bg-blue-600 text-blue-600" />
      </div>

      <div className="flex justify-center items-center w-full my-8">
        <ProductForm product={product} />
      </div>

      <div className=" p-4">
        <hr className="border h-1 bg-black dark:bg-gray-100 rounded-lg" />
        <div>
          <p className="text-center text-lg dark:text-gray-100 mt-4">
            ©2025 DecoraHub All right reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default EditProductPage;
