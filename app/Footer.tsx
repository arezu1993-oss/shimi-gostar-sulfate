"use client";

import Link from "next/link";
import { Phone, MapPin, ChevronLeft, Globe, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* نوار اعتماد بالای فوتر */}
      <div className="bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-slate-400 leading-7">
          تأمین‌کننده مواد شیمیایی و سولفات‌های صنعتی برای صنایع کشاورزی،
          تولیدکنندگان کود و واحدهای صنعتی در سراسر ایران
        </div>
      </div>

      <footer className="bg-slate-950 text-white font-vazir relative overflow-hidden">
        {/* نوار رنگی بالای فوتر */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c27829] to-transparent opacity-50" />

        <div className="container mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* ستون اول: معرفی کوتاه */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.jpg"
                  alt="لوگو شیمی گستر سولفات"
                  className="h-12 w-auto rounded-lg brightness-110"
                />
                <div>
                  <h2 className="text-xl font-black text-white">
                    شیمی گستر سولفات
                  </h2>
                  {/* <p className="text-[10px] text-[#c27829] font-bold tracking-[0.2em]">
                    SHIMI GOSTAR SULFATE
                  </p> */}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-7 text-justify">
                تولیدکننده تخصصی سولفات مس کریستالی با بالاترین درصد خلوص جهت
                مصارف صنعتی، کشاورزی و آبکاری در سراسر ایران.
              </p>

              {/* <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c27829] transition-all border border-white/10"
                >
                  <Send size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c27829] transition-all border border-white/10"
                >
                  <Globe size={18} />
                </a>
              </div> */}
            </div>

            {/* ستون دوم: دسترسی سریع + لینک‌های سئو */}
            <div>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#c27829] rounded-full" />
                دسترسی سریع
              </h3>

              <ul className="space-y-4 text-slate-400">
                <li>
                  <Link
                    href="/products/raw-materials"
                    className="hover:text-[#c27829] flex items-center gap-2 group transition-colors"
                  >
                    <ChevronLeft
                      size={14}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span>محصولات شیمیایی</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/products/copper-sulfate"
                    className="hover:text-[#c27829] flex items-center gap-2 group transition-colors"
                  >
                    <ChevronLeft
                      size={14}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span>سولفات مس کریستالی</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#c27829] flex items-center gap-2 group transition-colors"
                  >
                    <ChevronLeft
                      size={14}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span>درباره کارخانه</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#c27829] flex items-center gap-2 group transition-colors"
                  >
                    <ChevronLeft
                      size={14}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span>تماس با واحد فروش</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* ستون سوم: اطلاعات تماس */}
            <div>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#c27829] rounded-full" />
                اطلاعات تماس
              </h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c27829]/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#c27829]" />
                  </div>

                  <div className="text-m text-slate-400 leading-7">
                    تهران، شهرک صنعتی سالاریه <br />
                    خیابان نرگس غربی، پلاک SH9
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c27829]/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[#c27829]" />
                  </div>

                  <div className="text-m text-slate-400 font-bold" dir="ltr">
                    ۰۹۱۲ ۳۰۶ ۳۵۷۶
                  </div>
                </li>
              </ul>
            </div>

            {/* ستون چهارم: استعلام قیمت */}
            <div>
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#c27829] rounded-full" />
                درخواست استعلام قیمت
              </h3>

              <form className="relative">
                <input
                  type="text"
                  placeholder="شماره تماس خود را وارد کنید"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm focus:outline-none focus:border-[#c27829] transition-all"
                  required
                />

                <button
                  type="submit"
                  className="absolute left-1 top-1 bottom-1 bg-[#c27829] text-white px-6 rounded-lg text-xs hover:bg-[#a86522] transition-colors"
                >
                  ارسال
                </button>
              </form>

              {/* <p className="text-xs text-slate-500 mt-3 leading-6">
                کارشناسان فروش در کوتاه‌ترین زمان با شما تماس خواهند گرفت.
              </p> */}
            </div>
          </div>

          {/* کپی رایت */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
            <p className="text-slate-500 text-xs">
              © {currentYear} شرکت{" "}
              <span className="text-white">شیمی گستر سولفات</span> — تمامی حقوق
              محفوظ است.
            </p>

            <p className="text-slate-600 text-xs">
              طراحی و توسعه وب‌سایت:{" "}
              <span className="text-slate-400">آرزو نعمتی</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
