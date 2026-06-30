import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function EpikaCatalogPage() {
  const pdfFile = "/catalog/epika.pdf";

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            <ArrowRight className="h-4 w-4" />
            بازگشت به صفحه اصلی
          </Link>

          <a
            href={pdfFile}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400"
          >
            <Download className="h-4 w-4" />
            دانلود PDF
          </a>
        </div>

        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            کاتالوگ محصولات اپیکا
          </h1>
          <p className="mt-2 text-sm text-white/70">
            مشاهده آنلاین کاتالوگ محصولات برند Epika
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
          <object
            data={`${pdfFile}#view=FitH`}
            type="application/pdf"
            className="h-[80vh] w-full"
          >
            {/* Fallback برای مرورگرهایی که PDF نمایش نمی‌دن */}
            <div className="flex h-[80vh] flex-col items-center justify-center gap-4 bg-slate-900 text-white">
              <p className="text-sm text-white/70">
                مرورگر شما از نمایش PDF پشتیبانی نمی‌کند.
              </p>
              <a
                href={pdfFile}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-emerald-400"
              >
                <Download className="h-4 w-4" />
                دانلود PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}
