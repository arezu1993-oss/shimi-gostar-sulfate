import Link from "next/link";

export default function PartnershipHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.22),transparent_35%),linear-gradient(135deg,#18181b,#09090b)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            همکاری صنعتی، پایدار و قابل اعتماد
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            همکاری با شیمی گستر سولفات
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            ما آماده همکاری با تولیدکنندگان، بازرگانان، مصرف‌کنندگان صنعتی،
            نمایندگان فروش، تأمین‌کنندگان مواد اولیه و فعالان حمل‌ونقل هستیم.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#partnership-form"
              className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-yellow-300"
            >
              ثبت درخواست همکاری
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-yellow-400 hover:text-yellow-300"
            >
              تماس مستقیم
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
