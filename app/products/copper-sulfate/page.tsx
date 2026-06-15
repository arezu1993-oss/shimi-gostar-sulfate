import React from "react";
import { FlaskConical, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CopperSulfatePage() {
  const analysisData = [
    { param: "خلوص (CuSO4·5H2O)", value: "98% - 99%", unit: "درصد" },
    { param: "مس (Cu)", value: "24.5% - 25.2%", unit: "درصد" },
    { param: "آهن (Fe)", value: "< 0.1", unit: "درصد" },
    { param: "نامحلول در آب", value: "< 0.05", unit: "درصد" },
  ];

  const applications = [
    "کشاورزی و تولید کود",
    "صنایع آبکاری فلزات",
    "صنایع شیمیایی",
    "خوراک دام و طیور",
    "استخراج و فرآوری مواد معدنی",
    "مصارف آزمایشگاهی",
  ];

  const features = [
    "خلوص بالا و یکنواختی کریستال",
    "حلالیت مناسب در آب",
    "کنترل کیفی در هر بچ تولید",
    "مناسب مصرف صنعتی و کشاورزی",
    "قابل ارائه در بسته‌بندی‌های مختلف",
  ];

  return (
    <div className="pt-24 pb-16 bg-white font-vazir">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-12 md:py-20 px-6 border-b border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            {/* بخش متن - اولویت نمایش در راست */}
            <div className="flex-1 text-right order-2 lg:order-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#c27829] leading-tight">
                سولفات مس ۵ آبه
                <span className="block text-xl md:text-2xl text-slate-400 mt-2 font-medium">
                  تولید شده با خلوص استاندارد صنعتی
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-xl ml-auto">
                محصولی با حلالیت بالا و آنالیز دقیق، بهینه‌سازی شده برای مصارف
                کشاورزی، آبکاری و تولید مکمل‌های دامی.
              </p>

              <div className="flex flex-wrap gap-3 justify-start flex-row-reverse">
                <a
                  href="tel:09127017456"
                  className="bg-[#c27829] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:bg-[#a66623]"
                >
                  استعلام قیمت
                </a>
                <a
                  href="#analysis"
                  className="bg-white/5 border border-white/10 text-slate-300 px-6 py-2.5 rounded-lg font-medium text-sm transition-all hover:bg-white/10"
                >
                  مشاهده آنالیز
                </a>
              </div>
            </div>

            {/* بخش عکس - ساده و سبک */}
            <div className="w-full max-w-[280px] md:max-w-md lg:flex-1 order-1 lg:order-2">
              <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden border border-white/10 shadow-sm">
                <Image
                  src="/images/hero-2.jpg"
                  alt="Copper Sulfate"
                  fill
                  className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 mt-16">
        {/* معرفی محصول */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">معرفی سولفات مس</h2>

          <p className="text-slate-700 leading-loose">
            سولفات مس پنج آبه یکی از ترکیبات پرکاربرد در صنایع مختلف است که به
            صورت کریستال‌های آبی رنگ تولید می‌شود. این ماده در صنایع کشاورزی
            برای تولید کودها و قارچ‌کش‌ها، در صنایع آبکاری فلزات، در فرآوری مواد
            معدنی و همچنین در بسیاری از کاربردهای شیمیایی مورد استفاده قرار
            می‌گیرد.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* محتوای اصلی */}
          <div className="lg:col-span-2 space-y-16">
            {/* کاربردها */}
            <section>
              <h2 className="text-2xl font-bold mb-6">کاربردهای سولفات مس</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {applications.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg"
                  >
                    <CheckCircle2 className="text-[#c27829]" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* آنالیز */}
            <section
              id="analysis"
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FlaskConical className="text-[#c27829]" />
                آنالیز فنی محصول
              </h2>

              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-right">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 border-b">پارامتر</th>
                      <th className="p-4 border-b text-center">مقدار</th>
                      <th className="p-4 border-b text-center">واحد</th>
                    </tr>
                  </thead>

                  <tbody>
                    {analysisData.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition">
                        <td className="p-4 border-b font-medium">
                          {item.param}
                        </td>

                        <td className="p-4 border-b text-center ltr">
                          {item.value}
                        </td>

                        <td className="p-4 border-b text-center text-sm text-slate-500">
                          {item.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ویژگی ها */}
            <section>
              <h2 className="text-2xl font-bold mb-6">ویژگی‌های محصول</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg"
                  >
                    <CheckCircle2 className="text-[#c27829]" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* بسته بندی */}
            <section>
              <h2 className="text-2xl font-bold mb-6">بسته‌بندی و ارسال</h2>

              <p className="text-slate-700 leading-loose">
                سولفات مس تولیدی در بسته‌بندی‌های مناسب برای حمل و نگهداری ارائه
                می‌شود. امکان تأمین محصول برای مصرف‌کنندگان صنعتی و کشاورزی در
                حجم‌های مختلف فراهم است. ارسال سفارش‌ها از طریق باربری‌های معتبر
                انجام می‌شود.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold mb-6">سوالات متداول</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">
                    سولفات مس چه کاربردهایی دارد؟
                  </h3>
                  <p className="text-slate-600">
                    این ماده در کشاورزی، آبکاری فلزات، صنایع شیمیایی، خوراک دام
                    و فرآوری مواد معدنی کاربرد دارد.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">
                    حداقل میزان سفارش چقدر است؟
                  </h3>
                  <p className="text-slate-600">
                    میزان سفارش بسته به نوع مصرف و شرایط تأمین قابل بررسی است.
                    برای دریافت اطلاعات دقیق با واحد فروش تماس بگیرید.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* سایدبار */}
          <aside className="space-y-6">
            <div className="bg-[#0a1528] text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">استعلام قیمت سولفات مس</h3>

              <p className="text-slate-400 mb-6 text-sm">
                برای دریافت قیمت روز و اطلاعات فنی محصول با واحد فروش تماس
                بگیرید.
              </p>

              <a
                href="tel:09127017456"
                className="block w-full bg-[#c27829] hover:bg-[#a66623] text-center py-4 rounded-xl font-bold"
              >
                تماس با فروش
              </a>

              <p className="text-xs text-slate-500 mt-4 text-center">
                پاسخگویی مستقیم واحد فروش
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
