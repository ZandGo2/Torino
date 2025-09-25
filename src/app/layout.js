import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Provider from "@/lib/Provider";

export const metadata = {
  title: "Torino",
  description: "Prefect Tour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <Provider>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
