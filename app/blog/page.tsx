import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  ChevronLeft,
  Sparkles,
  ShoppingCart,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Newspaper,
} from "lucide-react";

export const metadata: Metadata = {
  title: "وبلاگ و دانشنامه تخصصی شیمی گستر سولفات",
  description:
    "مقالات تخصصی درباره خرید سولفات مس، قیمت سولفات مس، کاربردهای سولفات مس در کشاورزی، صنعت، ایمنی، نگهداری و روش‌های تولید مواد شیمیایی.",
};

const categories = [
  {
    title: "خرید و قیمت",
    description: "راهنمای خرید، عوامل قیمت‌گذاری و نکات انتخاب محصول",
    icon: ShoppingCart,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "انواع و مشخصات",
    description: "بررسی خلوص، آنالیز، گریدها و ویژگی‌های فنی",
    icon: FlaskConical,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "کاربردها و کشاورزی",
    description: "کاربرد سولفات مس در کشاورزی، صنعت و دامپروری",
    icon: Leaf,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "ایمنی و نگهداری",
    description: "نکات انبارداری، حمل‌ونقل و مصرف ایمن",
    icon: ShieldCheck,
    color: "text-slate-600",
    bg: "bg-slate-50",
  },
];

const posts = [
  {
    slug: "copper-sulfate-powder-sugar-crystal-differences",
    title: "تفاوت سولفات مس پودری، شکری و کریستالی + راهنمای انتخاب بهترین نوع",
    description:
      "در این مقاله تفاوت سولفات مس پودری، شکری و کریستالی را از نظر اندازه ذرات، سرعت حل شدن، گرد و غبار، حمل‌ونقل و کاربرد بررسی می‌کنیم.",
    category: "انواع و مشخصات",
    readTime: "۷ دقیقه",
    date: "۱۴۰۵/۰۵/۱۷",
  },
  {
    slug: "copper-sulfate-complete-guide",
    title:
      "سولفات مس چیست؟ معرفی کامل کاربردها، انواع، ویژگی‌ها و تولید به روش هوادهی",
    description:
      "در این مقاله با سولفات مس، انواع آن، ویژگی‌های فیزیکی و شیمیایی، کاربردها در کشاورزی و صنعت، روش تولید به روش هوادهی و نکات ایمنی آشنا می‌شوید.",
    category: "انواع و مشخصات",
    readTime: "۱۰ دقیقه",
    date: "۱۴۰۵/۰۴/۳۱",
  },
  {
    slug: "buying-copper-sulfate-tips",
    title: "نکات حیاتی که پیش از خرید سولفات مس باید بدانید",
    description:
      "خرید سولفات مس فقط مقایسه قیمت نیست. خلوص، برگه آنالیز، نوع بسته‌بندی، اعتبار تأمین‌کننده و شرایط تحویل نقش مهمی در انتخاب محصول دارند.",
    category: "خرید و قیمت",
    readTime: "۶ دقیقه",
    date: "۱۴۰۵/۰۳/۲۸",
  },
  {
    slug: "copper-sulfate-price-factors",
    title: "قیمت سولفات مس چگونه تعیین می‌شود؟",
    description:
      "در این مقاله بررسی می‌کنیم چه عواملی مانند قیمت جهانی مس، خلوص محصول، گرید، بسته‌بندی و حجم سفارش روی قیمت سولفات مس اثر می‌گذارند.",
    category: "خرید و قیمت",
    readTime: "۵ دقیقه",
    date: "۱۴۰۵/۰۳/۲۸",
  },
  {
    slug: "copper-sulfate-agriculture-uses",
    title: "کاربرد سولفات مس در کشاورزی و باغداری",
    description:
      "سولفات مس در کشاورزی برای تأمین عنصر مس، کنترل برخی بیماری‌های قارچی و اصلاح کمبودهای تغذیه‌ای گیاهان مورد استفاده قرار می‌گیرد.",
    category: "کاربردها و کشاورزی",
    readTime: "۷ دقیقه",
    date: "۱۴۰۵/۰۳/۲۸",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#fcfdfe] pb-20">
      <section className="relative overflow-hidden bg-[#07111f] pt-32 pb-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-[#f0b56d]">
            <Sparkles size={16} />
            مرجع تخصصی تحلیل بازار و دانش شیمی
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            دانشنامه تخصصی <span className="text-[#f0b56d]">شیمی گستر</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
            آخرین تحلیل‌های بازار، راهنمای خرید هوشمندانه و مقالات علمی درباره
            سولفات مس و مواد شیمیایی برای متخصصان، کشاورزان و صنعتگران.
          </p>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-10 max-w-7xl px-4">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50 md:rounded-[2.5rem] md:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex items-start gap-4 rounded-3xl border border-slate-100 p-4 transition-all hover:bg-slate-50"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${cat.bg} ${cat.color}`}
                >
                  <cat.icon size={24} />
                </div>

                <div>
                  <h2 className="mb-1 text-sm font-black text-slate-800">
                    {cat.title}
                  </h2>
                  <p className="text-xs leading-6 text-slate-500">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 rounded-full bg-[#c27829]" />
            <h2 className="text-3xl font-black tracking-tight text-[#0a1a2f]">
              تازه‌ترین مقالات
            </h2>
          </div>

          <Link
            href="/products/copper-sulfate"
            className="hidden items-center gap-2 font-bold text-[#c27829] transition-all hover:gap-3 md:flex"
          >
            مشاهده سولفات مس
            <ChevronLeft size={20} />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/70 md:rounded-[2.5rem]"
            >
              <div className="p-7 md:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <span className="rounded-lg bg-slate-100 px-3 py-1 text-[10px] font-black text-slate-500">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-black leading-9 text-[#0a1a2f] transition-colors group-hover:text-[#c27829]">
                  {post.title}
                </h3>

                <p className="mb-8 text-sm leading-8 text-slate-500">
                  {post.description}
                </p>

                <div className="mb-6 flex items-center justify-between text-xs text-slate-400">
                  <span>تاریخ انتشار</span>
                  <span>{post.date}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="group/btn flex items-center justify-between border-t border-slate-100 pt-6"
                >
                  <span className="text-sm font-black text-slate-900 group-hover/btn:text-[#c27829]">
                    ادامه مطلب
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-all group-hover/btn:bg-[#c27829] group-hover/btn:text-white">
                    <ArrowLeft size={18} />
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#0a1a2f] p-8 text-white lg:flex-row lg:items-center md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#f0b56d]">
              <Newspaper size={26} />
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-black">
                به دنبال خرید سولفات مس هستید؟
              </h3>
              <p className="max-w-2xl leading-8 text-slate-400">
                برای دریافت قیمت روز، برگه آنالیز و مشاوره انتخاب گرید مناسب،
                صفحه محصول سولفات مس شیمی گستر را مشاهده کنید.
              </p>
            </div>
          </div>

          <Link
            href="/products/copper-sulfate"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-[#c27829] px-7 py-4 font-black transition-all hover:bg-[#a86522]"
          >
            مشاهده محصول
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
