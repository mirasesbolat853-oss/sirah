"use client";

import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

import { elephantStory as elephantRu } from "@/data/stories/ru/beforebirth/elephant";
import { elephantStory as elephantKz } from "@/data/stories/kz/beforebirth/elephant";

import { abdullahStory as abdullahRu } from "@/data/stories/ru/beforebirth/abdullah";
import { abdullahStory as abdullahKz } from "@/data/stories/kz/beforebirth/abdullah";

import { aminaStory as aminaRu } from "@/data/stories/ru/beforebirth/amina";
import { aminaStory as aminaKZ } from "@/data/stories/kz/beforebirth/amina";

import { birthStory as birthRu } from "@/data/stories/ru/beforebirth/birth";
import { birthStory as birthKz } from "@/data/stories/kz/beforebirth/birth";

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
    // BEFORE BIRTH
    elephant: language === "kz" ? elephantKz : elephantRu,
    abdullah: language === "kz" ? abdullahKz : abdullahRu,
    amina: language === "kz" ? aminaKZ : aminaRu,
    birth: language === "kz" ? birthKz : birthRu,

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
  };

  const story = stories[id];

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

  if (!story) {
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

    if (Math.abs(difference) < 50) {
      touchStartY.current = null;
      touchEndY.current = null;
      return;
    }

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

