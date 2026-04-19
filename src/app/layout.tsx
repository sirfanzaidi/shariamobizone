import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CurrencyProvider } from "@/context/CurrencyContext";
import Header from "@/components/Header";

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
        {/* Header yahan rakhne se ye har page par dikhega */}
        <Header />
        
        {/* 'children' wo content hai jo har page.tsx se aata hai */}
        <main>{children}</main>
        </CurrencyProvider>
        {/* Aap yahan Footer bhi add kar sakte hain baad mein */}
      </body>
    </html>
  );
}



