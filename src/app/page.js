import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import ProductCard from "@/components/Product/ProductCard";
import React from "react";
import bgDark from "@/assets/images/hero-img-dark.png";
import bgLight from "@/assets/images/hero-img-light.png";
import { FaHeadset, FaRegCreditCard } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { getHotPick, getRecommended } from "@/api/products";

const Home = async () => {
  const hotPicks = await getHotPick();
  const recommended = await getRecommended();
  return (
    <>
      <Header />
      <main>
        <section className="relative md:h-[80vh] h-[70vh] text-txt-primary dark:text-txt-primary-dark flex items-center">
          <div className="absolute inset-0 dark:hidden">
            <Image
              src={bgLight}
              alt="Hero background light"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 hidden dark:block">
            <Image
              src={bgDark}
              alt="Hero background dark"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Premium Furniture for Your Home
              </h1>
              <p className="text-lg md:text-xl mb-6 md:text-txt-secondary text-black dark:text-bglight">
                Discover stylish, high-quality furniture that transforms your
                space.
              </p>
              <div className="flex gap-4">
                <a
                  href="#products"
                  className="px-6 py-3 bg-primary text-bglight rounded-lg shadow-lg hover:bg-primary/90 transition dark:bg-secondary dark:text-bglight dark:hover:bg-secondary/80"
                >
                  Shop Now
                </a>
                <a
                  href="#categories"
                  className="px-6 py-3 bg-primary text-bglight rounded-lg shadow-lg hover:bg-primary/90 transition dark:bg-secondary dark:text-bglight dark:hover:bg-secondary/80"
                >
                  Explore Categories
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bglight dark:bg-bgdark pt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-txt-primary dark:text-txt-primary-dark pb-8">
              Hot Picks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {hotPicks.map((product) => (
                <ProductCard
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  imageUrls={product.imageUrls}
                  description={product.description}
                  _id={product._id}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bglight dark:bg-bgdark py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-txt-primary dark:text-txt-primary-dark pb-8">
              Recommended For You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {recommended.map((product) => (
                <ProductCard
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  imageUrls={product.imageUrls}
                  description={product.description}
                  _id={product._id}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}

        <section className="bg-bglight dark:bg-bgdark text-txt-primary dark:text-txt-primary-dark">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-center text-4xl font-bold pb-8">
              Why Buy From Us
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-4 md:px-12">
              <div className="rounded-3xl p-10 border-2 border-primary dark:border-secondary bg-linear-to-br from-secondary/20 to-bglight dark:from-bgdark dark:to-secondary/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <FaRegCreditCard className="text-primary dark:text-secondary text-2xl" />
                <h3 className="py-4 text-xl font-semibold">Secure Payment</h3>
                <p className="text-txt-secondary dark:text-txt-secondary-dark">
                  Fast, safe, and secure payments available.
                </p>
              </div>
              <div className="rounded-3xl p-10 border-2 border-primary dark:border-secondary bg-linear-to-br from-secondary/20 to-bglight dark:from-bgdark dark:to-secondary/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <FaTruckFast className="text-primary dark:text-secondary text-2xl" />
                <h3 className="py-4 text-xl font-semibold">Fast Delivery</h3>
                <p className="text-txt-secondary dark:text-txt-secondary-dark">
                  Product delivered in under 24 hours.
                </p>
              </div>
              <div className="rounded-3xl p-10 border-2 border-primary dark:border-secondary bg-linear-to-br from-secondary/20 to-bglight dark:from-bgdark dark:to-secondary/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <FaHeadset className="text-primary dark:text-secondary text-2xl" />
                <h3 className="py-4 text-xl font-semibold">24/7 Support</h3>
                <p className="text-txt-secondary dark:text-txt-secondary-dark">
                  Get support anytime with our 24/7 team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Email subscription ... */}
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
