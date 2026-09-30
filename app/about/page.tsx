"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Language = "ru" | "kz";
type Theme = "light" | "dark";

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>("ru");
  const [theme, setTheme] = useState<Theme | null>(null);
  const [languageReady, setLanguageReady] = useState(false);

  useEffect(() => {
    // Язык
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "kz") {
      setLanguage("kz");
    } else {
      setLanguage("ru");
    }

    setLanguageReady(true);

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
  }, []);

  if (!languageReady || !theme) {
    return (
      <main className="min-h-[100dvh] w-full bg-background" />
    );
  }

  const isDark = theme === "dark";

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

  return (
    <main className="min-h-[100dvh] bg-background text-foreground transition-colors duration-300">

      <div className="mx-auto w-full max-w-2xl px-6 py-8">

        {/* Верхняя навигация */}
        <div className="flex items-center justify-between mb-10">

          <Link
            href="/stories"
            className="text-sm text-zinc-500 hover:text-foreground transition-colors"
          >
            {language === "kz"
              ? "← Хикаяларға"
              : "← К историям"}
          </Link>

          <div className="flex items-center gap-5">

            <span className="text-sm text-zinc-500">
              Сира
            </span>

            {/* Тема */}
            <button
              onClick={toggleTheme}
              aria-label="Сменить тему"
              className="text-base leading-none transition-opacity hover:opacity-60"
            >
              {isDark ? "☀" : "☾"}
            </button>

          </div>
        </div>

        {/* Заголовок */}
        <section className="mb-12">

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">
            Сира
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            {language === "kz"
              ? "Қолданба туралы"
              : "О приложении"}
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {language === "kz"
              ? "Сира — Мұхаммед пайғамбардың ﷺ өмірбаянымен (сирасымен) қысқаша хикаялар арқылы танысудың қарапайым жолы."
              : "Сира — это простой способ знакомиться с жизнеописанием Пророка Мухаммада ﷺ небольшими историями."}
          </p>

        </section>

        {/* Зачем создан */}
        <section className="mb-12">

          <h2 className="text-xl font-semibold mb-4">
            {language === "kz"
              ? "Сира не үшін жасалды?"
              : "Зачем создан Сира?"}
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            {language === "kz"
              ? "Біз сираны үйренуді қарапайым әрі қолжетімді еткіміз келді. Ұзақ мәтіндердің орнына оқиға бірінен соң бірі оқуға ыңғайлы шағын бөлімдерге бөлінген."
              : "Мы хотели сделать изучение сиры простым и доступным. Вместо длинных текстов история разделена на небольшие части, которые можно читать одну за другой."}
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {language === "kz"
              ? "Қолданбаның мақсаты — оқуға уақыт аз болған күннің өзінде адамға Пайғамбардың ﷺ өмірімен танысуды бастауға көмектесу."
              : "Цель приложения — помочь человеку начать знакомство с жизнью Пророка ﷺ даже тогда, когда у него мало времени на чтение."}
          </p>

        </section>

        {/* Проверка материалов */}
        <section className="mb-12 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-6 transition-colors duration-300">

          <div className="flex items-center gap-3 mb-5">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-lg">
              ✓
            </div>

            <h2 className="text-xl font-semibold">
              {language === "kz"
                ? "Материалдарды тексеру"
                : "Проверка материалов"}
            </h2>

          </div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">

            {language === "kz" ? (
              <>
                Қазіргі хикаялардың материалдары{" "}
                <span className="text-foreground font-medium">
                  Жетісу облысының наиб-имамы Өмірбеков Ернарға
                </span>{" "}
                ұсынылып, оның мақұлдауын алды.
              </>
            ) : (
              <>
                Материалы текущих историй были представлены{" "}
                <span className="text-foreground font-medium">
                  Омирбекову Ернару, наиб-имаму области Жетісу
                </span>{" "}
                и получили его одобрение.
              </>
            )}

          </p>

        </section>

        {/* Достоверность */}
        <section className="mb-12">

          <h2 className="text-xl font-semibold mb-4">
            {language === "kz"
              ? "Сенімділік туралы"
              : "О достоверности"}
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {language === "kz"
              ? "Біз ойдан шығарылған диалогтар мен расталмаған детальдарды қоспай, сенімді дереккөздерге сүйене отырып, Пайғамбардың ﷺ өмірбаянын қысқа әрі түсінікті баяндауға тырысамыз."
              : "Мы стремимся излагать историю жизни Пророка ﷺ кратко и понятно, опираясь на достоверные источники и не добавляя вымышленных диалогов или неподтверждённых деталей."}
          </p>

        </section>

        {/* Связаться с автором */}
        <section className="mb-12 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-6 transition-colors duration-300">

          <h2 className="text-xl font-semibold mb-3">
            {language === "kz"
              ? "Автормен байланысу"
              : "Связаться с автором"}
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
            {language === "kz"
              ? "Егер қате байқасаңыз, дәлірек дереккөзді білсеңіз немесе Сира жобасына ұсынысыңыз болса — маған жазыңыз."
              : "Если вы заметили ошибку, знаете более точный источник или хотите предложить что-то для Сира — напишите мне."}
          </p>

          <a
            href="https://t.me/XaJlBaGoy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-80 transition-opacity"
          >
            {language === "kz"
              ? "Telegram-ға жазу →"
              : "Написать в Telegram →"}
          </a>

        </section>

        {/* Кнопка историй */}
        <Link
          href="/stories"
          className="flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-background font-medium hover:opacity-80 transition-opacity"
        >
          {language === "kz"
            ? "Хикаяларға өту →"
            : "Перейти к историям →"}
        </Link>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Сира
        </p>

      </div>

    </main>
  );
}