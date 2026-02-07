import { format } from "date-fns";
import React from "react";
import { FaBoxOpen, FaClock, FaPencilAlt, FaTruck } from "react-icons/fa";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import OrderTableHead from "./OrderTableHead";
import Link from "next/link";
import { ADMIN_ORDERS_ROUTE, ADMIN_PRODUCTS_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import OrderAction from "./Action";

const OrderTable = ({ loading, orders, disableAction }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <OrderTableHead />
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <th>{order._id}</th>
              <td className="px-4 py-3">
                <ol>
                  {order.orderIteam.map((item, index) => (
                    <li key={index} className="mb-2">
                      <Link
                        href={`product/${item.product._id}`}
                        className="text-primary hover:underline"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs">{item.product.brand}</p>
                    </li>
                  ))}
                </ol>
              </td>
              <td>
                <div>
                  <span className="font-medium">{order.user.name}</span>

                  <p>{order.user.email}</p>
                </div>
              </td>
              <td>
                <div
                  className={`font-medium border rounded-full w-3/4 px-4 py-1 flex items-center justify-center ${
                    order.status === "PENDING"
                      ? "text-orange-500 bg-orange-100 border-orange-500"
                      : order.status === "CONFIRMED"
                        ? "text-blue-500 bg-blue-100 border-blue-500"
                        : order.status === "SHIPPED"
                          ? "text-purple-500 bg-purple-100 border-purple-500"
                          : order.status === "DELIVERED"
                            ? "text-green-500 bg-green-100 border-green-500"
                            : order.status === "CANCELLED"
                              ? "text-red-500 bg-red-100 border-red-500"
                              : ""
                  }`}
                >
                  <span>
                    {order.status === "PENDING" ? (
                      <FaClock />
                    ) : order.status === "CONFIRMED" ? (
                      <FaBoxOpen />
                    ) : order.status === "SHIPPED" ? (
                      <FaTruck />
                    ) : order.status === "DELIVERED" ? (
                      <FaCircleCheck />
                    ) : order.status === "CANCELLED" ? (
                      <FaCircleXmark />
                    ) : (
                      ""
                    )}
                  </span>

                  <span>&nbsp;{order.status}</span>
                </div>
              </td>
              <td>
                province: {order.shippingAddress.province},<br />
                City: {order.shippingAddress.city}, <br />
                street: {order.shippingAddress.street}
              </td>

              <td>
                <span className="font-medium">
                  ${order.totalPrice.toFixed(2)}
                </span>
              </td>
              <td>
                <span>{format(order.createdAt, "dd MMM, yyyy")}</span>
              </td>
              <td className="px-4 py-3">
                      {disableAction ? (
                        <FaCog />
                      ) : (
                        <OrderAction id={order._id} status={order.status} />
                      )}
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
