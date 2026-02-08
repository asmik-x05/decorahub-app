"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(addToCart(product));

    toast.success(`${product.name} added to cart.`);
  }

  return (
       <button
      onClick={addProductToCart}
      className="w-full text-white bg-primary/90 hover:bg-primary/80  font-medium rounded-lg text-sm px-5 py-2.5  flex items-center justify-center gap-2 active:scale-95"
    >
         Add to Cart
      <FaCartShopping />
    </button>
  );
};

export default AddToCart;
