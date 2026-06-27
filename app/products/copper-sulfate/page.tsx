"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  MessageCircle,
  Phone,
  FlaskConical,
  Truck,
  PackageCheck,
  Factory,
} from "lucide-react";

const analysisData = [
  { param: "فرمول شیمیایی", value: "CuSO₄·5H₂O" },
  { param: "خلوص", value: "۹۹% - ۹۸%" },
  { param: "مس", value: "۲۵.۲% - ۲۴.۵%" },
  { param: "آهن", value: "کمتر از ۰.۱%" },
  { param: "نامحلول در آب", value: "کمتر از ۰.۰۵%" },
  { param: "ظاهر", value: "کریستال آبی شفاف" },
];

const faqs = [
  {
    question: "سولفات مس پنج آبه چیست و چه کاربردی دارد؟",
    answer:
      "سولفات مس پنج آبه یک ترکیب معدنی آبی‌رنگ است که به دلیل حلالیت بالا و حضور عنصر مس، در صنایع کشاورزی برای تولید کود، در آبکاری فلزات و در صنایع شیمیایی برای تولید مواد واسطه استفاده می‌شود.",
  },
  {
    question: "قیمت روز سولفات مس چگونه تعیین می‌شود؟",
    answer:
      "قیمت این محصول بر اساس خلوص، اندازه ذرات، نوع بسته‌بندی، مقدار سفارش و هزینه حمل‌ونقل متغیر است. برای دریافت قیمت دقیق روز، استعلام مستقیم از واحد فروش بهترین راه است.",
  },
  {
    question: "آیا امکان تأمین سولفات مس در حجم بالا وجود دارد؟",
    answer:
      "بله، شیمی گستر سولفات توانایی تأمین سفارش‌های عمده برای واحدهای تولیدی، کارخانجات و توزیع‌کنندگان را در بسته‌بندی‌های کیسه‌ای و جامبوبگ دارد.",
  },
  {
    question: "شرایط ارسال بار به شهرستان‌ها چگونه است؟",
    answer:
      "پس از نهایی شدن سفارش، هماهنگی‌های لازم با باربری‌های معتبر انجام می‌شود و بار به سراسر ایران ارسال خواهد شد. هزینه حمل با توجه به مقصد و وزن بار محاسبه می‌گردد.",
  },
];

const features = [
  {
    title: "ارسال سریع",
    desc: "هماهنگی فوری باربری برای ارسال به سراسر ایران",
    icon: Truck,
  },
  {
    title: "ضمانت کیفیت",
    desc: "تأمین مستقیم همراه با مشخصات فنی قابل استناد",
    icon: Factory,
  },
  {
    title: "بسته‌بندی ایمن",
    desc: "عرضه در کیسه‌های مقاوم و مناسب حمل صنعتی",
    icon: PackageCheck,
  },
];

export default function CopperSulfatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const phoneNumber = "09123063576";
  const whatsappUrl = `https://wa.me/989120909323?text=${encodeURIComponent(
    "سلام، برای استعلام قیمت سولفات مس پنج آبه پیام می‌دهم.",
  )}`;

  return (
    <main className="overflow-x-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-[#07111f] pb-12 pt-24">
        <Image
          src="/images/hero-2.jpg"
          alt="کریستال‌های آبی سولفات مس"
          fill
          priority
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/35 to-[#07111f]/65" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl md:leading-[1.2]">
              تأمین و فروش <br />
              <span className="text-[#f0b56d]">سولفات مس پنج آبه</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              تولید و تأمین سولفات مس با کیفیت تضمینی برای مصارف کشاورزی، تولید
              کود، آبکاری و صنایع معدنی با امکان ارسال سریع به سراسر کشور.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-2xl bg-[#c27829] px-8 font-black text-white transition hover:bg-[#a86522]"
              >
                استعلام قیمت واتساپ
                <MessageCircle size={20} />
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex h-14 items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 font-black text-white backdrop-blur-md transition hover:bg-white/20"
              >
                تماس مستقیم
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
              <h2 className="mb-5 border-b border-slate-100 pb-4 text-xl font-black text-[#0a1a2f]">
                مشخصات تحویل
              </h2>

              <ul className="space-y-4">
                <li className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-bold text-slate-500">حالت فیزیکی:</span>
                  <span className="text-left font-black text-slate-800">
                    کریستال و پودری
                  </span>
                </li>
                <li className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-bold text-slate-500">بسته‌بندی:</span>
                  <span className="text-left font-black text-slate-800">
                    کیسه ۲۵ کیلویی / جامبوبگ
                  </span>
                </li>
                <li className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-bold text-slate-500">گرید محصول:</span>
                  <span className="text-left font-black text-slate-800">
                    کشاورزی و صنعتی
                  </span>
                </li>
              </ul>

              <div className="mt-7 rounded-2xl border border-orange-100 bg-orange-50 p-4">
                <p className="text-xs font-bold leading-6 text-orange-800">
                  جهت دریافت آنالیز دقیق محموله فعلی و هماهنگی ارسال، لطفاً با
                  واحد فروش تماس بگیرید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-10 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white">
              <FlaskConical size={28} />
            </div>

            <h2 className="text-2xl font-black text-[#0a1a2f] sm:text-3xl">
              آنالیز فنی محصول
            </h2>

            <p className="mt-4 max-w-md text-sm leading-8 text-slate-600 sm:text-base">
              مشخصات زیر به‌صورت عمومی برای این محصول ارائه شده‌اند. برای دریافت
              آنالیز دقیق محموله روز و تأیید نهایی مشخصات، با واحد فروش در تماس
              باشید.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-black text-slate-800 sm:text-base">
                    پارامترهای آزمایشگاهی
                  </h3>
                  <span className="rounded-full bg-[#c27829]/10 px-3 py-1 text-[11px] font-bold text-[#c27829] sm:text-xs">
                    بروزرسانی بر اساس محموله
                  </span>
                </div>
              </div>

              {/* Mobile */}
              <div className="divide-y divide-slate-100 sm:hidden">
                {analysisData.map((row, idx) => (
                  <div key={idx} className="px-4 py-4">
                    <div className="text-xs font-bold text-slate-500">
                      {row.param}
                    </div>
                    <div className="mt-2 text-sm font-black text-[#0a1a2f]">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop */}
              <div className="hidden sm:block">
                <table className="w-full border-collapse text-right">
                  <thead>
                    <tr className="border-b border-slate-200 bg-white">
                      <th className="px-6 py-4 text-sm font-black text-slate-700">
                        پارامتر
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-black text-slate-700">
                        مقدار
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysisData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-100 last:border-b-0"
                      >
                        <td className="px-6 py-4 text-sm font-bold text-slate-700">
                          {row.param}
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-black text-[#c27829]">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 lg:px-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#c27829]">
                <item.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-black text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-black text-[#0a1a2f] sm:text-3xl">
            سوالات متداول
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            پاسخ برخی از سوالات رایج مشتریان درباره خرید، مشخصات فنی و نحوه
            ارسال سولفات مس.
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
                        ? "bg-[#c27829] text-white rotate-180"
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

      {/* CTA */}
      <section className="bg-[#0a1a2f] px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-2xl font-black text-white md:text-4xl">
            آماده ثبت سفارش هستید؟
          </h2>
          <p className="mb-10 leading-8 text-slate-400">
            جهت دریافت مشاوره فنی و استعلام قیمت روز سولفات مس پنج آبه، با
            کارشناسان ما در تماس باشید.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-10 font-black text-white transition hover:bg-[#a86522]"
            >
              <Phone size={20} />
              تماس با واحد فروش
            </a>

            <Link
              href="/products"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-10 font-black text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={20} />
              سایر محصولات
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
