import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import AddToCart from "./AddToCart";

const ProductCard = ({ name, price, imageUrls, description, _id }) => {
  return (
    <div className="bg-white dark:bg-[#1E1B19] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <Image
        src={imageUrls[0] ?? ""}
        alt={name}
        className="w-full h-48 object-cover"
        height={400}
        width={600}
      />
      <div className="p-4">
        <Link href={`/product/${_id}`}>
          <h3 className="text-lg font-semibold text-txt-primary dark:text-txt-primary-dark">
            {name}
          </h3>
        </Link>
        <p className="text-txt-secondary dark:text-txt-secondary-dark text-sm">
          {description.slice(0, 60)}...
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-primary font-bold text-xl dark:text-gray-300">
            <span className="line-through">${price * 1.2}&nbsp;</span>${price}
          </span>
          <div className="text-xl rounded-xl text-bglight  dark:text-bglight hover:bg-primary/90 dark:hover:bg-secondary/80 transition">
            
            <AddToCart product={{ name, price, imageUrls, id: _id }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
