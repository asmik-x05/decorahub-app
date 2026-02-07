import api from ".";

export const getAllUsers = async () => {
  const response = await api.get(`/api/user`);

  return response.data;
};

export const updateProfileImage = async (data) => {
  const response = await api.patch(`/api/user/update-profile`, data);

  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await api.put(`/api/user/${id}`, data);

  return response.data;
};

export const getProfile = async () => {
  const response = await api.get(`/api/user/profile`);

  return response.data;
};

export const updateUserRoles = async (id, roles) => {
  const response = await api.put(`/api/user/${id}/roles`, { roles });

  return response.data;
};
