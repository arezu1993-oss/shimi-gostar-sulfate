"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const quickLinks = [
  {
    title: "محصولات شیمیایی",
    href: "/products/raw-materials",
  },
  {
    title: "سولفات مس کریستالی",
    href: "/products/copper-sulfate",
  },
  {
    title: "درباره کارخانه",
    href: "/about",
  },
  {
    title: "تماس با واحد فروش",
    href: "/contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      setStatus("error");
      setMessage("لطفاً شماره تماس را وارد کنید.");
      return;
    }

    const employerWhatsappPhone = "989120909323";

    const text = `درخواست جدید استعلام قیمت از سایت شیمی گستر سولفات

شماره تماس مشتری:
${trimmedPhone}

موضوع:
استعلام قیمت محصولات سولفاته

صفحه:
صفحه اصلی - فوتر`;

    const whatsappUrl = `https://wa.me/${employerWhatsappPhone}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");

    setStatus("success");
    setMessage("واتس‌اپ باز شد. لطفاً پیام آماده‌شده را ارسال کنید.");
    setPhone("");
  };

  return (
    <footer className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-[#c27829]/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-10rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,120,41,0.16),transparent_32%)]" />
      </div>

      <div className="relative z-10 border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm leading-7 text-slate-300 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="shrink-0 text-[#f0b56d]" />
            <span>
              تأمین‌کننده سولفات‌های صنعتی و کشاورزی برای سفارش‌های عمده در
              سراسر ایران
            </span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold text-[#f0b56d] transition hover:text-white"
          >
            ارتباط با واحد فروش
            <ChevronLeft size={16} />
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-10 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="لوگو شیمی گستر سولفات"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-black">شیمی گستر سولفات</h2>
                <p className="mt-1 text-xs font-bold tracking-[0.18em] text-[#f0b56d]">
                  SHIMI GOSTAR SULFATE
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-8 text-slate-300">
              تولید و تأمین تخصصی سولفات مس کریستالی و محصولات سولفاته برای
              مصارف صنعتی، کشاورزی، تولید کود و همکاری‌های عمده.
            </p>

            <div className="mt-7 grid max-w-md grid-cols-1 gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <MapPin size={20} className="mt-1 shrink-0 text-[#f0b56d]" />
                <span className="leading-7">
                  تهران، شهرک صنعتی سالاریه، خیابان نرگس غربی، پلاک SH9
                </span>
              </div>

              <a
                href="tel:09123063576"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#c27829]/50 hover:bg-white/[0.07]"
              >
                <Phone size={20} className="shrink-0 text-[#f0b56d]" />
                <span dir="ltr" className="font-bold text-white">
                  0912 306 3576
                </span>
              </a>

              <a
                href="https://wa.me/989120909323"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/15"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span className="font-bold">گفت‌وگو در واتس‌اپ</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 text-base font-black">
              <span className="h-2 w-2 rounded-full bg-[#c27829]" />
              دسترسی سریع
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-[#f0b56d]"
                  >
                    <ChevronLeft
                      size={15}
                      className="transition group-hover:-translate-x-1"
                    />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-6">
              <div className="mb-6">
                <h3 className="text-lg font-black">درخواست استعلام قیمت</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  شماره تماس خود را ثبت کنید تا واتس‌اپ با پیام آماده برای واحد
                  فروش باز شود.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="tel"
                    inputMode="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="0912 000 0000"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 pl-40 text-left text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#c27829] focus:bg-white/[0.1]"
                    required
                  />

                  <button
                    type="submit"
                    className="absolute bottom-1.5 left-1.5 top-1.5 inline-flex items-center justify-center rounded-xl bg-[#c27829] px-5 text-sm font-bold text-white transition hover:bg-[#a86522]"
                  >
                    ارسال در واتس‌اپ
                  </button>
                </div>

                {message ? (
                  <div
                    className={`flex items-start gap-2 rounded-2xl px-4 py-3 text-xs leading-6 ${
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-300"
                        : "bg-red-500/10 text-red-300"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                    ) : null}
                    <span>{message}</span>
                  </div>
                ) : null}
              </form>

              <p className="mt-4 text-xs leading-6 text-slate-500">
                در این نسخه دمو، پیام به‌صورت آماده در واتس‌اپ باز می‌شود و
                کاربر باید دکمه ارسال را بزند.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs text-slate-500 md:flex-row">
          <p>
            © {currentYear} شرکت{" "}
            <span className="text-slate-300">شیمی گستر سولفات</span> — تمامی
            حقوق محفوظ است.
          </p>

          <p>
            طراحی و توسعه وب‌سایت:{" "}
            <span className="text-slate-300">آرزو نعمتی</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
