import React from 'react';

export default function AccessDenied() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="text-center p-10 bg-white rounded-lg shadow-md">
                <h1 className="text-7xl m-0 text-red-600">403</h1>
                <h2 className="text-3xl my-2.5 text-gray-800">Access Denied</h2>
                <p className="text-base text-gray-500 mb-7.5">
                    You don't have permission to access this resource.
                </p>
                <a href="/" className="inline-block px-7.5 py-3 bg-red-600 text-white no-underline rounded transition-colors duration-300 hover:bg-red-700">
                    Go Home
                </a>
            </div>
        </div>
    );
}