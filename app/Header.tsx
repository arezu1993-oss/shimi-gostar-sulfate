"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Beaker,
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

const phoneNumber = "+989120909323";
const displayPhone = "۰۹۱۲ ۰۹۰ ۹۳۲۳";
const whatsappPhone = "989120909323";
const whatsappText = encodeURIComponent(
  "سلام، برای مشاوره و استعلام قیمت محصولات شیمی گستر سولفات مزاحم شدم.",
);
const whatsappHref = `https://wa.me/${whatsappPhone}?text=${whatsappText}`;

const navItems = [
  { title: "صفحه اصلی", href: "/", icon: Home },
  { title: "محصولات", href: "/products", icon: Package },
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
    ? "border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
    : "border-white/10 bg-[#07111f]/78 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl";

  const navLinkClass = scrolled
    ? "text-slate-700 hover:bg-slate-50 hover:text-[#c27829]"
    : "text-white/90 hover:bg-white/10 hover:text-[#f0b56d]";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] w-full border-b transition-all duration-300 ${headerTheme}`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 ${HEADER_HEIGHT_CLASS}`}
      >
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white p-1.5 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-14 sm:w-14">
            <Image
              src="/images/logo.jpg"
              alt="لوگوی شیمی گستر سولفات"
              width={56}
              height={56}
              className="h-full w-full rounded-xl object-contain mix-blend-multiply"
              priority
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span
              className={`text-base font-black sm:text-lg ${
                scrolled ? "text-[#0a1a2f]" : "text-white"
              }`}
            >
              شیمی گستر سولفات
            </span>
            <span
              className={`mt-1 hidden text-xs font-semibold sm:block ${
                scrolled ? "text-slate-500" : "text-slate-300"
              }`}
            >
              تولید و تأمین سولفات‌های صنعتی
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${navLinkClass}`}
          >
            صفحه اصلی
          </Link>

          <div
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
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      انتخاب سریع گروه محصول برای مشاهده جزئیات
                    </p>
                  </div>

                  <div className="space-y-1">
                    {productItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDesktopProductsOpen(false)}
                          className="group flex items-start gap-3 rounded-2xl px-3 py-3 transition hover:bg-slate-50"
                        >
                          <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c27829]/10 text-[#c27829] transition group-hover:bg-[#c27829] group-hover:text-white">
                            <Icon size={18} />
                          </span>

                          <span className="flex flex-col">
                            <span className="text-sm font-black text-slate-800 transition group-hover:text-[#c27829]">
                              {item.title}
                            </span>
                            <span className="mt-1 text-xs leading-5 text-slate-500">
                              {item.desc}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 border-t border-slate-100 px-2 pt-3">
                    <Link
                      href="/products"
                      onClick={() => setDesktopProductsOpen(false)}
                      className="text-sm font-bold text-[#c27829] transition hover:text-[#0a1a2f]"
                    >
                      مشاهده همه محصولات
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${navLinkClass}`}
          >
            درباره ما
          </Link>

          <Link
            href="/contact"
            className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${navLinkClass}`}
          >
            تماس با ما
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${phoneNumber}`}
            className={`flex h-11 items-center gap-2 rounded-2xl border px-4 text-sm font-black transition ${
              scrolled
                ? "border-slate-200 bg-slate-50 text-[#0a1a2f] hover:border-[#c27829]/30 hover:bg-[#c27829]/5 hover:text-[#c27829]"
                : "border-white/10 bg-white/10 text-white hover:bg-white/15"
            }`}
            aria-label="تماس مستقیم"
          >
            <span dir="ltr">{displayPhone}</span>
            <Phone size={18} />
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white shadow-sm transition hover:bg-[#c27829]"
            aria-label="تماس تلفنی"
          >
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
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition lg:hidden ${
            scrolled
              ? "border-slate-100 bg-slate-50 text-[#0a1a2f] hover:bg-slate-100"
              : "border-white/10 bg-white/10 text-white hover:bg-white/15"
          }`}
          aria-label="باز کردن منو"
        >
          <Menu size={24} />
        </button>
      </div>

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
                <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white p-1.5 shadow-sm">
                    <Image
                      src="/images/logo.jpg"
                      alt="لوگوی شیمی گستر سولفات"
                      width={48}
                      height={48}
                      className="h-full w-full rounded-xl object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="flex flex-col leading-tight">
                    <span className="text-base font-black text-[#0a1a2f]">
                      شیمی گستر سولفات
                    </span>
                    <span className="mt-1 text-xs font-semibold text-slate-500">
                      سولفات‌های صنعتی
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition hover:bg-slate-100"
                  aria-label="بستن منو"
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
                            onClick={() => setProductsOpen((value) => !value)}
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
                              className={`transition-transform ${
                                productsOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {productsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-white"
                              >
                                <div className="space-y-1 p-2">
                                  <Link
                                    href="/products"
                                    onClick={closeMenu}
                                    className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
                                  >
                                    مشاهده همه محصولات
                                  </Link>

                                  {productItems.map((product) => {
                                    const ProductIcon = product.icon;

                                    return (
                                      <Link
                                        key={product.href}
                                        href={product.href}
                                        onClick={closeMenu}
                                        className="flex items-start gap-3 rounded-xl px-4 py-3 text-sm transition hover:bg-slate-50"
                                      >
                                        <span className="mt-0.5 text-[#c27829]">
                                          <ProductIcon size={17} />
                                        </span>

                                        <span className="flex flex-col">
                                          <span className="font-bold text-slate-700">
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
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-4 text-sm font-black text-slate-700 transition hover:bg-slate-50 hover:text-[#c27829]"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-[#c27829]">
                          <Icon size={18} />
                        </span>
                        {item.title}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-black text-[#0a1a2f]">
                    مشاوره و استعلام قیمت
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    برای دریافت قیمت روز و راهنمایی انتخاب محصول، با بخش فروش در ارتباط باشید.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 bg-white p-4">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#0a1a2f] text-sm font-black text-white transition hover:bg-[#c27829]"
                  >
                    <Phone size={18} />
                    تماس
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-sm font-black text-white transition hover:bg-[#1ebe5d]"
                  >
                    <MessageCircle size={19} />
                    واتس‌اپ
                  </a>
                </div>

                <a
                  href={`tel:${phoneNumber}`}
                  className="mt-3 flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-black text-[#0a1a2f]"
                  dir="ltr"
                >
                  {displayPhone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
