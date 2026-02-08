"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { FaShoppingCart } from "react-icons/fa";
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
      className="min-w-10 h-10 text-lg bg-primary text-white hover:bg-secondary px-3 py-2.5 rounded-full cursor-pointer"
    >
      <FaShoppingCart />
    </button>
  );
};

export default AddToCart;
