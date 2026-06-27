"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Beaker,
  Boxes,
  CheckCircle2,
  Factory,
  PhoneCall,
  Sprout,
  type LucideIcon,
} from "lucide-react";

type BaseProduct = {
  title: string;
  badge: string;
  image: string;
  alt: string;
  featured: boolean;
  icon: LucideIcon;
  description: string;
  specs: string[];
  href: string;
  accent: string;
  iconBg: string;
};

type FeaturedProduct = BaseProduct & {
  featured: true;
  shortTitle: string;
  applications: string[];
  primaryCta: string;
  secondaryCta: string;
};

type RegularProduct = BaseProduct & {
  featured: false;
  cta: string;
};

type ProductCategory = FeaturedProduct | RegularProduct;

const productsHref = "/products";
const contactHref = "/contact";

const productCategories: ProductCategory[] = [
  {
    title: "سولفات مس کریستالی",
    shortTitle: "سولفات مس",
    badge: "محصول اصلی و استراتژیک",
    image: "/images/hero-2.jpg",
    alt: "سولفات مس کریستالی آبی برای کاربردهای صنعتی و کشاورزی",
    featured: true,
    icon: Boxes,
    description:
      "سولفات مس کریستالی با رنگ یکنواخت، کیفیت پایدار و امکان تأمین عمده برای کاربردهای کشاورزی، صنعتی و فرآیندی عرضه می‌شود.",
    specs: [
      "خلوص ۲۴٪ تا ۲۵٪",
      "کریستال آبی یکنواخت",
      "گرید کشاورزی و صنعتی",
      "قابل عرضه عمده",
    ],
    applications: ["کشاورزی", "صنایع شیمیایی", "فرآیندهای صنعتی", "تأمین B2B"],
    href: "/products/copper-sulfate",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/10",
    primaryCta: "مشاهده مشخصات",
    secondaryCta: "استعلام قیمت",
  },
  {
    title: "سایر سولفات‌ها",
    badge: "تأمین تخصصی",
    image: "/images/pr-iron.jpg",
    alt: "تأمین انواع سولفات های فلزی شامل سولفات آهن روی منیزیم و منگنز",
    featured: false,
    icon: Beaker,
    description:
      "تأمین سولفات‌های فلزی پرمصرف برای کاربردهای صنعتی، کشاورزی و تولیدی.",
    specs: ["سولفات آهن و روی", "منیزیم و منگنز", "مصرف صنعتی و کشاورزی"],
    href: "/products/other-sulfates",
    accent: "text-cyan-600",
    iconBg: "bg-cyan-500/10",
    cta: "مشاهده سولفات‌ها",
  },
  {
    title: "کود و نهاده‌های کشاورزی",
    badge: "مصرف کشاورزی",
    image: "/images/pr-healthy.jpg",
    alt: "کود و نهاده های کشاورزی برای تغذیه گیاه و اصلاح خاک",
    featured: false,
    icon: Sprout,
    description:
      "نهاده‌های کاربردی برای تغذیه گیاه، بهبود عملکرد کشت و اصلاح خاک.",
    specs: ["کودهای پودری و مایع", "ریز مغذی‌های تخصصی", "مصرف باغی و زراعی"],
    href: "/products/agro-chemicals",
    accent: "text-emerald-600",
    iconBg: "bg-emerald-500/10",
    cta: "مشاهده نهاده‌ها",
  },
  {
    title: "مواد اولیه شیمیایی",
    badge: "تأمین صنعتی",
    image: "/images/pr-industrial.jpg",
    alt: "مواد اولیه شیمیایی برای صنایع و واحدهای تولیدی",
    featured: false,
    icon: Factory,
    description:
      "تأمین مواد اولیه شیمیایی برای کارخانه‌ها و واحدهای تولیدی به‌صورت عمده.",
    specs: ["مواد پایه تولید", "تأمین عمده B2B", "زنجیره تأمین پایدار"],
    href: "/products/raw-materials",
    accent: "text-[#c27829]",
    iconBg: "bg-[#c27829]/10",
    cta: "مشاهده مواد اولیه",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductsSection() {
  const featuredProduct = productCategories.find(
    (item): item is FeaturedProduct => item.featured,
  );

  const regularProducts = productCategories.filter(
    (item): item is RegularProduct => !item.featured,
  );

  if (!featuredProduct) return null;

  const FeaturedIcon = featuredProduct.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white pt-6 pb-12 md:pt-12 md:pb-16">
      <div className="pointer-events-none absolute right-[-10rem] top-20 h-72 w-72 rounded-full bg-[#c27829]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-[-10rem] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-10 top-10 hidden h-56 w-56 rounded-full bg-[#c27829]/6 blur-3xl lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-8 xl:gap-10">
            <div className="text-center lg:col-span-7 lg:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c27829]/20 bg-[#c27829]/5 px-5 py-2 text-sm font-bold text-[#c27829] shadow-sm shadow-[#c27829]/5">
                <span className="h-2 w-2 rounded-full bg-[#c27829]" />
                محصولات و دسته‌بندی‌ها
              </span>

              <h2 className="mx-auto mt-5 max-w-[23ch] text-3xl font-black leading-[1.5] tracking-tight text-[#0a1a2f] sm:text-4xl md:text-5xl md:leading-[1.35] lg:mr-0 lg:ml-auto lg:text-[56px] lg:leading-[1.28] xl:text-[50px]">
                تأمین تخصصی
                <span className="text-[#c27829]"> سولفات‌ها </span>و مواد اولیه
                شیمیایی
              </h2>
            </div>

            <div className="mx-auto max-w-2xl text-center lg:col-span-5 lg:mx-0 lg:max-w-xl lg:justify-self-end lg:text-right">
              <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                تولید و تأمین سولفات مس کریستالی، انواع سولفات‌های فلزی،
                نهاده‌های کشاورزی و مواد اولیه شیمیایی برای مصرف صنعتی و عمده.
              </p>

              <div className="mt-6 flex justify-center lg:justify-center">
                <Link
                  href={productsHref}
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#0a1a2f] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#c27829]"
                >
                  مشاهده همه محصولات
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] shadow-xl shadow-slate-950/10 lg:col-span-12"
          >
            <div className="absolute inset-0">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1180px"
                className="object-cover object-center opacity-85"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#06101d]/95 via-[#07111f]/78 to-[#07111f]/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.20),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(194,120,41,0.22),transparent_30%)]" />
            </div>

            <div className="relative z-10 grid min-h-[500px] grid-cols-1 items-center gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-12 lg:p-12 xl:p-14">
              <div className="lg:col-span-7 xl:col-span-6">
                <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <FeaturedIcon size={20} />
                  </span>
                  <span className="text-sm font-bold">
                    {featuredProduct.badge}
                  </span>
                </div>

                <h3 className="text-3xl font-black leading-[1.35] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.22]">
                  {featuredProduct.title}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg sm:leading-9">
                  {featuredProduct.description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {featuredProduct.specs.map((spec) => (
                    <span
                      key={spec}
                      className="flex min-h-[58px] w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2.5 text-center text-sm font-bold leading-6 text-white backdrop-blur-md"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-blue-300"
                      />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mx-auto lg:w-fit lg:justify-center">
                  <Link
                    href={featuredProduct.href}
                    className="group/btn inline-flex min-w-[220px] items-center justify-center gap-2.5 rounded-xl bg-[#c27829] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#c27829]/25 transition duration-300 hover:bg-[#a36522] sm:px-6 lg:py-3.5 lg:text-[15px]"
                  >
                    {featuredProduct.primaryCta}
                    <ArrowLeft
                      size={18}
                      className="transition group-hover/btn:-translate-x-1"
                    />
                  </Link>

                  <Link
                    href={contactHref}
                    className="inline-flex min-w-[220px] items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur-md transition duration-300 hover:bg-white/15 sm:px-6 lg:py-3.5 lg:text-[15px]"
                  >
                    <PhoneCall size={18} />
                    {featuredProduct.secondaryCta}
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 xl:col-span-6">
                <div className="mr-auto max-w-xl rounded-[1.75rem] border border-white/12 bg-white/10 p-5 backdrop-blur-xl sm:p-6 lg:max-w-md xl:max-w-lg">
                  <p className="text-sm font-black text-blue-200">
                    کاربردهای رایج سولفات مس
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2">
                    {featuredProduct.applications.map((application) => (
                      <div
                        key={application}
                        className="flex min-h-[72px] w-full items-center justify-center rounded-xl border border-white/10 bg-white/10 p-4 text-center text-sm font-bold leading-6 text-white"
                      >
                        {application}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#c27829]/25 bg-[#c27829]/15 p-5">
                    <p className="text-sm font-black text-white">
                      مناسب برای خرید عمده و تأمین مستمر
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200/85">
                      برای قیمت روز، موجودی، نوع بسته‌بندی و شرایط ارسال با واحد
                      فروش هماهنگ کنید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {regularProducts.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                key={product.href}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white shadow-sm transition duration-300 hover:border-[#c27829]/25 hover:shadow-lg hover:shadow-slate-950/5 lg:col-span-4"
              >
                <Link href={product.href} className="block">
                  <div className="relative h-60 overflow-hidden bg-slate-900 sm:h-64 lg:h-56 xl:h-64">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                    <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold text-white backdrop-blur-md">
                      {product.badge}
                    </div>

                    <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                      <Icon size={23} />
                    </div>
                  </div>
                </Link>

                <div className="p-6 sm:p-7">
                  <Link href={product.href} className="group/title block">
                    <h3 className="text-2xl font-black leading-9 text-[#0a1a2f] transition duration-300 group-hover/title:text-[#c27829]">
                      {product.title}
                    </h3>
                  </Link>

                  <p className="mt-4 min-h-[64px] text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    {product.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <Link
                      href={product.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a1a2f] px-4 py-2.5 text-xs font-black text-white transition duration-300 hover:bg-[#c27829] sm:text-sm"
                    >
                      {product.cta}
                      <ArrowLeft size={17} />
                    </Link>

                    <Link
                      href={contactHref}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-black text-slate-700 transition duration-300 hover:border-[#c27829]/20 hover:bg-[#c27829]/10 hover:text-[#c27829]"
                    >
                      استعلام
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
