"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Wheat,
  Factory,
  Truck,
  Leaf,
  FlaskConical,
} from "lucide-react";

const industries = [
  {
    title: "صنایع کشاورزی",
    description: "تأمین سولفات‌های مورد نیاز برای اصلاح خاک و تغذیه گیاه",
    icon: Wheat,
  },
  {
    title: "تولیدکنندگان کود",
    description: "مواد اولیه پایدار برای تولید کودهای ریزمغذی و ترکیبی",
    icon: Leaf,
  },
  {
    title: "واحدهای صنعتی",
    description: "تأمین مواد شیمیایی در مقیاس عمده برای خطوط تولید",
    icon: Factory,
  },
  {
    title: "شرکت‌های تولیدی",
    description: "پاسخ‌گویی به نیاز مستمر تولیدکنندگان داخلی",
    icon: Building2,
  },
  {
    title: "بازرگانی مواد شیمیایی",
    description: "همکاری با تأمین‌کنندگان و توزیع‌کنندگان مواد اولیه",
    icon: Truck,
  },
  {
    title: "کاربردهای تخصصی",
    description: "سولفات‌ها برای مصارف صنعتی، کشاورزی و فرمولاسیون",
    icon: FlaskConical,
  },
];

export default function ClientsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* accent background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,120,41,0.08),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[#c27829]/10 text-[#c27829] px-5 py-2 text-sm font-bold mb-5">
            صنایع و مشتریان هدف
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            همراه صنایع مختلف در تأمین مواد اولیه
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto leading-8">
            محصولات شیمی گستر سولفات در صنایع کشاورزی، تولید کود، واحدهای صنعتی
            و زنجیره تأمین مواد شیمیایی مورد استفاده قرار می‌گیرند.
          </p>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="group relative bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* accent line */}
                <div className="absolute top-0 right-0 h-1 w-0 bg-[#c27829] group-hover:w-full transition-all duration-500" />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#c27829]/10 flex items-center justify-center group-hover:bg-[#c27829] transition">
                      <Icon
                        size={26}
                        className="text-[#c27829] group-hover:text-white transition"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#c27829] transition">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                تأمین عمده برای همکاری‌های پایدار صنعتی
              </h3>
              <p className="text-slate-600 leading-8">
                در همکاری با مشتریان سازمانی تمرکز ما بر کیفیت پایدار، پاسخ‌گویی
                سریع، ظرفیت تولید قابل اتکا و تأمین مستمر مواد اولیه است.
              </p>
            </div>

            <div className="text-center md:text-left">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#c27829] px-7 py-3 text-white font-bold hover:bg-[#a8641f] transition"
              >
                درخواست همکاری
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
