"use client";

import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

// --- BEFORE BIRTH ---
import { elephantStory as elephantRu } from "@/data/stories/ru/beforebirth/elephant";
import { elephantStory as elephantKz } from "@/data/stories/kz/beforebirth/elephant";

import { abdullahStory as abdullahRu } from "@/data/stories/ru/beforebirth/abdullah";
import { abdullahStory as abdullahKz } from "@/data/stories/kz/beforebirth/abdullah";

import { aminaStory as aminaRu } from "@/data/stories/ru/beforebirth/amina";
import { aminaStory as aminaKz } from "@/data/stories/kz/beforebirth/amina";

import { birthStory as birthRu } from "@/data/stories/ru/beforebirth/birth";
import { birthStory as birthKz } from "@/data/stories/kz/beforebirth/birth";

<<<<<<< HEAD
import { halimaStory as halimaRu } from "@/data/stories/ru/childhood/halima";
import { halimaStory as halimaKz } from "@/data/stories/kz/childhood/halima";

import {
  halimaBlessingStory as halimaBlessingRu,
} from "@/data/stories/ru/childhood/halima-blessing";

import {
  halimaBlessingStory as halimaBlessingKz,
} from "@/data/stories/kz/childhood/halima-blessing";

import {
  halimaScaryDayStory as halimaScaryDayRu,
} from "@/data/stories/ru/childhood/halima-scary-day";

import {
  halimaScaryDayStory as halimaScaryDayKz,
} from "@/data/stories/kz/childhood/halima-scary-day";

import {
  returnToMotherStory as returnToMotherRu,
} from "@/data/stories/ru/childhood/returnmother";

import {
  returnToMotherStory as returnToMotherKz,
} from "@/data/stories/kz/childhood/returnmother";

import {
  lastYearsWithAminaStory as lastYearsWithAminaRu,
} from "@/data/stories/ru/childhood/last-years-with-amina";

import {
  lastYearsWithAminaStory as lastYearsWithAminaKz,
} from "@/data/stories/kz/childhood/lastyearwithamina";

import {
  aminaDeathStory as aminaDeathRu,
} from "@/data/stories/ru/childhood/aminadeath";

import {
  aminaDeathStory as aminaDeathKz,
} from "@/data/stories/kz/childhood/aminadeath";

import {
  underGrandfatherStory as underGrandfatherRu,
} from "@/data/stories/ru/childhood/undergrandfather";

import {
  underGrandfatherStory as underGrandfatherKz,
} from "@/data/stories/kz/childhood/undergrandfather";

import {
  underAbuTalibStory as underAbuTalibRu,
} from "@/data/stories/ru/childhood/under-abu-talib";

import {
  underAbuTalibStory as underAbuTalibKz,
} from "@/data/stories/kz/childhood/under-abu-talib";

import {
  tradeJourneysStory as tradeJourneysRu,
} from "@/data/stories/ru/beforemessage/tradejourneys";

import {
  tradeJourneysStory as tradeJourneysKz,
} from "@/data/stories/kz/beforemessage/tradejourney";

import {
  alAminStory as alAminRu,
} from "@/data/stories/ru/beforemessage/alamin";

import {
  alAminStory as alAminKz,
} from "@/data/stories/kz/beforemessage/alamin";
=======
// --- CHILDHOOD ---
import { halimaStory as halimaRu } from "@/data/stories/ru/childhood/halima";
import { halimaStory as halimaKz } from "@/data/stories/kz/childhood/halima";

import { halimaBlessingStory as halimaBlessingRu } from "@/data/stories/ru/childhood/halima-blessing";
import { halimaBlessingStory as halimaBlessingKz } from "@/data/stories/kz/childhood/halima-blessing";

import { halimaScaryDayStory as halimaScaryDayRu } from "@/data/stories/ru/childhood/halima-scary-day";
import { halimaScaryDayStory as halimaScaryDayKz } from "@/data/stories/kz/childhood/halima-scary-day";

import { returnToMotherStory as returnMotherRu } from "@/data/stories/ru/childhood/returnmother";
import { returnToMotherStory as returnMotherKz } from "@/data/stories/kz/childhood/returnmother";

import { lastYearsWithAminaStory as lastYearsWithAminaRu } from "@/data/stories/ru/childhood/lastyearwithamina";
import { lastYearsWithAminaStory as lastYearsWithAminaKz } from "@/data/stories/kz/childhood/lastyearwithamina";

import { aminaDeathStory as aminaDeathRu } from "@/data/stories/ru/childhood/aminadeath";
import { aminaDeathStory as aminaDeathKz } from "@/data/stories/kz/childhood/aminadeath";

import { underGrandfatherStory as underGrandfatherRu } from "@/data/stories/ru/childhood/undergrandfather";
import { underGrandfatherStory as underGrandfatherKz } from "@/data/stories/kz/childhood/undergrandfather";

import { underAbuTalibStory as underAbuTalibRu } from "@/data/stories/ru/childhood/under-abu-talib";
import { underAbuTalibStory as underAbuTalibKz } from "@/data/stories/kz/childhood/under-abu-talib";

// --- BEFORE MESSAGE ---
import { tradeJourneysStory as tradeJourneysRu } from "@/data/stories/ru/beforemessage/tradejourney";
import { tradeJourneysStory as tradeJourneysKz } from "@/data/stories/kz/beforemessage/tradejourney";

import { alAminStory as alAminRu } from "@/data/stories/ru/beforemessage/alamin";
import { alAminStory as alAminKz } from "@/data/stories/kz/beforemessage/alamin";
>>>>>>> 84e92f7 (update)

type Slide = {
  id: number;
  text: string;
};

type StoryPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function StoryPage({ params }: StoryPageProps) {
  const { id } = use(params);

  const [language, setLanguage] = useState<"ru" | "kz">("ru");
  const [currentSlide, setCurrentSlide] = useState(0);

  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "kz" || savedLanguage === "ru") {
      setLanguage(savedLanguage);
    }
  }, []);

  const stories: Record<string, Slide[]> = {
<<<<<<< HEAD
    // BEFORE BIRTH
=======
    // Before birth
>>>>>>> 84e92f7 (update)
    elephant: language === "kz" ? elephantKz : elephantRu,
    abdullah: language === "kz" ? abdullahKz : abdullahRu,
    amina: language === "kz" ? aminaKz : aminaRu,
    birth: language === "kz" ? birthKz : birthRu,

<<<<<<< HEAD
    // CHILDHOOD
    halima: language === "kz" ? halimaKz : halimaRu,

    "halima-blessing":
      language === "kz"
        ? halimaBlessingKz
        : halimaBlessingRu,

    "halima-scary-day":
      language === "kz"
        ? halimaScaryDayKz
        : halimaScaryDayRu,

    returnmother:
      language === "kz"
        ? returnToMotherKz
        : returnToMotherRu,

    "last-years-with-amina":
      language === "kz"
        ? lastYearsWithAminaKz
        : lastYearsWithAminaRu,

    aminadeath:
      language === "kz"
        ? aminaDeathKz
        : aminaDeathRu,

    undergrandfather:
      language === "kz"
        ? underGrandfatherKz
        : underGrandfatherRu,

    "under-abu-talib":
      language === "kz"
        ? underAbuTalibKz
        : underAbuTalibRu,

    // BEFORE MESSAGE
    tradejourneys:
      language === "kz"
        ? tradeJourneysKz
        : tradeJourneysRu,

    alamin:
      language === "kz"
        ? alAminKz
        : alAminRu,
=======
    // Childhood
    halima: language === "kz" ? halimaKz : halimaRu,
    "halima-blessing": language === "kz" ? halimaBlessingKz : halimaBlessingRu,
    "halima-scary-day": language === "kz" ? halimaScaryDayKz : halimaScaryDayRu,
    returnmother: language === "kz" ? returnMotherKz : returnMotherRu,
    "last-years-with-amina": language === "kz" ? lastYearsWithAminaKz : lastYearsWithAminaRu,
    aminadeath: language === "kz" ? aminaDeathKz : aminaDeathRu,
    undergrandfather: language === "kz" ? underGrandfatherKz : underGrandfatherRu,
    "under-abu-talib": language === "kz" ? underAbuTalibKz : underAbuTalibRu,

    // Before message
    tradejourneys: language === "kz" ? tradeJourneysKz : tradeJourneysRu,
    alamin: language === "kz" ? alAminKz : alAminRu,
  };

  // Названия историй для верхней панели
  const storyTitles: Record<string, string> = {
    elephant: language === "kz" ? "Піл жылы" : "Год Слона",
    abdullah: language === "kz" ? "Пайғамбардың әкесі ﷺ" : "Отец Пророка ﷺ",
    amina: language === "kz" ? "Әмина — Пайғамбардың анасы ﷺ" : "Амина — мать Пророка ﷺ",
    birth: language === "kz" ? "Мұхаммедтің ﷺ дүниеге келуі" : "Рождение Мухаммада ﷺ",

    halima: language === "kz" ? "Халима әс-Сағдия" : "Халима ас-Са‘дийя",
    "halima-blessing": language === "kz" ? "Халима үйіндегі береке" : "Благословение в доме Халимы",
    "halima-scary-day": language === "kz" ? "Халиманы қорқытқан күн" : "День, который испугал Халиму",
    returnmother: language === "kz" ? "Анасына оралу" : "Возвращение к матери",
    "last-years-with-amina": language === "kz" ? "Әминамен өткізген соңғы жылдар" : "Последние годы с Аминой",
    aminadeath: language === "kz" ? "Әминаның қайтыс болуы" : "Смерть Амины",
    undergrandfather: language === "kz" ? "Атасының қамқорлығында" : "Под опекой деда",
    "under-abu-talib": language === "kz" ? "Әбу Тәліптің қамқорлығында" : "Под опекой Абу Талиба",

    tradejourneys: language === "kz" ? "Сауда сапарлары" : "Торговые путешествия",
    alamin: language === "kz" ? "Әл-Әмин" : "Аль-Амин",
>>>>>>> 84e92f7 (update)
  };

  const story = stories[id];

<<<<<<< HEAD
=======
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

  /*
   * Аналитика: открытие истории
   */
>>>>>>> 84e92f7 (update)
  useEffect(() => {
    setCurrentSlide(0);
  }, [id, language]);

  useEffect(() => {
    if (!story) return;

    track("story_view", {
      story: id,
      language,
    });
  }, [id, language, story]);

<<<<<<< HEAD
  if (!story) {
=======
  /*
   * Аналитика: дочитывание истории
   */
  useEffect(() => {
    if (!languageReady || !stories[id]) return;

    if (activeIndex < slides.length) return;

    if (completedStoryRef.current === id) return;

    completedStoryRef.current = id;

    track("story_complete", {
      story: id,
      language,
    });
  }, [
    activeIndex,
    id,
    language,
    languageReady,
    slides.length,
    stories,
  ]);

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
>>>>>>> 84e92f7 (update)
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-6 text-[#171717]">
        <div className="text-center">
          <p className="mb-6 text-sm">
            {language === "kz"
              ? "Хикая табылмады."
              : "История не найдена."}
          </p>

          <Link
            href="/stories"
            className="text-sm underline underline-offset-4"
          >
            {language === "kz"
              ? "Хикаяларға оралу"
              : "Вернуться к историям"}
          </Link>
        </div>
      </main>
    );
  }

  const goNext = () => {
    if (currentSlide < story.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    touchEndY.current = event.changedTouches[0].clientY;

    if (
      touchStartY.current === null ||
      touchEndY.current === null
    ) {
      return;
    }

    const difference =
      touchStartY.current - touchEndY.current;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      goNext();
    } else {
      goPrevious();
    }

    touchStartY.current = null;
    touchEndY.current = null;
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (event.deltaY > 0) {
      goNext();
    } else if (event.deltaY < 0) {
      goPrevious();
    }
  };

  const slide = story[currentSlide];

  return (
    <main
      className="fixed inset-0 overflow-hidden bg-[#f5f5f3] text-[#171717]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 pt-[max(20px,env(safe-area-inset-top))]">
        <Link
          href="/stories"
          className="text-xs tracking-[0.15em] opacity-60 transition-opacity hover:opacity-100"
        >
          {language === "kz" ? "ХИКАЯЛАР" : "ИСТОРИИ"}
        </Link>

        <button
          type="button"
          onClick={() => {
            const nextLanguage =
              language === "kz" ? "ru" : "kz";

            setLanguage(nextLanguage);
            localStorage.setItem(
              "language",
              nextLanguage
            );
          }}
          className="text-xs tracking-[0.15em] opacity-60 transition-opacity hover:opacity-100"
        >
          {language === "kz" ? "RU" : "KZ"}
        </button>
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-7 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]">
        <div
          key={`${id}-${currentSlide}-${language}`}
          className="w-full max-w-2xl text-center"
        >
          <p className="whitespace-pre-line text-[clamp(24px,5vw,42px)] font-normal leading-[1.25] tracking-[-0.02em]">
            {slide.text}
          </p>
        </div>
      </div>

      <div className="absolute bottom-[max(24px,env(safe-area-inset-bottom))] left-0 right-0 z-20 flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {story.map((_, index) => (
            <span
              key={index}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide
                  ? "w-5 bg-[#171717]"
                  : "w-1 bg-[#171717]/20"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label={
          language === "kz"
            ? "Алдыңғы хикая"
            : "Предыдущая история"
        }
        onClick={goPrevious}
        className="absolute left-0 top-0 z-10 h-full w-1/3 cursor-pointer"
      />

      <button
        type="button"
        aria-label={
          language === "kz"
            ? "Келесі хикая"
            : "Следующая история"
        }
        onClick={goNext}
        className="absolute right-0 top-0 z-10 h-full w-1/3 cursor-pointer"
      />
    </main>
  );
}