import Link from "next/link";
import React from "react";

const loginPage = () => {
  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4 py-12 text-txt-primary dark:text-txt-primary-dark bg-bglight dark:bg-bgdark/90">
      <div className="w-full max-w-md bg-white dark:bg-[#1E1B19] p-8 rounded-2xl shadow-lg border border-primary/10 dark:border-secondary/20">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        <p className="text-center text-txt-secondary dark:text-txt-secondary-dark mb-6">
          Login to access your account
        </p>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-primary dark:text-secondary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button className="w-full py-3 mt-4 rounded-xl font-semibold bg-primary text-bglight dark:bg-secondary dark:text-bglight hover:bg-primary/80 dark:hover:bg-secondary/80 transition-all">
            Login
          </button>
        </form>
        <p className="text-center mt-6 text-sm">
          Don’t have an account?
          <Link
            href="/register"
            className="text-primary dark:text-secondary hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default loginPage;
