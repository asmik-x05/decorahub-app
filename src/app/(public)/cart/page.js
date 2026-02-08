"use client";

import { FaMinus, FaPlus, FaRegHeart, FaXmark } from "react-icons/fa6";
import { ORDER_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaImage } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/cart/cartSlice";
import { createOrder } from "@/api/orders";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ORDER_STATUS_PENDING } from "@/constants/orderStatus";

const CartPage = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  function remove(product) {
    if (confirm("Are you sure?")) {
      dispatch(removeFromCart(product));
    }
  }

  function checkout() {
    const orderIteam = products.map((product) => ({
      product: product.id,
      quantity: product.quantity,
    }));

    const shippingAddress = {
      city: user.Address.city,
      province: user.Address.province,
      country: user.Address.country,
    };

    createOrder({
      orderIteam,
      shippingAddress,
      orderNumber: `DH-${Math.floor(100000 + Math.random() * 900000)}`,
      totalPrice: Math.ceil(totalPrice * 1.13) + 200,
    })
      .then(() => {
        router.push(`${ORDER_ROUTE}?status=${ORDER_STATUS_PENDING}`);

        toast.success("Order created successfully.", {
          onClose: () => {
            dispatch(clearCart());
          },
        });
      })
      .catch((error) => {
        toast.error(error?.response?.data);
      });
  }

  return (
    <section className="bg-bglight py-8 antialiased dark:bg-bgdark md:py-16 min-h-screen">
      <div className="mx-auto container px-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Your cart items
        </h2>
        {products.length == 0 ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="flex flex-col dark:text-gray-200 gap-4">
              <MdOutlineRemoveShoppingCart className="text-9xl" />

              <p>No items added to cart.</p>
            </div>
          </div>
        ) : (
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#1E1B19] md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <Link
                        href={`${PRODUCTS_ROUTE}/${product.id}`}
                        className="shrink-0 md:order-1"
                      >
                        {product.imageUrls.length > 0 ? (
                          <Image
                            className="h-20 w-20 object-contain"
                            src={product.imageUrls[0]}
                            alt={product.name}
                            height={200}
                            width={200}
                          />
                        ) : (
                          <FaImage className="h-20 w-20 text-gray-400" />
                        )}
                      </Link>
                      <label htmlFor="counter-input" className="sr-only">
                        Choose quantity:
                      </label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            onClick={() => dispatch(decreaseQuantity(product))}
                            type="button"
                            disabled={product.quantity == 1}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200  dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <FaMinus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                          </button>
                          <input
                            type="text"
                            id="counter-input"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            disabled
                            value={product.quantity}
                          />
                          <button
                            type="button"
                            onClick={() => dispatch(increaseQuantity(product))}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200  dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                          >
                            <FaPlus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className=" font-bold text-gray-900 dark:text-white">
                            Rs. {product.price * product.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <Link
                          href={`${PRODUCTS_ROUTE}/${product.id}`}
                          className=" font-medium text-gray-900 hover:underline dark:text-white"
                        >
                          {product.name}
                        </Link>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex gap-1 items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                          >
                            <FaRegHeart />
                            Add to Favorites
                          </button>
                          <button
                            type="button"
                            onClick={() => remove(product)}
                            className="inline-flex gap-1 items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <FaXmark />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#1E1B19] sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className=" font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className=" font-medium text-gray-900 dark:text-white">
                        Rs. {totalPrice * 0.9}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className=" font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className=" font-medium text-green-600">
                        Rs. {totalPrice * 0.1}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className=" font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className=" font-medium text-gray-900 dark:text-white">
                        Rs. 100
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className=" font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className=" font-medium text-gray-900 dark:text-white">
                        Rs. {totalPrice * 0.13}
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className=" font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className=" font-bold text-gray-900 dark:text-white">
                      Rs. {Math.ceil(totalPrice * 1.13) + 100}
                    </dd>
                  </dl>
                </div>
                <button
                  onClick={checkout}
                  className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary/90 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary active:scale-95"
                >
                  Proceed to Checkout
                </button>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    or
                  </span>
                  <Link
                    href={PRODUCTS_ROUTE}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-bglight"
                  >
                    Continue Shopping
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
