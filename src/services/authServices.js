import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (mobile) => {
      const response = await axiosInstance.post("/auth/send-otp", { mobile });
      console.log(response);
      return response.data;
    },
  });
};

export const useCheckOtpMutation = () => {
  return useMutation({
    mutationFn: async ({ data: { mobile, code } }) => {
      const response = await axiosInstance.post("/auth/check-otp", {
        mobile,
        code,
      });
      console.log(response);
      return response.data;
    },
  });
};
