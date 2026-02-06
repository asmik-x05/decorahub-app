"use client";

import { LuCog } from "react-icons/lu";

const OrderTableHead = () => {
  return (
    <thead className="text-xs cursor-pointer text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr className="my-4">
        <th className="px-4 py-3">Order Id</th>
        <th className="px-4 py-3">Product Details</th>
        <th className="px-4 py-3">Customer</th>
        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3">Shipping Address</th>
        <th className="px-4 py-3">Total</th>
        <th className="px-4 py-3">Date</th>
        <th className="px-4 py-3"><LuCog /></th>
      </tr>
    </thead>
  );
};

export default OrderTableHead;
