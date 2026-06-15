"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handle = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1a2f] text-white shadow-2xl transition-all hover:bg-[#c27829]"
    >
      <ChevronUp size={24} />
    </button>
  );
}
