"use client";

import { motion } from "framer-motion";
import {
  Award,
  PackageCheck,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

type TrustItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const trustItems: TrustItem[] = [
  {
    title: "تأمین عمده",
    description: "مناسب کارخانه‌ها و مصرف‌کنندگان عمده",
    icon: PackageCheck,
  },
  {
    title: "مشاوره گرید",
    description: "راهنمای انتخاب محصول بر اساس کاربرد",
    icon: ShieldCheck,
  },
  {
    title: "بسته‌بندی منظم",
    description: "آماده‌سازی سفارش با نظم و کیفیت",
    icon: Award,
  },
  {
    title: "هماهنگی ارسال",
    description: "پیگیری تأمین، بارگیری و ارسال سفارش",
    icon: Truck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="pointer-events-none absolute right-[-8rem] top-10 h-64 w-64 rounded-full bg-[#c27829]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-8rem] bottom-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c27829]/20 bg-[#c27829]/5 px-5 py-2 text-sm font-bold text-[#c27829]">
            <span className="h-2 w-2 rounded-full bg-[#c27829]" />
            چرا ما؟
          </span>

          <h2 className="mt-5 text-2xl font-black leading-[1.5] text-[#0a1a2f] sm:text-3xl md:text-4xl">
            تأمین مطمئن برای خریدهای صنعتی و عمده
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            از انتخاب محصول تا آماده‌سازی، بسته‌بندی و هماهنگی ارسال، فرآیند
            تأمین با دقت و نظم انجام می‌شود.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c27829]/25 hover:shadow-xl hover:shadow-slate-950/5"
              >
                <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-[#c27829]/5 transition duration-300 group-hover:bg-[#c27829]/10" />

                <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-[#c27829]/10 text-[#c27829] transition duration-300 group-hover:bg-[#c27829] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="relative mt-5 text-lg font-black text-[#0a1a2f]">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
