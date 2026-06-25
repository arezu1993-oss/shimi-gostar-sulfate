"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

const AUTO_PLAY_INTERVAL = 10000;
const SWIPE_THRESHOLD = 60;

const HERO_HEIGHT_CLASS =
  "h-[calc(100svh-64px)] min-h-[560px] max-h-[820px] sm:min-h-[600px] lg:min-h-[660px]";

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
      "bg-gradient-to-l from-[#050c16]/82 via-[#08111d]/52 to-[#050c16]/10",
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
      "bg-gradient-to-l from-[#031225]/82 via-[#07182f]/52 to-[#031225]/10",
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
      "bg-gradient-to-l from-[#07111f]/84 via-[#0a1827]/54 to-[#07111f]/10",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlayKey, setAutoPlayKey] = useState(0);

  const activeSlide = useMemo(() => heroSlides[currentSlide], [currentSlide]);

  const restartAutoPlay = () => {
    setAutoPlayKey((prev) => prev + 1);
  };

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  }, []);

  const handleNext = () => {
    goToNext();
    restartAutoPlay();
  };

  const handlePrev = () => {
    goToPrev();
    restartAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    restartAutoPlay();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    if (offsetX > SWIPE_THRESHOLD || velocityX > 500) {
      handlePrev();
    }

    if (offsetX < -SWIPE_THRESHOLD || velocityX < -500) {
      handleNext();
    }
  };

  useEffect(() => {
    const interval = window.setInterval(goToNext, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [goToNext, autoPlayKey]);

  return (
    <section className="relative isolate w-full overflow-hidden bg-slate-950">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragEnd={handleDragEnd}
        className={`relative w-full cursor-grab active:cursor-grabbing ${HERO_HEIGHT_CLASS}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
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
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_30%)]" />

        <div
          className={`relative z-20 mx-auto flex w-full max-w-7xl items-center px-4 py-6 sm:px-6 sm:py-8 lg:px-12 ${HERO_HEIGHT_CLASS}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="w-full max-w-[360px] sm:max-w-[540px] md:max-w-2xl xl:max-w-3xl"
            >
              <div className="rounded-[28px] bg-gradient-to-l from-black/30 via-black/16 to-transparent p-5 backdrop-blur-[2px] sm:p-7 lg:p-8">
                <div className="mb-5 h-px w-14 bg-gradient-to-l from-white/80 to-transparent sm:mb-6 sm:w-20" />

                <h1 className="text-[28px] font-black leading-[1.4] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-4xl sm:leading-[1.3] md:text-5xl lg:text-[54px] lg:leading-[1.2] xl:text-6xl">
                  {activeSlide.title}
                </h1>

                <p className="mt-4 max-w-[32rem] text-[15px] leading-7 text-slate-200/90 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg lg:leading-9">
                  {activeSlide.description}
                </p>

                <div className="pointer-events-auto mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-8">
                  <Link
                    href="/products"
                    draggable={false}
                    className={`${activeSlide.buttonClass} group flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] sm:w-auto sm:px-8 lg:px-10 lg:py-5 lg:text-lg`}
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
                    className="w-full rounded-2xl border border-white/12 bg-white/8 px-6 py-4 text-center text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/12 sm:w-auto sm:px-8 lg:px-10 lg:py-5 lg:text-lg"
                  >
                    دریافت مشاوره و استعلام
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-7 z-30 mx-auto flex max-w-7xl items-center justify-center px-4 sm:bottom-8 sm:px-6 md:justify-between lg:bottom-10 lg:px-12">
          <div className="pointer-events-auto hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              aria-label="اسلاید قبلی"
            >
              <ChevronRight size={20} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              aria-label="اسلاید بعدی"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/16 px-3 py-2 backdrop-blur-md">
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
      </motion.div>
    </section>
  );
}
