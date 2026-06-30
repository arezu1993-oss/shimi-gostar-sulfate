"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Sprout,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

type IndustryItem = {
  title: string;
  role: string;
  icon: LucideIcon;
};

const industries: IndustryItem[] = [
  {
    title: "کشاورزی و باغداری",
    role: "اصلاح خاک و تغذیه تخصصی باغات و مزارع",
    icon: Sprout,
  },
  {
    title: "تولیدکنندگان کود",
    role: "تأمین مواد اولیه خطوط تولید کـودهای ریـزمغذی",
    icon: Factory,
  },
  {
    title: "واحدهای صنعتی",
    role: "استفاده در فرآیندهای شیمیایی و آبکاری فلزات",
    icon: Building2,
  },
  {
    title: "بازرگانی و توزیع",
    role: "تأمین عمده برای شبکه‌های توزیع استانی و کشوری",
    icon: ShoppingCart,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-15 md:py-20">
      {/* Background Element */}
      <div className="absolute right-0 top-0 h-full w-full opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0M0 0l40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a1a2f] sm:text-4xl">
              بازار هدف محصولات
            </h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-[#c27829]/30 mx-auto" />
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all duration-300 hover:border-[#c27829]/20 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#c27829] shadow-sm ring-1 ring-slate-200 transition-colors group-hover:bg-[#c27829] group-hover:text-white sm:h-14 sm:w-14">
                  <Icon size={24} />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-base font-black text-[#0a1a2f] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
