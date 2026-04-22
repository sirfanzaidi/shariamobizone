import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CurrencyProvider } from "@/context/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // 1. Footer ko import karein

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharia MobiZone | Buy Mobiles & Tablets",
  description: "Best online mobile shop in Mozambique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CurrencyProvider>
          {/* Header har page par dikhega */}
          <Header />
          
          {/* Main content */}
          <main>{children}</main>
          
          {/* 2. Footer ko CurrencyProvider ke andar ya bahar add karein */}
          <Footer /> 
        </CurrencyProvider>
      </body>
    </html>
  );
}