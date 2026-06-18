import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Phone,
  Tag,
  CheckCircle2,
} from "lucide-react";

type BlogPostItem = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
  tags: string[];
};

const posts: BlogPostItem[] = [
  {
    slug: "buying-copper-sulfate-tips",
    title: "نکات حیاتی که پیش از خرید سولفات مس باید بدانید",
    description:
      "خرید سولفات مس فقط مقایسه قیمت نیست. خلوص، برگه آنالیز، نوع بسته‌بندی، اعتبار تأمین‌کننده و شرایط تحویل نقش مهمی در انتخاب محصول دارند.",
    author: "تیم فنی شیمی گستر سولفات",
    date: "۱۴۰۵/۰۳/۲۸",
    readTime: "۶ دقیقه",
    category: "خرید و قیمت",
    tags: ["سولفات مس", "خرید سولفات مس", "قیمت سولفات مس", "آنالیز محصول"],
    content: [
      "سولفات مس یکی از مواد شیمیایی پرکاربرد در صنایع مختلف، کشاورزی، دامپروری، آبکاری و تولید ترکیبات شیمیایی است. به همین دلیل انتخاب محصول مناسب، فقط به پیدا کردن پایین‌ترین قیمت محدود نمی‌شود. کیفیت، خلوص، یکنواختی دانه‌بندی و معتبر بودن برگه آنالیز از مواردی هستند که باید پیش از خرید بررسی شوند.",

      "اولین نکته در خرید سولفات مس، توجه به نوع محصول است. سولفات مس پنج آبه به دلیل شکل کریستالی آبی‌رنگ و کاربرد گسترده، یکی از رایج‌ترین انواع این ماده محسوب می‌شود. این محصول باید ظاهری یکنواخت، رنگ مشخص و بسته‌بندی سالم داشته باشد.",

      "موضوع دوم، بررسی برگه آنالیز است. در خرید عمده مواد شیمیایی، وجود آنالیز معتبر به خریدار کمک می‌کند از درصد خلوص، میزان رطوبت و مشخصات فنی محصول مطمئن شود. اگر محصول برای کاربردهای حساس استفاده می‌شود، این موضوع اهمیت بیشتری پیدا می‌کند.",

      "موضوع سوم، انتخاب تأمین‌کننده معتبر است. تأمین‌کننده‌ای که توانایی ارائه مشاوره فنی، ارسال منظم، بسته‌بندی مناسب و پاسخگویی شفاف داشته باشد، ریسک خرید را کاهش می‌دهد. در شیمی گستر سولفات، تمرکز اصلی بر ارائه محصول باکیفیت، قیمت رقابتی و پشتیبانی تخصصی است.",

      "در نهایت، پیش از ثبت سفارش، بهتر است حجم مصرف، نوع کاربرد، شرایط نگهداری و شیوه حمل‌ونقل مشخص شود. این موارد باعث می‌شود انتخاب نهایی دقیق‌تر انجام شود و محصول خریداری‌شده بیشترین بازدهی را در کاربرد مورد نظر داشته باشد.",
    ],
  },
  {
    slug: "copper-sulfate-price-factors",
    title: "قیمت سولفات مس چگونه تعیین می‌شود؟",
    description:
      "در این مقاله بررسی می‌کنیم چه عواملی مانند قیمت جهانی مس، خلوص محصول، گرید، بسته‌بندی و حجم سفارش روی قیمت سولفات مس اثر می‌گذارند.",
    author: "تیم فنی شیمی گستر سولفات",
    date: "۱۴۰۵/۰۳/۲۸",
    readTime: "۵ دقیقه",
    category: "خرید و قیمت",
    tags: ["قیمت سولفات مس", "مواد شیمیایی", "بازار مس", "خرید عمده"],
    content: [
      "قیمت سولفات مس تحت تأثیر چند عامل اصلی تعیین می‌شود و به همین دلیل ممکن است در بازه‌های زمانی مختلف تغییر کند. شناخت این عوامل به خریداران کمک می‌کند تصمیم دقیق‌تری بگیرند و فقط بر اساس عدد نهایی قیمت قضاوت نکنند.",

      "یکی از مهم‌ترین عوامل، قیمت فلز مس در بازارهای جهانی است. از آنجا که مس ماده اصلی در تولید سولفات مس است، نوسان قیمت آن می‌تواند مستقیماً بر قیمت نهایی محصول اثر بگذارد.",

      "عامل بعدی، درصد خلوص و کیفیت محصول است. سولفات مس با خلوص بالاتر و آنالیز دقیق‌تر معمولاً قیمت بالاتری دارد، اما در بسیاری از کاربردها بازدهی بهتر و ریسک کمتری ایجاد می‌کند.",

      "نوع بسته‌بندی و حجم سفارش نیز بر قیمت اثرگذار است. سفارش‌های عمده معمولاً از نظر قیمت واحد، اقتصادی‌تر هستند. همچنین بسته‌بندی مقاوم و استاندارد می‌تواند در حمل‌ونقل و نگهداری محصول اهمیت زیادی داشته باشد.",

      "در نهایت، هزینه‌های حمل، شرایط بازار داخلی و موجودی محصول نیز از عوامل مؤثر هستند. برای دریافت قیمت دقیق، بهتر است با واحد فروش تماس گرفته شود تا بر اساس حجم سفارش و مقصد ارسال، قیمت نهایی اعلام شود.",
    ],
  },
  {
    slug: "copper-sulfate-agriculture-uses",
    title: "کاربرد سولفات مس در کشاورزی و باغداری",
    description:
      "سولفات مس در کشاورزی برای تأمین عنصر مس، کنترل برخی بیماری‌های قارچی و اصلاح کمبودهای تغذیه‌ای گیاهان مورد استفاده قرار می‌گیرد.",
    author: "تیم فنی شیمی گستر سولفات",
    date: "۱۴۰۵/۰۳/۲۸",
    readTime: "۷ دقیقه",
    category: "کاربردها و کشاورزی",
    tags: ["سولفات مس کشاورزی", "کود مس", "باغداری", "کنترل قارچ"],
    content: [
      "سولفات مس در کشاورزی و باغداری کاربردهای متنوعی دارد. عنصر مس یکی از ریزمغذی‌های ضروری برای رشد گیاهان است و کمبود آن می‌تواند باعث کاهش کیفیت رشد، ضعف برگ‌ها و افت عملکرد محصول شود.",

      "یکی از کاربردهای مهم سولفات مس، کمک به رفع کمبود مس در خاک و گیاه است. البته میزان مصرف باید بر اساس آزمون خاک، نوع محصول و توصیه کارشناسان انجام شود، زیرا مصرف بیش از حد ترکیبات مس می‌تواند برای گیاه و خاک مشکل‌ساز باشد.",

      "سولفات مس همچنین در برخی فرمولاسیون‌ها برای کنترل بیماری‌های قارچی مورد استفاده قرار می‌گیرد. در باغداری، ترکیبات مبتنی بر مس سابقه طولانی در مدیریت برخی بیماری‌های گیاهی دارند.",

      "نکته مهم در استفاده کشاورزی، توجه به دوز مصرف، زمان مصرف و سازگاری با سایر ترکیبات است. استفاده نادرست می‌تواند باعث گیاه‌سوزی یا کاهش اثربخشی شود.",

      "برای انتخاب سولفات مس مناسب کشاورزی، کیفیت محصول، خلوص، قابلیت حل‌شوندگی و اعتبار تأمین‌کننده اهمیت دارد. مشاوره با کارشناس فنی پیش از مصرف می‌تواند از خطاهای رایج جلوگیری کند.",
    ],
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "مقاله پیدا نشد",
    };
  }

  return {
    title: `${post.title} | شیمی گستر سولفات`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white pb-24">
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-100">
        <div className="h-full bg-[#c27829] w-1/3" />
      </div>

      <header className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c27829] mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} className="rotate-180" />
            برگشت به مجله علمی
          </Link>

          <div className="mb-5">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-black text-slate-600">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[#0a1a2f] leading-tight mb-8 tracking-tight">
            {post.title}
          </h1>

          <p className="text-lg leading-9 text-slate-600 mb-8">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0a1a2f] text-white flex items-center justify-center text-[10px] font-bold">
                SG
              </div>
              <span className="font-bold text-slate-900">{post.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#c27829]" />
              {post.date}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#c27829]" />
              زمان مطالعه: {post.readTime}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
          <div className="lg:sticky lg:top-28 space-y-8">
            <div className="bg-[#0a1a2f] rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-xl font-black mb-4 text-[#f0b56d]">
                  خرید مستقیم سولفات مس
                </h2>

                <p className="text-sm text-slate-400 leading-7 mb-8">
                  شیمی گستر سولفات، تأمین‌کننده سولفات مس پنج آبه با امکان ارائه
                  مشاوره، برگه آنالیز و قیمت رقابتی برای سفارش‌های عمده.
                </p>

                <Link
                  href="/products/copper-sulfate"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#c27829] rounded-2xl font-black hover:bg-[#a86522] transition-all"
                >
                  مشاهده قیمت و مشخصات
                  <ArrowLeft size={18} />
                </Link>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                <Phone size={24} className="text-[#c27829]" />
              </div>

              <h3 className="font-black text-[#0a1a2f] mb-2">
                نیاز به راهنمایی فنی دارید؟
              </h3>

              <p className="text-xs text-slate-500 leading-6 mb-6">
                کارشناسان ما آماده پاسخگویی به سوالات تخصصی شما درباره انتخاب،
                خرید و مصرف سولفات مس هستند.
              </p>

              <a
                href="tel:09123063576"
                className="block w-full py-3 border-2 border-[#c27829] text-[#c27829] rounded-xl font-bold hover:bg-[#c27829] hover:text-white transition-all"
              >
                تماس با واحد فنی
              </a>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h3 className="font-black text-[#0a1a2f] mb-5 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#c27829]" />
                نکات کلیدی مقاله
              </h3>

              <ul className="space-y-4 text-sm text-slate-600 leading-7">
                <li className="flex gap-2">
                  <span className="text-[#c27829] font-black">•</span>
                  بررسی خلوص و کیفیت محصول پیش از خرید اهمیت زیادی دارد.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c27829] font-black">•</span>
                  برگه آنالیز معتبر ریسک خرید مواد شیمیایی را کاهش می‌دهد.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c27829] font-black">•</span>
                  انتخاب تأمین‌کننده معتبر، قیمت و پایداری تأمین را بهتر می‌کند.
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-8 order-1 lg:order-2">
          <div className="max-w-none">
            <p className="text-xl leading-relaxed text-slate-600 font-medium mb-12 pb-12 border-b border-slate-100">
              {post.description}
            </p>

            <div className="space-y-8">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-800 text-lg leading-[2.4rem] text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="my-14 bg-slate-50 border border-slate-100 rounded-[2rem] p-7 md:p-8">
              <h2 className="text-2xl font-black text-[#0a1a2f] mb-4">
                جمع‌بندی
              </h2>

              <p className="text-slate-700 leading-9 text-justify">
                انتخاب سولفات مس مناسب، نیازمند توجه به کیفیت، خلوص، نوع کاربرد
                و اعتبار تأمین‌کننده است. اگر قصد خرید عمده سولفات مس دارید،
                پیشنهاد می‌شود پیش از ثبت سفارش، مشخصات فنی محصول و شرایط تحویل
                را با کارشناسان فروش بررسی کنید.
              </p>

              <div className="mt-7">
                <Link
                  href="/products/copper-sulfate"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#c27829] text-white rounded-2xl font-black hover:bg-[#a86522] transition-all"
                >
                  مشاهده صفحه سولفات مس
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
            <span className="text-sm font-bold text-slate-400 ml-2 flex items-center gap-1">
              <Tag size={16} />
              برچسب‌ها:
            </span>

            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-bold border border-slate-100 cursor-default"
              >
                # {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
