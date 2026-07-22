"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Factory,
  Globe2,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Phone,
  Send,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  city: string;
  activity: string;
  cooperationType: string;
  capacity: string;
  contactMethod: string;
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  fullName: "",
  company: "",
  phone: "",
  city: "",
  activity: "",
  cooperationType: "",
  capacity: "",
  contactMethod: "تماس تلفنی",
  message: "",
  consent: false,
};

const OWNER_EMAIL = "amirisoorim@gmail.com";
const WHATSAPP_NUMBER = "989120909323";

const cooperationAreas = [
  {
    title: "تولیدکنندگان و واحدهای صنعتی",
    desc: "همکاری در تأمین، تولید، بسته‌بندی و توسعه ظرفیت تولید محصولات شیمیایی و معدنی.",
    icon: Factory,
  },
  {
    title: "فعالان معدن و مواد اولیه",
    desc: "بررسی ظرفیت همکاری با معادن، فرآوری‌کنندگان و تأمین‌کنندگان مواد معدنی.",
    icon: PackageSearch,
  },
  {
    title: "کشاورزی و گلخانه‌ها",
    desc: "تأمین نیازهای بخش کشاورزی، گلخانه‌ای و باغی با رویکرد همکاری پایدار.",
    icon: Leaf,
  },
  {
    title: "بازرگانی داخلی",
    desc: "همکاری با عمده‌فروشان، توزیع‌کنندگان، نمایندگان فروش و شرکت‌های بازرگانی.",
    icon: Users,
  },
  {
    title: "صادرات و بازارهای بین‌المللی",
    desc: "بررسی فرصت‌های صادراتی، تأمین سفارش‌های عمده و همکاری در بازارهای هدف.",
    icon: Globe2,
  },
  {
    title: "حمل‌ونقل و لجستیک",
    desc: "همکاری با ناوگان‌های حمل مواد صنعتی، معدنی و شیمیایی در مسیرهای داخلی و صادراتی.",
    icon: Truck,
  },
];

const processSteps = [
  {
    title: "ثبت درخواست",
    desc: "اطلاعات اولیه، حوزه فعالیت و نوع همکاری پیشنهادی خود را ثبت می‌کنید.",
  },
  {
    title: "بررسی اولیه",
    desc: "درخواست از نظر تناسب با نیازها، ظرفیت‌ها و اولویت‌های همکاری بررسی می‌شود.",
  },
  {
    title: "تماس کارشناسی",
    desc: "در صورت نیاز، برای دریافت جزئیات بیشتر با شما تماس گرفته می‌شود.",
  },
  {
    title: "شروع همکاری",
    desc: "در صورت تأیید شرایط، مسیر همکاری به‌صورت شفاف و مرحله‌به‌مرحله آغاز می‌شود.",
  },
];

const faqs = [
  {
    q: "چه نوع همکاری‌هایی قابل بررسی است؟",
    a: "همکاری در زمینه تأمین مواد اولیه، تولید، توزیع، فروش عمده، صادرات، حمل‌ونقل، همکاری معدنی و پیشنهادهای تجاری مرتبط قابل بررسی است.",
  },
  {
    q: "آیا ارسال فرم به معنی تأیید قطعی همکاری است؟",
    a: "خیر. ثبت فرم فقط برای بررسی اولیه است و تأیید همکاری پس از بررسی اطلاعات، ظرفیت‌ها و شرایط طرفین انجام می‌شود.",
  },
  {
    q: "بعد از ارسال درخواست چه اتفاقی می‌افتد؟",
    a: "اطلاعات شما بررسی می‌شود و در صورت تناسب، از طریق شماره تماس یا روش ارتباطی انتخاب‌شده با شما ارتباط گرفته خواهد شد.",
  },
  {
    q: "آیا امکان همکاری صادراتی وجود دارد؟",
    a: "بله. اگر در حوزه صادرات، بازرگانی بین‌المللی یا بازارهای هدف فعالیت دارید، می‌توانید جزئیات پیشنهاد خود را از طریق فرم ارسال کنید.",
  },
];

export default function CooperationPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const preparedMessage = useMemo(() => {
    return `
درخواست همکاری جدید

نام و نام خانوادگی:
${form.fullName || "-"}

نام شرکت / مجموعه:
${form.company || "-"}

شماره تماس:
${form.phone || "-"}

شهر / استان:
${form.city || "-"}

حوزه فعالیت:
${form.activity || "-"}

نوع همکاری پیشنهادی:
${form.cooperationType || "-"}

ظرفیت یا حجم همکاری:
${form.capacity || "-"}

روش تماس ترجیحی:
${form.contactMethod || "-"}

توضیحات:
${form.message || "-"}
`.trim();
  }, [form]);

  const updateField = (key: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const validateForm = () => {
    if (!form.fullName.trim()) return "لطفاً نام و نام خانوادگی را وارد کنید.";
    if (!form.phone.trim()) return "لطفاً شماره تماس را وارد کنید.";
    if (!form.activity.trim()) return "لطفاً حوزه فعالیت را انتخاب کنید.";
    if (!form.cooperationType.trim()) return "لطفاً نوع همکاری را انتخاب کنید.";
    if (!form.message.trim())
      return "لطفاً توضیحات کوتاهی درباره پیشنهاد همکاری بنویسید.";
    if (!form.consent)
      return "لطفاً تأیید کنید که اطلاعات ارسالی برای بررسی اولیه ثبت می‌شود.";

    const phoneRegex = /^[0-9۰-۹+\-\s]{8,20}$/;
    if (!phoneRegex.test(form.phone.trim())) {
      return "شماره تماس واردشده معتبر نیست.";
    }

    return "";
  };

  const handleEmailSubmit = () => {
    setError("");
    setSuccess("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const subject = encodeURIComponent("درخواست همکاری با شیمی گستر سولفات");
    const body = encodeURIComponent(preparedMessage);

    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;

    setSuccess(
      "پیام همکاری آماده شد. لطفاً ارسال ایمیل را در برنامه ایمیل خود تأیید کنید.",
    );
  };

  const handleWhatsAppSubmit = () => {
    setError("");
    setSuccess("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const text = encodeURIComponent(preparedMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

    setSuccess("پیام همکاری برای ارسال در واتساپ آماده شد.");
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900"
    >
      <section className="relative overflow-hidden bg-[#071527] text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-[#c27829] blur-3xl" />
          <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
              <Handshake className="h-4 w-4 text-[#f3b46b]" />
              دعوت به همکاری تخصصی
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl">
              همکاری با
              <span className="block bg-gradient-to-l from-[#f3b46b] via-[#d9913d] to-white bg-clip-text text-transparent">
                شیمی گستر سولفات
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              اگر در حوزه تولید، معدن، کشاورزی، تأمین مواد اولیه، بازرگانی،
              صادرات یا حمل‌ونقل فعالیت دارید، پیشنهاد همکاری خود را برای بررسی
              اولیه ارسال کنید.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cooperation-form"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#c27829]/25 transition hover:-translate-y-0.5 hover:bg-[#a86422]"
              >
                ثبت درخواست همکاری
                <ArrowLeft className="h-4 w-4" />
              </a>

              <a
                href="#cooperation-areas"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                مشاهده حوزه‌های همکاری
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <HeroStat value="۶+" label="حوزه همکاری" />
              <HeroStat value="۴ مرحله" label="فرآیند بررسی" />
              <HeroStat value="سریع" label="ارتباط اولیه" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-5 text-slate-900 shadow-xl sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#c27829]">
                      مسیر همکاری شفاف
                    </p>
                    <h2 className="mt-1 text-2xl font-black">
                      از معرفی تا شروع همکاری
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#071527] text-white">
                    <ClipboardList className="h-7 w-7" />
                  </div>
                </div>

                <div className="space-y-3">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-[#c27829]/30 hover:bg-[#fff8f0]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c27829] text-sm font-black text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm leading-7 text-emerald-800">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0" />
                    <p>
                      ثبت درخواست به معنی تأیید قطعی همکاری نیست و صرفاً برای
                      بررسی اولیه اطلاعات دریافت می‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 hidden rounded-3xl border border-white/20 bg-white/10 p-4 text-white shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-8 w-8 text-[#f3b46b]" />
                <div>
                  <p className="text-sm text-white/100">مناسب برای</p>
                  <p className="font-black">همکاری‌های B2B و عمده</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cooperation-areas"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-[#fff4e8] px-4 py-2 text-sm font-bold text-[#a86422]">
            <Building2 className="h-4 w-4" />
            حوزه‌های قابل همکاری
          </div>

          <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            برای چه نوع همکاری‌هایی آماده بررسی هستیم؟
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            هدف این صفحه دریافت پیشنهادهای جدی، کاربردی و قابل پیگیری از
            مجموعه‌هایی است که در زنجیره تولید، تأمین، فروش یا توسعه بازار
            فعالیت دارند.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cooperationAreas.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c27829]/40 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071527] text-white transition group-hover:bg-[#c27829]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[2rem] bg-[#071527] p-6 text-white shadow-2xl sm:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-[#f3b46b]" />
                قبل از ثبت فرم
              </div>

              <h2 className="text-3xl font-black leading-tight">
                پیشنهاد همکاری خود را دقیق‌تر معرفی کنید
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-200">
                هرچه اطلاعات شما کامل‌تر باشد، بررسی درخواست سریع‌تر و دقیق‌تر
                انجام می‌شود. لطفاً نوع فعالیت، ظرفیت، موقعیت جغرافیایی و مدل
                پیشنهادی همکاری را شفاف بنویسید.
              </p>

              <div className="mt-8 space-y-4">
                <InfoRow
                  icon={<Phone className="h-5 w-5" />}
                  title="شماره تماس فعال"
                  desc="برای پیگیری درخواست، شماره‌ای وارد کنید که در دسترس باشد."
                />
                <InfoRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="شهر و استان"
                  desc="موقعیت شما برای بررسی ظرفیت همکاری اهمیت دارد."
                />
                <InfoRow
                  icon={<MessageCircle className="h-5 w-5" />}
                  title="توضیح شفاف"
                  desc="نیاز، پیشنهاد، ظرفیت یا مدل همکاری مورد نظر را کوتاه و دقیق بنویسید."
                />
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/85">
                در نسخه فعلی، پیام فرم از طریق ایمیل یا واتساپ ارسال می‌شود.
                بعداً می‌توانیم همین فرم را به PHP و ارسال مستقیم روی هاست وصل
                کنیم.
              </div>
            </div>
          </div>

          <div id="cooperation-form" className="scroll-mt-24">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-xl sm:p-6">
              <div className="rounded-[1.5rem] bg-white p-5 sm:p-8">
                <div className="mb-8">
                  <p className="text-sm font-black text-[#c27829]">
                    فرم ثبت درخواست
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-slate-950">
                    اطلاعات همکاری
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    لطفاً فرم زیر را تکمیل کنید. بعد از تکمیل، می‌توانید پیام
                    آماده‌شده را از طریق ایمیل یا واتساپ ارسال کنید.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormInput
                    label="نام و نام خانوادگی"
                    required
                    placeholder="مثلاً: آرزو احمدی"
                    value={form.fullName}
                    onChange={(value) => updateField("fullName", value)}
                  />

                  <FormInput
                    label="نام شرکت / مجموعه"
                    placeholder="مثلاً: شرکت نمونه"
                    value={form.company}
                    onChange={(value) => updateField("company", value)}
                  />

                  <FormInput
                    label="شماره تماس"
                    required
                    placeholder="مثلاً: 09123456789"
                    value={form.phone}
                    onChange={(value) => updateField("phone", value)}
                  />

                  <FormInput
                    label="شهر / استان"
                    placeholder="مثلاً: تهران"
                    value={form.city}
                    onChange={(value) => updateField("city", value)}
                  />

                  <FormSelect
                    label="حوزه فعالیت"
                    required
                    value={form.activity}
                    onChange={(value) => updateField("activity", value)}
                    options={[
                      "تولیدکننده",
                      "تأمین‌کننده مواد اولیه",
                      "فعال معدنی",
                      "کشاورزی / گلخانه",
                      "بازرگانی داخلی",
                      "صادرات / واردات",
                      "حمل‌ونقل و لجستیک",
                      "سایر موارد",
                    ]}
                  />

                  <FormSelect
                    label="نوع همکاری پیشنهادی"
                    required
                    value={form.cooperationType}
                    onChange={(value) => updateField("cooperationType", value)}
                    options={[
                      "خرید عمده محصول",
                      "فروش و توزیع",
                      "تأمین مواد اولیه",
                      "همکاری تولیدی",
                      "همکاری معدنی",
                      "همکاری صادراتی",
                      "حمل‌ونقل",
                      "پیشنهاد دیگر",
                    ]}
                  />

                  <FormSelect
                    label="ظرفیت یا حجم همکاری"
                    value={form.capacity}
                    onChange={(value) => updateField("capacity", value)}
                    options={[
                      "کمتر از ۵ تن",
                      "۵ تا ۲۰ تن",
                      "۲۰ تا ۵۰ تن",
                      "بیشتر از ۵۰ تن",
                      "همکاری مستمر",
                      "نیاز به بررسی دارد",
                    ]}
                  />

                  <FormSelect
                    label="روش تماس ترجیحی"
                    value={form.contactMethod}
                    onChange={(value) => updateField("contactMethod", value)}
                    options={["تماس تلفنی", "واتساپ", "پیامک", "ایمیل"]}
                  />

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-extrabold text-slate-800">
                      توضیحات همکاری
                      <span className="mr-1 text-red-500">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      rows={6}
                      placeholder="لطفاً درباره نوع فعالیت، ظرفیت، نیاز، پیشنهاد همکاری یا شرایط مورد نظر خود توضیح دهید..."
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#c27829] focus:ring-4 focus:ring-[#c27829]/10"
                    />
                  </div>
                </div>

                <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => updateField("consent", e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[#c27829]"
                  />
                  <span>
                    تأیید می‌کنم اطلاعات ارسالی صرفاً برای بررسی اولیه درخواست
                    همکاری ثبت می‌شود و ثبت فرم به معنی تأیید قطعی همکاری نیست.
                  </span>
                </label>

                {error && (
                  <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-bold leading-7 text-red-700">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-bold leading-7 text-emerald-700">
                    {success}
                  </div>
                )}

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#c27829]/20 transition hover:-translate-y-0.5 hover:bg-[#a86422]"
                  >
                    <Mail className="h-5 w-5" />
                    ارسال از طریق ایمیل
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#128c7e] px-6 py-4 text-sm font-black text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-[#0f766e]"
                  >
                    <Send className="h-5 w-5" />
                    ارسال از طریق واتساپ
                  </button>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-100 p-4">
                  <p className="mb-2 text-sm font-black text-slate-800">
                    پیش‌نمایش پیام آماده ارسال:
                  </p>
                  <pre className="max-h-72 overflow-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-right text-xs leading-7 text-slate-600">
                    {preparedMessage}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4e8] px-4 py-2 text-sm font-bold text-[#a86422]">
              <MessageCircle className="h-4 w-4" />
              پرسش‌های متداول
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
              قبل از ارسال درخواست، این موارد را بدانید
            </h2>

            <p className="mt-4 text-sm leading-8 text-slate-600">
              پاسخ چند سؤال رایج درباره روند بررسی همکاری، حوزه‌های قابل قبول و
              نحوه پیگیری درخواست.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-right"
                  >
                    <span className="font-black text-slate-950">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#c27829] transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-1 text-sm leading-8 text-slate-600">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071527] p-8 text-white shadow-2xl sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold text-[#f3b46b]">
                آماده شروع گفت‌وگو هستید؟
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                پیشنهاد همکاری خود را همین حالا ارسال کنید
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-200">
                اگر پیشنهاد شما با ظرفیت‌ها و نیازهای مجموعه هم‌راستا باشد، برای
                ادامه فرآیند با شما تماس گرفته خواهد شد.
              </p>
            </div>

            <a
              href="#cooperation-form"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c27829] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#a86422]"
            >
              تکمیل فرم همکاری
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-2xl font-black text-[#f3b46b]">{value}</p>
      <p className="mt-1 text-xs text-white/75">{label}</p>
    </div>
  );
}

function InfoRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#f3b46b]">
        {icon}
      </div>
      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm leading-7 text-slate-300">{desc}</p>
      </div>
    </div>
  );
}

function FormInput({
  label,
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-extrabold text-slate-800">
        {label}
        {required && <span className="mr-1 text-red-500">*</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#c27829] focus:ring-4 focus:ring-[#c27829]/10"
      />
    </div>
  );
}

function FormSelect({
  label,
  required,
  value,
  onChange,
  options,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-extrabold text-slate-800">
        {label}
        {required && <span className="mr-1 text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-800 outline-none transition focus:border-[#c27829] focus:ring-4 focus:ring-[#c27829]/10"
      >
        <option value="">انتخاب کنید</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
