"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Factory, FlaskConical, Users, Package } from "lucide-react";

const stats = [
  {
    number: 15,
    suffix: "+",
    label: "سال تجربه تولید",
    description: "تجربه در تولید و تأمین مواد شیمیایی",
    icon: Factory,
  },
  {
    number: 30000,
    suffix: "+",
    label: "تن ظرفیت سالانه",
    description: "توان تأمین پایدار در مقیاس صنعتی",
    icon: Package,
  },
  {
    number: 200,
    suffix: "+",
    label: "مشتری صنعتی فعال",
    description: "همکاری با واحدهای تولیدی و مصرف‌کنندگان عمده",
    icon: Users,
  },
  {
    number: 5,
    suffix: "+",
    label: "نوع محصول سولفاته",
    description: "سبد متنوع محصولات صنعتی و کشاورزی",
    icon: FlaskConical,
  },
];

const toPersianNumber = (num: number) =>
  new Intl.NumberFormat("fa-IR").format(num);

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#c27829]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-300/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* heading */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-slate-600 mb-5 shadow-sm">
              ظرفیت، تجربه و اعتماد
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              شیمی گستر سولفات در یک نگاه
            </h2>

            <p className="text-slate-600 max-w-2xl leading-8">
              تمرکز ما بر تولید پایدار، کیفیت قابل اتکا و پاسخ‌گویی به نیاز
              صنایع و بخش کشاورزی در مقیاس عمده است.
            </p>
          </div>

          <div className="lg:col-span-5 hidden lg:flex justify-end">
            {/* <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm max-w-sm">
              <p className="text-sm text-slate-500 leading-7">
                اعداد این بخش نمایانگر بخشی از ظرفیت عملیاتی، سابقه تأمین و
                گستره همکاری‌های صنعتی شرکت است.
              </p>
            </div> */}
          </div>
        </div>

        {/* dashboard cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* top border accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#c27829] via-[#d69a55] to-transparent opacity-80" />

                {/* icon watermark */}
                <Icon
                  size={96}
                  className="absolute -left-5 -bottom-5 text-slate-100 group-hover:text-[#c27829]/10 transition-colors duration-300"
                />

                <div className="relative z-10">
                  {/* icon + label */}
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        {stat.label}
                      </h3>

                      <p className="text-sm text-slate-500 leading-7">
                        {stat.description}
                      </p>
                    </div>

                    <div className="shrink-0 rounded-xl bg-[#c27829]/10 p-3 ring-1 ring-[#c27829]/15 group-hover:bg-[#c27829]/15 transition">
                      <Icon size={24} className="text-[#c27829]" />
                    </div>
                  </div>

                  {/* number */}
                  <div className="flex items-end gap-1">
                    <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                      <CountUp
                        end={stat.number}
                        duration={2.2}
                        enableScrollSpy
                        scrollSpyOnce
                        formattingFn={(value) => toPersianNumber(value)}
                      />
                    </span>

                    <span className="text-3xl font-black text-[#c27829] mb-1">
                      {stat.suffix}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#c27829]" />
                    <span className="text-xs text-slate-400">
                      شاخص عملکرد و ظرفیت
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
