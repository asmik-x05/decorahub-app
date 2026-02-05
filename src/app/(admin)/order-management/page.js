import React from "react";

const AdminOrderManagementPage = () => {
  return (
    // <section className="p-8 w-full bg-bglight ">
    //   <div className="p-4 flex-1">
    //     <h2 className="font-bold text-2xl">Orders</h2>
    //     <hr className="h-1 bg-blue-600" />
    //     <div className="grid md:grid-cols-5 gap-4 mt-5 mb-8">
    //       <div className="p-8 shadow rounded-lg bg-gray-50 flex justify-between">
    //         <div className="w-2/3 space-y-2">
    //           <h3 className="font-medium text-xl">Total Revenue</h3>
    //           <p className="text-3xl font-medium">$1498.44</p>
    //           <p className="text-primary font-medium">+10% from last month</p>
    //         </div>
    //         <div className="flex items-center text-primary/90">
    //           <i className="fa-solid fa-dollar-sign text-4xl" />
    //         </div>
    //       </div>
    //       <div className="p-8 shadow rounded-lg bg-gray-50 flex justify-between">
    //         <div className="w-2/3 space-y-2">
    //           <h3 className="font-medium text-xl">Pending</h3>
    //           <p className="text-3xl font-medium">8</p>
    //           <p>awating confirmation</p>
    //         </div>
    //         <div className="flex items-center text-primary/90">
    //           <i className="fa-regular fa-clock text-4xl" />
    //         </div>
    //       </div>
    //       <div className="p-8 shadow rounded-lg bg-gray-50 flex justify-between">
    //         <div className="w-2/3 space-y-2">
    //           <h3 className="font-medium text-xl">Processing</h3>
    //           <p className="text-3xl">26</p>
    //           <p>Being Prepared</p>
    //         </div>
    //         <div className="flex items-center text-primary/90">
    //           <i className="fa-solid fa-box-open text-4xl" />
    //         </div>
    //       </div>
    //       <div className="p-8 shadow rounded-lg bg-gray-50 flex justify-between">
    //         <div className="w-2/3 space-y-2">
    //           <h3 className="font-medium text-xl">Shipped</h3>
    //           <p className="text-3xl font-medium">46</p>
    //           <p>In transit</p>
    //         </div>
    //         <div className="flex items-center text-primary/90">
    //           <i className="fa-regular fa-truck text-4xl" />
    //         </div>
    //       </div>
    //       <div className="p-8 shadow rounded-lg bg-gray-50 flex justify-between">
    //         <div className="w-2/3 space-y-2">
    //           <h3 className="font-medium text-xl">Delivered</h3>
    //           <p className="text-3xl font-medium">10</p>
    //           <p>Competed orders</p>
    //         </div>
    //         <div className="flex items-center text-primary/90">
    //           <i className="fa-regular fa-circle-check text-4xl" />
    //         </div>
    //       </div>
    //     </div>
    //     {/* this div for order list */}
    //     <div className="mx-8">
    //       <h3 className="text-3xl">Recent Orders</h3>
    //       <div className="flex justify-between mt-4">
    //         <div>
    //           <input
    //             type="search"
    //             className="p-2 rounded-l-lg"
    //             placeholder="Search orders...."
    //           />
    //           <button className="rounded-r-lg bg-white p-2" />
    //           <i className="fa-solid fa-magnifying-glass" />
    //         </div>
    //         {/* div for processing canedl etc */}
    //         <div className="flex gap-4">
    //           <span className="border-2 border-primary/90 p-2 rounded-lg bg-primary/90 text-gray-100 cursor-pointer">
    //             All Orders
    //           </span>
    //           <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
    //             Pending
    //           </span>
    //           <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
    //             Processing
    //           </span>
    //           <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
    //             Shipped
    //           </span>
    //           <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
    //             Delivered
    //           </span>
    //           <span className="border-2 border-primary/90 p-2 rounded-lg hover:bg-primary/90 hover:text-gray-100 cursor-pointer">
    //             Cancelled
    //           </span>
    //         </div>
    //       </div>
    //       <div className="my-8">
    //         <div className="grid">
    //           <div className="grid grid-cols-6 text-xl font-medium bg-gray-50 p-2 rounded-lg border-2">
    //             <span>Orders</span>
    //             <span>Customer</span>
    //             <span>Status</span>
    //             <span>Items</span>
    //             <span>Total</span>
    //             <span>Date</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-01</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-orange-500 bg-orange-100 font-medium border-orange-500 border rounded-full w-2/3 px-8 py-1">
    //               <i className="fa-regular fa-clock" /> <span>Pending</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$208.09</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-02</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub2@gmail.com</p>
    //             </div>
    //             <div className="text-blue-500 bg-blue-100 font-medium border-blue-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-solid fa-box-open" /> <span>Processing</span>
    //             </div>
    //             <span>4</span>
    //             <span className="font-medium">$198.89</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-03</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-purple-500 bg-purple-100 font-medium border-purple-500 border rounded-full w-2/3 px-8 py-1">
    //               <i className="fa-regular fa-truck" /> <span>Shipped</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$408.90</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-04</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-green-500 bg-green-100 font-medium border-green-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-regular fa-circle-check" />
    //               <span>Delivered</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$908.18</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-05</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-red-500 bg-red-100 font-medium border-red-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-regular fa-circle-xmark" />
    //               <span>Cancelled</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$1104.44</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-06</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-orange-500 bg-orange-100 font-medium border-orange-500 border rounded-full w-2/3 px-8 py-1">
    //               <i className="fa-regular fa-clock" /> <span>Pending</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$208.09</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-07</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub2@gmail.com</p>
    //             </div>
    //             <div className="text-blue-500 bg-blue-100 font-medium border-blue-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-solid fa-box-open" /> <span>Processing</span>
    //             </div>
    //             <span>4</span>
    //             <span className="font-medium">$198.89</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-08</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-purple-500 bg-purple-100 font-medium border-purple-500 border rounded-full w-2/3 px-8 py-1">
    //               <i className="fa-regular fa-truck" /> <span>Shipped</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$408.90</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-09</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-green-500 bg-green-100 font-medium border-green-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-regular fa-circle-check" />
    //               <span>Delivered</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$908.18</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-10</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-red-500 bg-red-100 font-medium border-red-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-regular fa-circle-xmark" />
    //               <span>Cancelled</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$1104.44</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-11</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-orange-500 bg-orange-100 font-medium border-orange-500 border rounded-full w-2/3 px-8 py-1">
    //               <i className="fa-regular fa-clock" /> <span>Pending</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$208.09</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-12</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub2@gmail.com</p>
    //             </div>
    //             <div className="text-blue-500 bg-blue-100 font-medium border-blue-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-solid fa-box-open" /> <span>Processing</span>
    //             </div>
    //             <span>4</span>
    //             <span className="font-medium">$198.89</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-13</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-purple-500 bg-purple-100 font-medium border-purple-500 border rounded-full w-2/3 px-8 py-1">
    //               <i className="fa-regular fa-truck" /> <span>Shipped</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$408.90</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-14</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-green-500 bg-green-100 font-medium border-green-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-regular fa-circle-check" />
    //               <span>Delivered</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$908.18</span>
    //             <span>2025-12-17</span>
    //           </div>
    //           <div className="grid grid-cols-6 text-lg bg-gray-50 p-2 rounded-lg items-center border-2">
    //             <span>DF-025-12-17-15</span>
    //             <div>
    //               <span className="font-medium">Decorahub</span>
    //               <p>decorahub@gmail.com</p>
    //             </div>
    //             <div className="text-red-500 bg-red-100 font-medium border-red-500 border rounded-full w-3/4 px-8 py-1">
    //               <i className="fa-regular fa-circle-xmark" />
    //               <span>Cancelled</span>
    //             </div>
    //             <span>2</span>
    //             <span className="font-medium">$1104.44</span>
    //             <span>2025-12-17</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div>AdminOrderManagementPage</div>
  );
};

export default AdminOrderManagementPage;
