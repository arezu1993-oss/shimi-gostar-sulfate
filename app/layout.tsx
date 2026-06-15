import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/shared/ScrollToTop";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased font-vazir">
        {" "}
        {/* کلاس فونت اضافه شد */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
