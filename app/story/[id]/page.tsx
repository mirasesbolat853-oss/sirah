
"use client";

import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { elephantStory as elephantRu } from "@/data/stories/ru/beforebirth/elephant";
import { elephantStory as elephantKz } from "@/data/stories/kz/beforebirth/elephant";

import { abdullahStory as abdullahRu } from "@/data/stories/ru/beforebirth/abdullah";
import { abdullahStory as abdullahKz } from "@/data/stories/kz/beforebirth/abdullah";

import { aminaStory as aminaRu } from "@/data/stories/ru/beforebirth/amina";
import { aminaStory as aminaKZ } from "@/data/stories/kz/beforebirth/amina";

import { birthStory as birthRu } from "@/data/stories/ru/beforebirth/birth";
import { birthStory as birthKz } from "@/data/stories/kz/beforebirth/birth";

import { halimaStory } from "@/data/stories/childhood/halima";
import { halimaBlessingStory } from "@/data/stories/childhood/halima-blessing";
import { halimaScaryDayStory } from "@/data/stories/childhood/halima-scary-day";
import { returnToMotherStory } from "@/data/stories/childhood/returnmother";
import { lastYearsWithAminaStory } from "@/data/stories/childhood/last-years-with-amina";
import { underGrandfatherStory } from "@/data/stories/childhood/undergrandfather";
import { underAbuTalibStory } from "@/data/stories/childhood/under-abu-talib";
import { aminaDeathStory } from "@/data/stories/childhood/aminadeath";

import { alAminStory } from "@/data/stories/beforemessage/alamin";
import { tradeJourneysStory } from "@/data/stories/beforemessage/tradejourneys";

type Slide = {
  id: number;
  text: string;
};

type Language = "ru" | "kz";
type Theme = "light" | "dark";

export default function StoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [language, setLanguage] = useState<Language>("ru");
  const [languageReady, setLanguageReady] = useState(false);

  const [theme, setTheme] = useState<Theme | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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

  const stories: Record<string, Slide[]> = {
    elephant: language === "kz" ? elephantKz : elephantRu,

    abdullah: language === "kz" ? abdullahKz : abdullahRu,
    amina: language === "kz" ? aminaKZ : aminaRu,
    birth: language === "kz" ? birthKz : birthRu,

    halima: halimaStory,
    "halima-blessing": halimaBlessingStory,
    "halima-scary-day": halimaScaryDayStory,
    returnmother: returnToMotherStory,
    "last-years-with-amina": lastYearsWithAminaStory,
    aminadeath: aminaDeathStory,
    undergrandfather: underGrandfatherStory,
    "under-abu-talib": underAbuTalibStory,

    tradejourneys: tradeJourneysStory,
    alamin: alAminStory,
  };

  // Названия историй для верхней панели
  const storyTitles: Record<string, string> = {
    elephant:
      language === "kz"
        ? "Піл жылы"
        : "Год Слона",

    abdullah:
      language === "kz"
        ? "Пайғамбардың әкесі ﷺ"
        : "Отец Пророка ﷺ",

    amina:
      language === "kz"
        ? "Әмина — Пайғамбардың анасы ﷺ"
        : "Амина — мать Пророка ﷺ",

    birth:
      language === "kz"
        ? "Мұхаммедтің ﷺ дүниеге келуі"
        : "Рождение Мухаммада ﷺ",

    halima:
      language === "kz"
        ? "Халима әс-Сағдия"
        : "Халима ас-Са‘дийя",

    "halima-blessing":
      language === "kz"
        ? "Халима үйіндегі береке"
        : "Благословение в доме Халимы",

    "halima-scary-day":
      language === "kz"
        ? "Халиманы қорқытқан күн"
        : "День, который испугал Халиму",

    returnmother:
      language === "kz"
        ? "Анасына оралу"
        : "Возвращение к матери",

    "last-years-with-amina":
      language === "kz"
        ? "Әминамен өткізген соңғы жылдар"
        : "Последние годы с Аминой",

    aminadeath:
      language === "kz"
        ? "Әминаның қайтыс болуы"
        : "Смерть Амины",

    undergrandfather:
      language === "kz"
        ? "Атасының қамқорлығында"
        : "Под опекой деда",

    "under-abu-talib":
      language === "kz"
        ? "Әбу Тәліптің қамқорлығында"
        : "Под опекой Абу Талиба",

    tradejourneys:
      language === "kz"
        ? "Сауда сапарлары"
        : "Торговые путешествия",

    alamin:
      language === "kz"
        ? "Әл-Әмин"
        : "Аль-Амин",
  };

  const nextStories: Record<string, string | null> = {
    elephant: "/story/abdullah",
    abdullah: "/story/amina",
    amina: "/story/birth",
    birth: "/story/halima",

    halima: "/story/halima-blessing",
    "halima-blessing": "/story/halima-scary-day",
    "halima-scary-day": "/story/returnmother",
    returnmother: "/story/last-years-with-amina",
    "last-years-with-amina": "/story/aminadeath",

    aminadeath: "/story/undergrandfather",
    undergrandfather: "/story/under-abu-talib",

    "under-abu-talib": "/story/tradejourneys",
    tradejourneys: "/story/alamin",
    alamin: null,
  };

  const slides = stories[id] ?? [];

  const title =
    storyTitles[id] ??
    (language === "kz" ? "Хикая" : "История");

  const nextStoryUrl = nextStories[id] ?? null;

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

  useEffect(() => {
    if (!languageReady) return;

    const container = scrollContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: 0,
      behavior: "instant",
    });

    setActiveIndex(0);

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;

        const scrollTop = container.scrollTop;
        const clientHeight = container.clientHeight;

        if (!clientHeight) return;

        const newIndex = Math.round(
          scrollTop / clientHeight
        );

        setActiveIndex((prevIndex) => {
          if (prevIndex !== newIndex) {
            return newIndex;
          }

          return prevIndex;
        });
      });
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [id, language, languageReady]);

  if (!languageReady || !theme) {
    return (
      <main className="min-h-[100dvh] w-full bg-background" />
    );
  }

  if (!stories[id]) {
    return (
      <main className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col items-center justify-center p-6 text-center transition-colors duration-300">
        <h1 className="text-2xl font-semibold mb-4">
          {language === "kz"
            ? "Хикая табылмады"
            : "История не найдена"}
        </h1>

        <p className="text-zinc-600 dark:text-zinc-500 mb-8">
          {language === "kz"
            ? "Мүмкін, бұл хикая әлі қосылмаған."
            : "Возможно, эта история ещё не добавлена."}
        </p>

        <Link
          href="/stories"
          className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-80 transition-opacity"
        >
          {language === "kz"
            ? "← Хикаялар тізіміне"
            : "← К списку историй"}
        </Link>
      </main>
    );
  }

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Верхняя панель */}
      <header className="fixed top-0 left-0 w-full z-50 p-4 bg-gradient-to-b from-background/90 to-transparent pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between">
          <Link
            href="/stories"
            className="inline-block text-sm font-medium text-foreground hover:opacity-60 transition-opacity"
          >
            {language === "kz"
              ? "← Хикаялар тізімі"
              : "← К списку историй"}
          </Link>

          <div className="flex items-center gap-5">
            <span className="text-xs text-zinc-500">
              {title}
            </span>

            {/* Переключатель темы */}
            <button
              onClick={toggleTheme}
              aria-label="Сменить тему"
              className="text-base leading-none transition-opacity hover:opacity-60"
            >
              {isDark ? "☀" : "☾"}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={scrollContainerRef}
        className="stories-container h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory touch-pan-y [&::-webkit-scrollbar]:hidden"
      >
        {/* Подсказка свайпа */}
        {activeIndex === 0 && slides.length > 1 && (
          <div className="swipe-hint pointer-events-none fixed bottom-7 left-1/2 z-40 -translate-x-1/2 flex flex-col items-center">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
              {language === "kz"
                ? "Төмен сырғытыңыз"
                : "Свайп вниз"}
            </span>

            <span className="text-3xl text-foreground">
              ↓
            </span>
          </div>
        )}

        {/* Истории */}
        {slides.map((slide, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={slide.id}
              data-index={idx}
              className="story-slide h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center p-6 relative"
            >
              <h2
                className={`story-text text-2xl md:text-4xl text-center font-semibold leading-relaxed max-w-2xl ${
                  isActive
                    ? "story-text-enter"
                    : "story-text-exit"
                }`}
              >
                {slide.text}
              </h2>
            </div>
          );
        })}

        {/* Конец истории */}
        <div
          data-index={slides.length}
          className="story-slide h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center p-6 relative"
        >
          <div className="flex flex-col items-center max-w-xl text-center animate-fadeIn">
            <span className="text-4xl mb-4">
              📖
            </span>

            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              {language === "kz"
                ? "Хикаяның соңы"
                : "Конец истории"}
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base mb-8">
              {language === "kz"
                ? `«${title}» хикаясын соңына дейін оқыдыңыз.`
                : `Вы дочитали «${title}» до конца.`}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {nextStoryUrl && (
                <Link
                  href={nextStoryUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-foreground text-background rounded-full hover:opacity-80 transition-all shadow-lg"
                >
                  {language === "kz"
                    ? "Келесі хикая →"
                    : "Следующая история →"}
                </Link>
              )}

              <Link
                href="/stories"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-zinc-200 dark:bg-zinc-900 text-foreground border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-all"
              >
                {language === "kz"
                  ? "Хикаялар тізімі"
                  : "К списку историй"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stories-container {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: none;
        }

        .story-slide {
          transform: translateZ(0);
        }

        .story-text {
          transition:
            transform 0.35s ease-out,
            opacity 0.35s ease-out;
        }

        .story-text-enter {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .story-text-exit {
          opacity: 0;
          transform: translateY(-16px) scale(0.98);
        }

        @keyframes swipeHint {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }

          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }

        .swipe-hint {
          animation: swipeHint 1.2s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}