"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Beaker,
  Boxes,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Headphones,
  Layers,
  Leaf,
  MessageCircle,
  PackageCheck,
  Phone,
  ChevronDown,
  Truck,
} from "lucide-react";

const phoneNumber = "09123063576";
const whatsappPhone = "989120909323";

const productCategories = [
  {
    title: "سولفات مس",
    href: "/products/copper-sulfate",
    description:
      "سولفات مس کریستال و پودری برای مصارف کشاورزی، صنعتی، آبکاری، دامپروری و تولیدی با امکان ارائه آنالیز.",
    icon: Beaker,
    badge: "محصول شاخص",
    tags: ["کریستال", "پودری", "کشاورزی", "صنعتی"],
    accent: "from-[#c27829] to-[#f0b56d]",
    bg: "bg-orange-50",
    iconBg: "bg-[#c27829]/10",
    iconColor: "text-[#c27829]",
  },
  {
    title: "سایر سولفات‌ها",
    href: "/products/other-sulfates",
    description:
      "تأمین سولفات‌های پرمصرف برای صنایع، کشاورزی، خوراک دام، تولید کود و فرمولاسیون‌های شیمیایی.",
    icon: Layers,
    badge: "تأمین متنوع",
    tags: ["روی", "آهن", "منگنز", "منیزیم"],
    accent: "from-slate-700 to-slate-950",
    bg: "bg-slate-50",
    iconBg: "bg-slate-200",
    iconColor: "text-slate-800",
  },
  {
    title: "کود و نهاده‌های کشاورزی",
    href: "/products/agro-chemicals",
    description:
      "محصولات منتخب برای تغذیه گیاه، اصلاح کمبود عناصر، افزایش کیفیت محصول و پشتیبانی از کشاورزی حرفه‌ای.",
    icon: Leaf,
    badge: "ویژه کشاورزی",
    tags: ["تغذیه گیاه", "ریز‌مغذی", "اصلاح خاک", "افزایش عملکرد"],
    accent: "from-emerald-600 to-green-700",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    title: "مواد اولیه شیمیایی",
    href: "/products/raw-materials",
    description:
      "مواد اولیه مورد نیاز تولیدکنندگان، صنایع پایین‌دستی، واحدهای فرآیندی و مجموعه‌های بازرگانی.",
    icon: Factory,
    badge: "مناسب تولید",
    tags: ["صنعتی", "تولیدی", "عمده", "فرآیندی"],
    accent: "from-sky-700 to-blue-950",
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-800",
  },
];

const trustItems = [
  {
    title: "تأمین عمده و مستمر",
    description: "مناسب کارخانه‌ها، توزیع‌کنندگان و خریداران حجمی.",
    icon: Truck,
  },
  {
    title: "ارائه برگه آنالیز",
    description: "امکان ارائه اطلاعات فنی و مشخصات محصول برای سفارش‌ها.",
    icon: ClipboardCheck,
  },
  {
    title: "بسته‌بندی قابل هماهنگی",
    description: "تأمین در بسته‌بندی‌های متناسب با نیاز مصرف یا توزیع.",
    icon: PackageCheck,
  },
  {
    title: "مشاوره قبل از خرید",
    description: "راهنمایی برای انتخاب محصول مناسب بر اساس کاربرد.",
    icon: Headphones,
  },
];

const applications = [
  {
    title: "کشاورزی و باغداری",
    description:
      "برای تغذیه گیاه، اصلاح کمبود عناصر، تولید کود و کاربردهای عمومی کشاورزی.",
    icon: Leaf,
  },
  {
    title: "صنایع شیمیایی",
    description:
      "قابل استفاده در فرمولاسیون‌ها، تولید مواد واسطه و فرآیندهای شیمیایی.",
    icon: FlaskConical,
  },
  {
    title: "واحدهای صنعتی",
    description:
      "تأمین مواد اولیه برای خطوط تولید، فرآیندهای صنعتی و مصرف مستمر.",
    icon: Factory,
  },
  {
    title: "بازرگانی و توزیع",
    description:
      "گزینه مناسب برای فروشگاه‌ها، عمده‌فروش‌ها و شبکه‌های تأمین منطقه‌ای.",
    icon: Boxes,
  },
];

const processSteps = [
  {
    title: "ثبت درخواست",
    description: "محصول، مقدار مورد نیاز، نوع بسته‌بندی و مقصد را اعلام کنید.",
  },
  {
    title: "بررسی موجودی و قیمت",
    description:
      "واحد فروش شرایط تأمین، زمان تحویل و قیمت روز را اعلام می‌کند.",
  },
  {
    title: "هماهنگی ارسال",
    description:
      "پس از نهایی شدن سفارش، بسته‌بندی و ارسال طبق توافق انجام می‌شود.",
  },
];

const faqs = [
  {
    question: "آیا امکان خرید عمده محصولات وجود دارد؟",
    answer:
      "بله، تمرکز شیمی گستر سولفات بر تأمین عمده و مستمر برای صنایع، کشاورزی و توزیع‌کنندگان است.",
  },
  {
    question: "قیمت محصولات چگونه اعلام می‌شود؟",
    answer:
      "قیمت با توجه به نوع محصول، گرید، مقدار سفارش، بسته‌بندی و شرایط ارسال اعلام می‌شود.",
  },
  {
    question: "آیا برای سولفات مس برگه آنالیز ارائه می‌شود؟",
    answer:
      "برای سفارش‌های مرتبط، امکان ارائه مشخصات فنی و برگه آنالیز محصول وجود دارد.",
  },
  {
    question: "ارسال محصولات به چه شهرهایی انجام می‌شود؟",
    answer:
      "امکان هماهنگی ارسال محصولات به شهرهای مختلف کشور بر اساس مقدار سفارش و شرایط حمل وجود دارد.",
  },
];

export default function ProductsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    "سلام، برای استعلام قیمت محصولات شیمی گستر سولفات پیام می‌دهم.",
  )}`;

  return (
    <main className="overflow-hidden bg-[#fcfdfe] text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-[#c27829]/25 blur-3xl" />
          <div className="absolute bottom-[-14rem] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:34px_34px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 md:pt-32 lg:grid-cols-12 lg:px-10 lg:pb-24">
          <div className="lg:col-span-7">
            <h1 className="max-w-4xl text-3xl font-black leading-[1.45] md:text-5xl md:leading-[1.35] lg:text-6xl">
              خرید و استعلام قیمت
              <span className="text-[#f0b56d]"> سولفات مس </span>و مواد شیمیایی
              صنعتی
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 md:text-lg md:leading-9">
              شیمی گستر سولفات تأمین‌کننده محصولات سولفاته، نهاده‌های کشاورزی و
              مواد اولیه شیمیایی برای خریداران عمده و تولیدکنندگان است.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#categories"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-7 text-sm font-black text-white shadow-xl transition-all hover:bg-[#a86522]"
              >
                مشاهده دسته‌بندی‌ها
                <ArrowLeft size={18} />
              </Link>
              <a
                href={whatsappUrl}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 text-sm font-black text-white backdrop-blur transition-all hover:bg-white/10"
              >
                استعلام سریع در واتساپ
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[2rem] bg-white p-6 text-slate-900">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white">
                  <Beaker size={28} />
                </div>
                <h2 className="text-2xl font-black text-[#0a1a2f]">
                  سولفات مس
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  مناسب برای تولیدکنندگان کود، صنایع آبکاری و کشاورزی حرفه‌ای با
                  تضمین آنالیز و تأمین پایدار.
                </p>
                <Link
                  href="/products/copper-sulfate"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0a1a2f] px-5 py-4 text-sm font-black text-white transition-all hover:bg-[#132b49]"
                >
                  مشاهده محصول شاخص
                  <ArrowLeft size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        id="categories"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-10"
      >
        <h2 className="mb-12 text-2xl font-black text-[#0a1a2f] md:text-4xl">
          دسته‌بندی محصولات
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-[2rem] border border-slate-100 ${item.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`}
              />
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor}`}
              >
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-[#0a1a2f]">
                {item.title}
              </h3>
              <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#0a1a2f] transition-all group-hover:text-[#c27829]">
                مشاهده و استعلام
                <ArrowLeft size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Items */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1a2f] text-white">
                <item.icon size={24} />
              </div>
              <h3 className="mb-3 font-black">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-black text-[#0a1a2f]">سوالات پرتکرار</h2>
          <p className="mt-4 text-slate-500">
            پاسخ برخی از سوالات متداول مشتریان در مورد نحوه خرید و تأمین محصولات
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-[#c27829]/30 shadow-[0_12px_30px_rgba(194,120,41,0.10)]"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right sm:px-6"
                >
                  <span
                    className={`text-sm font-black leading-7 sm:text-base ${
                      isOpen ? "text-[#0a1a2f]" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#c27829] text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-5 pb-5 pt-0 sm:px-6">
                      <p className="pt-4 text-sm leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#07111f] p-10 text-center text-white shadow-2xl md:p-16">
          <div className="relative z-10">
            <h2 className="mb-6 text-2xl font-black md:text-4xl">
              آماده دریافت استعلام قیمت هستید؟
            </h2>
            <p className="mx-auto mb-10 max-w-2xl leading-8 text-slate-300">
              واحد فروش شیمی گستر سولفات آماده پاسخگویی به درخواست‌های شما و
              اعلام شرایط تأمین بار است.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-10 font-black text-white transition-all hover:bg-[#a86522]"
              >
                <MessageCircle size={20} />
                استعلام در واتساپ
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-10 font-black text-white transition-all hover:bg-white/20"
              >
                <Phone size={20} />
                تماس مستقیم
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
