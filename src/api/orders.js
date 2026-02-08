import axios from "axios";
import config from "@/config/config";
import api from ".";
export const getAllOrders = async () => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.get(`${config.apiUrl}/api/order/`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};

export const updateStatus = async (id, status) => {
  const authToken = localStorage.getItem("authToken");
  const response = await axios.put(
    `${config.apiUrl}/api/order/${id}/status`,
    {
      status,
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );

  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post(`/api/order`, data);

  return response.data;
};

export const cancelOrder = async (id) => {
  const response = await api.put(`/api/order/${id}/cancel`);

  return response.data;
};

export const getOrdersByUser = async (status) => {
  let url = "/api/order/user";

  if (status) url += `?status=${status}`;

  const response = await api.get(url);

  return response.data;
};

export const payViaKhalti = async (id) => {
  const response = await api.post(`/api/order/${id}/payment/khalti`);

  return response.data;
};

export const payViaCash = async (id) => {
  const response = await api.post(`/api/order/${id}/payment/cash`);

  return response.data;
};

export const confirmPayment = async (id, status) => {
  const response = await api.put(`/api/order/${id}/confirm-payment`, {
    status,
  });

  return response.data;
};

