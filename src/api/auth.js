import config from "@/config/config";
import axios from "axios";

export const login = async ({ email, password }) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const signUp = async ({
  name,
  email,
  phone,
  city,
  province,
  password,
}) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
    name,
    email,
    phone,
    password,
    address: {
      city,
      province,
    },
  });
  return response.data;
};

export async function forgotPassword({ email }) {
  const response = await axios.post(
    `${config.apiUrl}/api/auth/forgot-password`,
    {
      email,
    },
  );

  return response.data;
}

export async function resetPassword({ userId, token, password }) {
  const response = await axios.post(
    `${config.apiUrl}/api/auth/reset-password?userId=${userId}&token=${token}`,
    {
      password,
    },
  );

  return response.data;
}
