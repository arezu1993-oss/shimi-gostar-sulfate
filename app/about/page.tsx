"use client";

import { motion } from "framer-motion";
import { Factory, FlaskConical, Truck, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-12 pb-24 container mx-auto px-6 max-w-6xl font-vazir">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-5xl font-black text-slate-700 mb-6">
          شیمی گستر سولفات
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-8">
          تولید و تأمین سولفات‌های صنعتی و مواد اولیه شیمیایی برای صنایع
          کشاورزی، تولید کود و صنایع آبکاری.
        </p>
      </div>

      {/* معرفی شرکت */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="text-slate-600 leading-11 space-y-6 text-xl">
          <p>
            <strong>شیمی گستر سولفات</strong> با هدف تأمین مواد اولیه شیمیایی
            باکیفیت برای صنایع داخلی فعالیت خود را آغاز کرده است. تمرکز اصلی
            مجموعه بر تولید و تأمین انواع سولفات‌های فلزی به‌ویژه سولفات مس است
            که در بسیاری از صنایع کاربرد دارد.
          </p>

          {/* <p>
            ما تلاش می‌کنیم با بهره‌گیری از دانش فنی، کنترل کیفیت مستمر و تأمین
            پایدار مواد اولیه، نیاز تولیدکنندگان و فعالان صنعتی را به شکلی قابل
            اعتماد و پایدار پاسخ دهیم.
          </p> */}

          <p>
            رویکرد ما ایجاد همکاری بلندمدت با مشتریان صنعتی و ارائه محصولاتی با
            کیفیت ثابت و قابل اطمینان است.
          </p>
        </div>

        {/* تصویر */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-lg border border-slate-100"
        >
          <img
            src="/images/pic-about.jpg"
            alt="محصولات شیمی گستر سولفات"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* حوزه فعالیت */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
          حوزه فعالیت
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: FlaskConical, title: "تولید سولفات‌های فلزی" },
            { icon: Factory, title: "تأمین مواد اولیه صنایع شیمیایی" },
            { icon: ShieldCheck, title: "کنترل کیفیت و آنالیز محصول" },
            { icon: Truck, title: "ارسال محصولات به سراسر کشور" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-[#c27829]/40 transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#c27829]/10 flex items-center justify-center">
                <item.icon className="text-[#c27829]" size={24} />
              </div>

              <p className="font-bold text-slate-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* کاربرد محصولات */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
          کاربرد محصولات
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            محصولات این مجموعه در صنایع مختلف مورد استفاده قرار می‌گیرند از
            جمله:
            <ul className="mt-4 space-y-2 list-disc pr-5">
              <li>کشاورزی و تولید کود</li>
              <li>صنایع آبکاری و فلزکاری</li>
              <li>تولید مواد شیمیایی</li>
              <li>صنایع دام و طیور</li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            تمرکز ما بر ارائه محصولاتی با کیفیت ثابت و قابل اطمینان است تا صنایع
            مصرف‌کننده بتوانند با اطمینان از مواد اولیه استاندارد در فرآیند
            تولید خود استفاده کنند.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-950 rounded-3xl text-center py-14 px-8 text-white">
        <h3 className="text-2xl font-bold mb-4">
          برای دریافت اطلاعات بیشتر با ما در ارتباط باشید
        </h3>

        <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-8">
          برای استعلام قیمت، دریافت اطلاعات فنی محصولات و مشاوره خرید می‌توانید
          با واحد فروش شیمی گستر سولفات تماس بگیرید.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-[#c27829] hover:bg-[#a86421] rounded-full font-bold transition"
        >
          ارتباط با واحد فروش
        </a>
      </div>
    </div>
  );
}
