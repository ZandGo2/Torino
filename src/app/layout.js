import { Vazirmatn, Cairo, Tajawal, Amiri, Scheherazade } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import VerifyModal from "@/components/template/modal/VerifyModal";
import LoginModal from "@/components/template/modal/LoginModal";
import AuthProvider from "@/context/AuthContext";

const vazir = Vazirmatn({
  subsets: ["arabic"], 
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Torino",
  description: "Buy Ticket Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <AuthProvider>
          <Header />
          <LoginModal />
          <VerifyModal />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
