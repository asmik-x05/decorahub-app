import axios from "axios";
import config from "@/config/config";

export const getBlogs = async () => {
  const response = await axios.get(
    `${config.apiUrl}/api/blogs`,
  );

  return response.data;
};


