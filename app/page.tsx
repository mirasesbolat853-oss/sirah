"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Language = "ru" | "kz";

export default function Home() {
  const router = useRouter();
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "ru" || savedLanguage === "kz") {
      setLanguage(savedLanguage);
    } else {
      router.replace("/language");
    }
  }, [router]);

  if (!language) {
    return <main className="min-h-screen bg-[#0B0B0B]" />;
  }

  const content = {
    ru: {
      title: "Жизнь Посланника ﷺ",
      description: (
        <>
          История,
          <br />
          которую хочется читать дальше.
        </>
      ),
      button: "Бисмиллях",
    },

    kz: {
      title: "Алла Елшісінің ﷺ өмірі",
      description: (
        <>
          Әрі қарай оқығың
          <br />
          келетін тарих.
        </>
      ),
      button: "Бисмиллях",
    },
  };

  const text = content[language];

  const changeLanguage = () => {
    const newLanguage: Language = language === "ru" ? "kz" : "ru";

    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center px-6">

      {/* Переключатель языка */}
      <button
        onClick={changeLanguage}
        aria-label="Сменить язык"
        className="absolute right-5 top-5 flex items-center gap-2 text-xs tracking-widest"
      >
        <span
          className={
            language === "ru"
              ? "text-white"
              : "text-zinc-600"
          }
        >
          RU
        </span>

        <span className="text-zinc-700">/</span>

        <span
          className={
            language === "kz"
              ? "text-white"
              : "text-zinc-600"
          }
        >
          KZ
        </span>
      </button>

      <div className="w-full max-w-md">
        <p className="text-center tracking-[0.4em] text-zinc-500 text-sm">
          SIRAH
        </p>

        <h1 className="mt-6 text-center text-5xl font-bold">
          {text.title}
        </h1>

        <p className="mt-6 text-center text-zinc-400 leading-8">
          {text.description}
        </p>

        <Link
          href="/stories"
          className="mt-14 block rounded-2xl bg-white py-4 text-center text-black text-lg font-semibold transition hover:scale-[1.02]"
        >
          {text.button}
        </Link>
      </div>
    </main>
  );
}