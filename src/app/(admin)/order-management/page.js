"use client";
import { getAllOrders } from "@/api/orders";
import OrderTable from "@/components/Orders/OrderTable";
import Pagination from "@/components/Product/Pagination";
import ThemeToggler from "@/components/ThemeToggler";
import { ROLE_ADMIN } from "@/constants/roles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminOrderManagementPage = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(false);

  const { user } = useSelector((state) => state.auth);

  async function fetchOrders() {
    setLoading(true);

    try {
      const data = user.Role.includes(ROLE_ADMIN)
        ? await getAllOrders(selectedStatus)
        : await getOrdersByMerchant();

      setOrders(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, [selectedStatus]);
  return (
    <section className="p-8 w-full bg-bglight dark:bg-gray-900 dark:text-gray-100">
      <div className="p-4 flex-1">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">Order Management</h2>
          <ThemeToggler />
        </div>
        <hr className="h-1 bg-blue-600 text-blue-600" />
      </div>
      <div className="flex justify-end p-4">
        <div className="flex gap-4">
          <span className="border-2 border-primary/90 p-2 rounded-lg bg-primary/90 text-gray-100 cursor-pointer">
            All Orders
          </span>
          <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
            Pending
          </span>
          <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
            Cancelled
          </span>
          <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
            Confirmed
          </span>
          <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
            Shipped
          </span>
          <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
            Delivered
          </span>
        </div>
      </div>
      <OrderTable orders={orders} />
      <Pagination />
    </section>
  );
};

export default AdminOrderManagementPage;
