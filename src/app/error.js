"use client";

import { useEffect } from "react";
import Link from "next/link";
import { HOME_ROUTE } from "@/constants/routes";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <svg
            className="mx-auto h-24 w-24 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4v2m0-12a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
        <p className="text-gray-300 text-lg mb-2">Something went wrong</p>
        <p className="text-gray-400 text-sm mb-8">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Try Again
          </button>
          <Link
            href={HOME_ROUTE}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center"
          >
            Go Home
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-xs">
            Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
