import { getProducts } from "@/api/products";
import ProductFilter from "@/components/Product/Filter";
import ProductCard from "@/components/Product/ProductCard";
import React from "react";

const productsPage = async ({ searchParams }) => {
  const getAllProducts = await getProducts({ searchParams });
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-8">
      <ProductFilter />
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
    </section>
  );
};

export default productsPage;
