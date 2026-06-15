import Link from "next/link";
import {
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  ArrowLeft,
  ShieldCheck,
  FileText,
  Headphones,
} from "lucide-react";

const contactCards = [
  {
    title: "تماس مستقیم",
    value: "۰۹۱۲۳۰۶۳۵۷۶",
    href: "tel:09123063576",
    description: "برای استعلام قیمت، ثبت سفارش و دریافت اطلاعات محصول",
    icon: Phone,
    color: "text-[#c27829]",
    bg: "bg-[#c27829]/10",
  },
  {
    title: "واتس‌اپ واحد فروش",
    value: "۰۹۱۲۰۹۰۹۳۲",
    href: "https://wa.me/98912090932",
    description: "مناسب برای دریافت پاسخ سریع، هماهنگی و ارسال درخواست",
    icon: MessageSquare,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "نشانی مجموعه",
    value: "تهران، چیتگر، مجتمع آرام، بلوک A شرقی، طبقه همکف، واحد ۱",
    href: "#",
    description: "برای ارتباط حضوری و هماهنگی‌های کاری",
    icon: MapPin,
    color: "text-slate-700",
    bg: "bg-slate-100",
  },
  {
    title: "ساعات پاسخگویی",
    value: "شنبه تا چهارشنبه | ۸ الی ۱۷",
    href: "#",
    description: "در ساعات کاری پاسخگوی درخواست‌های فروش و مشاوره هستیم",
    icon: Clock,
    color: "text-sky-700",
    bg: "bg-sky-50",
  },
];

const supportItems = [
  {
    title: "استعلام قیمت",
    description: "دریافت قیمت روز برای سفارش‌های جزئی یا عمده",
    icon: FileText,
  },
  {
    title: "مشاوره خرید",
    description: "راهنمایی برای انتخاب محصول متناسب با نیاز شما",
    icon: Headphones,
  },
  {
    title: "هماهنگی سفارش",
    description: "پیگیری شرایط تامین، بسته‌بندی و تحویل",
    icon: ShieldCheck,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_top_right,_rgba(194,120,41,0.12),_transparent_28%)]">
        <div className="container mx-auto px-6 pt-32 pb-16 md:px-8 md:pt-36 md:pb-20 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c27829]/20 bg-[#c27829]/10 px-4 py-2 text-xs font-black text-[#c27829]">
                <Phone size={14} />
                ارتباط با واحد فروش
              </div>

              <h1 className="text-3xl font-black leading-[1.9] text-[#0a1a2f] md:text-5xl">
                با ما در ارتباط باشید
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
                برای دریافت مشاوره، استعلام قیمت، هماهنگی سفارش و اطلاعات بیشتر
                درباره محصولات، می‌توانید از مسیرهای ارتباطی زیر با ما در تماس
                باشید.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:09123063576"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-black text-white shadow-xl shadow-orange-200 transition-all hover:bg-[#d28735]"
                >
                  تماس مستقیم
                  <Phone size={18} />
                </a>

                <a
                  href="https://wa.me/989120909323"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-[#0a1a2f] hover:border-green-200 hover:bg-green-50"
                >
                  پیام در واتس‌اپ
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white">
                  <Headphones size={28} />
                </div>

                <h2 className="text-2xl font-black text-[#0a1a2f]">
                  پاسخگویی سریع
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  برای درخواست قیمت، دریافت اطلاعات محصول، آنالیز و هماهنگی
                  سفارش می‌توانید با واحد فروش در ارتباط باشید.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "استعلام قیمت روز",
                    "دریافت اطلاعات محصول",
                    "هماهنگی سفارش و تامین",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <ShieldCheck size={18} className="text-[#c27829]" />
                      <span className="text-sm font-bold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-10">
            <h2 className="text-2xl font-black text-[#0a1a2f] md:text-4xl">
              مسیرهای ارتباطی
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-500">
              از طریق تماس تلفنی، واتس‌اپ یا مراجعه حضوری می‌توانید با ما در
              ارتباط باشید.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((item) => {
              const Icon = item.icon;
              const isLink = item.href !== "#";

              const content = (
                <div className="group rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-black text-[#0a1a2f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 text-base font-black text-[#0a1a2f] leading-8 break-words">
                    {item.value}
                  </div>
                </div>
              );

              if (isLink) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={item.title}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Support Items */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black text-[#0a1a2f] md:text-4xl">
              چه کمکی می‌توانیم بکنیم؟
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
              تیم فروش و پشتیبانی آماده پاسخگویی به درخواست‌های شما در زمینه
              تامین و سفارش است.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {supportItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1a2f] text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-black text-[#0a1a2f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0a1a2f] py-16 md:py-20">
        <div className="container mx-auto px-6 text-center md:px-8 lg:px-10">
          <h2 className="text-2xl font-black text-white md:text-4xl">
            برای دریافت اطلاعات بیشتر با ما تماس بگیرید
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300">
            در صورت نیاز به اطلاعات محصول، قیمت یا هماهنگی سفارش، تیم فروش آماده
            پاسخگویی است.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:09123063576"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-black text-white transition-all hover:bg-[#d28735]"
            >
              تماس مستقیم
              <Phone size={18} />
            </a>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white hover:bg-white/10"
            >
              مشاهده محصولات
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
