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
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const phoneNumber = "+989123063576";
const whatsappPhone = "989120909323";
const whatsappHref = `https://wa.me/${whatsappPhone}`;

const navItems = [
  { title: "صفحه اصلی", href: "/", icon: Home },
  { title: "محصولات", href: "/products", icon: Package },
  { title: "وبلاگ و مقالات", href: "/blog", icon: BookOpenText },
  { title: "درباره ما", href: "/about", icon: Info },
  { title: "تماس با ما", href: "/contact", icon: Phone },
];

const productItems = [
  {
    title: "سولفات مس",
    href: "/products/copper-sulfate",
    icon: Beaker,
    desc: "صنعتی و کشاورزی",
  },
  {
    title: "سایر سولفات‌ها",
    href: "/products/other-sulfates",
    icon: Layers,
    desc: "تخصصی و سفارشی",
  },
  {
    title: "کود و نهاده‌ها",
    href: "/products/agro-chemicals",
    icon: Sprout,
    desc: "تغذیه بهینه مزارع",
  },
  {
    title: "مواد اولیه",
    href: "/products/raw-materials",
    icon: FlaskConical,
    desc: "تامین مواد پایه",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < 50) {
      setHeaderVisible(true);
      setScrolled(false);
    } else {
      setScrolled(true);

      if (latest > previous) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
    }
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* هدر اصلی */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: headerVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed left-0 right-0 top-0 z-[100] w-full border-b transition-colors duration-300 ${
          scrolled
            ? "border-slate-100 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.svg"
                alt="لوگو"
                fill
                className="rounded-full object-contain"
              />
            </div>

            <span className="text-sm font-black text-[#0a1a2f] sm:text-base">
              شیمی گستر سولفات
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.title === "محصولات" && setDesktopProductsOpen(true)
                }
                onMouseLeave={() =>
                  item.title === "محصولات" && setDesktopProductsOpen(false)
                }
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-bold text-slate-700 transition-colors hover:text-[#c27829]"
                >
                  {item.title}
                  {item.title === "محصولات" && <ChevronDown size={14} />}
                </Link>

                {item.title === "محصولات" && desktopProductsOpen && (
                  <div className="absolute right-0 top-full pt-2">
                    <div className="w-64 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                      {productItems.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                        >
                          <p.icon size={18} className="text-[#c27829]" />
                          <span className="text-sm font-bold text-slate-800">
                            {p.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${phoneNumber}`}
              className="hidden h-10 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-[#0a1a2f] lg:flex"
            >
              <span dir="ltr">۰۹۱۲ ۳۰۶ ۳۵۷۶</span>
              <Phone size={16} />
            </a>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="باز کردن منو"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* منوی همبرگری موبایل */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/55 backdrop-blur-md"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 flex h-full w-[86vw] max-w-sm flex-col overflow-hidden bg-slate-50 shadow-2xl"
            >
              {/* سربرگ منو */}
              <div className="relative bg-white px-5 pb-4 pt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-100">
                      <Image
                        src="/logo.svg"
                        alt="لوگو"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="leading-tight">
                      <div className="text-base font-black text-[#0a1a2f]">
                        شیمی گستر سولفات
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="بستن منو"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 transition-colors hover:bg-red-50 hover:text-red-500 active:scale-95"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* آیتم‌های منو */}
              <div className="flex-1 overflow-y-auto px-5 py-5">
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      {item.title === "محصولات" ? (
                        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100/80">
                          <button
                            onClick={() => setProductsOpen(!productsOpen)}
                            className="flex w-full items-center justify-between p-4 text-right font-black text-slate-800 transition-colors active:bg-slate-50"
                          >
                            <span className="flex items-center gap-3">
                              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-[#c27829]">
                                <Package size={21} />
                              </span>
                              {item.title}
                            </span>

                            <ChevronDown
                              size={18}
                              className={`text-slate-400 transition-transform duration-300 ${
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
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="mx-4 mb-4 rounded-2xl bg-slate-50/80 p-2">
                                  {productItems.map((p) => (
                                    <Link
                                      key={p.href}
                                      href={p.href}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-white hover:text-[#c27829]"
                                    >
                                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-amber-500 shadow-sm">
                                        <p.icon size={16} />
                                      </span>
                                      <span>{p.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between rounded-3xl bg-white p-4 font-black text-slate-800 shadow-sm ring-1 ring-slate-100/80 transition-all hover:text-[#c27829] active:scale-[0.98]"
                        >
                          <span className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-slate-500">
                              <item.icon size={21} />
                            </span>
                            {item.title}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* دکمه‌های تماس */}
              <div className="bg-white/90 px-5 pb-5 pt-4 shadow-[0_-12px_35px_-25px_rgba(15,23,42,0.45)] backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex h-14 items-center justify-center gap-2 rounded-3xl bg-[#0a1a2f] text-sm font-black text-white shadow-lg shadow-slate-200 transition-transform active:scale-95"
                  >
                    <Phone size={20} />
                    تماس
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 items-center justify-center gap-2 rounded-3xl bg-[#25D366] text-sm font-black text-white shadow-lg shadow-green-100 transition-transform active:scale-95"
                  >
                    <MessageCircle size={20} />
                    واتس‌اپ
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
