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
  Layers,
  CheckCircle2,
  Info,
} from "lucide-react";

const analysisData = [
  { param: "فرمول شیمیایی", value: "CuSO₄·5H₂O" },
  { param: "خلوص (Purity)", value: "۹۹% - ۹۸%" },
  { param: "محتوای مس (Cu)", value: "۲۵.۲% - ۲۴.۵%" },
  { param: "آهن (Fe)", value: "کمتر از ۰.۱%" },
  { param: "نامحلول در آب", value: "کمتر از ۰.۰۵%" },
  { param: "وضعیت حلالیت", value: "کاملاً محلول در آب" },
];

const variants = [
  {
    title: "سولفات مس کریستالی",
    type: "فرم پایه (Base)",
    usage: "رایج‌ترین شکل مصرف در کشاورزی و صنعت آبکاری",
    desc: "کریستال‌های آبی شفاف با دانه‌بندی استاندارد که برای اکثر فرآیندهای صنعتی و تولید کودهای مایع ایده‌آل است.",
    color: "bg-blue-600",
  },
  {
    title: "سولفات مس پودری",
    type: "فرآوری شده",
    usage: "انحلال سریع در فرآیندهای تولیدی حساس",
    desc: "این فرم با آسیاب کردن کریستال‌ها به دست می‌آید و برای مواردی که سرعت حلالیت در دمای پایین ملاک است، پیشنهاد می‌شود.",
    color: "bg-cyan-500",
  },
  {
    title: "سولفات مس شکری",
    type: "دانه‌بندی خاص",
    usage: "مصرف در صنایع تولید خوراک دام و طیور",
    desc: "دانه‌بندی این محصول بین کریستال و پودر قرار دارد و برای اختلاط یکنواخت در جیره‌های خشک بسیار کاربردی است.",
    color: "bg-[#c27829]",
  },
];

const faqs = [
  {
    question: "آیا ماهیت شیمیایی فرم‌های پودری و کریستالی متفاوت است؟",
    answer:
      "خیر، هر سه فرم (کریستالی، پودری و شکری) از نظر فرمول شیمیایی و درصد خلوص مس کاملاً یکسان هستند. تفاوت آن‌ها صرفاً در اندازه ذرات (Mesh Size) و سرعت انحلال آن‌هاست که بنا بر نیاز مشتری فرآوری می‌شود.",
  },
  {
    question: "کدام فرم برای کشاورزی مناسب‌تر است؟",
    answer:
      "معمولاً فرم کریستالی به دلیل سهولت در جابه‌جایی و قیمت تمام‌شده بهینه‌تر، بیشترین مصرف را در بخش کشاورزی دارد. اما اگر قصد محلول‌پاشی فوری دارید، فرم پودری سریع‌تر حل می‌شود.",
  },
  {
    question: "شرایط بسته‌بندی و سفارش عمده به چه صورت است؟",
    answer:
      "تمامی فرم‌ها در کیسه‌های ۲۵ کیلوگرمی مقاوم (دو لایه) عرضه می‌شوند. همچنین امکان تأمین در جامبوبگ‌های ۱ تنی برای صادرات یا مصرف کارخانجات بزرگ میسر است.",
  },
  {
    question: "چگونه استعلام قیمت روز بگیریم؟",
    answer:
      "با توجه به نوسانات قیمت مس در بورس کالا، قیمت‌ها به‌صورت روزانه تعیین می‌شود. می‌توانید از طریق دکمه‌های تماس یا واتساپ در همین صفحه، قیمت لحظه‌ای را دریافت کنید.",
  },
];

const features = [
  {
    title: "تأمین در ۳ فرم عرضه",
    desc: "تنها واحد تأمین‌کننده با قابلیت ارائه همزمان فرم کریستالی، پودری و شکری",
    icon: Layers,
  },
  {
    title: "تأمین مستقیم و عمده",
    desc: "تضمین موجودی همیشگی برای واحدهای تولیدی و توزیع‌کنندگان",
    icon: Factory,
  },
  {
    title: "لجستیک و ارسال",
    desc: "ارسال سریع از طریق باربری‌های معتبر به تمام نقاط ایران",
    icon: Truck,
  },
];

export default function CopperSulfatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const phoneNumber = "09123063576";
  const whatsappUrl = `https://wa.me/989120909323?text=${encodeURIComponent(
    "سلام، برای استعلام قیمت و مشاوره خرید سولفات مس (کریستالی/پودری) پیام می‌دهم.",
  )}`;

  return (
    <main className="overflow-x-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative flex min-h-[720px] items-center justify-center overflow-hidden bg-[#07111f] pb-12 pt-24">
        <Image
          src="/images/hero-2.jpg"
          alt="تولید و تأمین سولفات مس شیمی گستر"
          fill
          priority
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/40 to-[#07111f]/70" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="lg:col-span-7">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300 border border-blue-500/20">
              <CheckCircle2 size={16} />
              محصول استراتژیک شرکت
            </span>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl md:leading-[1.2]">
              تولید و عرضه تخصصی <br />
              <span className="text-[#c27829]">سولفات مس</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              تأمین پایدار سولفات مس ۵ آبه در سه فرم **کریستالی، پودری و شکری**.
              مناسب برای مصارف صنعتی، آبکاری، کشاورزی و تولید مکمل‌های غذایی با
              خلوص تضمینی.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-2xl bg-[#c27829] px-8 font-black text-white transition hover:bg-[#a86522] shadow-xl shadow-[#c27829]/20"
              >
                استعلام قیمت و مشاوره
                <MessageCircle size={20} />
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex h-14 items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 font-black text-white backdrop-blur-md transition hover:bg-white/20"
              >
                تماس با واحد فروش
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-black text-white">
                <Info size={20} className="text-[#c27829]" />
                خلاصه مشخصات فنی
              </h2>

              <ul className="space-y-4">
                {[
                  { label: "خلوص مس", value: "۲۴.۵٪ الی ۲۵.۲٪" },
                  { label: "فرم‌های عرضه", value: "کریستالی، پودری، شکری" },
                  { label: "بسته‌بندی", value: "۲۵ کیلوگرمی / جامبوبگ" },
                  { label: "ظرفیت تأمین", value: "عمده و تناژ بالای صنعتی" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 last:border-0 text-sm"
                  >
                    <span className="font-bold text-slate-400">
                      {item.label}:
                    </span>
                    <span className="text-left font-black text-white">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-blue-500/10 p-4 border border-blue-500/20">
                <p className="text-xs font-bold leading-6 text-blue-200">
                  تحویل درب کارخانه یا انبار تهران با ضمانت تطابق آنالیز و
                  محموله ارسالی.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Variants Explanation */}
      <section className="relative z-20 -mt-10 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {variants.map((v, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl border border-slate-100 transition-all hover:-translate-y-2"
              >
                <div
                  className={`mb-6 inline-block rounded-xl ${v.color} p-3 text-white shadow-lg`}
                >
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm font-bold text-[#c27829]">
                  {v.type}
                </p>
                <div className="my-4 h-px bg-slate-100 w-full" />
                <p className="text-sm font-bold text-slate-800 leading-6">
                  {v.usage}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#0a1a2f] text-[#c27829] shadow-xl">
                <FlaskConical size={32} />
              </div>
              <h2 className="text-3xl font-black text-[#0a1a2f] lg:text-4xl">
                آنالیز فنی و <br /> استانداردهای کیفی
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                شیمی گستر سولفات متعهد به ارائه محصول با کیفیت یکنواخت است.
                آنالیز شیمیایی برای هر سه فرم عرضه (کریستالی، پودری و شکری)
                یکسان بوده و تفاوت تنها در ابعاد فیزیکی ذرات است.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "تضمین خلوص مس بالا",
                  "حداقل میزان آهن و فلزات سنگین",
                  "حلالیت ۱۰۰٪ در آب بدون رسوب",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm font-bold text-slate-700"
                  >
                    <CheckCircle2 size={18} className="text-green-600" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
              <div className="bg-[#0a1a2f] px-8 py-6 text-white">
                <h3 className="text-lg font-black">
                  جدول آنالیز پارامترهای آزمایشگاهی
                </h3>
              </div>
              <table className="w-full text-right">
                <tbody>
                  {analysisData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-100 transition hover:bg-slate-50"
                    >
                      <td className="px-8 py-5 text-sm font-bold text-slate-600">
                        {row.param}
                      </td>
                      <td className="px-8 py-5 text-left font-black text-[#c27829]">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-slate-50 p-6 text-center">
                <p className="text-xs font-bold text-slate-500">
                  * این مقادیر بر اساس میانگین تولیدات بوده و آنالیز دقیق محموله
                  زمان خرید ارائه می‌گردد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 lg:px-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="group rounded-[2rem] bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-[#c27829]/20 border border-transparent"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#c27829] group-hover:bg-[#c27829] group-hover:text-white transition-colors">
                <item.icon size={26} />
              </div>
              <h3 className="mb-3 text-xl font-black text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-[#0a1a2f]">سوالات متداول</h2>
          <div className="mt-4 h-1 w-20 bg-[#c27829] mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${isOpen ? "border-[#c27829]/30 bg-white shadow-xl" : "border-slate-200 bg-white"}`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span
                    className={`text-base font-black ${isOpen ? "text-[#c27829]" : "text-[#0a1a2f]"}`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#c27829]" : "text-slate-400"}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-8 text-slate-600 border-t border-slate-50 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#0a1a2f] py-20 text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#c27829] blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-500 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            ثبت سفارش و استعلام
          </h2>
          <p className="mb-10 text-lg leading-8 text-slate-400">
            برای دریافت قیمت نهایی بر اساس حجم سفارش و فرم فیزیکی مورد نظر، با
            واحد فروش تماس بگیرید.
          </p>

          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <a
              href={`tel:${phoneNumber}`}
              className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-[#c27829] px-12 font-black text-white transition hover:scale-105 active:scale-95 shadow-lg shadow-[#c27829]/20"
            >
              <Phone size={22} />
              تماس مستقیم: {phoneNumber}
            </a>
            <Link
              href="/contact"
              className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-12 font-black text-white transition hover:bg-white/10"
            >
              صفحه ارتباط با ما
              <ArrowLeft size={22} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
