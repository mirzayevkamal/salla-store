import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/layout/navbar";
import SessionWrapper from "@/components/sessionProvider";
import "../styles/app.scss";
import "../styles/external/pingartl.scss";
import "../styles/external/sallaicons.scss";
import Footer from "@/components/layout/footer";
import { headers } from "next/headers";
import { CartContextProvider } from "@/context/cart-context";

export const metadata: Metadata = {
  title: "Cheapest Online Store",
  description: "Buy the cheapest online products",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <CartContextProvider>
        <html lang="en">
          <body className="w-full min-h-screen bg-gray-50 flex flex-col items-start justify-start">
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </CartContextProvider>
    </SessionWrapper>
  );
}
