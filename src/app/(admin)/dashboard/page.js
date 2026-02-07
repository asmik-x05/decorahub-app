import ThemeToggler from "@/components/ThemeToggler";
import React from "react";
import {
  FaChartPie,
  FaChartLine,
  FaHourglassStart,
  FaUsers,
} from "react-icons/fa6";

const page = () => {
  return (
    <section className="p-8 w-full bg-bglight dark:bg-gray-900 dark:text-gray-100">
      <div className="p-4 flex-1">
        <div className="flex justify-between"><h2 className="font-bold text-2xl">Dashboard</h2><ThemeToggler /></div>
        <hr className="h-1 bg-blue-600 text-blue-600" />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-5 mb-8 ">
          <div className="p-8 shadow rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-bglight flex flex-col justify-between">
            <div className="flex w-full justify-between mb-4">
              <h3 className="font-medium text-2xl">Total Sales</h3>
              <FaChartLine className="text-4xl" />
            </div>
            <div className="w-full">
              <p className="text-3xl">$1500</p>
              <p className="text-green-500">+12% from last month</p>
            </div>
          </div>
          <div className="p-8 shadow rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-bglight flex flex-col justify-between">
            <div className="flex w-full justify-between mb-4">
              <h3 className="font-medium text-2xl">Total Orders</h3>
              <FaChartPie className="text-4xl" />
            </div>

            <div className="w-full">
              <p className="text-3xl">150</p>
              <p className="text-green-500">+12% from last month</p>
            </div>
          </div>
          <div className="p-8 shadow rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-bglight flex flex-col justify-between">
            <div className="flex w-full justify-between mb-4">
              <h3 className="font-medium text-2xl">Total Customers</h3>
              <FaUsers className="text-4xl" />
            </div>

            <div className="w-full">
              <p className="text-3xl">1500</p>
              <p className="text-green-500">+12% from last month</p>
            </div>
          </div>
          <div className="p-8 shadow rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-bglight flex flex-col justify-between">
            <div className="flex w-full justify-between mb-4">
              <h3 className="font-medium text-2xl">Pending Orders</h3>
              <FaHourglassStart className="text-4xl" />
            </div>

            <div className="w-full">
              <p className="text-3xl">1500</p>
              <p className="text-green-500">+12% from last month</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="w-full bg-gray-200 h-[50vh] rounded-xl animate-pulse transition-all duration-700 ease-in-out"></div>

      <div className=" flex lg:flex-row flex-col gap-4 mt-8">
        <div className="shadow-md p-4 rounded-lg flex-1 space-y-2 dark:bg-gray-800">
          <h4 className="text-2xl font-medium">Recent Activity</h4>
          <div className="shadow-md px-4 py-2">
            <h6 className=" text-lg font-medium">Task name</h6>
            <div className="text-gray-500">
              <p>task description</p>
              <p>2 hours ago</p>
            </div>
          </div>
          <div className="shadow-md px-4 py-2">
            <h6 className=" text-lg font-medium">Task name</h6>
            <div className="text-gray-500">
              <p>task description</p>
              <p>1 days ago</p>
            </div>
          </div>
        </div>
        <div className="shadow-md p-4 rounded-lg flex-1 space-y-2 dark:bg-gray-800">
          <h4 className="text-2xl font-medium">Upcoming Tasks</h4>
          <div className="px-4 py-2 flex items-center gap-4">
            <input type="checkbox" />
            <div>
              <h6 className="text-lg font-medium">meeting with someone</h6>
              <p className="text-sm text-gray-500">Today at 12:00 PM</p>
            </div>
          </div>
          <div className="px-4 py-2 flex items-center gap-4">
            <input type="checkbox" />
            <div>
              <h6 className="text-lg font-medium">something reminder</h6>
              <p className="text-sm text-gray-500">Today at 2:00 PM</p>
            </div>
          </div>
          <div className="px-4 py-2 flex items-center gap-4">
            <input type="checkbox" />
            <div>
              <h6 className="text-lg font-medium">important task</h6>
              <p className="text-sm text-gray-500">Today at 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-4">
        <hr className="border h-1 bg-black dark:bg-gray-100 rounded-lg" />
        <div>
          <p className="text-center text-lg dark:text-gray-100 mt-4">
            ©2025 DecoraHub All right reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;