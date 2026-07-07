import type { Metadata } from "next";
import PartnershipCategories from "@/components/partnership/PartnershipCategories";
import PartnershipForm from "@/components/partnership/PartnershipForm";
import PartnershipHero from "@/components/partnership/PartnershipHero";

export const metadata: Metadata = {
  title: "همکاری با ما | شیمی گستر سولفات",
  description:
    "ثبت درخواست همکاری با شیمی گستر سولفات برای تولیدکنندگان، بازرگانان، مصرف‌کنندگان صنعتی، نمایندگی فروش، تأمین مواد اولیه و حمل‌ونقل.",
  alternates: {
    canonical: "/partnership",
  },
};

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <PartnershipHero />
      <PartnershipCategories />
      <PartnershipForm />
    </main>
  );
}
