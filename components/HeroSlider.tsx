"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const heroSlides = [
  {
    image: "/images/hero-1.jpg",
    badge: "آزمایشگاه و کنترل کیفیت",
    title: (
      <>
        دقت در آنالیز و <br />
        <span className="text-[#c27829]">تعهد به کیفیت محصول</span>
      </>
    ),
    description:
      "تمرکز بر کنترل کیفی، بررسی مشخصات محصول و پایش مستمر فرآیندها برای ارائه محصولی قابل اعتماد به مشتریان صنعتی و کشاورزی.",
    badgeClass: "bg-[#c27829]/10 border-[#c27829]/30",
    badgeTextClass: "text-[#c27829]",
    dotClass: "bg-[#c27829]",
    buttonClass: "bg-[#c27829] hover:bg-[#a36522] shadow-[#c27829]/30",
    overlay: "bg-gradient-to-l from-[#050c16] via-[#050c16]/70 to-transparent",
  },
  {
    image: "/images/hero-2.jpg",
    badge: "کریستال آبی سولفات مس",
    title: (
      <>
        سولفات مس کریستالی <br />
        <span className="text-blue-400">برای مصارف صنعتی و کشاورزی</span>
      </>
    ),
    description:
      "تولید و تأمین سولفات مس با ظاهر یکنواخت و کیفیت مناسب، پاسخ‌گوی نیاز مجموعه‌های فعال در حوزه کشاورزی، صنعت و کاربردهای تخصصی.",
    badgeClass: "bg-blue-500/10 border-blue-400/30",
    badgeTextClass: "text-blue-300",
    dotClass: "bg-blue-500",
    buttonClass: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30",
    overlay: "bg-gradient-to-l from-[#031225] via-[#031225]/75 to-transparent",
  },
  {
    image: "/images/hero-3.jpg",
    badge: "بسته‌بندی و آمادگی تأمین",
    title: (
      <>
        آمادگی برای تأمین سفارش <br />
        <span className="text-cyan-400">با بسته‌بندی صنعتی و منظم</span>
      </>
    ),
    description:
      "زیرساخت مناسب برای نگهداری، بسته‌بندی و ارسال محصولات با هدف پاسخ‌گویی بهتر به سفارش‌های عمده و ایجاد اطمینان در فرآیند تأمین.",
    badgeClass: "bg-cyan-500/10 border-cyan-400/30",
    badgeTextClass: "text-cyan-300",
    dotClass: "bg-cyan-500",
    buttonClass: "bg-cyan-600 hover:bg-cyan-700 shadow-cyan-500/30",
    overlay: "bg-gradient-to-l from-[#07111f] via-[#07111f]/75 to-transparent",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const mouseStartX = useRef<number | null>(null);
  const mouseStartY = useRef<number | null>(null);
  const isMouseDown = useRef(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Autoplay: با هر تغییر اسلاید ریست می‌شود
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleSwipe = (
    startX: number,
    endX: number,
    startY: number,
    endY: number,
  ) => {
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    const minSwipeDistance = 55;

    // اگر حرکت عمودی بیشتر باشد، یعنی کاربر قصد اسکرول صفحه داشته
    if (absDeltaY > absDeltaX) return;

    // اگر حرکت خیلی کم باشد، اسلاید تغییر نکند
    if (absDeltaX < minSwipeDistance) return;

    /**
     * چون صفحه RTL است:
     * کشیدن به چپ => اسلاید بعدی
     * کشیدن به راست => اسلاید قبلی
     */
    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null ||
      touchEndX.current === null ||
      touchEndY.current === null
    ) {
      return;
    }

    handleSwipe(
      touchStartX.current,
      touchEndX.current,
      touchStartY.current,
      touchEndY.current,
    );

    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
    mouseStartY.current = e.clientY;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (
      !isMouseDown.current ||
      mouseStartX.current === null ||
      mouseStartY.current === null
    ) {
      return;
    }

    handleSwipe(mouseStartX.current, e.clientX, mouseStartY.current, e.clientY);

    isMouseDown.current = false;
    mouseStartX.current = null;
    mouseStartY.current = null;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (
      !isMouseDown.current ||
      mouseStartX.current === null ||
      mouseStartY.current === null
    ) {
      isMouseDown.current = false;
      return;
    }

    handleSwipe(mouseStartX.current, e.clientX, mouseStartY.current, e.clientY);

    isMouseDown.current = false;
    mouseStartX.current = null;
    mouseStartY.current = null;
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <section
      className="relative h-[85vh] min-h-[650px] w-full overflow-hidden bg-[#050c16] select-none cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.badge}
            draggable={false}
            className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear pointer-events-none ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
          />

          <div className={`absolute inset-0 ${slide.overlay}`} />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center items-start pointer-events-none">
        <div
          key={currentSlide}
          className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000"
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 border px-5 py-3 rounded-full backdrop-blur-xl ${activeSlide.badgeClass}`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full animate-pulse ${activeSlide.dotClass}`}
            />

            <span
              className={`text-sm font-normal tracking-wide ${activeSlide.badgeTextClass}`}
            >
              {activeSlide.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.15] tracking-tight drop-shadow-sm">
            {activeSlide.title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-[1.15rem] text-slate-300 leading-relaxed max-w-2xl font-normal">
            {activeSlide.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-6 pointer-events-auto">
            <Link
              href="/products"
              draggable={false}
              className={`${activeSlide.buttonClass} text-white px-10 py-5 rounded-2xl font-normal text-lg transition-all hover:scale-105 shadow-2xl flex items-center gap-3 group`}
            >
              مشاهده محصولات
              <ArrowLeft
                size={22}
                className="group-hover:-translate-x-2 transition-transform"
              />
            </Link>

            <Link
              href="/contact"
              draggable={false}
              className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 px-10 py-5 rounded-2xl font-normal text-lg transition-all"
            >
              دریافت مشاوره فنی
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-12 z-30 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`رفتن به اسلاید ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-12 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
