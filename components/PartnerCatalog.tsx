import Image from "next/image";
import { Download, FileText } from "lucide-react";

export default function PartnerCatalogStrip() {
  return (
    <section className="pt-1 pb-5 sm:pt-2 sm:pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-l from-white to-amber-50/40 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-amber-100/20 to-transparent" />

          <div className="grid grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[1fr_120px]">
            <div className="flex min-w-0 items-center gap-3 p-3 sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 ring-1 ring-amber-200/60">
                <FileText size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium text-amber-700 sm:text-xs">
                  شرکت همکار
                </p>

                <h2 className="mt-0.5 truncate text-sm font-extrabold tracking-tight text-zinc-900 sm:text-base md:text-lg">
                  کاتالوگ شرکت اپیکا
                </h2>

                <p className="mt-1 text-xs leading-5 text-zinc-600 sm:text-sm">
                  فایل PDF را از همین بخش دانلود کنید.
                </p>

                <a
                  href="/catalogs/epika.pdf"
                  download
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 hover:shadow-md"
                >
                  <Download size={16} />
                  دانلود
                </a>
              </div>
            </div>

            <div className="flex h-full items-center justify-center pl-3 pr-3 sm:pl-0 sm:pr-4">
              <div className="overflow-hidden rounded-xl border border-white/80 bg-white shadow-sm ring-1 ring-zinc-200/70">
                <Image
                  src="/images/epika.jpg"
                  alt="کاور کاتالوگ اپیکا"
                  width={96}
                  height={132}
                  className="h-[96px] w-[70px] object-cover sm:h-[112px] sm:w-[82px] md:h-[118px] md:w-[86px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
