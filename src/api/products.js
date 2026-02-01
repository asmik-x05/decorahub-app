import axios from "axios";
import config from "@/config/config";

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
  const sort = (await searchParams)?.sort ?? "";
  const min = (await searchParams)?.min ?? "";
  const max = (await searchParams)?.max ?? "";
  const category = (await searchParams)?.category ?? "";
  const brand = (await searchParams)?.brand ?? "";
  const name = (await searchParams)?.name ?? "";
  const response = await axios.get(
    `${config.apiUrl}/api/product?sort=${sort}&min=${min}&max=${max}&category=${category}&brand=${brand}&name=${name}`,
  );

  return response.data;
};
