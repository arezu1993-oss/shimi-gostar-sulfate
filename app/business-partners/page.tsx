"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  ChevronDown,
  Factory,
  Globe2,
  Handshake,
  MessageCircle,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
} from "lucide-react";

const partnerTypes = [
  {
    title: "تأمین‌کنندگان مواد اولیه",
    description:
      "همکاری با تأمین‌کنندگان معتبر برای حفظ کیفیت پایدار، تأمین منظم و توسعه زنجیره تأمین قابل اعتماد.",
    icon: Factory,
  },
  {
    title: "توزیع‌کنندگان و نمایندگان فروش",
    description:
      "گسترش شبکه فروش داخلی از طریق همکاری با مجموعه‌های توانمند، متعهد و آشنا با بازارهای صنعتی.",
    icon: Truck,
  },
  {
    title: "مشتریان صنعتی و تولیدی",
    description:
      "ایجاد همکاری بلندمدت با صنایع مصرف‌کننده بر پایه کیفیت محصول، تحویل منظم و پاسخ‌گویی تخصصی.",
    icon: Building2,
  },
  {
    title: "شرکای صادراتی",
    description:
      "توسعه روابط تجاری منطقه‌ای و بین‌المللی با هدف حضور پایدارتر در بازارهای صادراتی و افزایش ظرفیت همکاری.",
    icon: Globe2,
  },
];

const stats = [
  { value: "کیفیت", label: "محور اصلی همکاری" },
  { value: "پایداری", label: "در تأمین و ارتباطات" },
  { value: "اعتماد", label: "پایه روابط تجاری" },
];

const processSteps = [
  {
    title: "بررسی اولیه درخواست",
    description:
      "اطلاعات ارسال‌شده توسط متقاضی همکاری بررسی می‌شود تا نوع همکاری و ظرفیت‌های مشترک مشخص شود.",
  },
  {
    title: "ارزیابی ظرفیت همکاری",
    description:
      "نیازها، توانمندی‌ها، بازار هدف و شرایط همکاری از نظر تجاری و اجرایی مورد ارزیابی قرار می‌گیرد.",
  },
  {
    title: "تعریف مسیر همکاری",
    description:
      "در صورت هم‌راستایی، چارچوب همکاری، نحوه ارتباط، شرایط تأمین یا فروش و مسیر پیگیری مشخص می‌شود.",
  },
];

const values = [
  "تعهد به کیفیت و ثبات محصول",
  "شفافیت در ارتباطات و مذاکرات",
  "تحویل منظم و مسئولانه",
  "نگاه بلندمدت به همکاری",
  "پاسخ‌گویی حرفه‌ای به شرکا",
  "رشد مشترک و ارزش‌آفرینی پایدار",
];

const faqs = [
  {
    question: "چه مجموعه‌هایی می‌توانند درخواست همکاری ثبت کنند؟",
    answer:
      "تأمین‌کنندگان مواد اولیه، توزیع‌کنندگان، نمایندگان فروش، مشتریان صنعتی، تولیدکنندگان مصرف‌کننده محصولات شیمیایی و فعالان حوزه صادرات می‌توانند درخواست همکاری خود را از طریق فرم همکاری ارسال کنند.",
  },
  {
    question: "بعد از ثبت درخواست همکاری چه اتفاقی می‌افتد؟",
    answer:
      "اطلاعات ثبت‌شده توسط تیم مربوطه بررسی می‌شود. در صورت هم‌خوانی نوع همکاری با ظرفیت‌های شرکت، کارشناسان شیمی گستر سولفات برای تکمیل اطلاعات و ادامه مذاکرات با شما تماس می‌گیرند.",
  },
  {
    question: "آیا امکان همکاری بلندمدت و تأمین منظم وجود دارد؟",
    answer:
      "بله، یکی از اهداف اصلی شیمی گستر سولفات ایجاد همکاری‌های پایدار و بلندمدت است. در همکاری‌های تأییدشده، امکان برنامه‌ریزی برای تأمین منظم، فروش عمده و توسعه بازار مشترک وجود دارد.",
  },
  {
    question: "برای همکاری صادراتی چه اطلاعاتی لازم است؟",
    answer:
      "برای همکاری صادراتی بهتر است اطلاعاتی مانند کشور یا بازار هدف، نوع محصول مورد نظر، حجم تقریبی سفارش، شرایط حمل، سوابق فعالیت و اطلاعات تماس دقیق در فرم همکاری ثبت شود.",
  },
];

export default function BusinessPartnersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const phoneNumber = "09123063576";
  const whatsappUrl = `https://wa.me/989120909323?text=${encodeURIComponent(
    "سلام، برای ثبت یا پیگیری درخواست همکاری با شیمی گستر سولفات پیام می‌دهم.",
  )}`;

  return (
    <main dir="rtl" className="overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#07111f] pb-16 pt-28 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(194,120,41,0.45),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_35%)]" />
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[#c27829]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c27829]/30 bg-[#c27829]/10 px-4 py-2 text-sm font-bold text-[#f3c58d]">
              <Handshake size={16} />
              شبکه‌ای از همکاری‌های پایدار و ارزش‌آفرین
            </span>

            <h1 className="text-4xl font-black leading-tight md:text-6xl md:leading-[1.2]">
              شرکای تجاری
              <span className="block text-[#c27829]">شیمی گستر سولفات</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-200">
              ما همکاری تجاری را فقط یک ارتباط کوتاه‌مدت نمی‌دانیم؛ هدف ما ساختن
              روابط حرفه‌ای، شفاف و بلندمدت با تأمین‌کنندگان، توزیع‌کنندگان،
              مشتریان صنعتی و شرکای صادراتی است.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/partnership"
                className="inline-flex h-14 items-center gap-2 rounded-2xl bg-[#c27829] px-8 font-black text-white shadow-xl shadow-[#c27829]/20 transition hover:bg-[#a86522]"
              >
                ثبت درخواست همکاری
                <ArrowLeft size={20} />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 font-black text-white backdrop-blur-md transition hover:bg-white/20"
              >
                پیام در واتساپ
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-white text-[#c27829] shadow-xl">
                <Network size={32} />
              </div>

              <h2 className="text-2xl font-black text-white">
                همکاری هدفمند با فعالان صنعت
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                از تأمین مواد اولیه تا توسعه فروش و صادرات، ما به دنبال شرکایی
                هستیم که کیفیت، تعهد و نگاه بلندمدت را ارزش اصلی همکاری بدانند.
              </p>

              <div className="mt-8 space-y-4">
                {stats.map((item) => (
                  <div
                    key={item.value}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-4"
                  >
                    <span className="font-black text-white">{item.value}</span>
                    <span className="text-sm font-bold text-slate-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#c27829]/20 bg-[#c27829]/10 p-4">
                <p className="text-xs font-bold leading-6 text-[#f3c58d]">
                  بررسی درخواست‌ها با تمرکز بر ظرفیت همکاری، اعتبار تجاری و
                  امکان ایجاد رابطه پایدار انجام می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-10 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#c27829]">
                  <Sparkles size={26} />
                </div>
                <h3 className="text-2xl font-black text-[#0a1a2f]">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm font-bold text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-flex rounded-full bg-[#c27829]/10 px-4 py-2 text-sm font-bold text-[#c27829]">
            ظرفیت‌های همکاری
          </span>
          <h2 className="text-3xl font-black text-[#0a1a2f] lg:text-4xl">
            حوزه‌های اصلی شراکت تجاری
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            شیمی گستر سولفات آماده توسعه همکاری با مجموعه‌هایی است که در زنجیره
            تأمین، توزیع، مصرف صنعتی یا توسعه بازار نقش مؤثر دارند.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {partnerTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#c27829]/30 hover:shadow-xl"
              >
                <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-slate-50 transition group-hover:bg-[#c27829]/10" />

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-[#c27829] transition group-hover:bg-[#c27829] group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="relative text-xl font-black text-[#0a1a2f]">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-sm leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-black text-[#c27829]">
                  مناسب برای همکاری بلندمدت
                  <ArrowLeft size={16} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#0a1a2f] text-[#c27829] shadow-xl">
                <ShieldCheck size={32} />
              </div>

              <h2 className="text-3xl font-black text-[#0a1a2f] lg:text-4xl">
                فرایند بررسی و شروع همکاری
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                برای حفظ کیفیت ارتباطات تجاری، درخواست‌های همکاری به‌صورت
                مرحله‌ای بررسی می‌شوند تا بهترین مسیر برای شروع یک همکاری مؤثر و
                پایدار انتخاب شود.
              </p>

              <div className="mt-8 space-y-4">
                {values.slice(0, 3).map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm font-bold text-slate-700"
                  >
                    <BadgeCheck size={18} className="text-green-600" />
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-7">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c27829] text-lg font-black text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-black text-[#0a1a2f]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm leading-8 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111f] py-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#c27829] blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-500 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c27829]">
              <ShieldCheck size={28} />
            </div>

            <h2 className="text-3xl font-black lg:text-4xl">
              اصول ما در انتخاب شرکای تجاری
            </h2>

            <p className="mt-6 leading-9 text-slate-300">
              ما به همکاری‌هایی علاقه‌مندیم که در آن تعهد، کیفیت، شفافیت و
              مسئولیت‌پذیری در کنار هم قرار بگیرند. انتخاب شریک تجاری برای ما یک
              تصمیم کوتاه‌مدت نیست؛ بلکه شروع یک رابطه حرفه‌ای و قابل اتکاست.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
              >
                <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#c27829]" />
                <span className="text-sm leading-7 text-slate-100">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#c27829]/10 px-4 py-2 text-sm font-bold text-[#c27829]">
            سوالات متداول
          </span>
          <h2 className="text-3xl font-black text-[#0a1a2f]">
            پرسش‌های رایج درباره همکاری
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#c27829]" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[1.5rem] border bg-white transition-all duration-300 ${
                  isOpen ? "border-[#c27829]/30 shadow-xl" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span
                    className={`text-base font-black ${
                      isOpen ? "text-[#c27829]" : "text-[#0a1a2f]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
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
                    <p className="border-t border-slate-50 px-6 pb-6 pt-4 text-sm leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a1a2f] py-20 text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#c27829] blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-500 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300">
            <UsersRound size={16} />
            آماده شروع یک همکاری حرفه‌ای هستید؟
          </div>

          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            درخواست همکاری خود را ثبت کنید
          </h2>

          <p className="mb-10 text-lg leading-8 text-slate-400">
            اگر به عنوان تأمین‌کننده، توزیع‌کننده، مشتری صنعتی یا شریک صادراتی
            تمایل به همکاری با شیمی گستر سولفات دارید، اطلاعات خود را از طریق
            فرم همکاری ارسال کنید.
          </p>

          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/partnership"
              className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-[#c27829] px-12 font-black text-white shadow-lg shadow-[#c27829]/20 transition hover:scale-105 active:scale-95"
            >
              ثبت درخواست همکاری
              <ArrowLeft size={22} />
            </Link>

            <a
              href={`tel:${phoneNumber}`}
              className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-12 font-black text-white transition hover:bg-white/10"
            >
              تماس مستقیم
              <Phone size={22} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
