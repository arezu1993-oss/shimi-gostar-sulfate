import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  BookOpen,
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
    "مقالات تخصصی درباره خرید سولفات مس، قیمت سولفات مس، کاربردهای سولفات مس در کشاورزی، صنعت، ایمنی و نگهداری مواد شیمیایی.",
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
      <section className="relative bg-[#07111f] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f0b56d] text-sm font-bold mb-6">
            <Sparkles size={16} />
            مرجع تخصصی تحلیل بازار و دانش شیمی
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            دانشنامه تخصصی <span className="text-[#f0b56d]">شیمی گستر</span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            آخرین تحلیل‌های بازار، راهنمای خرید هوشمندانه و مقالات علمی درباره
            سولفات مس و مواد شیمیایی برای متخصصان، کشاورزان و صنعتگران.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-5 md:p-8 border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex items-start gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-all border border-slate-100"
              >
                <div
                  className={`w-12 h-12 shrink-0 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center`}
                >
                  <cat.icon size={24} />
                </div>

                <div>
                  <h2 className="text-sm font-black text-slate-800 mb-1">
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

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-[#c27829] rounded-full" />
            <h2 className="text-3xl font-black text-[#0a1a2f] tracking-tight">
              تازه‌ترین مقالات
            </h2>
          </div>

          <Link
            href="/products/copper-sulfate"
            className="hidden md:flex items-center gap-2 text-[#c27829] font-bold hover:gap-3 transition-all"
          >
            مشاهده سولفات مس
            <ChevronLeft size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-500 overflow-hidden"
            >
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black text-slate-500">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#0a1a2f] mb-4 group-hover:text-[#c27829] transition-colors leading-relaxed">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-8 mb-8">
                  {post.description}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between pt-6 border-t border-slate-100 group/btn"
                >
                  <span className="text-sm font-black text-slate-900 group-hover/btn:text-[#c27829]">
                    ادامه مطلب
                  </span>

                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-[#c27829] group-hover/btn:text-white transition-all">
                    <ArrowLeft size={18} />
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-[#0a1a2f] rounded-[2rem] p-8 md:p-10 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#f0b56d] shrink-0">
              <Newspaper size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black mb-3">
                به دنبال خرید سولفات مس هستید؟
              </h3>
              <p className="text-slate-400 leading-8 max-w-2xl">
                برای دریافت قیمت روز، برگه آنالیز و مشاوره انتخاب گرید مناسب،
                صفحه محصول سولفات مس شیمی گستر را مشاهده کنید.
              </p>
            </div>
          </div>

          <Link
            href="/products/copper-sulfate"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#c27829] hover:bg-[#a86522] rounded-2xl font-black transition-all whitespace-nowrap"
          >
            مشاهده محصول
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
