"use client";

import { CART_ROUTE } from "@/constants/routes";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Link from "next/link";

const CartIcon = () => {
  const { products } = useSelector((state) => state.cart);

  return (
    <Link
      href={CART_ROUTE}
      className="text-gray-700 px-2 py-1 dark:text-gray-300 hover:text-primary relative"
    >
      <FaCartShopping className="text-lg" />
      <span className="absolute top-0 right-0 bg-primary text-white text-xs h-3.5 w-3.5 rounded-full flex items-center justify-center">{products.length}</span>
    </Link>
  );
};

export default CartIcon;