import { HOME_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br to-amber-50 from-yellow-200 flex items-center justify-center overflow-hidden font-serif dark:bg-linear-to-br dark:to-gray-900 dark:from-yellow-950">
      <div className="text-center px-5 py-10 max-w-4xl relative z-10">
        <div className="relative mb-8 ">
          <div className="w-52 h-56 mx-auto relative">
            <div className="w-36 h-24 bg-amber-800 rounded-t-2xl mx-auto relative shadow-inner">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-20 rounded-t-2xl"></div>
            </div>

            <div className="w-40 h-20 bg-amber-700 rounded-xl -mt-1 mx-auto relative shadow-2xl ">
              <div className="absolute inset-0 bg-linear-to-b from-white to-transparent opacity-10 rounded-xl"></div>

              <div className="absolute w-4 h-20 bg-amber-800 rounded-b left-5 top-full" />
              <div className="absolute w-4 h-20 bg-amber-800 rounded-b right-5 top-full" />
              <div className="absolute w-4 h-20 bg-amber-800 rounded-b left-5 top-full mt-1" />
              <div className="absolute w-4 h-20 bg-amber-800 rounded-b right-5 top-full mt-1" />
            </div>
          </div>

          <div className="absolute w-16 h-10 bg-amber-800 rounded top-32 -left-20 opacity-80 animate-pulse"></div>
          <div className="absolute w-16 h-10 bg-amber-800 rounded top-36 -right-20 opacity-80 animate-pulse"></div>
        </div>

        <h1 className="text-9xl md:text-[150px] font-bold text-amber-900 mb-5 tracking-tighter text-shadow-lg">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl text-amber-800 mb-5 font-normal">
          Oops! This Page Has Been Discontinued
        </h2>

        <p className="text-lg text-amber-900 mb-10 leading-relaxed max-w-2xl mx-auto">
          Looks like this page got shipped to the wrong address.
          <br />
          Don't worry, we have plenty of other great furniture to browse!
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <Link
            href={HOME_ROUTE}
            className="px-9 py-4 bg-amber-800 text-white rounded-lg shadow-lg hover:bg-amber-900 hover:-translate-y-1 transition-all duration-300 text-base font-medium"
          >
            Back to Home
          </Link>
          <Link
            href={PRODUCTS_ROUTE}
            className="px-9 py-4 bg-white text-amber-800 border-2 border-amber-800 rounded-lg hover:bg-amber-800 hover:text-white hover:-translate-y-1 transition-all duration-300 text-base font-medium"
          >
            Browse Furniture
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
