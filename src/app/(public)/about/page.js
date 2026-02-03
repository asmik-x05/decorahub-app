import React from "react";
import { FaClock, FaSmile, FaUsers } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import {
  FaCreditCard,
  FaHeadset,
  FaShieldAlt,
  FaTruck,
  FaStar,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";
import { CONTACT_ROUTE } from "@/constants/routes";

const aboutPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-20 dark:bg-primary bg-secondary">
        <h2 className="text-4xl text-white">AboutUs</h2>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 mx-auto max-w-6xl">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-txt-primary dark:text-gray-100 leading-tight">
            Discover Our Story
          </h1>
          <p className="text-lg text-txt-secondary dark:text-gray-300">
            DecoraHub is your trusted partner in creating beautiful, functional living spaces with authentic Nepali craftsmanship and international design standards.
          </p>
          <p className="text-base text-txt-secondary dark:text-gray-400">
            With over 9 years of experience in home decoration and furniture, we've helped thousands of families transform their spaces into dream homes. Our commitment to quality, innovation, and customer satisfaction sets us apart.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
              Explore Collections
            </button>
            <button className="px-6 py-3 border-2 border-primary text-primary dark:text-secondary dark:border-secondary rounded-lg font-semibold hover:bg-primary/10 dark:hover:bg-secondary/10 transition-all duration-300">
              <Link href={CONTACT_ROUTE}>Contact Us</Link>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[40vh] md:h-125 bg-linear-to-br from-primary/20 to-secondary/20 dark:from-secondary/20 dark:to-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 dark:border-secondary/30 shadow-lg">
          <div className="text-center">
            <div className="text-6xl mb-4 text-primary dark:text-secondary">🏠</div>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Beautiful Spaces Await</p>
          </div>
        </div>
      </section>

      <section className=" mx-20 text-center my-8">
        <h2 className="text-3xl font-semibold mb-4 dark:text-gray-100">
          Our Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-2xl text-gray-100">
          <div className=" rounded-xl p-4 flex flex-col gap-4 bg-primary dark:bg-gray-700">
            <div className="text-4xl flex justify-center">
              <FaClock />
            </div>
            <h2>9 +</h2>
            <p className="text-green-400 font-semibold text-xl">
              Years of Experience
            </p>
          </div>
          <div className=" rounded-xl p-4 flex flex-col gap-4 bg-primary dark:bg-gray-700">
            <div className="text-4xl flex justify-center">
              <FaBoxesPacking />
            </div>
            <h2>product delivered this month</h2>
            <p className="text-green-400 text-xl font-semibold ">
              20% + this month
            </p>
          </div>
          <div className=" rounded-xl p-4 flex flex-col gap-4 bg-primary dark:bg-gray-700">
            <div className="text-4xl flex justify-center">
              <FaUsers />
            </div>
            <h2>Active Customers</h2>
            <p className="text-green-400 text-xl font-semibold">
              25% + this month
            </p>
          </div>
          <div className=" rounded-xl p-4 flex flex-col gap-4 bg-primary dark:bg-gray-700">
            <div className="text-4xl flex justify-center">
              <FaSmile />
            </div>
            <h2>Customer Satisfaction Rate</h2>
            <p className="text-green-400 text-xl font-semibold">
              2.5% + this month
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 dark:text-gray-100 text-center text-txt-primary">
          Why Choose Us?
        </h2>

        <div className="mx-4 md:mx-20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-6 rounded-lg bg-secondary/40 dark:bg-[#2A241E] border border-primary/20 dark:border-secondary/30 hover:shadow-lg hover:border-primary/60 dark:hover:border-secondary/60 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-primary dark:text-secondary mt-1 shrink-0">
                  <FaCreditCard />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-txt-primary dark:text-gray-100 mb-2">
                    Flexible Payment Options
                  </h4>
                  <p className="text-sm text-txt-secondary dark:text-gray-300">
                    Multiple payment methods tailored to your convenience
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-lg bg-secondary/40 dark:bg-[#2A241E] border border-primary/20 dark:border-secondary/30 hover:shadow-lg hover:border-primary/60 dark:hover:border-secondary/60 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-primary dark:text-secondary mt-1 shrink-0">
                  <FaHeadset />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-txt-primary dark:text-gray-100 mb-2">
                    Dedicated After-Sales Service
                  </h4>
                  <p className="text-sm text-txt-secondary dark:text-gray-300">
                    Expert support available whenever you need us
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-lg bg-secondary/40 dark:bg-[#2A241E] border border-primary/20 dark:border-secondary/30 hover:shadow-lg hover:border-primary/60 dark:hover:border-secondary/60 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-primary dark:text-secondary mt-1 shrink-0">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-txt-primary dark:text-gray-100 mb-2">
                    Comprehensive Warranty Coverage
                  </h4>
                  <p className="text-sm text-txt-secondary dark:text-gray-300">
                    Extended protection for your peace of mind
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-lg bg-secondary/40 dark:bg-[#2A241E] border border-primary/20 dark:border-secondary/30 hover:shadow-lg hover:border-primary/60 dark:hover:border-secondary/60 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-primary dark:text-secondary mt-1 shrink-0">
                  <FaTruck />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-txt-primary dark:text-gray-100 mb-2">
                    Professional Delivery & Installation
                  </h4>
                  <p className="text-sm text-txt-secondary dark:text-gray-300">
                    Hassle-free delivery with expert setup included
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-lg bg-secondary/40 dark:bg-[#2A241E] border border-primary/20 dark:border-secondary/30 hover:shadow-lg hover:border-primary/60 dark:hover:border-secondary/60 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-primary dark:text-secondary mt-1 shrink-0">
                  <FaStar />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-txt-primary dark:text-gray-100 mb-2">
                    Premium Nepali Materials
                  </h4>
                  <p className="text-sm text-txt-secondary dark:text-gray-300">
                    Authentic craftsmanship with superior quality
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-lg bg-secondary/40 dark:bg-[#2A241E] border border-primary/20 dark:border-secondary/30 hover:shadow-lg hover:border-primary/60 dark:hover:border-secondary/60 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-primary dark:text-secondary mt-1 shrink-0">
                  <FaGlobe />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-txt-primary dark:text-gray-100 mb-2">
                    International Design Standards
                  </h4>
                  <p className="text-sm text-txt-secondary dark:text-gray-300">
                    Local expertise meets global quality standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 dark:bg-[#2A241E] text-txt-primary dark:text-txt-primary-dark py-14">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold tracking-tight text-primary dark:text-txt-primary-dark">
                Get More Updates From Us
              </h3>
              <p className="mt-1 text-txt-secondary dark:text-txt-secondary-dark">
                Stay informed with our latest offers and announcements.
              </p>
            </div>
            <div className="flex items-center w-full md:w-auto justify-center mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full md:w-64 rounded-l-xl border border-primary/40 dark:border-secondary/40 bg-[#FBF8F2] dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark placeholder-txt-secondary dark:placeholder-txt-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary/60 shadow-sm"
              />
              <button className="px-6 py-2 rounded-r-xl font-medium bg-primary text-bglight dark:bg-secondary dark:text-bglight hover:bg-primary/90 dark:hover:bg-secondary/80 transition-all duration-300 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutPage;
