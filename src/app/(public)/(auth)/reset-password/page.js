"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import PasswordInput from "@/components/Form/PasswordInput";
import { resetPassword } from "@/api/auth";

import { useRouter, useSearchParams } from "next/navigation";
import { LOGIN_ROUTE } from "@/constants/routes";

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  const router = useRouter();

  function submitForm(data) {
    setLoading(true);

    resetPassword({ password: data.password, userId, token })
      .then(() => {
        reset();

        router.replace(LOGIN_ROUTE);

        toast.success("Password reset successful.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Password reset failed.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4 py-12 text-txt-primary dark:text-txt-primary-dark bg-bglight dark:bg-bgdark/90">
      <div className="w-full max-w-md bg-white dark:bg-[#1E1B19] p-8 rounded-2xl shadow-lg border border-primary/10 dark:border-secondary/20">
        <h2 className="text-3xl font-bold text-center mb-6">Reset Password</h2>
        <p className="text-center text-txt-secondary dark:text-txt-secondary-dark mb-6">
          Enter your new password to reset your account password
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <PasswordInput {...register("password")} />
          </div>

          <button className="w-full py-3 mt-4 rounded-xl font-semibold bg-primary text-bglight dark:bg-secondary dark:text-bglight hover:bg-primary/80 dark:hover:bg-secondary/80 transition-all">
            Reset Password{loading ? "..." : ""}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
