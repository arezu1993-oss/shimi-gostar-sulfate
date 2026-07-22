"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  Factory,
  Globe2,
  Handshake,
  Headphones,
  MessageCircle,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

const partnershipModels = [
  {
    title: "تأمین صنعتی",
    description: "تأمین مستمر برای خطوط تولید",
    icon: Factory,
    accent: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-blue-600",
  },
  {
    title: "فروش و توزیع",
    description: "توسعه شبکه فروش در بازار هدف",
    icon: Store,
    accent: "from-[#c27829]/20 to-amber-500/5",
    iconColor: "text-[#c27829]",
  },
  {
    title: "تجارت و صادرات",
    description: "ورود به بازارهای منطقه‌ای",
    icon: Globe2,
    accent: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-600",
  },
  {
    title: "لجستیک تخصصی",
    description: "ارسال مطمئن محموله‌های عمده",
    icon: Truck,
    accent: "from-violet-500/20 to-purple-500/5",
    iconColor: "text-violet-600",
  },
];

const advantages = [
  {
    title: "تأمین پایدار",
    description: "برنامه‌ریزی متناسب با نیاز مجموعه",
    icon: PackageCheck,
  },
  {
    title: "کیفیت قابل اتکا",
    description: "کنترل مستمر کیفیت محصولات",
    icon: ShieldCheck,
  },
  {
    title: "پشتیبانی مستقیم",
    description: "ارتباط سریع با تیم فروش",
    icon: Headphones,
  },
  {
    title: "رشد مشترک",
    description: "تمرکز بر همکاری بلندمدت",
    icon: TrendingUp,
  },
];

const steps = [
  {
    number: "۱",
    title: "معرفی مجموعه",
    description: "اطلاعات کسب‌وکار ارسال می‌شود.",
  },
  {
    number: "۲",
    title: "بررسی فرصت",
    description: "مدل مناسب همکاری بررسی می‌شود.",
  },
  {
    number: "۳",
    title: "توافق تجاری",
    description: "شرایط اجرایی مشخص می‌شود.",
  },
  {
    number: "۴",
    title: "شروع شراکت",
    description: "همکاری طبق توافق آغاز می‌شود.",
  },
];

const cooperationFields = [
  "تولیدکنندگان",
  "بازرگانان",
  "فعالان معدنی",
  "کشاورزان",
  "تأمین‌کنندگان",
  "حمل‌ونقل",
];

const faqs = [
  {
    question: "چه مجموعه‌هایی می‌توانند درخواست همکاری ارسال کنند؟",
    answer:
      "واحدهای صنعتی، تولیدکنندگان، تأمین‌کنندگان، توزیع‌کنندگان، شرکت‌های حمل‌ونقل، بازرگانان و فعالان بازار مواد شیمیایی می‌توانند درخواست همکاری خود را ارسال کنند.",
  },
  {
    question: "برای شروع همکاری چه اطلاعاتی لازم است؟",
    answer:
      "نام مجموعه، راه ارتباطی، حوزه فعالیت، نوع همکاری پیشنهادی و توضیح کوتاهی درباره توانمندی‌ها یا نیازهای همکاری برای بررسی اولیه کافی است.",
  },
  {
    question: "آیا ثبت درخواست به معنی تأیید همکاری است؟",
    answer:
      "خیر. ثبت درخواست صرفاً به معنی دریافت و بررسی پیشنهاد است. پس از بررسی اولیه، در صورت تناسب با نیازها و ظرفیت‌های مجموعه، هماهنگی‌های بعدی انجام می‌شود.",
  },
  {
    question: "آیا امکان همکاری صادراتی وجود دارد؟",
    answer:
      "بله، پیشنهادهای مرتبط با صادرات، بازارهای منطقه‌ای، توسعه فروش بین‌المللی و همکاری‌های تجاری خارج از کشور قابل بررسی هستند.",
  },
];

export default function BusinessPartnersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const phoneNumber = "09123063576";
  const whatsappUrl = `https://wa.me/989120909323?text=${encodeURIComponent(
    "سلام، برای بررسی شرایط شراکت تجاری با شیمی گستر سولفات پیام می‌دهم.",
  )}`;

  return (
    <main
      dir="rtl"
      className="overflow-x-hidden bg-white text-slate-900 selection:bg-[#c27829] selection:text-white"
    >
      {/* Hero */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#06101e] pb-20 pt-20 sm:min-h-[700px] sm:pb-24 sm:pt-24 lg:min-h-[820px] lg:pb-28 lg:pt-28">
        {/* Base gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(194,120,41,0.18),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(59,130,246,0.13),transparent_32%),linear-gradient(135deg,#06101e_0%,#08172a_42%,#030812_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06101e] via-transparent to-[#06101e]/70" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#06101e]/30 via-transparent to-black/20" />

        {/* Decorative glows */}
        <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#c27829]/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px] sm:h-96 sm:w-96 sm:blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)",
          }}
        />

        {/* Abstract lines */}
        <div className="absolute right-[8%] top-24 hidden h-44 w-44 rounded-[2rem] border border-white/10 bg-white/[0.025] rotate-12 lg:block" />
        <div className="absolute left-[8%] bottom-28 hidden h-56 w-56 rounded-full border border-[#c27829]/20 bg-[#c27829]/[0.035] lg:block" />
        <div className="absolute left-[18%] top-24 hidden h-20 w-20 rounded-3xl border border-blue-400/10 bg-blue-400/[0.04] -rotate-12 sm:block" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-10">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-200 backdrop-blur-md sm:mb-7 sm:px-4 sm:py-2 sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c27829] text-white sm:h-7 sm:w-7">
                <Handshake size={14} />
              </span>
              فرصت‌های شراکت تجاری
            </div>

            <h1 className="max-w-4xl text-3xl font-black leading-[1.25] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              یک مسیر مطمئن برای
              <span className="relative mt-1 block w-fit text-[#d99347] sm:mt-2">
                رشد مشترک
                <span className="absolute -bottom-1 right-0 h-0.5 w-2/3 rounded-full bg-gradient-to-l from-[#c27829] to-transparent sm:-bottom-2 sm:h-1" />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-8 sm:text-base sm:leading-8 lg:mt-9 lg:text-lg">
              شراکت با فعالان صنعت، شبکه‌های فروش و مجموعه‌های صادراتی برای
              ساختن یک زنجیره تأمین قوی‌تر.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-row sm:gap-4">
              <Link
                href="/cooperation"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-4 text-sm font-black text-white shadow-2xl shadow-[#c27829]/20 transition hover:-translate-y-1 hover:bg-[#aa6925] sm:h-14 sm:gap-3 sm:px-7 sm:text-base"
              >
                شروع همکاری
                <ArrowUpLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.07] px-4 text-sm font-black text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 sm:h-14 sm:gap-3 sm:px-7 sm:text-base"
              >
                <Phone size={17} />
                مشاوره
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
              {["تأمین مستقیم", "کیفیت", "بلندمدت"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-2.5 py-2 text-[11px] font-bold text-slate-300 sm:border-0 sm:bg-transparent sm:p-0 sm:text-sm sm:text-slate-400"
                >
                  <BadgeCheck size={14} className="text-[#d99347]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#c27829]/25 via-transparent to-blue-500/15 blur-2xl sm:-inset-5 sm:rounded-[3rem]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-7">
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#c27829]/20 blur-3xl" />
              <div className="absolute -bottom-20 right-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative mb-5 flex items-start justify-between sm:mb-7">
                <div>
                  <p className="text-[11px] font-bold text-[#d99347] sm:text-xs">
                    شبکه تجاری
                  </p>
                  <h2 className="mt-1 text-base font-black text-white sm:mt-2 sm:text-xl">
                    فرصت‌های همکاری
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#d99347] sm:h-12 sm:w-12">
                  <BarChart3 size={21} />
                </div>
              </div>

              <div className="relative grid grid-cols-4 gap-2 sm:grid-cols-2 sm:gap-3">
                {[
                  { label: "تأمین", icon: Factory },
                  { label: "توزیع", icon: Store },
                  { label: "صادرات", icon: Globe2 },
                  { label: "لجستیک", icon: Truck },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.05] p-3 text-center transition hover:border-[#c27829]/30 hover:bg-[#c27829]/10 sm:p-4 sm:text-right"
                  >
                    <item.icon
                      size={19}
                      className="mx-auto mb-2 text-[#d99347] transition group-hover:scale-110 sm:mx-0 sm:mb-4"
                    />
                    <p className="text-[11px] font-black text-white sm:text-base">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.08] p-3 sm:mt-5 sm:p-4">
                <span className="relative flex h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
                </span>
                <p className="text-[11px] font-bold leading-5 text-emerald-100 sm:text-xs sm:leading-6">
                  آماده بررسی پیشنهادهای جدید هستیم
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -right-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 shadow-2xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c27829]/10 text-[#c27829]">
                <Users size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500">نوع همکاری</p>
                <p className="mt-1 text-sm font-black text-[#0a1a2f]">
                  سازمانی و عمده
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="relative z-20 -mt-10 px-4 sm:-mt-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
            {partnershipModels.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.35)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_-28px_rgba(15,23,42,0.4)] sm:rounded-[2rem] sm:p-7"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${item.accent} opacity-0 transition duration-500 group-hover:opacity-100 sm:h-28`}
                />

                <div className="relative">
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 ${item.iconColor} transition duration-500 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl`}
                  >
                    <item.icon size={21} />
                  </div>

                  <h2 className="text-sm font-black leading-6 text-[#0a1a2f] sm:text-xl">
                    {item.title}
                  </h2>

                  <p className="mt-1.5 text-[11px] leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-3 hidden items-center gap-2 text-xs font-black text-slate-400 transition group-hover:text-[#c27829] sm:mt-6 sm:flex">
                    مشاهده فرصت
                    <ArrowLeft
                      size={15}
                      className="transition group-hover:-translate-x-1"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-4 py-14 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#c27829]/10 px-3 py-1.5 text-xs font-black text-[#b46f28] sm:px-4 sm:py-2 sm:text-sm">
                <Sparkles size={15} />
                ارزش همکاری
              </span>

              <h2 className="mt-4 text-2xl font-black leading-[1.35] text-[#0a1a2f] sm:mt-6 sm:text-4xl lg:text-5xl">
                شراکتی فراتر از
                <span className="block text-[#c27829]">خرید و فروش</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                ارتباط حرفه‌ای، تأمین قابل اتکا و تصمیم‌گیری شفاف؛ سه پایه اصلی
                همکاری ما هستند.
              </p>

              <Link
                href="/cooperation"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0a1a2f] sm:mt-8 sm:text-base"
              >
                ثبت پیشنهاد همکاری
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a1a2f] text-white transition group-hover:bg-[#c27829] sm:h-9 sm:w-9">
                  <ArrowLeft size={16} />
                </span>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {advantages.map((item, index) => (
                  <article
                    key={item.title}
                    className={`group rounded-2xl border border-slate-100 p-4 transition duration-300 hover:border-[#c27829]/20 hover:shadow-xl sm:rounded-[2rem] sm:p-6 ${
                      index === 1 || index === 2
                        ? "bg-[#0a1a2f] text-white"
                        : "bg-slate-50"
                    }`}
                  >
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl sm:mb-7 sm:h-12 sm:w-12 sm:rounded-2xl ${
                        index === 1 || index === 2
                          ? "bg-white/10 text-[#d99347]"
                          : "bg-white text-[#c27829] shadow-sm"
                      }`}
                    >
                      <item.icon size={21} />
                    </div>

                    <h3
                      className={`text-sm font-black leading-6 sm:text-lg ${
                        index === 1 || index === 2
                          ? "text-white"
                          : "text-[#0a1a2f]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-1.5 text-[11px] leading-5 sm:mt-2 sm:text-sm sm:leading-7 ${
                        index === 1 || index === 2
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-24">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px] sm:h-80 sm:w-80" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#c27829]/10 blur-[100px] sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-14">
            <span className="text-xs font-black text-[#c27829] sm:text-sm">
              مسیر یک همکاری موفق
            </span>
            <h2 className="mt-2 text-2xl font-black text-[#0a1a2f] sm:mt-3 sm:text-4xl">
              ساده، شفاف و مرحله‌به‌مرحله
            </h2>
          </div>

          <div className="relative grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-9 hidden border-t-2 border-dashed border-slate-200 lg:block" />

            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem] sm:p-7"
              >
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-4 border-slate-50 bg-[#0a1a2f] text-sm font-black text-[#d99347] shadow-lg transition group-hover:bg-[#c27829] group-hover:text-white sm:mb-7 sm:h-[4.5rem] sm:w-[4.5rem] sm:rounded-2xl sm:text-lg">
                  {step.number}
                </div>

                <h3 className="text-sm font-black text-[#0a1a2f] sm:text-lg">
                  {step.title}
                </h3>

                <p className="mt-1.5 text-[11px] leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowLeft
                    size={18}
                    className="absolute left-6 top-8 hidden text-slate-200 lg:block"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Preview */}
      <section className="px-4 py-14 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#0a1a2f] px-5 py-8 shadow-2xl sm:rounded-[2.75rem] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#c27829]/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[110px]" />
            <div className="absolute -bottom-40 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative grid items-center gap-7 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-black text-[#d99347] sm:px-4 sm:py-2 sm:text-xs">
                  <Building2 size={14} />
                  صفحه همکاری با ما
                </span>

                <h2 className="mt-4 text-2xl font-black leading-[1.4] text-white sm:mt-6 sm:text-4xl">
                  تخصص شما می‌تواند بخشی از
                  <span className="text-[#d99347]"> زنجیره ما </span>
                  باشد
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
                  بستری برای معرفی توانمندی‌ها و بررسی فرصت‌های همکاری تخصصی.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap">
                  {cooperationFields.map((field) => (
                    <span
                      key={field}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-[11px] font-bold text-slate-300 sm:gap-2 sm:text-xs"
                    >
                      <Check size={13} className="text-[#d99347]" />
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex lg:col-span-5 lg:justify-end">
                <Link
                  href="/cooperation"
                  className="group flex min-h-20 w-full items-center justify-between rounded-2xl bg-white p-4 shadow-xl transition hover:-translate-y-1 sm:min-h-28 sm:max-w-sm sm:rounded-[1.75rem] sm:p-6"
                >
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 sm:text-xs">
                      پیشنهاد همکاری دارید؟
                    </p>
                    <p className="mt-1 text-base font-black text-[#0a1a2f] sm:mt-2 sm:text-lg">
                      همکاری با ما
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c27829] text-white shadow-lg shadow-[#c27829]/20 transition group-hover:rotate-[-8deg] sm:h-12 sm:w-12 sm:rounded-2xl">
                    <ArrowUpLeft size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-black text-[#0a1a2f] sm:text-3xl">
            سوالات متداول
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c27829] sm:mt-4 sm:w-20" />
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 sm:rounded-[1.5rem] ${
                  isOpen
                    ? "border-[#c27829]/30 bg-white shadow-xl"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-right sm:px-6 sm:py-5"
                >
                  <span
                    className={`text-sm font-black leading-6 sm:text-base ${
                      isOpen ? "text-[#c27829]" : "text-[#0a1a2f]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#c27829]" : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-50 px-4 pb-4 pt-3 text-xs leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:pt-4 sm:text-sm sm:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#07111f] py-16 text-center sm:py-24">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#c27829]/20 blur-[100px] sm:h-72 sm:w-72 sm:blur-[110px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

        <div className="relative mx-auto max-w-3xl px-4">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/[0.06] text-[#d99347] backdrop-blur sm:mb-6 sm:h-16 sm:w-16 sm:rounded-[1.4rem]">
            <Handshake size={27} />
          </div>

          <h2 className="text-2xl font-black text-white sm:text-4xl md:text-5xl">
            آماده یک همکاری ماندگاریم
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
            برای بررسی فرصت‌های شراکت با تیم ما در ارتباط باشید.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-4 text-sm font-black text-white shadow-xl shadow-[#c27829]/20 transition hover:-translate-y-1 hover:bg-[#aa6925] sm:h-14 sm:gap-3 sm:px-8 sm:text-base"
            >
              <MessageCircle size={18} />
              واتساپ
            </a>

            <Link
              href="/cooperation"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-4 text-sm font-black text-white transition hover:bg-white/10 sm:h-14 sm:gap-3 sm:px-8 sm:text-base"
            >
              ارسال پیشنهاد
              <Send size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
