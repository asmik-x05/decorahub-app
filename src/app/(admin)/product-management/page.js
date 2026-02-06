import { getProducts } from "@/api/products";
import Pagination from "@/components/Product/Pagination";
import ProductsTable from "@/components/Product/Table";
import Link from "next/link";
import React from "react";

const AdminProductManagementPage = async ({searchParams}) => {
  const products =  await getProducts({searchParams} );
  return (
    <section className="p-8 w-full bg-bglight dark:bg-gray-900 dark:text-gray-100">
      <div className="p-4 flex-1">
        <h2 className="font-bold text-2xl">Product Management</h2>
        <hr className="h-1 bg-blue-600 text-blue-600" />
      </div>
      <div className="mb-4 flex justify-end">
        <Link
          href="/product-management/add"
          className="text-gray-100 bg-primary/90 px-4 py-2 rounded-lg hover:bg-primary"
        >
          Add Product +
        </Link>
        
      </div>
      <div className="h-screen">
        <ProductsTable products={products} />
        <Pagination />
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

export default AdminProductManagementPage;
