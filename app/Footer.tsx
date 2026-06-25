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
    title: "درباره ما",
    href: "/about",
  },
  {
    title: "تماس با ما",
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
    const text = `درخواست استعلام قیمت از سایت شیمی گستر سولفات

شماره تماس:
${trimmedPhone}

موضوع:
استعلام قیمت محصولات سولفاته

مبدا:
فوتر سایت`;
    const whatsappUrl = `https://wa.me/${employerWhatsappPhone}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
    setStatus("success");
    setMessage("واتس اپ باز شد. پیام آماده ارسال است.");
    setPhone("");
  };

  return (
    <footer className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-9rem] top-[-9rem] h-72 w-72 rounded-full bg-[#c27829]/15 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,120,41,0.14),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-10 lg:pt-14">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#c27829]/10 blur-lg" />
                <Image
                  src="/logo.svg"
                  alt="لوگو شیمی گستر سولفات"
                  width={56}
                  height={56}
                  className="relative z-10 h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-lg font-black text-white sm:text-xl">
                  شیمی گستر سولفات
                </h2>
                <p className="mt-1 text-[10px] font-bold tracking-[0.18em] text-[#f0b56d]">
                  SHIMI GOSTAR SULFATE
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              تامین کننده محصولات سولفاته برای مصارف صنعتی، کشاورزی و تولید کود
              با تمرکز بر سفارش های عمده.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-1 shrink-0 text-[#f0b56d]" />
                <span className="text-[13px] leading-7">
                  تهران، شهرک صنعتی سالاریه، خیابان نرگس غربی، پلاک SH9
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="tel:09123063576"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-200 transition hover:text-[#f0b56d]"
                >
                  <Phone size={17} className="shrink-0 text-[#f0b56d]" />
                  <span dir="ltr">0912 306 3576</span>
                </a>

                <div className="hidden h-4 w-px bg-white/10 sm:block" />

                <a
                  href="https://wa.me/989120909323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-300 transition hover:text-emerald-200"
                >
                  <MessageCircle size={17} className="shrink-0" />
                  <span>واتس اپ فروش</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base font-black text-white">دسترسی سریع</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#f0b56d]"
                  >
                    <ChevronLeft
                      size={14}
                      className="transition group-hover:-translate-x-1"
                    />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl sm:p-5">
              <h3 className="text-base font-black text-white sm:text-lg">
                استعلام سریع قیمت
              </h3>
              <p className="mt-2 text-[13px] leading-7 text-slate-400">
                شماره تماس خود را وارد کنید تا پیام آماده در واتس اپ باز شود.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="tel"
                    inputMode="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912 000 0000"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.07] px-4 text-left text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#c27829] focus:bg-white/[0.1]"
                    required
                  />

                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#c27829] px-5 text-sm font-bold text-white transition hover:bg-[#a86522] sm:min-w-[110px]"
                  >
                    ارسال
                  </button>
                </div>

                {message && (
                  <div
                    className={`flex items-start gap-2 rounded-xl px-3 py-3 text-xs leading-6 ${
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-300"
                        : "bg-red-500/10 text-red-300"
                    }`}
                  >
                    {status === "success" && (
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                    )}
                    <span>{message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-slate-500 md:flex-row">
          <p>
            © {currentYear}{" "}
            <span className="text-slate-300">شیمی گستر سولفات</span> — تمامی
            حقوق محفوظ است.
          </p>
          <p>
            طراحی و توسعه: <span className="text-slate-300">آرزو نعمتی</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
