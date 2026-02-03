"use client";
import PasswordInput from "@/components/Form/PasswordInput";
import { registerUser } from "@/redux/auth/authActions";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const registerPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.auth);
  const submitForm = (data) => {
    dispatch(registerUser(data));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4 py-12 text-txt-primary dark:text-txt-primary-dark bg-bglight dark:bg-bgdark/90">
      <div className=" max-w-lg w-full bg-white dark:bg-[#1E1B19] p-8 rounded-2xl shadow-lg border border-primary/10 dark:border-secondary/20">
        <h2 className="text-3xl font-bold text-center mb-6">Get Started</h2>
        <p className="text-center text-txt-secondary dark:text-txt-secondary-dark mb-6 text-lg">
          Create a new account to continue
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
          <div>
            <label className="block font-medium mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
              placeholder="Enter your name"
              required
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full col-span-1 md:col-span-2 px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                placeholder="Enter your phone number"
                required
                {...register("phone")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Province<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                placeholder="Enter your province"
                required
                {...register("province")}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                placeholder="Enter your city"
                required
                {...register("city")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <PasswordInput {...register("password")} />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <PasswordInput {...register("confirmPassword")} />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-1">
              <input type="checkbox" required />I agree to
              <span>Terms and Conditions</span>
              <span className="text-red-500">*</span>
            </label>
          </div>
          <button className="w-full py-3 mt-4 rounded-xl font-semibold bg-primary text-bglight dark:bg-secondary dark:text-bglight hover:bg-primary/80 dark:hover:bg-secondary/80 transition-all">
            Register{loading ? "..." : ""}
          </button>
        </form>
        <p className="text-center mt-6 text-sm">
          Already have an account?
          <Link
            href="/login"
            className="text-primary dark:text-secondary hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default registerPage;
