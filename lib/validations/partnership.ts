import { z } from "zod";

export const cooperationTypes = [
  "manufacturers",
  "traders",
  "consumers",
  "agency",
  "raw-materials",
  "logistics",
] as const;

export const cooperationTypeLabels: Record<
  (typeof cooperationTypes)[number],
  string
> = {
  manufacturers: "تولیدکنندگان",
  traders: "بازرگانان",
  consumers: "مصرف‌کنندگان",
  agency: "نمایندگی فروش",
  "raw-materials": "تأمین مواد اولیه",
  logistics: "حمل و لجستیک",
};

export const partnershipSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد.")
    .max(80, "نام و نام خانوادگی بیش از حد طولانی است."),

  companyName: z
    .string()
    .trim()
    .max(120, "نام شرکت بیش از حد طولانی است.")
    .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .trim()
    .min(8, "شماره تماس معتبر نیست.")
    .max(20, "شماره تماس معتبر نیست.")
    .regex(
      /^[0-9+\-\s()]+$/,
      "شماره تماس فقط می‌تواند شامل عدد و علائم تماس باشد.",
    ),

  email: z
    .string()
    .trim()
    .email("ایمیل معتبر نیست.")
    .optional()
    .or(z.literal("")),

  cooperationType: z.enum(cooperationTypes, {
    message: "نوع همکاری را انتخاب کنید.",
  }),

  city: z
    .string()
    .trim()
    .min(2, "نام شهر را وارد کنید.")
    .max(80, "نام شهر بیش از حد طولانی است."),

  message: z
    .string()
    .trim()
    .min(20, "توضیحات باید حداقل ۲۰ کاراکتر باشد.")
    .max(1500, "توضیحات نباید بیشتر از ۱۵۰۰ کاراکتر باشد."),

  website: z
    .string()
    .max(0, "درخواست نامعتبر است.")
    .optional()
    .or(z.literal("")),
});

export type PartnershipFormValues = z.infer<typeof partnershipSchema>;
