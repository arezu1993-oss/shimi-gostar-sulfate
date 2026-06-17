"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  Beaker,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Headphones,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const whatsappPhone = "989120909323";

const focusItems = [
  {
    icon: FlaskConical,
    title: "سولفات مس",
    description: "تأمین سولفات مس کریستالی برای مصارف کشاورزی و صنعتی.",
  },
  {
    icon: Beaker,
    title: "محصولات سولفاته",
    description: "تمرکز تخصصی بر تأمین ترکیبات سولفاته و مواد اولیه مرتبط.",
  },
  {
    icon: Factory,
    title: "مصارف صنعتی",
    description: "پاسخ‌گویی به نیاز واحدهای تولیدی، آبکاری و صنایع شیمیایی.",
  },
  {
    icon: Boxes,
    title: "سفارش عمده",
    description: "مناسب برای همکاری‌های B2B، تولیدکنندگان و تأمین‌کنندگان.",
  },
];

const processItems = [
  {
    step: "۰۱",
    title: "ثبت درخواست",
    description:
      "مشتری نوع محصول، مقدار مورد نیاز و کاربرد مصرف را اعلام می‌کند.",
  },
  {
    step: "۰۲",
    title: "بررسی نیاز",
    description:
      "واحد فروش بر اساس نوع مصرف، مشخصات محصول مناسب را پیشنهاد می‌دهد.",
  },
  {
    step: "۰۳",
    title: "اعلام قیمت",
    description: "قیمت، شرایط سفارش، نحوه بسته‌بندی و زمان ارسال اعلام می‌شود.",
  },
  {
    step: "۰۴",
    title: "آماده‌سازی و ارسال",
    description: "پس از تأیید سفارش، محصول آماده و به مقصد مشتری ارسال می‌شود.",
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "کنترل کیفیت",
    description: "تمرکز بر کیفیت ثابت محصول و بررسی مشخصات فنی در تأمین.",
  },
  {
    icon: PackageCheck,
    title: "بسته‌بندی مناسب",
    description: "توجه به شرایط بسته‌بندی برای حمل‌ونقل و مصرف صنعتی.",
  },
  {
    icon: Truck,
    title: "ارسال سراسر کشور",
    description:
      "امکان هماهنگی ارسال سفارش‌ها برای مشتریان در نقاط مختلف ایران.",
  },
  {
    icon: Headphones,
    title: "پاسخ‌گویی فروش",
    description: "ارتباط سریع برای استعلام قیمت، موجودی و مشاوره خرید عمده.",
  },
];

export default function AboutPage() {
  const whatsappText = encodeURIComponent(
    `سلام، برای دریافت اطلاعات بیشتر و استعلام قیمت محصولات شیمی گستر سولفات پیام می‌دهم.`,
  );

  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsappText}`;

  return (
    <main className="overflow-hidden bg-[#f8fafc] font-vazir text-slate-900">
      <section className="relative bg-[#07111f] px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-12rem] top-[-10rem] h-96 w-96 rounded-full bg-[#c27829]/25 blur-3xl" />
          <div className="absolute bottom-[-14rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,120,41,0.18),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#f0b56d] backdrop-blur">
              <Sparkles size={17} />
              تأمین تخصصی مواد اولیه سولفاته
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.35] md:text-6xl">
              همراه مطمئن صنایع در تأمین محصولات سولفاته
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              شیمی گستر سولفات با تمرکز بر تولید و تأمین محصولات سولفاته، تلاش
              می‌کند نیاز صنایع کشاورزی، تولید کود، آبکاری و واحدهای صنعتی را با
              کیفیت قابل اتکا، پاسخ‌گویی سریع و تأمین پایدار برطرف کند.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-[#c27829]/20 transition hover:-translate-y-0.5 hover:bg-[#a86522]"
              >
                <MessageCircle size={19} />
                استعلام در واتس‌اپ
              </a>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                مشاهده محصولات
                <ArrowLeft size={18} />
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {["کنترل کیفیت", "تأمین عمده", "ارسال کشور"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur"
                >
                  <CheckCircle2
                    className="mx-auto mb-2 text-[#f0b56d]"
                    size={20}
                  />
                  <p className="text-xs font-bold text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative lg:col-span-6"
          >
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-[#c27829]/40" />
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-[#c27829]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="relative h-[24rem] overflow-hidden rounded-[1.5rem] bg-slate-900 md:h-[32rem]">
                <Image
                  src="/images/about-hero.jpg"
                  alt="محیط صنعتی و کنترل کیفیت محصولات شیمی گستر سولفات"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/85 via-[#07111f]/10 to-transparent" />

                <div className="absolute bottom-5 right-5 rounded-2xl border border-white/10 bg-[#07111f]/80 p-4 backdrop-blur">
                  <p className="text-xs text-slate-300">تمرکز تخصصی</p>
                  <p className="mt-1 text-lg font-black text-white">
                    محصولات سولفاته صنعتی
                  </p>
                </div>

                <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur">
                  کیفیت، تأمین، اعتماد
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <span className="text-sm font-black text-[#c27829]">
                درباره شیمی گستر سولفات
              </span>

              <h2 className="mt-3 text-3xl font-black leading-[1.5] text-slate-950 md:text-4xl">
                ما فقط فروشنده مواد شیمیایی نیستیم؛ تأمین‌کننده قابل اعتماد
                صنایع هستیم.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">
                <p className="text-base leading-9 text-slate-600 md:text-lg">
                  <strong className="font-black text-slate-900">
                    شیمی گستر سولفات
                  </strong>{" "}
                  با هدف تأمین مواد اولیه شیمیایی باکیفیت برای صنایع داخلی
                  فعالیت می‌کند. تمرکز اصلی مجموعه بر محصولات سولفاته، به‌ویژه
                  سولفات مس و مواد اولیه مرتبط است؛ محصولاتی که در کشاورزی،
                  تولید کود، آبکاری، فلزکاری و صنایع شیمیایی کاربرد دارند.
                </p>

                <p className="mt-5 text-base leading-9 text-slate-600 md:text-lg">
                  رویکرد ما ایجاد همکاری بلندمدت با مشتریان صنعتی، ارائه کیفیت
                  ثابت، پاسخ‌گویی سریع و تأمین قابل اتکا برای سفارش‌های عمده
                  است.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-black text-[#c27829]">
              تمرکز تخصصی ما
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              محصولات و حوزه‌های تأمین
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {focusItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1 hover:border-[#c27829]/40 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c27829]/10 text-[#c27829] transition group-hover:bg-[#c27829] group-hover:text-white">
                  <item.icon size={26} />
                </div>

                <h3 className="text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-4 py-20 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-sm font-black text-[#f0b56d]">
                فرآیند همکاری
              </span>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                مسیر ساده و شفاف برای ثبت سفارش
              </h2>
            </div>

            <p className="text-sm leading-7 text-slate-300 lg:col-span-5">
              از اولین تماس تا ارسال سفارش، تلاش می‌کنیم روند خرید برای مشتریان
              صنعتی سریع، شفاف و قابل پیگیری باشد.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processItems.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
              >
                <div className="absolute left-5 top-5 text-5xl font-black text-white/5">
                  {item.step}
                </div>

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c27829] text-white">
                  <ClipboardCheck size={23} />
                </div>

                <p className="text-sm font-black text-[#f0b56d]">
                  مرحله {item.step}
                </p>

                <h3 className="mt-3 text-xl font-black">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <span className="text-sm font-black text-[#c27829]">
                  اعتمادسازی صنعتی
                </span>

                <h2 className="mt-3 text-3xl font-black leading-[1.45] text-slate-950">
                  چرا صنایع با ما همکاری می‌کنند؟
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-600">
                  مشتریان صنعتی به تأمین‌کننده‌ای نیاز دارند که علاوه بر محصول،
                  در پاسخ‌گویی، کیفیت، بسته‌بندی و ارسال نیز قابل اعتماد باشد.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-950 text-[#f0b56d]">
                    <item.icon size={25} />
                  </div>

                  <h3 className="text-lg font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#07111f] px-6 py-14 text-center text-white shadow-2xl shadow-slate-300/60 md:px-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-[#c27829]/25 blur-3xl" />
              <div className="absolute bottom-[-8rem] left-[-8rem] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <BadgeCheck className="mx-auto mb-5 text-[#f0b56d]" size={42} />

              <h2 className="text-3xl font-black leading-[1.45] md:text-4xl">
                برای استعلام قیمت محصولات سولفاته آماده‌اید؟
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
                برای دریافت قیمت، موجودی، شرایط سفارش عمده و اطلاعات فنی
                محصولات، با واحد فروش شیمی گستر سولفات در ارتباط باشید.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a86522]"
                >
                  <MessageCircle size={19} />
                  استعلام در واتس‌اپ
                </a>

                <a
                  href="tel:09120909323"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Phone size={19} />
                  تماس با واحد فروش
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
