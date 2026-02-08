import axios from "axios";
import config from "@/config/config";
import formatQuery from "@/helpers/queryFormatter";

export const getHotPick = async () => {
  const response = await axios.get(
    `${config.apiUrl}/api/product?limit=4&offset=1`,
  );

  return response.data;
};
export const getRecommended = async () => {
  const response = await axios.get(
    `${config.apiUrl}/api/product?limit=4&offset=5`,
  );

  return response.data;
};
export const getProducts = async ({ searchParams }) => {
  const query = formatQuery(await searchParams);
  console.log(query);
  const response = await axios.get(`${config.apiUrl}/api/product?${query}`);

  return response.data;
};

export const addProduct = async (data) => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.post(`${config.apiUrl}/api/product`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/product/${id}`);

  return response.data;
};

export const updateProduct = async (id, data) => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.put(`${config.apiUrl}/api/product/${id}`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

export const deleteProduct = async (id) => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.delete(`${config.apiUrl}/api/product/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

export const getProductCategories = async () => {
  const response = await axios.get(`${config.apiUrl}/api/product/categories`);

  return response.data;
};

export const getProductBrands = async () => {
  const response = await axios.get(`${config.apiUrl}/api/product/brands`);

  return response.data;
};
