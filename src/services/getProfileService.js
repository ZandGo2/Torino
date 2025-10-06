import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const GetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/user/profile");
      return data;
    },
    onError: (error) => {
      console.error("خطا در گرفتن پروفایل:", error);
    },
  });
};
