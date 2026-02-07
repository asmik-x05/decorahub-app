import {
  getProductBrands,
  getProductCategories,
  getProducts,
} from "@/api/products";
import ProductFilter from "@/components/Product/Filter";
import ProductCard from "@/components/Product/ProductCard";
import React from "react";

const productsPage = async ({ searchParams }) => {
  const getAllProducts = await getProducts({ searchParams });
  const brands = await getProductBrands();
  const categories = await getProductCategories();
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-8 pb-8 dark:text-gray-200">
        <ProductFilter productBrands={brands} productCategories={categories} />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {getAllProducts?.map((product) => (
              <ProductCard
                key={[product._id]}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrls={product.imageUrls}
                _id={product._id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default productsPage;
