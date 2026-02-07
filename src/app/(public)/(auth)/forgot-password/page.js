"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { loginUser } from "@/redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LOGIN_ROUTE } from "@/constants/routes";
import { forgotPassword } from "@/api/auth";

const ForgotPasswordPage = () => {
    const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  function submitForm(data) {
    setLoading(true);

    forgotPassword(data)
      .then(() => {
        reset();

        toast.success("Reset password link has been sent successfully.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Reset password link sending failed.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4 py-12 text-txt-primary dark:text-txt-primary-dark bg-bglight dark:bg-bgdark/90">
      <div className="w-full max-w-md bg-white dark:bg-[#1E1B19] p-8 rounded-2xl shadow-lg border border-primary/10 dark:border-secondary/20">
        <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
        <p className="text-center text-txt-secondary dark:text-txt-secondary-dark mb-6">
          Get Back access to your account
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
              placeholder="Enter your email"
              required
              {...register("email")}
            />
          </div>

          <button className="w-full py-3 mt-4 rounded-xl font-semibold bg-primary text-bglight dark:bg-secondary dark:text-bglight hover:bg-primary/80 dark:hover:bg-secondary/80 transition-all">
            Forgot Password{loading ? "..." : ""}
          </button>
        </form>
        <p className="text-center mt-6 text-sm">
          Back to &nbsp;
          <Link
            href={LOGIN_ROUTE}
            className="text-primary dark:text-secondary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
