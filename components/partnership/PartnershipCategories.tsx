import {
  Factory,
  Handshake,
  PackageCheck,
  Route,
  Ship,
  Store,
} from "lucide-react";

const categories = [
  {
    title: "تولیدکنندگان",
    description: "همکاری با واحدهای تولیدی برای تأمین پایدار محصولات سولفاته.",
    icon: Factory,
  },
  {
    title: "بازرگانان",
    description: "ایجاد مسیرهای همکاری تجاری برای بازارهای داخلی و صادراتی.",
    icon: Ship,
  },
  {
    title: "مصرف‌کنندگان",
    description: "تأمین نیاز صنایع مصرف‌کننده با کیفیت پایدار و تحویل منظم.",
    icon: PackageCheck,
  },
  {
    title: "نمایندگی فروش",
    description: "بررسی درخواست‌های نمایندگی در مناطق دارای ظرفیت بازار.",
    icon: Store,
  },
  {
    title: "تأمین مواد اولیه",
    description: "همکاری با تأمین‌کنندگان معتبر مواد اولیه و اقلام صنعتی.",
    icon: Handshake,
  },
  {
    title: "حمل و لجستیک",
    description:
      "تعامل با شرکت‌های حمل‌ونقل برای ارسال دقیق، ایمن و زمان‌بندی‌شده.",
    icon: Route,
  },
];

export default function PartnershipCategories() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold text-yellow-600">
            فرصت‌های همکاری
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            مسیرهای همکاری با ما
          </h2>

          <p className="mt-4 leading-8 text-zinc-600">
            هر درخواست همکاری بر اساس حوزه فعالیت، منطقه جغرافیایی، ظرفیت همکاری
            و نیاز عملیاتی بررسی می‌شود.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-zinc-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl font-black text-zinc-950">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {category.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
