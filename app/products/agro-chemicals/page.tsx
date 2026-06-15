import Link from "next/link";
import { ArrowLeft, Clock3, Phone, Sprout, ShieldCheck } from "lucide-react";

export default function AgroChemicalsPage() {
  return (
    <main className="bg-white text-slate-800">
      <section className="min-h-[calc(100vh-5rem)] bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_30%)]">
        <div className="container mx-auto flex min-h-[calc(100vh-5rem)] items-center px-6 py-16 md:px-8 lg:px-10">
          <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-black text-emerald-700">
                <Clock3 size={14} />
                به‌زودی
              </div>

              <h1 className="text-3xl font-black leading-[1.9] text-[#0a1a2f] md:text-5xl">
                کود و سم کشاورزی
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
                این بخش به‌زودی برای معرفی محصولات کشاورزی، نهاده‌ها و ترکیبات
                مرتبط تکمیل می‌شود.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-black text-white transition-all hover:bg-emerald-700"
                >
                  بازگشت به محصولات
                  <ArrowLeft size={18} />
                </Link>

                <a
                  href="tel:09123063576"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-[#0a1a2f]"
                >
                  تماس با فروش
                  <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                  <Sprout size={28} />
                </div>

                <h2 className="text-2xl font-black text-[#0a1a2f]">
                  در حال آماده‌سازی
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  به‌زودی اطلاعات این بخش شامل دسته‌بندی محصولات، کاربردها و
                  مسیرهای سفارش نمایش داده می‌شود.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "محصولات کشاورزی منتخب",
                    "نهاده‌های تغذیه گیاه",
                    "اطلاعات تامین و ثبت سفارش",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3"
                    >
                      <ShieldCheck size={18} className="text-emerald-700" />
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
    </main>
  );
}
