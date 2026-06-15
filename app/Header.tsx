"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Home,
  Info,
  Layers,
  Menu,
  MessageSquare,
  Phone,
  X,
  ArrowLeft,
  Factory,
  BookOpen,
  Package,
  ChevronLeft,
  Beaker,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const productItems = [
  {
    title: "سولفات مس",
    href: "/products/copper-sulfate",
    description: "تولیدکننده تخصصی کریستال درجه یک",
    icon: <Beaker size={22} />,
    color: "text-[#c27829]",
    bg: "bg-[#c27829]/10",
    border: "group-hover:border-[#c27829]/30",
  },
  {
    title: "سایر سولفات‌ها",
    href: "/products/other-sulfates",
    description: "سولفات آهن، روی، منیزیم و منگنز",
    icon: <Layers size={22} />,
    color: "text-[#c27829]",
    bg: "bg-[#c27829]/10",
    border: "group-hover:border-[#c27829]/30",
  },
  {
    title: "کود و سم کشاورزی",
    href: "/products/agro-chemicals",
    description: "تامین مواد تقویتی و حفاظتی مزارع",
    icon: <Zap size={22} />,
    color: "text-[#c27829]",
    bg: "bg-[#c27829]/10",
    border: "group-hover:border-[#c27829]/30",
  },
  {
    title: "مواد اولیه شیمیایی",
    href: "/products/raw-materials",
    description: "تامین زنجیره تولید صنایع کشور",
    icon: <Factory size={22} />,
    color: "text-[#c27829]",
    bg: "bg-[#c27829]/10",
    border: "group-hover:border-[#c27829]/30",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-white border-b border-slate-100 shadow-sm">
        {/* Top Bar */}
        <div className="block bg-[#0a1a2f] py-3 border-b border-white/5">
          <div className="container mx-auto px-10 flex justify-between items-center text-[13px] text-slate-300 font-medium">
            <div className="flex items-center gap-8">
              <a
                href="tel:09123063576"
                className="flex items-center gap-3 hover:text-[#c27829] transition-all duration-300 group"
              >
                <div className="bg-white/5 p-1.5 rounded-lg group-hover:bg-[#c27829]/20 transition-all">
                  <Phone size={14} className="text-[#c27829]" />
                </div>
                <span className="tracking-widest font-bold tabular-nums">
                  ۳۵۷۶ ۳۰۶ ۰۹۱۲
                </span>
              </a>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="https://wa.me/989120909323"
                target="_blank"
                className="hover:text-[#25D366] transition-colors"
              >
                واتس‌اپ واحد فروش
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto flex h-22 items-center justify-between px-7">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-5 group">
            <div className="relative group">
              <div className="bg-white px-4 py-2 border-x border-b border-slate-100 rounded-b-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/logo.jpg"
                  alt="شیمی گستر سولفات"
                  className="h-12 md:h-16 w-auto mix-blend-multiply"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black leading-tight text-[#0a1a2f]">
                شیمی گستر سولفات
              </span>
              {/* <span className="text-[10px] font-bold tracking-[0.2em] text-[#c27829]">
                SULFATE PRODUCTION
              </span> */}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex h-full items-center gap-2 font-medium text-[#0a1a2f]">
            <Link
              href="/"
              className="relative flex h-full items-center px-4 transition-colors hover:text-[#c27829] after:absolute after:bottom-0 after:right-4 after:h-0.75 after:w-0 after:rounded-full after:bg-[#c27829] after:transition-all hover:after:w-[calc(100%-2rem)]"
            >
              صفحه اصلی
            </Link>

            {/* Desktop Mega Menu */}
            <div
              className="relative flex h-full items-center"
              onMouseEnter={() => setDesktopProductsOpen(true)}
              onMouseLeave={() => setDesktopProductsOpen(false)}
            >
              <Link
                href="/products"
                className={`relative flex h-full items-center gap-1 px-4 transition-colors after:absolute after:bottom-0 after:right-4 after:h-0.75 after:rounded-full after:bg-[#c27829] after:transition-all ${desktopProductsOpen ? "text-[#c27829] after:w-[calc(100%-2rem)]" : "hover:text-[#c27829] after:w-0 hover:after:w-[calc(100%-2rem)]"}`}
              >
                محصولات
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${desktopProductsOpen ? "rotate-180" : ""}`}
                />
              </Link>
              <AnimatePresence>
                {desktopProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    className="absolute right-0 top-full w-190 rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-900/10"
                  >
                    <div className="absolute -top-2 right-12 h-4 w-4 rotate-45 border-r border-t border-slate-100 bg-white" />
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-4 overflow-hidden rounded-2xl bg-[#0a1a2f] p-5 text-white">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#f3b36c]">
                          <Layers size={26} />
                        </div>
                        <h3 className="text-lg font-black">تولید و تامین</h3>
                        <p className="mt-2 text-sm leading-8 text-slate-100">
                          تولید تخصصی سولفات مس و تامین مستقیم انواع نهاده‌های
                          شیمیایی و کشاورزی.
                        </p>
                        <Link
                          href="/products"
                          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#c27829] px-4 py-3 text-sm font-black text-white transition-all hover:bg-[#d88a35] hover:gap-3"
                        >
                          مشاهده محصولات <ArrowLeft size={16} />
                        </Link>
                      </div>
                      <div className="col-span-8 grid grid-cols-2 gap-3">
                        {productItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className={`group flex items-start gap-3 rounded-2xl border border-transparent bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70 ${item.border}`}
                          >
                            <span
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color} transition-all group-hover:scale-110`}
                            >
                              {item.icon}
                            </span>
                            <span className="flex flex-col">
                              <span className="font-black text-[#0a1a2f] transition-colors group-hover:text-[#c27829]">
                                {item.title}
                              </span>
                              <span className="mt-1 text-xs leading-6 text-slate-500">
                                {item.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="relative flex h-full items-center px-4 transition-colors hover:text-[#c27829] after:absolute after:bottom-0 after:right-4 after:h-0.75 after:w-0 after:rounded-full after:bg-[#c27829] after:transition-all hover:after:w-[calc(100%-2rem)]"
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              className="relative flex h-full items-center px-4 transition-colors hover:text-[#c27829] after:absolute after:bottom-0 after:right-4 after:h-0.75 after:w-0 after:rounded-full after:bg-[#c27829] after:transition-all hover:after:w-[calc(100%-2rem)]"
            >
              تماس با ما
            </Link>
            <Link
              href="/blog"
              className="relative flex h-full items-center px-4 transition-colors hover:text-[#c27829] after:absolute after:bottom-0 after:right-4 after:h-0.75 after:w-0 after:rounded-full after:bg-[#c27829] after:transition-all hover:after:w-[calc(100%-2rem)]"
            >
              وبلاگ
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:09123063576"
              className="hidden md:flex items-center gap-2 rounded-full bg-[#0a1a2f] px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-[#c27829] hover:shadow-orange-200"
            >
              <Phone size={17} />
              <span>۰۹۱۲۳۰۶۳۵۷۶</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="lg:hidden rounded-xl bg-slate-100 p-2.5 text-[#0a1a2f] active:scale-90 transition-all"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-[110] bg-slate-950/55 backdrop-blur-sm lg:hidden"
              />
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.28 }}
                className="fixed bottom-0 right-0 top-0 z-[120] flex h-screen w-[84%] max-w-[370px] flex-col bg-white shadow-2xl lg:hidden"
              >
                {/* Mobile Menu Header */}
                {/* Mobile Menu Header - اصلاح شده */}
                <div className="flex items-center justify-between bg-[#0a1a2f] pr-6 pl-4 py-6 text-white border-b border-white/5">
                  <div className="flex items-center gap-3">
                    {/* لوگوی کوچک داخل منو */}
                    <div className="h-10 w-10 overflow-hidden rounded-lg bg-white p-1">
                      <img
                        src="/images/logo.jpg"
                        alt="logo"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-l font-black text-white">
                        شیمی گستر سولفات
                      </span>
                      {/* <span className="text-[10px] font-medium text-[#f3b36c] opacity-80">
                        پنل دسترسی سریع
                      </span> */}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl bg-white/5 p-2.5 text-white/70 transition-all active:scale-90 active:bg-white/10"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Links List */}
                <div className="flex-1 overflow-y-auto py-6 space-y-1">
                  {/* Home Link */}
                  <MobileNavLink
                    href="/"
                    icon={<Home size={20} />}
                    label="صفحه اصلی"
                    onClick={() => setIsOpen(false)}
                  />

                  {/* Products Link - Direct & Special Style */}
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-4 pr-8 pl-6 transition-all border-r-4 border-transparent hover:bg-orange-50/50 active:bg-orange-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-[#c27829] group-hover:bg-[#c27829] group-hover:text-white transition-all">
                        <Package size={22} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[15px] font-black text-slate-900">
                          محصولات
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          کاتالوگ و دسته‌بندی‌ها
                        </span>
                      </div>
                    </div>
                    <ChevronLeft
                      size={18}
                      className="text-slate-300 group-hover:text-[#c27829] transition-all"
                    />
                  </Link>

                  <MobileNavLink
                    href="/about"
                    icon={<Info size={20} />}
                    label="درباره ما"
                    onClick={() => setIsOpen(false)}
                  />
                  <MobileNavLink
                    href="/contact"
                    icon={<MessageSquare size={20} />}
                    label="تماس با ما"
                    onClick={() => setIsOpen(false)}
                  />
                  <MobileNavLink
                    href="/blog"
                    icon={<BookOpen size={20} />}
                    label="وبلاگ و مقالات"
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                {/* WhatsApp Floating Button */}
                <div className="px-6 mb-4">
                  <a
                    href="https://wa.me/989120909323"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-3 bg-[#25D366]/10 text-[#128C7E] rounded-2xl font-bold border border-[#25D366]/20"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
                    </span>
                    واتس‌اپ واحد فروش
                  </a>
                </div>

                {/* Mobile Footer CTA */}
                <div className="border-t border-slate-100 p-6 bg-slate-50">
                  <a
                    href="tel:09123063576"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#c27829] py-4 font-black text-white shadow-xl shadow-orange-200 active:scale-[0.97] transition-all"
                  >
                    <Phone size={20} />
                    مشاوره و خرید مستقیم
                  </a>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

// Helper component for uniform mobile links
function MobileNavLink({
  href,
  icon,
  label,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between py-4 pr-8 pl-6 transition-all border-r-4 border-transparent hover:border-[#c27829] hover:bg-slate-50"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500 group-hover:bg-[#0a1a2f] group-hover:text-white transition-all">
          {icon}
        </div>
        <span className="text-[15px] font-bold text-slate-800 group-hover:text-[#0a1a2f]">
          {label}
        </span>
      </div>
      <ChevronLeft
        size={18}
        className="text-slate-300 group-hover:text-[#0a1a2f] transition-all"
      />
    </Link>
  );
}
