"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  ClipboardCheck,
  Headphones,
  MessageCircle,
  PackageCheck,
  Truck,
} from "lucide-react";

const whatsappPhone = "989120909323";

const faqs = [
  {
    question: "شیمی گستر سولفات چه محصولاتی تأمین می‌کند؟",
    answer:
      "شیمی گستر سولفات در زمینه تأمین سولفات مس، سایر سولفات‌های پرمصرف، مواد اولیه شیمیایی و برخی نهاده‌های مورد استفاده در صنایع و کشاورزی فعالیت می‌کند.",
  },
  {
    question: "آیا فروش محصولات به‌صورت عمده انجام می‌شود؟",
    answer:
      "بله، تمرکز اصلی مجموعه بر تأمین عمده و همکاری با کارخانه‌ها، تولیدکنندگان، توزیع‌کنندگان، واحدهای کشاورزی و خریداران حجمی است.",
  },
  {
    question: "برای انتخاب محصول مناسب می‌توان مشاوره گرفت؟",
    answer:
      "بله، اگر نوع محصول، گرید یا مقدار مورد نیازتان مشخص نیست، می‌توانید با واحد فروش و مشاوره تماس بگیرید تا بر اساس کاربرد، محصول مناسب‌تر پیشنهاد شود.",
  },
  {
    question: "برای استعلام قیمت چه اطلاعاتی باید اعلام کنیم؟",
    answer:
      "برای اعلام دقیق‌تر قیمت، بهتر است نام محصول، مقدار مورد نیاز، نوع بسته‌بندی، شهر مقصد و در صورت وجود، مشخصات فنی یا کاربرد مصرف را اعلام کنید.",
  },
  {
    question: "آیا امکان ارسال محصولات به شهرهای مختلف وجود دارد؟",
    answer:
      "بله، ارسال و هماهنگی حمل بار بر اساس مقدار سفارش، نوع محصول، مقصد و شرایط توافق‌شده انجام می‌شود.",
  },
  {
    question: "آیا امکان دریافت مشخصات فنی یا برگه آنالیز وجود دارد؟",
    answer:
      "برای محصولات قابل ارائه، امکان اعلام مشخصات فنی و در صورت نیاز ارائه برگه آنالیز یا اطلاعات تکمیلی محصول وجود دارد.",
  },
];

const highlights = [
  {
    title: "مشاوره قبل از خرید",
    icon: Headphones,
  },
  {
    title: "استعلام قیمت روز",
    icon: ClipboardCheck,
  },
  {
    title: "هماهنگی ارسال",
    icon: Truck,
  },
  {
    title: "بسته‌بندی متناسب",
    icon: PackageCheck,
  },
];

export default function HomeFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    "سلام، برای دریافت مشاوره و استعلام قیمت محصولات شیمی گستر سولفات پیام می‌دهم.",
  )}`;

  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-[#c27829]/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-10rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex rounded-full bg-[#c27829]/10 px-4 py-2 text-xs font-black text-[#c27829]">
              سوالات متداول
            </span>

            <h2 className="mt-5 text-2xl font-black leading-[1.5] text-[#0a1a2f] md:text-4xl md:leading-[1.4]">
              قبل از ثبت سفارش، پاسخ سوالات پرتکرار را ببینید
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-600 md:text-base md:leading-9">
              اگر برای انتخاب محصول، استعلام قیمت، نحوه خرید عمده یا هماهنگی
              ارسال سوال دارید، این بخش به شما کمک می‌کند سریع‌تر تصمیم بگیرید.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-[86px] flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a1a2f] text-white">
                    <item.icon size={20} />
                  </div>
                  <span className="text-xs font-black leading-6 text-slate-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:mx-auto lg:w-fit">
              <a
                href={whatsappUrl}
                className="inline-flex h-13 min-w-[220px] items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 text-sm font-black text-white shadow-lg shadow-[#c27829]/20 transition-all hover:-translate-y-0.5 hover:bg-[#a86522]"
              >
                <MessageCircle size={18} />
                مشاوره و استعلام قیمت
              </a>

              <Link
                href="/products"
                className="inline-flex h-13 min-w-[220px] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-black text-[#0a1a2f] transition-all hover:-translate-y-0.5 hover:border-[#c27829]/40 hover:text-[#c27829]"
              >
                مشاهده محصولات
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                      isOpen
                        ? "border-[#c27829]/30 shadow-[0_18px_45px_rgba(194,120,41,0.10)]"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
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
          </div>
        </div>
      </div>
    </section>
  );
}
