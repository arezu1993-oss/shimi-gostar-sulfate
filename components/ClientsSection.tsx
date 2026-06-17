"use client";

import { motion } from "framer-motion";
import { Building2, Factory, Leaf, Wheat, type LucideIcon } from "lucide-react";

type IndustryItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const industries: IndustryItem[] = [
  {
    title: "کشاورزی و باغداری",
    description:
      "تأمین سولفات‌ها و ترکیبات مورد نیاز برای تغذیه گیاه و اصلاح خاک",
    icon: Wheat,
  },
  {
    title: "تولیدکنندگان کود",
    description: "مواد اولیه پایدار برای تولید کودهای ریزمغذی، ترکیبی و تخصصی",
    icon: Leaf,
  },
  {
    title: "واحدهای صنعتی",
    description:
      "تأمین مواد شیمیایی در مقیاس عمده برای خطوط تولید و فرآیندهای صنعتی",
    icon: Factory,
  },
  {
    title: "بازرگانی و توزیع",
    description:
      "همکاری با تأمین‌کنندگان، توزیع‌کنندگان و فعالان بازار مواد اولیه",
    icon: Building2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,120,41,0.09),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-[#c27829]/10 px-5 py-2 text-sm font-bold text-[#c27829]">
              صنایع هدف
            </span>

            <h2 className="mt-6 text-3xl font-black leading-[1.45] tracking-tight text-[#0a1a2f] sm:text-4xl md:text-5xl md:leading-[1.35]">
              کاربرد محصولات در
              <span className="text-[#c27829]"> صنایع مختلف</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              محصولات شیمی گستر سولفات برای مصرف‌کنندگان عمده در کشاورزی، تولید
              کود، صنایع فرآیندی و زنجیره تأمین مواد شیمیایی عرضه می‌شود.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c27829]/25 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#c27829] to-transparent opacity-80" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c27829]/10 text-[#c27829] transition duration-300 group-hover:bg-[#c27829] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-black leading-8 text-[#0a1a2f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
