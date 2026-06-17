import type { ReactNode } from "react";
import localFont from "next/font/local";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";
import ScrollTools from "../components/shared/ScrollTools";

const vazir = localFont({
  src: "../public/fonts/Vazir-Medium.woff2",
  variable: "--font-vazir",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} font-vazir bg-white antialiased`}>
        <Header />

        <main className="min-h-screen pt-20">{children}</main>

        <Footer />
        <ScrollTools />
      </body>
    </html>
  );
}
