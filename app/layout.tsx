import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

import ScrollTools from "../components/shared/ScrollTools";
import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "شیمی گستر سولفات",
  description: "تولید و تأمین مواد شیمیایی با پایش دقیق کیفیت",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "شیمی گستر سولفات",
    description: "تولید و تأمین مواد شیمیایی با پایش دقیق کیفیت",
    url: "https://www.shimigostarsulfate.com",
    siteName: "شیمی گستر سولفات",
    images: [
      {
        url: "https://www.shimigostarsulfate.com/logo.png",
        width: 512,
        height: 512,
        alt: "لوگوی شیمی گستر سولفات",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const vazir = localFont({
  src: "../public/fonts/Vazir-Medium.woff2",
  variable: "--font-vazir",
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "شیمی گستر سولفات",
  url: "https://www.shimigostarsulfate.com",
  logo: "https://www.shimigostarsulfate.com/logo.png",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className={`${vazir.variable} font-vazir bg-white antialiased`}>
        <SmoothScroll>
          <Header />

          <main className="min-h-screen pt-20">{children}</main>

          <Footer />
          <ScrollTools />
        </SmoothScroll>
      </body>
    </html>
  );
}
