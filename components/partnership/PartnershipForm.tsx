"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  cooperationTypeLabels,
  partnershipSchema,
  type PartnershipFormValues,
} from "@/lib/validations/partnership";

const inputClassName =
  "mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10";

const labelClassName = "text-sm font-bold text-zinc-800";

type SubmitState = {
  type: "success" | "error";
  message: string;
};

export default function PartnershipForm() {
  const [submitState, setSubmitState] = useState<SubmitState | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnershipFormValues>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      cooperationType: "manufacturers",
      city: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: PartnershipFormValues) {
    setSubmitState(null);

    if (values.website) {
      setSubmitState({
        type: "error",
        message: "درخواست نامعتبر است.",
      });
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_PARTNERSHIP_ENDPOINT;

    if (!endpoint) {
      setSubmitState({
        type: "error",
        message:
          "آدرس سرویس ارسال فرم تنظیم نشده است. لطفاً فایل .env.local را بررسی کنید.",
      });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form: "partnership",
          fullName: values.fullName,
          companyName: values.companyName,
          phone: values.phone,
          email: values.email,
          cooperationType: values.cooperationType,
          cooperationTypeLabel: cooperationTypeLabels[values.cooperationType],
          city: values.city,
          message: values.message,
          website: values.website,
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "ارسال درخواست با خطا مواجه شد.");
      }

      setSubmitState({
        type: "success",
        message:
          "درخواست همکاری شما با موفقیت ثبت شد. همکاران ما پس از بررسی با شما تماس می‌گیرند.",
      });

      reset();
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "ارسال درخواست با خطا مواجه شد. لطفاً چند دقیقه بعد دوباره تلاش کنید.",
      });
    }
  }

  return (
    <section id="partnership-form" className="bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span className="text-sm font-bold text-yellow-600">ثبت درخواست</span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            فرم همکاری با ما
          </h2>

          <p className="mt-4 leading-8 text-zinc-600">
            اطلاعات شما پس از ثبت توسط تیم شیمی گستر سولفات بررسی می‌شود و در
            صورت تطابق با ظرفیت‌های همکاری، برای هماهنگی‌های بعدی با شما تماس
            گرفته خواهد شد.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-black text-zinc-950">
              برای بررسی سریع‌تر
            </p>

            <p className="mt-2 leading-7 text-zinc-600">
              لطفاً نوع همکاری، شهر، حوزه فعالیت، ظرفیت همکاری و توضیحات تکمیلی
              را دقیق وارد کنید.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-200/60 sm:p-8"
          noValidate
        >
          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClassName} htmlFor="fullName">
                نام و نام خانوادگی *
              </label>
              <input
                id="fullName"
                className={inputClassName}
                placeholder="مثلاً علی احمدی"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label className={labelClassName} htmlFor="companyName">
                نام شرکت
              </label>
              <input
                id="companyName"
                className={inputClassName}
                placeholder="نام شرکت یا مجموعه"
                {...register("companyName")}
              />
              {errors.companyName && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <label className={labelClassName} htmlFor="phone">
                شماره تماس *
              </label>
              <input
                id="phone"
                dir="ltr"
                className={inputClassName}
                placeholder="09123456789"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className={labelClassName} htmlFor="email">
                ایمیل
              </label>
              <input
                id="email"
                dir="ltr"
                type="email"
                className={inputClassName}
                placeholder="name@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className={labelClassName} htmlFor="cooperationType">
                نوع همکاری *
              </label>
              <select
                id="cooperationType"
                className={inputClassName}
                {...register("cooperationType")}
              >
                {Object.entries(cooperationTypeLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {errors.cooperationType && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.cooperationType.message}
                </p>
              )}
            </div>

            <div>
              <label className={labelClassName} htmlFor="city">
                شهر / استان
              </label>
              <input
                id="city"
                className={inputClassName}
                placeholder="مثلاً تهران"
                {...register("city")}
              />
              {errors.city && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <label className={labelClassName} htmlFor="message">
              توضیحات همکاری *
            </label>
            <textarea
              id="message"
              rows={6}
              className={inputClassName}
              placeholder="حوزه فعالیت، ظرفیت همکاری و توضیحات تکمیلی را وارد کنید."
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          {submitState && (
            <div
              className={`mt-5 rounded-xl border px-4 py-3 text-sm leading-7 ${
                submitState.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {submitState.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-xl bg-zinc-950 px-6 py-4 text-sm font-black text-white transition hover:bg-yellow-400 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "در حال ارسال..." : "ارسال درخواست همکاری"}
          </button>
        </form>
      </div>
    </section>
  );
}
