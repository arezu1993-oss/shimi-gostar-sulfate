"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Microscope,
  PhoneCall,
  Scale,
  type LucideIcon,
} from "lucide-react";

type FeatureItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const features: FeatureItem[] = [
  {
    title: "کنترل کیفیت دقیق",
    desc: "پایش منظم مشخصات فنی برای حفظ ثبات کیفیت در سفارش‌های عمده.",
    icon: Microscope,
  },
  {
    title: "تخصص در محصولات سولفاته",
    desc: "تمرکز تخصصی بر سولفات مس و ترکیبات سولفاته پرکاربرد.",
    icon: FlaskConical,
  },
  {
    title: "تأمین منظم و عمده",
    desc: "همکاری پایدار با صنایع و خریداران B2B برای تأمین مستمر.",
    icon: Factory,
  },
  {
    title: "شفافیت در سفارش",
    desc: "ارائه روشن مشخصات، بسته‌بندی و شرایط تحویل پیش از خرید.",
    icon: ClipboardCheck,
  },
];

const highlights = [
  "مناسب همکاری عمده و B2B",
  "تمرکز تخصصی بر سولفات مس",
  "پاسخ‌گویی سریع برای استعلام",
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-18">
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-[#c27829]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-8rem] h-64 w-64 rounded-full bg-slate-900/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,120,41,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.04),transparent_24%)]" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c27829]/20 bg-[#c27829]/5 px-5 py-2 text-sm font-bold text-[#c27829]">
                <Scale size={16} />
                مزیت همکاری
              </span>

              <h2 className="mt-5 text-3xl font-black leading-[1.5] tracking-tight text-[#0a1a2f] sm:text-4xl md:text-5xl">
                چرا
                <span className="text-[#c27829]"> شیمی گستر سولفات؟</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                مزیت ما فقط فروش محصول نیست؛ ثبات کیفیت، تمرکز تخصصی و پاسخ‌گویی
                دقیق، خرید عمده را سریع‌تر، مطمئن‌تر و ساده‌تر می‌کند.
              </p>

              <div className="mt-7 grid w-full max-w-2xl grid-cols-1 gap-3 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[64px] h-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-center text-sm font-bold text-slate-700 shadow-sm"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-blue-300"
                      />
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c27829]/25 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-gradient-to-bl from-[#c27829]/10 to-transparent" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#c27829] transition duration-300 group-hover:bg-[#c27829] group-hover:text-white">
                        <Icon size={26} strokeWidth={1.8} />
                      </div>

                      <h3 className="mt-5 text-lg font-black leading-8 text-[#0a1a2f] sm:text-xl">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                        {feature.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 flex flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#0a1a2f] px-3 py-3.5 text-xs font-black text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#c27829] sm:min-w-[190px] sm:flex-none sm:px-6 sm:py-4 sm:text-sm"
              >
                دریافت مشاوره
                <ArrowLeft size={17} className="shrink-0" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3.5 text-xs font-black text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-[#c27829]/20 hover:bg-[#c27829]/10 hover:text-[#c27829] sm:min-w-[190px] sm:flex-none sm:px-6 sm:py-4 sm:text-sm"
              >
                <PhoneCall size={17} className="shrink-0" />
                استعلام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
