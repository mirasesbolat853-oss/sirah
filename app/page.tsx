"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Language = "ru" | "kz";
type Theme = "light" | "dark";

export default function Home() {
  const router = useRouter();

  const [language, setLanguage] = useState<Language | null>(null);
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Язык
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "ru" || savedLanguage === "kz") {
      setLanguage(savedLanguage);
    } else {
      router.replace("/language");
    }

    // Тема
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);

      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initialTheme: Theme = prefersDark ? "dark" : "light";

      setTheme(initialTheme);

      document.documentElement.classList.toggle(
        "dark",
        initialTheme === "dark"
      );
    }
  }, [router]);

  if (!language || !theme) {
    return <main className="min-h-screen bg-background" />;
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
    const newLanguage: Language =
      language === "ru" ? "kz" : "ru";

    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
  };

  const toggleTheme = () => {
    const newTheme: Theme =
      theme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  const isDark = theme === "dark";

  return (
    <main className="relative min-h-screen bg-background text-foreground flex items-center justify-center px-6 transition-colors duration-300">

      {/* Переключатели */}
      <div className="absolute right-5 top-5 flex items-center gap-3 text-xs tracking-widest">

        {/* Язык */}
        <button
          onClick={changeLanguage}
          aria-label="Сменить язык"
          className="flex items-center gap-2"
        >
          <span
            className={
              language === "ru"
                ? "text-foreground"
                : "text-zinc-400 dark:text-zinc-600"
            }
          >
            RU
          </span>

          <span className="text-zinc-400 dark:text-zinc-700">
            /
          </span>

          <span
            className={
              language === "kz"
                ? "text-foreground"
                : "text-zinc-400 dark:text-zinc-600"
            }
          >
            KZ
          </span>
        </button>

        {/* Разделитель */}
        <span className="text-zinc-300 dark:text-zinc-800">
          |
        </span>

        {/* Тема */}
        <button
          onClick={toggleTheme}
          aria-label="Сменить тему"
          className="text-base tracking-normal transition-opacity hover:opacity-70"
        >
          {isDark ? "☀" : "☾"}
        </button>
      </div>

      <div className="w-full max-w-md">

        <p className="text-center tracking-[0.4em] text-zinc-500 text-sm">
          SIRAH
        </p>

        <h1 className="mt-6 text-center text-5xl font-bold">
          {text.title}
        </h1>

        <p className="mt-6 text-center text-zinc-600 dark:text-zinc-400 leading-8">
          {text.description}
        </p>

        <Link
          href="/stories"
          className="mt-14 block rounded-2xl bg-foreground py-4 text-center text-background text-lg font-semibold transition hover:scale-[1.02]"
        >
          {text.button}
        </Link>

      </div>
    </main>
  );
}