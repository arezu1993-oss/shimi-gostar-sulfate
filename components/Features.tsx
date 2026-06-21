import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Microscope,
  Scale,
  type LucideIcon,
} from "lucide-react";

type FeatureItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const features: FeatureItem[] = [
  {
    title: "کنترل کیفیت دقیق",
    desc: "محصولات با پایش کیفی منظم و بررسی مشخصات فنی عرضه می‌شوند تا کیفیت در سفارش‌های تکرارشونده و مصرف صنعتی پایدار بماند.",
    icon: Microscope,
  },
  {
    title: "تخصص در محصولات سولفاته",
    desc: "تمرکز تخصصی بر تولید و تأمین سولفات مس و سایر سولفات‌های پرکاربرد، انتخاب محصول مناسب را برای کاربردهای صنعتی و کشاورزی ساده‌تر می‌کند.",
    icon: FlaskConical,
  },
  {
    title: "همکاری عمده و قراردادی",
    desc: "امکان تأمین برای واحدهای تولیدی، توزیع‌کنندگان و مصرف‌کنندگان عمده با رویکرد همکاری منظم، برنامه‌پذیر و قابل اتکا فراهم است.",
    icon: Factory,
  },
  {
    title: "شفافیت در مشخصات سفارش",
    desc: "اطلاعات فنی، نوع بسته‌بندی، شرایط تحویل و جزئیات سفارش با شفافیت ارائه می‌شود تا فرآیند خرید سریع‌تر و مطمئن‌تر انجام شود.",
    icon: ClipboardCheck,
  },
];

const highlights = [
  "مناسب برای تأمین عمده و همکاری B2B",
  "تمرکز تخصصی بر سولفات مس و ترکیبات سولفاته",
  "پشتیبانی فروش برای انتخاب محصول متناسب با نیاز",
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-[#c27829]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-8rem] h-64 w-64 rounded-full bg-slate-900/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c27829]/20 bg-[#c27829]/5 px-5 py-2 text-sm font-bold text-[#c27829]">
              <Scale size={16} />
              چرا شیمی گستر سولفات
            </span>

            <h2 className="mt-6 text-3xl font-black leading-[1.45] tracking-tight text-[#0a1a2f] sm:text-4xl md:text-5xl md:leading-[1.35]">
              تأمین تخصصی با
              <span className="text-[#c27829]"> کیفیت پایدار</span>
              <br />
              برای مصرف‌کنندگان صنعتی
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              شیمی گستر سولفات با تمرکز بر محصولات سولفاته، کنترل کیفیت منظم و
              پاسخ‌گویی دقیق به نیاز مشتریان عمده، همراه مطمئن صنایع، کشاورزی و
              واحدهای تولیدی است.
            </p>

            <div className="mt-7 space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <BadgeCheck size={18} className="shrink-0 text-[#c27829]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#0a1a2f] px-6 py-4 text-sm font-black text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#c27829]"
              >
                دریافت مشاوره و استعلام
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:col-span-8 lg:auto-rows-fr">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c27829]/25 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-gradient-to-bl from-[#c27829]/10 to-transparent" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[#c27829] transition duration-300 group-hover:bg-[#c27829] group-hover:text-white">
                      <Icon size={30} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-6 text-xl font-black leading-8 text-[#0a1a2f]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {feature.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
