"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000000;

const ProductFilter = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [category, setCategory] = useState("");
  const [brands, setBrands] = useState([]);

  const filterProducts = () => {
    const params = new URLSearchParams();
    params.set("name", name);
    params.set("sort", sort);
    params.set("min", minPrice);
    params.set("max", maxPrice);
    params.set("category", category);
    params.set("brand", brands.join(","));
    router.push(`?${params.toString()}`);
  };
  function handleCheckboxChange(brand) {
    setBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand],
    );
  }
  const resetFilters = () => {
    setSort(DEFAULT_SORT);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setCategory("");
    setBrands([]);
    router.push(PRODUCTS_ROUTE);
  };
  return (
    <aside className="py-8 px-6 rounded-xl shadow-md">
      <h3 className="text-xl font-medium">Products Filter</h3>
      <div className="py-4">
        <h4 className="mb-2 font-medium">Search</h4>
        <input
          name="name"
          id="name"
          className="rounded-lg px-2 py-1 outline-0 border border-gray-300 w-full"
          placeholder="Search products..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="py-4">
        <h4 className="mb-2 font-medium">Sort By:</h4>
        <select
          name="sort"
          id="sort"
          className="rounded-lg px-2 py-1 outline-0 border border-gray-300 w-full"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value={DEFAULT_SORT}>Date: Latest</option>
          <option value={JSON.stringify({ createdAt: 1 })}>Date: Oldest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
          <option value={JSON.stringify({ name: 1 })}>Name: A to Z</option>
          <option value={JSON.stringify({ name: -1 })}>Name: Z to A</option>
        </select>
      </div>

      <div className="py-4">
        <h4 className="mb-2 font-medium">Price Range</h4>
        <div className="flex gap-2 text-gray-800">
          <input
            type="number"
            id="min"
            placeholder="min"
            className="rounded-lg px-2 py-1 outline-0 border border-gray-300 w-full"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span className="font-bold text-lg">-</span>
          <input
            type="number"
            id="max"
            placeholder="max"
            className="rounded-lg px-2 py-1 outline-0 border border-gray-300 w-full"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="py-4">
        <h4 className="mb-2 font-medium">Category:</h4>
        <select
          name="Category"
          id="Category"
          className="rounded-lg px-2 py-1 outline-0 border border-gray-300 w-full"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="table">Table</option>
          <option value="sofa">Sofa</option>
          <option value="chair">Chair</option>
          <option value="bed">Bed</option>
          <option value="storage">Storage</option>
        </select>
      </div>
      <div className="py-4">
        <h4 className="mb-2 font-medium">Brand:</h4>
        <div className="px-4">
          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              name="IKEA"
              id="IKEA"
              onChange={() => handleCheckboxChange("IKEA")}
            />
            <label htmlFor="IKEA" className="ml-2">
              IKEA
            </label>
          </div>

          <div className="flex items-center justify-start gap-2 py-0.5">
            <input
              type="checkbox"
              name="noBrand"
              id="noBrand"
              onChange={() => handleCheckboxChange("noBrand")}
            />
            <label htmlFor="noBrand" className="ml-2">
              No Brand
            </label>
          </div>

          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              name="UrbanLadder"
              id="UrbanLadder"
              onChange={() => handleCheckboxChange("Urban Ladder")}
            />
            <label htmlFor="UrbanLadder" className="ml-2">
              Urban Ladder
            </label>
          </div>

          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              name="Godrej"
              id="Godrej"
              onChange={() => handleCheckboxChange("Godrej")}
            />
            <label htmlFor="Godrej" className="ml-2">
              Godrej
            </label>
          </div>
        </div>
      </div>

      <div className="py-4 space-y-2">
        <input
          type="button"
          value="Product Filter"
          className="bg-primary text-white px-5 py-1 rounded-lg w-full cursor-pointer"
          onClick={filterProducts}
        />
        <input
          type="button"
          value="Reset Filter"
          className="bg-red-600 text-white px-5 py-1 rounded-lg w-full cursor-pointer"
          onClick={resetFilters}
        />
      </div>
    </aside>
  );
};

export default ProductFilter;
