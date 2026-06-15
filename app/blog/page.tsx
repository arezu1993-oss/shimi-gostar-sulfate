import Link from "next/link";
import {
  ArrowLeft,
  BookOpenText,
  FlaskConical,
  Leaf,
  ShieldCheck,
  ShoppingCart,
  Tags,
} from "lucide-react";

const featuredPosts = [
  {
    title: "نکات مهم در خرید سولفات مس",
    excerpt:
      "در این مقاله با مهم‌ترین نکات فنی، کیفی و تجاری برای خرید سولفات مس آشنا می‌شوید.",
    category: "خرید و قیمت",
    readTime: "۵ دقیقه",
    href: "/blog/buying-copper-sulfate-tips",
  },
  {
    title: "بررسی قیمت سولفات مس",
    excerpt:
      "عوامل مؤثر بر قیمت سولفات مس، کیفیت محصول، نوع بسته‌بندی و شرایط بازار را بررسی می‌کنیم.",
    category: "خرید و قیمت",
    readTime: "۴ دقیقه",
    href: "/blog/copper-sulfate-price",
  },
  {
    title: "تفاوت سولفات مس پودری و کریستال",
    excerpt:
      "تفاوت‌های اصلی سولفات مس پودری و کریستال، کاربردها و نکات انتخاب هر نوع را بررسی می‌کنیم.",
    category: "انواع و مشخصات",
    readTime: "۵ دقیقه",
    href: "/blog/copper-sulfate-powder-vs-crystal",
  },
];

const categories = [
  {
    title: "خرید و قیمت",
    description:
      "راهنمای خرید، بررسی عوامل مؤثر بر قیمت و انتخاب سولفات مس مناسب برای نیاز صنعتی یا کشاورزی.",
    icon: ShoppingCart,
  },
  {
    title: "انواع و مشخصات فنی",
    description:
      "آشنایی با انواع سولفات مس، تفاوت پودری و کریستال، کیفیت محصول و روش تشخیص نمونه اصل.",
    icon: FlaskConical,
  },
  {
    title: "کاربردها و کشاورزی",
    description:
      "بررسی کاربردهای سولفات مس در کشاورزی، تغذیه گیاه و صنایع وابسته.",
    icon: Leaf,
  },
  {
    title: "ایمنی و نگهداری",
    description:
      "نکات مهم درباره حمل، نگهداری، بسته‌بندی و بررسی مستندات کیفی مواد شیمیایی.",
    icon: ShieldCheck,
  },
];

const allPosts = [
  {
    title: "تشخیص سولفات مس اصل از تقلبی",
    excerpt:
      "روش‌های بررسی کیفیت، ظاهر، رنگ، آنالیز و نکات مهم برای تشخیص سولفات مس اصل از نمونه‌های بی‌کیفیت.",
    category: "انواع و مشخصات",
    readTime: "۶ دقیقه",
    href: "/blog/how-to-identify-pure-copper-sulfate",
  },
  {
    title: "نقش مس در تغذیه گیاه",
    excerpt:
      "بررسی نقش عنصر مس در رشد گیاه، علائم کمبود مس و ارتباط آن با ترکیباتی مانند سولفات مس.",
    category: "کاربردها و کشاورزی",
    readTime: "۵ دقیقه",
    href: "/blog/copper-role-in-plant-nutrition",
  },
  {
    title: "تفاوت سولفات مس پودری و کریستال",
    excerpt:
      "در این مقاله تفاوت سولفات مس پودری و کریستال از نظر ظاهر، کاربرد، انحلال‌پذیری و انتخاب مناسب بررسی می‌شود.",
    category: "انواع و مشخصات",
    readTime: "۵ دقیقه",
    href: "/blog/copper-sulfate-powder-vs-crystal",
  },
  {
    title: "کاربرد سولفات مس در کشاورزی",
    excerpt:
      "آشنایی با مهم‌ترین کاربردهای سولفات مس در کشاورزی، باغداری، کنترل بیماری‌های گیاهی و تغذیه گیاه.",
    category: "کاربردها و کشاورزی",
    readTime: "۶ دقیقه",
    href: "/blog/copper-sulfate-agriculture-uses",
  },
  {
    title: "نکات مهم در خرید سولفات مس",
    excerpt:
      "پیش از خرید سولفات مس باید به خلوص، نوع محصول، آنالیز، بسته‌بندی و اعتبار تأمین‌کننده توجه کرد.",
    category: "خرید و قیمت",
    readTime: "۵ دقیقه",
    href: "/blog/buying-copper-sulfate-tips",
  },
  {
    title: "بررسی قیمت سولفات مس",
    excerpt:
      "قیمت سولفات مس تحت تأثیر کیفیت، نوع پودری یا کریستال، نرخ مواد اولیه، بسته‌بندی و حجم سفارش قرار دارد.",
    category: "خرید و قیمت",
    readTime: "۴ دقیقه",
    href: "/blog/copper-sulfate-price",
  },
  {
    title: "راهنمای انتخاب سولفات مس مناسب",
    excerpt:
      "برای انتخاب سولفات مس مناسب باید نوع مصرف، کیفیت موردنیاز، شکل فیزیکی و مدارک کیفی محصول بررسی شود.",
    category: "خرید و قیمت",
    readTime: "۵ دقیقه",
    href: "/blog/choose-right-copper-sulfate",
  },
  {
    title: "نقش آنالیز و COA در خرید مواد شیمیایی",
    excerpt:
      "COA یکی از مهم‌ترین مدارک کیفی در خرید مواد شیمیایی است و به خریدار برای ارزیابی کیفیت محصول کمک می‌کند.",
    category: "ایمنی و نگهداری",
    readTime: "۵ دقیقه",
    href: "/blog/coa-in-chemical-purchase",
  },
  {
    title: "کاربرد سولفات‌ها در کشاورزی و صنعت",
    excerpt:
      "سولفات‌ها در بسیاری از فرآیندهای کشاورزی و صنعتی استفاده می‌شوند و سولفات مس یکی از پرکاربردترین آن‌هاست.",
    category: "کاربردها و کشاورزی",
    readTime: "۵ دقیقه",
    href: "/blog/sulfates-in-agriculture-and-industry",
  },
  {
    title: "نکات مهم در نگهداری و حمل مواد شیمیایی",
    excerpt:
      "نگهداری و حمل صحیح مواد شیمیایی برای حفظ کیفیت محصول، ایمنی محیط و کاهش ریسک‌های عملیاتی اهمیت زیادی دارد.",
    category: "ایمنی و نگهداری",
    readTime: "۴ دقیقه",
    href: "/blog/chemical-storage-and-transportation-tips",
  },
];

export default function BlogPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 font-vazir">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,120,41,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.14),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <BookOpenText className="h-4 w-4 text-[#c27829]" />
              مرکز دانش شیمی‌گستر سولفات
            </div>

            <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              مقالات تخصصی سولفات مس و مواد شیمیایی صنعتی
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              در این بخش می‌توانید مقالات آموزشی و سئو محور درباره خرید، قیمت،
              انواع، کاربردها و نگهداری سولفات مس را مطالعه کنید. برای مشاهده
              مشخصات کامل محصول اصلی، صفحه سولفات مس را ببینید.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products/copper-sulfate"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c27829] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#c27829]/20 transition hover:bg-[#a86420]"
              >
                مشاهده صفحه سولفات مس
                <ArrowLeft className="h-4 w-4" />
              </Link>

              <a
                href="#posts"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                مشاهده مقالات
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-bold text-[#c27829]">
              مقالات منتخب
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              راهنماهای مهم خرید و شناخت سولفات مس
            </h2>
          </div>

          <Link
            href="/products/copper-sulfate"
            className="text-sm font-bold text-slate-700 transition hover:text-[#c27829]"
          >
            مشاهده محصول سولفات مس
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#c27829]/10 px-3 py-1 text-xs font-bold text-[#c27829]">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>

              <h3 className="text-lg font-black leading-8 text-slate-900 transition group-hover:text-[#c27829]">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-[#c27829]"
                >
                  مطالعه مقاله
                  <ArrowLeft className="h-4 w-4" />
                </Link>

                <Link
                  href="/products/copper-sulfate"
                  className="text-xs font-bold text-slate-400 transition hover:text-[#c27829]"
                >
                  سولفات مس
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold text-[#c27829]">
              دسته‌بندی محتوا
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              مسیرهای اصلی مطالعه در وبلاگ
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              مقالات وبلاگ بر اساس ساختار Silo دسته‌بندی شده‌اند تا کاربران
              راحت‌تر به محتوای مرتبط با سولفات مس دسترسی داشته باشند.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-[#c27829]/40 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-base font-black text-slate-900">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section
        id="posts"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#c27829]">
              <Tags className="h-4 w-4" />
              همه مقالات
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              تازه‌ترین مطالب آموزشی و تخصصی
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600">
            تمام مقالات این بخش با هدف تقویت شناخت کاربران از سولفات مس و هدایت
            آن‌ها به صفحه اصلی محصول طراحی شده‌اند.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <article
              key={post.title}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>

              <h3 className="text-lg font-black leading-8 text-slate-900 transition group-hover:text-[#c27829]">
                {post.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-[#c27829]"
                >
                  مطالعه مقاله
                  <ArrowLeft className="h-4 w-4" />
                </Link>

                <Link
                  href="/products/copper-sulfate"
                  className="text-xs font-bold text-slate-400 transition hover:text-[#c27829]"
                >
                  صفحه سولفات مس
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <span className="text-sm font-bold text-[#c27829]">
                نیاز به اطلاعات محصول دارید؟
              </span>

              <h2 className="mt-3 text-2xl font-black leading-10 sm:text-3xl">
                به دنبال خرید سولفات مس با کیفیت پایدار هستید؟
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300">
                برای مشاهده مشخصات محصول، بررسی انواع سولفات مس، دریافت اطلاعات
                درباره سولفات مس پودری، کریستال و فاقد نیترات، به صفحه اصلی
                محصول مراجعه کنید.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/products/copper-sulfate"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c27829] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#a86420]"
              >
                مشاهده سولفات مس
                <ArrowLeft className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                تماس برای مشاوره خرید
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
