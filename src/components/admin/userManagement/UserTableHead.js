"use client";

import { LuCog } from "react-icons/lu";

const OrderTableHead = () => {
  return (
    <thead className="text-xs cursor-pointer text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr className="my-4">
        <th className="px-4 py-3">Name</th>
        <th className="px-4 py-3">Email Address</th>
        <th className="px-4 py-3">Phone Number</th>        
        <th className="px-4 py-3">Address</th>
        <th className="px-4 py-3">Active Status</th>
        <th className="px-4 py-3">Roles</th>
        <th className="px-4 py-3 text-xl"><LuCog /></th>
      </tr>
    </thead>
  );
};

export default OrderTableHead;
