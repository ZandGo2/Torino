"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import VerifyModal from "@/components/module/modal/VerifyModal.js";
import LoginModal from "@/components/module/modal/LoginModal.js";

const queryClient = new QueryClient();

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <LoginModal />
        <VerifyModal />
        {children}
        <ToastContainer />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default Provider;
