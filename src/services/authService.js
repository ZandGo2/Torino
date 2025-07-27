import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (phone) => {
      const response = await axiosInstance.post("/auth/login", { phone });
      return response.data;
    },
  });
};
