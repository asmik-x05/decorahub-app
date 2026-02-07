import React from "react";

import UserTableHead from "./UserTableHead";
import { FaImage, FaPencilAlt } from "react-icons/fa";
import Action from "./RoleAction";
import Pagination from "@/components/Product/Pagination";

const UserTable = ({ loading, users, disableAction }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <UserTableHead />
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <th
                scope="row"
                className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    alt={user.name}
                    height={100}
                    width={150}
                    className="w-8 h-8 mr-3 object-contain"
                  />
                ) : (
                  <FaImage className="w-8 h-8 mr-3 text-gray-300" />
                )}

                {user.name}
              </th>

              <td className="px-4 py-2">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary dark:text-white">
                  {user.email}
                </span>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.phone}
              </td>
              <td>
                province: {user.address.province},<br />
                City: {user.address.city}, <br />
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div
                  className={`inline-block w-2.5 h-2.5 mr-2 ${user.isActive ? "bg-green-500" : "bg-red-500"} rounded-full`}
                />
                {user.isActive ? "Active" : "Inactive"}
              </td>
              <td className="px-4 py-3">{user.roles.join(", ")}</td>
              <td className="px-4 py-3 flex items-center justify-center">
                <Action id={user._id} roles={user.roles} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserTable;
