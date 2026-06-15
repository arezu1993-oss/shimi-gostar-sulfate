"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Beaker,
  Factory,
  Leaf,
  Layers,
  Phone,
  PackageCheck,
  Truck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// -------------------------------
// Product Categories
// -------------------------------

const productCategories = [
  {
    title: "سولفات مس",
    href: "/products/copper-sulfate",
    description: "عرضه سولفات مس در گریدهای مختلف برای مصارف کشاورزی و صنعتی.",
    icon: Beaker,
    accent: "from-[#c27829] to-[#d89243]",
    bg: "bg-orange-50",
    iconBg: "bg-[#c27829]/10",
    iconColor: "text-[#c27829]",
  },
  {
    title: "سایر سولفات‌ها",
    href: "/products/other-sulfates",
    description: "تامین انواع سولفات‌های پرکاربرد برای صنایع و واحدهای تولیدی.",
    icon: Layers,
    accent: "from-slate-700 to-slate-900",
    bg: "bg-slate-50",
    iconBg: "bg-slate-200",
    iconColor: "text-slate-700",
  },
  {
    title: "کود و نهاده‌های کشاورزی",
    href: "/products/agro-chemicals",
    description: "محصولات منتخب برای تغذیه، تقویت و بهبود عملکرد گیاه.",
    icon: Leaf,
    accent: "from-emerald-600 to-green-700",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    title: "مواد اولیه شیمیایی",
    href: "/products/raw-materials",
    description: "مواد اولیه مناسب برای تولیدکنندگان و صنایع پایین‌دستی.",
    icon: Factory,
    accent: "from-sky-700 to-blue-900",
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-800",
  },
];

// -------------------------------
// Strengths
// -------------------------------
const strengths = [
  {
    title: "تامین عمده",
    description: "مناسب سفارش‌های حجمی و نیازهای مستمر صنایع.",
    icon: Truck,
  },
  {
    title: "بسته‌بندی و شرایط توافقی",
    description: "امکان هماهنگی بسته‌بندی و نحوه تحویل مطابق درخواست.",
    icon: PackageCheck,
  },
  {
    title: "کیفیت قابل اتکا",
    description: "تمرکز بر ثبات کیفیت و تامین با استاندارد مشخص.",
    icon: ShieldCheck,
  },
  {
    title: "پشتیبانی و پاسخ‌گویی",
    description: "همراهی در مراحل انتخاب محصول و ثبت سفارش.",
    icon: Phone,
  },
];

// -------------------------------
// Applications
// -------------------------------

const applications = [
  {
    title: "کشاورزی",
    description: "مناسب برای نهاده‌ها، ترکیبات تغذیه و مصارف عمومی.",
    icon: Leaf,
  },
  {
    title: "صنایع شیمیایی",
    description: "قابل استفاده در تولید محصولات و فرمولاسیون مختلف.",
    icon: Beaker,
  },
  {
    title: "مصارف صنعتی",
    description: "تامین مواد برای واحدهای تولیدی و فرآیندی.",
    icon: Factory,
  },
  {
    title: "بازرگانی و توزیع",
    description: "پشتیبانی مناسب برای فعالیت‌های عمده‌فروشی و توزیع.",
    icon: Layers,
  },
];

// -------------------------------
// Page Component
// -------------------------------

export default function ProductsPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_top_right,_rgba(194,120,41,0.12),_transparent_28%)]">
        <div className="container mx-auto px-6 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Text */}
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c27829]/20 bg-[#c27829]/10 px-4 py-2 text-xs font-black text-[#c27829]">
                <Sparkles size={14} />
                محصولات شیمی گستر سولفات
              </div>

              <h1 className="text-3xl font-black leading-[1.9] text-[#0a1a2f] md:text-5xl">
                محصولات شیمیایی برای تامین صنعتی و کشاورزی
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
                مجموعه‌ای از محصولات شیمیایی منتخب که برای صنایع، تولیدکنندگان،
                کشاورزی و فعالیت‌های بازرگانی قابل تامین هستند. تمرکز ما بر
                تامین پایدار و همکاری بلندمدت است.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#categories"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-black text-white shadow-xl shadow-orange-200 transition-all hover:bg-[#d28735]"
                >
                  مشاهده محصولات
                  <ArrowLeft size={18} />
                </Link>

                <a
                  href="tel:09123063576"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-[#0a1a2f]"
                >
                  تماس با فروش
                  <Phone size={18} />
                </a>
              </div>
            </div>

            {/* Minimal Product Highlight */}
            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white">
                  <Beaker size={28} />
                </div>

                <h2 className="text-2xl font-black text-[#0a1a2f]">
                  سولفات مس
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  مناسب برای کاربردهای کشاورزی، صنعتی و تولیدی. در گریدهای مختلف
                  قابل تامین و آماده تحویل است.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                  <span className="rounded-xl bg-slate-100 px-3 py-1">
                    کریستال
                  </span>
                  <span className="rounded-xl bg-slate-100 px-3 py-1">
                    پودری
                  </span>
                  <span className="rounded-xl bg-slate-100 px-3 py-1">
                    فاقد نیترات
                  </span>
                </div>

                <Link
                  href="/products/copper-sulfate"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#c27829]"
                >
                  مشاهده جزئیات
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-10">
            <h2 className="text-2xl font-black text-[#0a1a2f] md:text-4xl">
              دسته‌بندی محصولات
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-500">
              مجموعه‌ای از محصولات پرکاربرد برای صنایع، کشاورزی و تامین مواد
              اولیه.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group relative rounded-[2rem] border border-slate-100 ${item.bg} p-6 transition-all hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                  />
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor}`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-black text-[#0a1a2f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#0a1a2f] group-hover:text-[#c27829] group-hover:gap-3">
                    مشاهده جزئیات
                    <ArrowLeft size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strength / Cooperation */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black text-[#0a1a2f] md:text-4xl">
              همکاری و تامین
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
              مناسب برای خریداران صنعتی، توزیع‌کنندگان و مجموعه‌هایی که نیاز به
              تامین مستمر دارند.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-black text-[#0a1a2f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#0a1a2f] md:text-4xl">
              حوزه‌های کاربرد
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-500">
              محصولات قابل استفاده در صنایع مختلف، کشاورزی، تولید و فعالیت‌های
              بازرگانی.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {applications.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6 transition-all hover:border-[#c27829]/20 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#c27829] shadow-sm">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-black text-[#0a1a2f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1a2f] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-10 text-center">
          <h2 className="text-2xl font-black text-white md:text-4xl">
            استعلام قیمت و دریافت اطلاعات محصول
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            برای دریافت موجودی، قیمت یا مشاوره خرید با واحد فروش در ارتباط
            باشید.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:09123063576"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-black text-white transition-all hover:bg-[#d28735]"
            >
              تماس با فروش
              <Phone size={18} />
            </a>
            {/* <Link
              href="/products/copper-sulfate"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white hover:bg-white/10"
            >
              مشاهده محصولات
              <ArrowLeft size={18} />
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
