"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Beaker, Sprout, Factory, Droplets } from "lucide-react";

const productCategories = [
  {
    title: "سولفات مس کریستالی",
    badge: "محصول استراتژیک",
    image: "/images/hero-2.jpg",
    featured: true,
    icon: Droplets,
    specs: ["خلوص ۲۴٪ تا ۲۵٪", "کریستالی آبی", "گرید کشاورزی و صنعتی"],
    link: "/products/copper-sulfate",
    accent: "text-blue-500",
    iconBg: "bg-blue-500/10",
    overlay:
      "bg-gradient-to-l from-[#031225]/95 via-[#031225]/70 to-transparent",
    cta: "مشاهده مشخصات فنی",
  },
  {
    title: "سایر سولفات‌ها",
    badge: "تأمین تخصصی",
    image: "/images/pr-iron.jpg",
    featured: false,
    icon: Beaker,
    specs: ["سولفات آهن و روی", "منیزیم و منگنز"],
    description: "تأمین انواع سولفات‌های فلزی برای صنایع و مکمل‌های کشاورزی.",
    link: "/products/other-sulfates",
    accent: "text-cyan-600",
    iconBg: "bg-cyan-500/10",
    overlay:
      "bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent",
    cta: "مشاهده محصولات",
  },
  {
    title: "کود و سم کشاورزی",
    badge: "نهاده‌های کشاورزی",
    image: "/images/pr-healthy.jpg",
    featured: false,
    icon: Sprout,
    specs: ["کودهای پودری و مایع", "ریز‌مغذی‌های تخصصی"],
    description: "محصولات تقویتی برای افزایش بهره‌وری کشت و اصلاح خاک.",
    link: "/products/agro-chemicals",
    accent: "text-emerald-600",
    iconBg: "bg-emerald-500/10",
    overlay:
      "bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent",
    cta: "مشاهده محصولات",
  },
  {
    title: "مواد اولیه شیمیایی",
    badge: "تأمین صنعتی",
    image: "/images/pr-industrial.jpg",
    featured: false,
    icon: Factory,
    specs: ["مواد پایه تولید", "تأمین عمده B2B"],
    description: "تأمین مواد اولیه صنایع با تمرکز بر پایداری زنجیره تأمین.",
    link: "/products/raw-materials",
    accent: "text-[#c27829]",
    iconBg: "bg-[#c27829]/10",
    overlay:
      "bg-gradient-to-t from-[#2a1608]/85 via-[#2a1608]/20 to-transparent",
    cta: "مشاهده محصولات",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center gap-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-[#c27829]/20 bg-[#c27829]/5 px-5 py-2 text-sm font-semibold text-[#c27829]">
              محصولات و دسته‌بندی‌ها
            </span>

            <h2 className="mt-6 text-3xl md:text-5xl font-black text-slate-900 leading-[1.4]">
              سبد محصولات
              <span className="text-[#c27829]"> شیمی گستر سولفات</span>
            </h2>

            <p className="mt-6 text-lg md:text-xl font-normal text-slate-600 leading-9">
              تمرکز اصلی ما بر تولید و تأمین سولفات مس است؛ در کنار آن، تأمین
              سایر سولفات‌ها، نهاده‌های کشاورزی و مواد اولیه شیمیایی نیز انجام
              می‌شود.
            </p>
          </div>

          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-white font-black transition-all hover:bg-[#c27829]"
          >
            همه محصولات
            <ArrowLeft size={20} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, index) => {
            const Icon = cat.icon;

            if (cat.featured) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative lg:col-span-3 min-h-[400px] rounded-[3rem] overflow-hidden bg-slate-950 border border-slate-100 shadow-xl"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${cat.overlay}`} />

                  <div className="relative z-10 min-h-[400px] flex items-center">
                    <div className="w-full lg:w-3/5 p-8 md:p-16">
                      <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md mb-8">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-sm font-normal text-white">
                          {cat.badge}
                        </span>
                      </div>

                      <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-10">
                        {cat.title}
                      </h3>

                      <div className="flex flex-wrap gap-3 mb-10">
                        {cat.specs.map((spec, i) => (
                          <span
                            key={i}
                            className="text-sm md:text-base font-normal bg-white/10 text-white px-5 py-4 rounded-xl border border-white/10 backdrop-blur-md"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={cat.link}
                        className="inline-flex items-center gap-3 rounded-2xl bg-[#c27829] px-10 py-5 text-white font-normal text-lg transition-all hover:bg-[#a36522]"
                      >
                        {cat.cta}
                        <ArrowLeft size={22} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${cat.overlay}`} />
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 p-3.5 rounded-2xl">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-[#c27829] transition-colors mb-5">
                    {cat.title}
                  </h3>

                  <p className="text-slate-600 text-base md:text-lg leading-8 mb-8">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {cat.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="text-s md:text-sm font-normal bg-slate-100 text-slate-700 px-4 py-4 rounded-xl"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={cat.link}
                    className="inline-flex items-center gap-3 text-slate-900 font-black text-lg hover:text-[#c27829] transition-all"
                  >
                    {cat.cta}
                    <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-colors group-hover:border-[#c27829] group-hover:bg-[#c27829]/5">
                      <ArrowLeft size={20} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
