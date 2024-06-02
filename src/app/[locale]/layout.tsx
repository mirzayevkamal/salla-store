import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/layout/navbar";
import SessionWrapper from "@/components/sessionProvider";
import "@/styles/app.scss";
import "@/styles/external/pingartl.scss";
import "@/styles/external/sallaicons.scss";
import "@smastrom/react-rating/style.css";
import Footer from "@/components/layout/footer";
import { CartContextProvider } from "@/context/cart-context";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Cheapest Online Store",
  description: "Buy the cheapest online products",
  keywords: "online store, cheapest online store, buy cheap stuff, cheap stuff",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  console.log("locale", locale);
  return (
    <NextIntlClientProvider messages={messages}>
      <SessionWrapper lang={locale}>
        <CartContextProvider>
          <html
            className={locale === "ar" ? "rtl" : "ltr"}
            lang={locale}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <body className="w-full min-h-screen bg-gray-50 flex flex-col items-start justify-start">
              <Navbar />
              {children}
              <Footer />
            </body>
          </html>
        </CartContextProvider>
      </SessionWrapper>
    </NextIntlClientProvider>
  );
}
