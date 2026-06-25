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
  icon: LucideIcon;
};

const stats: StatItem[] = [
  {
    number: 15,
    suffix: "+",
    label: "سال تجربه",
    icon: Factory,
  },
  {
    number: 30000,
    suffix: "+",
    label: "تن ظرفیت سالانه",
    icon: Package,
  },
  {
    number: 200,
    suffix: "+",
    label: "مشتری صنعتی",
    icon: Users,
  },
  {
    number: 5,
    suffix: "+",
    label: "گروه محصول سولفاته",
    icon: FlaskConical,
  },
];

const toPersianNumber = (num: number) =>
  new Intl.NumberFormat("fa-IR").format(num);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-14 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10rem] top-[-10rem] h-80 w-80 rounded-full bg-[#c27829]/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-10rem] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,120,41,0.16),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-[#f0c28f] backdrop-blur-md sm:text-sm">
            <TrendingUp size={15} />
            ظرفیت، تجربه و اعتماد
          </span>

          <h2 className="mt-5 text-2xl font-black leading-[1.5] tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.35]">
            شیمی گستر سولفات
            <span className="text-[#f0b56d]"> در یک نگاه</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-9">
            ترکیب تجربه، ظرفیت تأمین و تمرکز تخصصی بر محصولات سولفاته، ما را به
            همراهی قابل اتکا برای خرید عمده و صنعتی تبدیل کرده است.
          </p>
        </motion.div>

        <div className="mt-9 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:mt-12 sm:rounded-[2rem] sm:p-5 lg:p-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 sm:gap-4">
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
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#c27829]/40 hover:bg-white/[0.1] sm:rounded-[1.5rem] sm:p-6"
                >
                  <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-l from-transparent via-[#c27829] to-transparent opacity-60" />

                  <Icon
                    size={72}
                    className="pointer-events-none absolute -bottom-5 -left-5 text-white/[0.035] transition duration-300 group-hover:text-[#c27829]/10 sm:size-24"
                  />

                  <div className="relative z-10">
                    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#f0b56d] ring-1 ring-white/10 transition group-hover:bg-[#c27829] group-hover:text-white sm:mb-5 sm:h-13 sm:w-13 sm:rounded-2xl">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div className="flex items-end justify-center gap-1">
                      <span className="text-2xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                        <CountUp
                          end={stat.number}
                          duration={2.1}
                          enableScrollSpy
                          scrollSpyOnce
                          formattingFn={(value) => toPersianNumber(value)}
                        />
                      </span>

                      <span className="mb-1 text-xl font-black text-[#f0b56d] sm:mb-2 sm:text-3xl">
                        {stat.suffix}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xs font-black leading-6 text-white sm:mt-5 sm:text-base">
                      {stat.label}
                    </h3>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-6 flex max-w-3xl items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-center backdrop-blur-xl sm:mt-8 sm:px-6"
        >
          <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            مناسب کارخانه‌ها، واحدهای تولیدی، توزیع‌کنندگان و خریداران عمده مواد
            شیمیایی.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
