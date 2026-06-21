"use client"; // برای هندل کردن باز و بسته شدن سوالات متداول

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  MessageCircle,
  Phone,
  FlaskConical,
  CheckCircle2,
  Truck,
  PackageCheck,
  Factory,
} from "lucide-react";

// داده‌های آنالیز
const analysisData = [
  { param: "فرمول شیمیایی", value: "CuSO₄·5H₂O" },
  { param: "خلوص", value: "98% - 99%" },
  { param: "مس", value: "24.5% - 25.2%" },
  { param: "آهن", value: "کمتر از 0.1" },
  { param: "نامحلول در آب", value: "کمتر از 0.05" },
  { param: "ظاهر", value: "کریستال آبی شفاف" },
];

// سوالات متداول
const faqs = [
  {
    question: "سولفات مس پنج آبه چیست و چه کاربردی دارد؟",
    answer:
      "سولفات مس پنج آبه یک ترکیب معدنی آبی‌رنگ است که به دلیل حلالیت بالا و حضور عنصر مس، در صنایع کشاورزی برای تولید کود، در آبکاری فلزات، و در صنایع شیمیایی برای تولید مواد واسطه استفاده می‌شود.",
  },
  {
    question: "قیمت روز سولفات مس چگونه تعیین می‌شود؟",
    answer:
      "قیمت این محصول بر اساس خلوص، اندازه ذرات (کریستال یا پودر)، مقدار سفارش و هزینه‌های حمل‌ونقل متغیر است. برای دریافت قیمت دقیق روز، استعلام مستقیم از واحد فروش الزامی است.",
  },
  {
    question: "آیا امکان تأمین سولفات مس در حجم بالا وجود دارد؟",
    answer:
      "بله، شیمی گستر سولفات توانایی تأمین سفارش‌های عمده برای واحدهای تولیدی، کارخانجات و توزیع‌کنندگان سراسری را در بسته‌بندی‌های کیسه و جامبوبگ دارد.",
  },
  {
    question: "شرایط ارسال بار به شهرستان‌ها چگونه است؟",
    answer:
      "پس از نهایی شدن سفارش، هماهنگی‌های لازم با باربری‌های معتبر انجام شده و بار به سراسر ایران ارسال می‌گردد. هزینه حمل بسته به مقصد و وزن بار متغیر است.",
  },
];

export default function CopperSulfatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const phoneNumber = "09123063576";
  const whatsappUrl = `https://wa.me/989120909323?text=${encodeURIComponent(
    "سلام، برای استعلام قیمت سولفات مس پنج آبه پیام می‌دهم.",
  )}`;

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Section - بهبود یافته برای نمایش بهتر عکس */}
      <section className="relative min-h-[700px] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#07111f]">
        {/* عکس کریستال - با شفافیت بیشتر برای دیده شدن */}
        <Image
          src="/images/hero-2.jpg"
          alt="کریستال‌های آبی سولفات مس"
          fill
          priority
          className="object-cover opacity-50"
        />

        {/* لایه گرادینت ملایم‌تر برای خوانایی متن */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/60" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight md:leading-[1.2]">
              تأمین و فروش <br />
              <span className="text-[#f0b56d]">سولفات مس پنج آبه</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed">
              تولید و تأمین سولفات مس با کیفیت تضمینی جهت مصارف کشاورزی، تولید
              کود، آبکاری و صنایع معدنی. امکان ارسال به سراسر کشور در کوتاه‌ترین
              زمان.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                className="h-14 px-8 rounded-2xl bg-[#c27829] text-white font-black flex items-center gap-2 hover:bg-[#a86522] transition-all"
              >
                استعلام قیمت واتساپ
                <MessageCircle size={20} />
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="h-14 px-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black flex items-center gap-2 hover:bg-white/20 transition-all"
              >
                تماس مستقیم
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* سایدبار اطلاعات سریع - حذف بج‌ها */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl">
              <h2 className="text-xl font-black text-[#0a1a2f] mb-6 pb-4 border-b border-slate-100">
                مشخصات تحویل
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-bold">حالت فیزیکی:</span>
                  <span className="font-black text-slate-800">
                    کریستال و پودری
                  </span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-bold">بسته‌بندی:</span>
                  <span className="font-black text-slate-800">
                    کیسه ۲۵ کیلویی / جامبوبگ
                  </span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-bold">گرید محصول:</span>
                  <span className="font-black text-slate-800">
                    کشاورزی و صنعتی
                  </span>
                </li>
              </ul>
              <div className="mt-8 p-4 rounded-2xl bg-orange-50 border border-orange-100">
                <p className="text-xs leading-6 text-orange-800 font-bold">
                  جهت دریافت آنالیز دقیق محموله فعلی و هماهنگی ارسال، لطفاً با
                  واحد فروش در تماس باشید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش آنالیز فنی - اصلاح رسپانسیو جدول */}
      <section className="py-20 px-4 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3">
            <div className="w-16 h-16 bg-[#0a1a2f] text-white rounded-2xl flex items-center justify-center mb-6">
              <FlaskConical size={32} />
            </div>
            <h2 className="text-3xl font-black text-[#0a1a2f]">
              آنالیز فنی محصول
            </h2>
            <p className="mt-4 text-slate-600 leading-8">
              سولفات مس تولیدی با استانداردهای لازم جهت استفاده در
              فرمولاسیون‌های حساس تهیه شده است.
            </p>
          </div>

          <div className="md:w-2/3 w-full">
            <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-visible-auto">
                {" "}
                {/* اصلاح اسکرول موبایل */}
                <table className="w-full text-right border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#0a1a2f] text-white">
                      <th className="p-5 font-black text-sm">
                        پارامتر آزمایشگاهی
                      </th>
                      <th className="p-5 font-black text-sm text-center">
                        مقدار
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysisData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="p-5 text-sm font-bold border-b border-slate-100">
                          {row.param}
                        </td>
                        <td className="p-5 text-sm font-black text-center border-b border-slate-100 text-[#c27829]">
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

      {/* بخش ویژگی‌ها - جایگزین بج‌های شلوغ */}
      <section className="bg-slate-50 py-20 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "ارسال سریع",
              desc: "هماهنگی فوری باربری برای تمام نقاط ایران",
              icon: Truck,
            },
            {
              title: "ضمانت کیفیت",
              desc: "تأمین مستقیم و ارائه مشخصات فنی دقیق",
              icon: Factory,
            },
            {
              title: "بسته‌بندی ایمن",
              desc: "ارائه در کیسه‌های لمینت شده و مقاوم",
              icon: PackageCheck,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-orange-50 text-[#c27829] rounded-xl flex items-center justify-center mb-5">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-black mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* سوالات متداول آکاردئونی */}
      <section className="py-20 px-4 lg:px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12 text-[#0a1a2f]">
          سوالات متداول
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right transition-colors hover:bg-slate-50"
              >
                <span className="font-black text-slate-800">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#c27829] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-6 pt-0 text-sm leading-8 text-slate-600 border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* فوتر استعلام */}
      <section className="bg-[#0a1a2f] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
            آماده ثبت سفارش هستید؟
          </h2>
          <p className="text-slate-400 mb-10 leading-8">
            جهت دریافت مشاوره فنی و استعلام قیمت روز سولفات مس پنج آبه، با
            کارشناسان ما در تماس باشید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="h-14 px-10 rounded-2xl bg-[#c27829] text-white font-black flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              تماس با واحد فروش
            </a>
            <Link
              href="/products"
              className="h-14 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
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
