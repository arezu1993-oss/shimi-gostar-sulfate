"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const AUTO_PLAY_INTERVAL = 8000;

const HERO_HEIGHT_CLASS =
  "h-[calc(100svh-80px)] min-h-[640px] max-h-[860px] sm:min-h-[620px] lg:min-h-[680px]";

const heroSlides = [
  {
    image: "/images/hero-1.jpg",
    alt: "کنترل کیفیت سولفات های صنعتی و مواد شیمیایی در آزمایشگاه",
    title: (
      <>
        کنترل کیفیت در تولید
        <br />
        <span className="text-[#d89a52]">سولفات‌های صنعتی</span>
      </>
    ),
    description:
      "تولید و تأمین مواد شیمیایی با پایش دقیق کیفیت، فرمولاسیون کنترل شده و استاندارد پایدار برای نیاز صنایع مختلف.",
    buttonClass: "bg-[#c27829] hover:bg-[#a36522] shadow-[#c27829]/30",
    overlay:
      "bg-gradient-to-l from-[#050c16]/78 via-[#08111d]/48 to-transparent",
  },
  {
    image: "/images/hero-2.jpg",
    alt: "سولفات مس کریستالی آبی با کیفیت پایدار برای صنعت و کشاورزی",
    title: (
      <>
        سولفات مس کریستالی
        <br />
        <span className="text-blue-400">با کیفیت پایدار و رنگ یکنواخت</span>
      </>
    ),
    description:
      "عرضه سولفات مس کریستالی برای مصارف صنعتی، کشاورزی و تخصصی با تأمین مطمئن و کیفیت قابل اتکا.",
    buttonClass: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30",
    overlay:
      "bg-gradient-to-l from-[#031225]/78 via-[#07182f]/48 to-transparent",
  },
  {
    image: "/images/hero-3.jpg",
    alt: "انبار و بسته بندی محصولات شیمیایی برای تامین عمده و ارسال",
    title: (
      <>
        تأمین عمده مواد شیمیایی
        <br />
        <span className="text-cyan-400">با بسته بندی منظم و ارسال مطمئن</span>
      </>
    ),
    description:
      "آمادگی تأمین عمده سولفات ها و مواد اولیه شیمیایی برای کارخانه ها، صنایع و واحدهای کشاورزی با نظم در بسته بندی و تحویل.",
    buttonClass: "bg-cyan-600 hover:bg-cyan-700 shadow-cyan-500/30",
    overlay:
      "bg-gradient-to-l from-[#07111f]/80 via-[#0a1827]/50 to-transparent",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = useMemo(() => heroSlides[currentSlide], [currentSlide]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-slate-950">
      <div className={`relative w-full ${HERO_HEIGHT_CLASS}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0.55 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.alt}
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="select-none object-cover object-center"
              draggable={false}
            />
            <div className={`absolute inset-0 ${activeSlide.overlay}`} />
            <div className="absolute inset-0 bg-black/12" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_28%)]" />

        <div
          className={`relative z-20 mx-auto flex w-full max-w-7xl items-center px-4 py-6 sm:px-6 sm:py-8 lg:px-12 ${HERO_HEIGHT_CLASS}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-[360px] sm:max-w-[540px] md:max-w-2xl xl:max-w-3xl"
            >
              <div className="rounded-[28px] bg-gradient-to-l from-black/28 via-black/14 to-transparent p-5 backdrop-blur-[2px] sm:p-7 lg:p-8">
                <div className="mb-5 h-px w-14 bg-gradient-to-l from-white/80 to-transparent sm:mb-6 sm:w-20" />

                <h1 className="text-[30px] font-black leading-[1.38] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-4xl sm:leading-[1.3] md:text-5xl lg:text-[56px] lg:leading-[1.18] xl:text-6xl">
                  {activeSlide.title}
                </h1>

                <p className="mt-4 max-w-[32rem] text-[15px] leading-7 text-slate-200/90 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg lg:leading-9">
                  {activeSlide.description}
                </p>

                <div className="pointer-events-auto mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-8">
                  <Link
                    href="/products"
                    draggable={false}
                    className={`${activeSlide.buttonClass} group flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-medium text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] sm:w-auto sm:px-8 lg:px-10 lg:py-5 lg:text-lg`}
                  >
                    مشاهده محصولات
                    <ArrowLeft
                      size={22}
                      className="transition-transform duration-300 group-hover:-translate-x-1.5"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    draggable={false}
                    className="w-full rounded-2xl border border-white/12 bg-white/8 px-6 py-4 text-center text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/12 sm:w-auto sm:px-8 lg:px-10 lg:py-5 lg:text-lg"
                  >
                    دریافت مشاوره و استعلام
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 mx-auto flex max-w-7xl items-center justify-between px-4 sm:bottom-8 sm:px-6 lg:bottom-10 lg:px-12">
          <div className="pointer-events-auto hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={goToPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="اسلاید قبلی"
            >
              <ChevronRight size={20} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="اسلاید بعدی"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="pointer-events-auto flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`رفتن به اسلاید ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
