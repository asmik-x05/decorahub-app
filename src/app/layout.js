import "./globals.css";

import AppProvider from "@/redux/provider";
import MainLayout from "@/layout/MainLayout";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "DecoraHub | Your Interior Design Companion",
  description:
    "Discover the perfect decor ideas and tips for your home with DecoraHub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
        <ToastContainer autoClose={2000} />
      </body>
    </html>
  );
}
