import { ShieldCheck, Truck, Infinity, Microscope } from "lucide-react";

const features = [
  {
    title: "تضمین آنالیز دقیق",
    desc: "تمامی محصولات با برگه آنالیز معتبر و پایش مستمر در آزمایشگاه اختصاصی ارائه می‌شوند.",
    icon: Microscope,
  },
  {
    title: "تأمین پایدار و مستمر",
    desc: "زنجیره تأمین ما تضمین‌کننده موجودی همیشگی کالا برای سفارش‌های عمده و قراردادی است.",
    icon: Infinity,
  },
  {
    title: "بسته‌بندی استاندارد",
    desc: "ارائه محصولات در کیسه‌های مقاوم و لمینت‌شده جهت حفظ کیفیت در انبارداری طولانی.",
    icon: ShieldCheck,
  },
  {
    title: "لجستیک و ارسال سریع",
    desc: "هماهنگی کامل فرآیند بارگیری و ارسال به سراسر کشور در کوتاه‌ترین زمان ممکن.",
    icon: Truck,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-6 rounded-3xl bg-white shadow-xl shadow-slate-200 flex items-center justify-center text-[#c27829] group-hover:bg-[#c27829] group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                <f.icon size={35} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {f.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
