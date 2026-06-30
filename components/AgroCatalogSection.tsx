"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Leaf } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AgroCatalogSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">
      <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="agro-grid"
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
          <rect width="100%" height="100%" fill="url(#agro-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#0a1a2f] px-6 py-8 text-white shadow-[0_20px_60px_rgba(10,26,47,0.18)] md:px-10 md:py-12"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-[90px]" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#c27829]/10 blur-[90px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
            <div className="space-y-6 text-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-400">
                <Leaf size={16} />
                <span className="text-xs font-bold tracking-wider">
                  همکاری تجاری
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                  کاتالوگ محصولات
                  <br />
                  <span className="text-[#c27829]">برند اپیکا (Epika)</span>
                </h2>

                <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                  برای آشنایی با محصولات برند اپیکا، می‌توانید کاتالوگ رسمی را
                  آنلاین مشاهده کنید.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/catalog/epika"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold transition-colors duration-300 hover:bg-emerald-700"
                >
                  مشاهده کاتالوگ
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[340px] lg:mx-0 lg:justify-self-end">
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.25rem] bg-[#c27829]/20" />

                <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-100 shadow-2xl">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/epika.jpg"
                      alt="جلد کاتالوگ برند اپیکا"
                      fill
                      sizes="(max-width: 768px) 80vw, 340px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/80 via-[#0a1a2f]/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-right">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                        <FileText size={14} />
                        فایل PDF
                      </div>
                      <p className="text-sm font-bold text-white">
                        کاتالوگ رسمی محصولات
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-200">
                        نسخه قابل مشاهده آنلاین
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
