import React from "react";
import {
  FaBusinessTime,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const contactPage = () => {
  return (
    <section className="min-h-[80vh] px-4 py-12 text-txt-primary dark:text-txt-primary-dark bg-bglight dark:bg-bgdark/90">
      <div className="container mx-auto px-4 py-4 ">
        <h1 className="text-center text-4xl pb-8">Contact us</h1>
        <div className="flex justify-center md:flex-row flex-col">
          {/* contact information */}
          <div className="sm:w-full md:max-w-md bg-white dark:bg-[#1E1B19] p-8 md:rounded-r-none sm:rounded-2xl shadow-lg border md:border-r-0 border-primary/10 dark:border-secondary/20">
            <h2 className="text-3xl font-bold text-center mb-6">
              Contact Information
            </h2>
            <div className="mb-8 text-txt-primary dark:text-txt-primary-dark">
              <h3 className="text-center text-lg font-medium">
                “Get in touch with us to learn more about our furniture, discuss
                custom designs, or receive expert guidance from our team.”
              </h3>
            </div>
            <div className="space-y-5 text-txt-primary dark:text-txt-primary-dark">
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary text-xl">
                  <FaLocationPin />
                </span>
                <div>
                  <p className="font-medium text-xl">Location</p>
                  <p className="text-txt-secondary dark:text-txt-secondary-dark">
                    Bharatpur-20, Chitwan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary text-xl">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="font-medium text-xl">Email</p>
                  <p className="text-txt-secondary dark:text-txt-secondary-dark">
                    Decorahub@gmail.net
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary text-xl">
                  <FaPhone />
                </span>
                <div>
                  <p className="font-medium text-xl">Phone</p>
                  <p className="text-txt-secondary dark:text-txt-secondary-dark">
                    9700000000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary text-xl">
                  <FaBusinessTime />
                </span>
                <div>
                  <p className="font-medium text-xl">Working Hours</p>
                  <p className="text-txt-secondary dark:text-txt-secondary-dark">
                    Sunday - Friday
                  </p>
                  <p className="text-txt-secondary dark:text-txt-secondary-dark">
                    10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}

          <div className=" w-full max-w-2xl bg-white dark:bg-[#1E1B19] p-8 sm:rounded-2xl md:rounded-l-none md:border-l-0 shadow-lg border border-primary/10 dark:border-secondary/20">
            <h2 className="text-3xl font-bold text-center mb-2">Message Us</h2>
            <p className="text-center text-txt-secondary dark:text-txt-secondary-dark mb-6 text-xl">
              We'd love to hear from you
            </p>

            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                  placeholder="Enter your subject"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                  required
                >
                  <option disabled selected value="null">
                    Select a category
                  </option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-xl border border-primary/40 dark:border-secondary/40 bg-bglight dark:bg-[#1F1B17] text-txt-primary dark:text-txt-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/70 resize-none"
                  placeholder="Enter your message..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary/70"
                />
                <label
                  htmlFor="newsletter"
                  className="text-txt-primary dark:text-txt-primary-dark"
                >
                  Subscribe to our newsletter
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 rounded-xl font-semibold bg-primary text-bglight dark:bg-secondary dark:text-bglight hover:bg-primary/80 dark:hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactPage;
