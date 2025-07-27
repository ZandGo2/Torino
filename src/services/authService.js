import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (mobile) => {
      const response = await axiosInstance.post("/auth/send-otp", { mobile });
      console.log(response)
      return response.data;
    },
  });
};
