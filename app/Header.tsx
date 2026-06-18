"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Beaker,
  BookOpenText,
  ChevronDown,
  FlaskConical,
  Home,
  Info,
  Layers,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Sprout,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const HEADER_HEIGHT_CLASS = "h-20";

const phoneNumber = "+989123063576";
const displayPhone = "۰۹۱۲ ۳۰۶ ۳۵۷۶";
const whatsappPhone = "989120909323";
const whatsappText = encodeURIComponent(
  "سلام، برای مشاوره و استعلام قیمت محصولات شیمی گستر سولفات مزاحم شدم.",
);
const whatsappHref = `https://wa.me/${whatsappPhone}?text=${whatsappText}`;

const navItems = [
  { title: "صفحه اصلی", href: "/", icon: Home },
  { title: "محصولات", href: "/products", icon: Package },
  { title: "وبلاگ و مقالات", href: "/blog", icon: BookOpenText },
  { title: "درباره ما", href: "/about", icon: Info },
  { title: "تماس با ما", href: "/contact", icon: Phone },
];

const productItems = [
  {
    title: "سولفات مس کریستالی",
    href: "/products/copper-sulfate",
    icon: Beaker,
    desc: "محصولات پایه سولفات مس با کیفیت صنعتی و کشاورزی",
  },
  {
    title: "سایر سولفات‌ها",
    href: "/products/other-sulfates",
    icon: Layers,
    desc: "انواع سولفات‌های صنعتی و تخصصی برای کاربردهای متنوع",
  },
  {
    title: "کود و نهاده‌های کشاورزی",
    href: "/products/agro-chemicals",
    icon: Sprout,
    desc: "ترکیبات و نهاده‌های مورد نیاز برای کشاورزی و تغذیه گیاه",
  },
  {
    title: "مواد اولیه شیمیایی",
    href: "/products/raw-materials",
    icon: FlaskConical,
    desc: "مواد اولیه شیمیایی مورد نیاز صنایع و واحدهای تولیدی",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setProductsOpen(false);
  };

  const headerTheme = scrolled
    ? "border-amber-200/80 bg-[#fffaf0]/98 shadow-[0_12px_34px_rgba(120,53,15,0.12)] backdrop-blur-xl"
    : "border-amber-100/70 bg-white/90 shadow-[0_8px_26px_rgba(120,53,15,0.08)] backdrop-blur-xl";

  const navLinkClass = scrolled
    ? "text-[#0a1a2f] hover:bg-[#c27829]/10 hover:text-[#c27829]"
    : "text-slate-800 hover:bg-[#c27829]/10 hover:text-[#c27829]";

  const phoneBoxClass = scrolled
    ? "border-amber-100 bg-white text-[#0a1a2f] hover:border-[#c27829]/30 hover:bg-[#c27829]/5 hover:text-[#c27829]"
    : "border-amber-100 bg-white/90 text-[#0a1a2f] shadow-sm hover:border-[#c27829]/30 hover:bg-[#fff7ed] hover:text-[#c27829]";

  const mobileMenuButtonClass = scrolled
    ? "border-amber-100 bg-white text-[#0a1a2f] hover:bg-[#fff7ed]"
    : "border-amber-100 bg-white/90 text-[#0a1a2f] shadow-sm hover:bg-[#fff7ed]";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] w-full border-b transition-all duration-300 ${headerTheme}`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 ${HEADER_HEIGHT_CLASS}`}
      >
        {/* بخش لوگو اصلاح شده */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5 sm:h-14 sm:w-14">
            <Image
              src="/logo.svg"
              alt="لوگوی شیمی گستر سولفات"
              width={60}
              height={60}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span
              className={`text-base font-black sm:text-lg ${
                scrolled ? "text-[#0a1a2f]" : "text-slate-900"
              }`}
            >
              شیمی گستر سولفات
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            if (item.title === "محصولات") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDesktopProductsOpen(true)}
                  onMouseLeave={() => setDesktopProductsOpen(false)}
                >
                  <Link
                    href="/products"
                    className={`flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-bold transition ${navLinkClass}`}
                  >
                    محصولات
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        desktopProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {desktopProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-4 w-[360px] overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.16)]"
                      >
                        <div className="mb-2 px-2 pt-2">
                          <p className="text-sm font-black text-[#0a1a2f]">
                            دسته‌بندی محصولات
                          </p>
                        </div>

                        <div className="space-y-1">
                          {productItems.map((product) => {
                            const ProductIcon = product.icon;
                            return (
                              <Link
                                key={product.href}
                                href={product.href}
                                onClick={() => setDesktopProductsOpen(false)}
                                className="group flex items-start gap-3 rounded-2xl px-3 py-3 transition hover:bg-slate-50"
                              >
                                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c27829]/10 text-[#c27829] transition group-hover:bg-[#c27829] group-hover:text-white">
                                  <ProductIcon size={18} />
                                </span>
                                <span className="flex flex-col">
                                  <span className="text-sm font-black text-slate-800 transition group-hover:text-[#c27829]">
                                    {product.title}
                                  </span>
                                  <span className="mt-1 text-xs leading-5 text-slate-500">
                                    {product.desc}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${navLinkClass}`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${phoneNumber}`}
            className={`flex h-11 items-center gap-2 rounded-2xl border px-4 text-sm font-black transition ${phoneBoxClass}`}
            aria-label="تماس مستقیم"
          >
            <span dir="ltr">{displayPhone}</span>
            <Phone size={18} />
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-sm transition hover:bg-[#1ebe5d]"
            aria-label="ارسال پیام در واتس‌اپ"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition lg:hidden ${mobileMenuButtonClass}`}
          aria-label="باز کردن منو"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="بستن منو"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-slate-950/45 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed right-0 top-0 z-[120] flex h-[100dvh] w-[88vw] max-w-sm flex-col overflow-hidden bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/logo.svg"
                    alt="لوگوی شیمی گستر سولفات"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-base font-black text-[#0a1a2f]">
                      شیمی گستر سولفات
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    if (item.title === "محصولات") {
                      return (
                        <div
                          key={item.href}
                          className="overflow-hidden rounded-2xl border border-slate-100"
                        >
                          <button
                            type="button"
                            onClick={() => setProductsOpen((v) => !v)}
                            className="flex w-full items-center justify-between bg-slate-50 px-4 py-4 text-right text-sm font-black text-[#0a1a2f]"
                          >
                            <span className="flex items-center gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#c27829] shadow-sm">
                                <Icon size={18} />
                              </span>
                              محصولات
                            </span>
                            <ChevronDown
                              size={18}
                              className={productsOpen ? "rotate-180" : ""}
                            />
                          </button>
                          <AnimatePresence>
                            {productsOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden bg-white p-2 space-y-1"
                              >
                                {productItems.map((p) => (
                                  <Link
                                    key={p.href}
                                    href={p.href}
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                                  >
                                    <p.icon
                                      size={16}
                                      className="text-[#c27829]"
                                    />
                                    {p.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-4 text-sm font-black text-slate-700 hover:bg-slate-50"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-[#c27829]">
                          <Icon size={18} />
                        </span>
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-100 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#0a1a2f] text-sm font-black text-white"
                  >
                    <Phone size={18} />
                    تماس
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-sm font-black text-white"
                  >
                    <MessageCircle size={19} />
                    واتس‌اپ
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
