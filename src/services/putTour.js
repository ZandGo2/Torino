import axiosInstance from "@/lib/axios";

export const putTourID = async (id) => {
  const res = await axiosInstance.put(`/basket/${id}`);
  return res.data;
};
