"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Factory,
  FlaskConical,
  Package,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

type StatItem = {
  number: number;
  suffix: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

const stats: StatItem[] = [
  {
    number: 15,
    suffix: "+",
    label: "سال تجربه",
    description: "سابقه فعالیت در تولید، تأمین و همکاری با صنایع مختلف",
    icon: Factory,
  },
  {
    number: 30000,
    suffix: "+",
    label: "تن ظرفیت سالانه",
    description: "توان تأمین پایدار برای سفارش‌های عمده و صنعتی",
    icon: Package,
  },
  {
    number: 200,
    suffix: "+",
    label: "مشتری صنعتی",
    description: "همکاری با واحدهای تولیدی، توزیع‌کنندگان و مصرف‌کنندگان عمده",
    icon: Users,
  },
  {
    number: 5,
    suffix: "+",
    label: "گروه محصول سولفاته",
    description: "سبد محصولات سولفاته برای کاربردهای صنعتی و کشاورزی",
    icon: FlaskConical,
  },
];

const toPersianNumber = (num: number) =>
  new Intl.NumberFormat("fa-IR").format(num);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-[#c27829]/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-10rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,120,41,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-[#f0c28f] backdrop-blur-md">
              <TrendingUp size={16} />
              ظرفیت، تجربه و اعتماد
            </span>

            <h2 className="mt-6 text-3xl font-black leading-[1.45] tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.35]">
              شیمی گستر سولفات
              <span className="text-[#f0b56d]"> در یک نگاه</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              ترکیب تجربه، ظرفیت تأمین و تمرکز تخصصی بر محصولات سولفاته، شیمی
              گستر سولفات را به همراهی قابل اتکا برای مشتریان صنعتی و
              مصرف‌کنندگان عمده تبدیل کرده است.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c27829] text-white shadow-lg shadow-[#c27829]/25">
                  <Factory size={26} />
                </div>

                <div>
                  <p className="text-sm font-black text-white">
                    تأمین پایدار در مقیاس صنعتی
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    مناسب کارخانه‌ها، واحدهای تولیدی، توزیع‌کنندگان و خریداران
                    عمده مواد شیمیایی.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-5 lg:mt-16 lg:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.article
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c27829]/40 hover:bg-white/[0.1] sm:p-7"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-l from-transparent via-[#c27829] to-transparent opacity-70" />

                  <Icon
                    size={112}
                    className="pointer-events-none absolute -bottom-8 -left-7 text-white/[0.04] transition duration-300 group-hover:text-[#c27829]/10"
                  />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 text-[#f0b56d] ring-1 ring-white/10 transition group-hover:bg-[#c27829] group-hover:text-white">
                        <Icon size={25} strokeWidth={1.8} />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-300">
                        ۰{index + 1}
                      </span>
                    </div>

                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-black tracking-tight text-white md:text-6xl">
                        <CountUp
                          end={stat.number}
                          duration={2.2}
                          enableScrollSpy
                          scrollSpyOnce
                          formattingFn={(value) => toPersianNumber(value)}
                        />
                      </span>

                      <span className="mb-2 text-3xl font-black text-[#f0b56d]">
                        {stat.suffix}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      {stat.label}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-300">
                      {stat.description}
                    </p>

                    <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-l from-[#c27829] to-[#f0b56d] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
