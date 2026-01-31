import axios from "axios";
import config from "@/config/config";

export const getHotPick = async () => {

  const response = await axios.get(`${config.apiUrl}/api/product?limit=4&offset=1`);

  return response.data;
};
export const getRecommended = async () => {

  const response = await axios.get(`${config.apiUrl}/api/product?limit=4&offset=5`);

  return response.data;
};


