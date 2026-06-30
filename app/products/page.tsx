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
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const phoneNumber = "09123063576";
const whatsappPhone = "989120909323";

const productCategories = [
  {
    title: "سولفات مس",
    href: "/products/copper-sulfate",
    description:
      "سولفات مس در سه فرم عرضه (کریستالی، پودری و شکری) برای مصارف کشاورزی، صنعتی، آبکاری، دامپروری و تولیدی با تضمین آنالیز آزمایشگاهی.",
    icon: Beaker,
    badge: "محصول شاخص تولیدی",
    tags: ["کریستالی", "پودری", "شکری", "صنعتی و کشاورزی"],
    accent: "from-[#c27829] to-[#e09848]",
    bg: "bg-gradient-to-b from-amber-50/50 to-white",
    iconBg: "bg-[#c27829]/10",
    iconColor: "text-[#c27829]",
    borderColor: "hover:border-[#c27829]/30",
  },
  {
    title: "سایر سولفات‌ها",
    href: "/products/other-sulfates",
    description:
      "تأمین سولفات‌های پرمصرف فلزی و معدنی برای صنایع مادر، بخش کشاورزی، خوراک دام و طیور و فرمولاسیون‌های شیمیایی تخصصی.",
    icon: Layers,
    badge: "تأمین متنوع",
    tags: ["روی", "آهن", "منگنز", "منیزیم"],
    accent: "from-slate-600 to-slate-900",
    bg: "bg-gradient-to-b from-slate-50 to-white",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    borderColor: "hover:border-slate-300",
  },
  {
    title: "کود و نهاده‌های کشاورزی",
    href: "/products/agro-chemicals",
    description:
      "محصولات ویژه برای تغذیه بهینه گیاه، اصلاح کمبود عناصر خاکی، بهبود کیفیت نهایی محصول و پشتیبانی از کشاورزی مدرن و صنعتی.",
    icon: Leaf,
    badge: "تغذیه و کشاورزی",
    tags: ["ریز‌مغذی‌ها", "اصلاح خاک", "کودهای ماکرو", "افزایش تناژ"],
    accent: "from-emerald-600 to-teal-700",
    bg: "bg-gradient-to-b from-emerald-50/30 to-white",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    borderColor: "hover:border-emerald-500/20",
  },
  {
    title: "مواد اولیه شیمیایی",
    href: "/products/raw-materials",
    description:
      "مواد اولیه باکیفیت و تناژ بالا مورد نیاز صنایع پایین‌دستی، کارخانجات تولیدی، واحدهای فرآیندی و مجموعه‌های بازرگانی داخلی و صادراتی.",
    icon: Factory,
    badge: "گرید صنعتی",
    tags: ["مواد واسطه", "فرآیندهای شیمیایی", "تأمین مداوم", "صنایع نفت و گاز"],
    accent: "from-blue-600 to-indigo-950",
    bg: "bg-gradient-to-b from-blue-50/30 to-white",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    borderColor: "hover:border-blue-500/20",
  },
];

const trustItems = [
  {
    title: "تأمین عمده و مستمر",
    description: "تضمین زنجیره تأمین بدون وقفه متناسب با حجم مصرف کارخانه‌ها و خریداران عمده.",
    icon: Truck,
  },
  {
    title: "ارائه برگه آنالیز دقیق",
    description: "تضمین تطابق بار با آنالیز ارائه‌شده و امکان راستی‌آزمایی آزمایشگاهی قبل از تخلیه بار.",
    icon: ClipboardCheck,
  },
  {
    title: "بسته‌بندی‌های استاندارد",
    description: "امکان عرضه در کیسه‌های دو لایه ۲۵ کیلویی مقاوم یا جامبوبگ‌های ۱ تنی صادراتی.",
    icon: PackageCheck,
  },
  {
    title: "مشاوره فنی پیش از خرید",
    description: "ارائه مشاوره تخصصی توسط کارشناسان جهت انتخاب مناسب‌ترین گرید و فرم فیزیکی محصول.",
    icon: Headphones,
  },
];

const processSteps = [
  {
    step: "۰۱",
    title: "ثبت درخواست اولیه",
    description: "مشخصات محصول درخواستی، مقدار مورد نیاز و شهر مقصد را با کارشناسان ما مطرح کنید.",
  },
  {
    step: "۰۲",
    title: "صدور پیش‌فاکتور و تأیید فنی",
    description: "آنالیز محصول به همراه بهترین قیمت روز و شرایط لجستیک خدمت شما ارسال می‌شود.",
  },
  {
    step: "۰۳",
    title: "ارسال و تحویل محموله",
    description: "پس از نهایی شدن فرآیند مالی، بارگیری مستقیم از درب کارخانه یا انبار تهران انجام می‌گیرد.",
  },
];

const faqs = [
  {
    question: "حداقل میزان سفارش خرید محصولات چقدر است؟",
    answer:
      "با توجه به ماهیت تولیدی شیمی گستر سولفات، اولویت تأمین با سفارش‌های عمده و تناژ صنعتی است. برای اطلاع از حداقل مقدار سفارش هر محصول می‌توانید با واحد فروش تماس بگیرید.",
  },
  {
    question: "چگونه می‌توان قیمت روز محصولات را دریافت کرد؟",
    answer:
      "به دلیل وابستگی قیمت مواد معدنی به بورس کالا و نوسانات بازار آزاد، قیمت‌ها به‌صورت روزانه و لحظه‌ای از طریق تماس تلفنی یا ارتباط در واتساپ اعلام می‌گردد.",
  },
  {
    question: "آیا نمونه جهت تست آزمایشگاهی ارائه می‌شود؟",
    answer:
      "بله، پس از تأیید درخواست اولیه توسط واحد فروش، نمونه فیزیکی جهت تطابق مشخصات آزمایشگاهی برای شما ارسال خواهد شد.",
  },
  {
    question: "نحوه ارسال سفارش‌ها به چه صورت است؟",
    answer:
      "ارسال سفارشات سراسر کشور با هماهنگی باربری‌های معتبر، با صدور بارنامه رسمی و بیمه حمل‌ونقل انجام می‌شود.",
  },
];

export default function ProductsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    "سلام، برای استعلام قیمت محصولات شیمی گستر سولفات پیام می‌دهم.",
  )}`;

  return (
    <main className="overflow-hidden bg-[#fafbfc] text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#07111f] text-white py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#c27829]/15 blur-[120px]" />
          <div className="absolute bottom-[-14rem] left-[-12rem] h-[35rem] w-[35rem] rounded-full bg-blue-600/10 blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-300 border border-blue-500/20">
              <Sparkles size={14} className="text-[#f0b56d]" />
              مرکز تخصصی تأمین ترکیبات معدنی و سولفات‌ها
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.3] md:text-5xl md:leading-[1.35] lg:text-[3.5rem]">
              تأمین پایدار و عمده
              <span className="block text-[#f0b56d] mt-2">سولفات مس و مواد شیمیایی</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 md:text-lg md:leading-9">
              شیمی گستر سولفات به عنوان بازوی تأمین کارخانجات، تولیدکنندگان بخش‌های صنعتی و توزیع‌کنندگان نهاده‌های کشاورزی، کیفیت و خلوص را تضمین می‌کند.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#categories"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-8 text-sm font-black text-white shadow-lg shadow-[#c27829]/20 transition-all hover:bg-[#a86522] hover:scale-[1.02] active:scale-95"
              >
                کاتالوگ و دسته‌بندی‌ها
                <ArrowLeft size={18} />
              </Link>
              <a
                href={whatsappUrl}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 text-sm font-black text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                استعلام قیمت از واتساپ
                <MessageCircle size={18} className="text-emerald-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -top-3 -right-3 rounded-xl bg-gradient-to-r from-amber-500 to-[#c27829] px-3.5 py-1 text-xs font-black text-[#07111f]">
                محصول ویژه
              </div>
              <div className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-inner">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white">
                  <Beaker size={28} className="text-[#f0b56d]" />
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-[#0a1a2f]">سولفات مس ۵ آبه</h2>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">خلوص ۹۹-۹۸٪</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  عرضه همزمان به صورت <span className="font-bold text-slate-800">کریستالی، پودری و شکری</span>. مناسب کشاورزی، خوراک دام، آبکاری و تولید کودهای مایع.
                </p>
                <Link
                  href="/products/copper-sulfate"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0a1a2f] px-5 py-4 text-sm font-black text-white transition-all hover:bg-[#132b49] hover:shadow-lg"
                >
                  توضیحات و مشخصات فنی
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
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10"
      >
        <div className="mb-12 text-center md:text-right">
          <span className="text-sm font-bold text-[#c27829] tracking-wider uppercase">محصولات تولیدی و تأمینی</span>
          <h2 className="mt-2 text-3xl font-black text-[#0a1a2f] md:text-4xl">
            دسته‌بندی تخصصی محصولات
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-2xl">
            برای اطلاعات بیشتر، مشاهده آنالیزهای فنی و جزئیات بسته‌بندی، دسته مورد نظر را انتخاب نمایید.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/60 ${item.bg} p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/80 ${item.borderColor}`}
            >
              <div>
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`} />
                <div className="flex items-center justify-between">
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} transition-transform group-hover:scale-110`}>
                    <item.icon size={26} />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 bg-slate-100/80 px-2 py-1 rounded-md mb-6">{item.badge}</span>
                </div>
                <h3 className="text-xl font-black text-[#0a1a2f] group-hover:text-[#c27829] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500 line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-bold text-slate-600 bg-white border border-slate-100 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-black text-[#0a1a2f] group-hover:translate-x-[-4px] transition-transform">
                  مشاهده و استعلام قیمت
                  <ArrowLeft size={16} className="text-[#c27829]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Items / Why Us */}
      <section className="bg-slate-50/70 border-y border-slate-100 px-4 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black text-[#0a1a2f] md:text-3xl">فرآیند تأمین مطمئن و تضمین‌شده</h2>
            <p className="mt-3 text-slate-500 text-sm">چرا صنایع و کشاورزان با شیمی گستر سولفات همکاری می‌کنند؟</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0a1a2f]/5 text-[#c27829]">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="mb-2 font-black text-slate-900 text-base">{item.title}</h3>
                  <p className="text-xs leading-6 text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Process Steps Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black text-[#0a1a2f] md:text-3xl">مراحل ساده خرید و ثبت سفارش</h2>
          <p className="mt-3 text-slate-500 text-sm">از تماس اولیه تا تحویل محموله در محل شما</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm overflow-hidden group hover:border-[#c27829]/20 transition-all">
              <h3 className="text-lg font-black text-slate-900 relative z-10 mb-4">{step.title}</h3>
              <p className="text-sm leading-7 text-slate-500 relative z-10">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-black text-[#0a1a2f]">سوالات پرتکرار مشتریان</h2>
          <p className="mt-4 text-slate-500 text-sm">
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
                    ? "border-[#c27829]/30 shadow-[0_12px_30px_rgba(194,120,41,0.06)]"
                    : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span
                    className={`text-sm font-black leading-7 sm:text-base ${
                      isOpen ? "text-[#c27829]" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#c27829] text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-50 px-6 pb-5 pt-0">
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
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[#c27829] blur-[100px]" />
            <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-blue-500 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-black md:text-4xl">
              آماده دریافت استعلام قیمت هستید؟
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-sm md:text-base leading-8 text-slate-300">
              جهت دریافت قیمت‌های نهایی، مشاوره فنی و اطلاع از موجودی لحظه‌ای انبار با کارشناسان فروش در ارتباط باشید.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-10 font-black text-white transition-all hover:bg-[#a86522] hover:scale-105 active:scale-95 shadow-lg shadow-[#c27829]/20"
              >
                <MessageCircle size={20} />
                استعلام در واتساپ
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-10 font-black text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
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
