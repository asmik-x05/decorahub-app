"use client";

import { getOrdersByUser } from "@/api/orders";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import OrderCard from "@/components/Orders/OrderCard";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/orderStatus";
import {
  FaCheckCircle,
  FaClock,
  FaShippingFast,
  FaShoppingBasket,
  FaTimesCircle,
} from "react-icons/fa";
import { useSearchParams } from "next/navigation";

const statuses = [
  {
    label: "Pending",
    value: ORDER_STATUS_PENDING,
    Icon: <FaClock className="text-amber-600" />,
  },
  {
    label: "Confirmed",
    value: ORDER_STATUS_CONFIRMED,
    Icon: <FaShoppingBasket className="text-primary" />,
  },
  {
    label: "Shipped",
    value: ORDER_STATUS_SHIPPED,
    Icon: <FaShippingFast className="text-violet-600" />,
  },
  {
    label: "Delivered",
    value: ORDER_STATUS_DELIVERED,
    Icon: <FaCheckCircle className="text-green-600" />,
  },
  {
    label: "Cancelled",
    value: ORDER_STATUS_CANCELLED,
    Icon: <FaTimesCircle className="text-red-600" />,
  },
];

const OrdersPage = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const searchParams = useSearchParams();

  const queryStatus = searchParams.get("status");

  useEffect(() => {
    getOrdersByUser(queryStatus)
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        toast.error(error?.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [queryStatus]);

  if (loading)
    return (
      <div className="py-24 flex items-center justify-center">
        <Spinner className="h-16 w-16 fill-primary" />
      </div>
    );

  return (
    <section className="py-16 relative min-h-screen bg-light dark:bg-bgdark/90">
      <div className="w-full container px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-10 dark:text-gray-100">
          Your Orders
        </h2>

        <div className="border-b border-gray-200 mb-5">
          <ul className="flex flex-wrap -mb-px text-xl font-medium text-center text-body">
            {statuses.map((status, index) => (
              <li key={index} className="me-2 dark:text-gray-100">
                <Link
                  href={`?status=${status.value}`}
                  className={`${status.value == queryStatus ? "border-primary" : "border-transparent"} inline-flex gap-1 items-center justify-center p-4 border-b rounded-t-base hover:text-fg-brand hover:border-brand group hover:border-gray-500`}
                >
                  {status.Icon}
                  {status.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default OrdersPage;
