"use client";

import { updateUser } from "@/api/user";
import ProfileImage from "@/components/profile/Image";
import Spinner from "@/components/Spinner";
import { setUser } from "@/redux/auth/authSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  

  const dispatch = useDispatch();

  function submitForm(data) {
    setLoading(true);

    updateUser(user._id, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: {
        city: data.city,
        province: data.province,
      },
    })
      .then((data) => {
        dispatch(setUser(data));
        toast.success("User update successful.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("User update failed.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-4xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          General Information
        </h2>
        <ProfileImage />
      </div>
    </section>
  );
};

export default ProfilePage;
