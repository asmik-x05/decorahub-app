"use client";
import { getAllUsers } from "@/api/users";
import UserTable from "@/components/admin/userManagement/UserTable";
import ThemeToggler from "@/components/ThemeToggler";
import { useEffect, useState } from "react";

const AdminUserManagementPage = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);

    getAllUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="p-8 w-full bg-bglight dark:bg-gray-900 dark:text-gray-100">
      <div className="p-4 flex-1">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">User Management</h2>
          <ThemeToggler />
        </div>
        <hr className="h-1 bg-blue-600 text-blue-600" />
      </div>
      <UserTable users={users} loading={loading} />
    </section>
  );
};

export default AdminUserManagementPage;
