"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    text: "VI век нашей эры. Аравийский полуостров. Среди пустынь стоял город, который знали далеко за его пределами — Мекка.",
  },
  {
    id: 2,
    text: "Мекка была не похожа на большие имперские города. Здесь не было огромных дворцов и мощных крепостей.",
  },
  {
    id: 3,
    text: "Но в центре города стояла Кааба — древний Дом поклонения.",
  },
  {
    id: 4,
    text: "К Каабе приходили люди из разных уголков Аравии. Для многих арабов Мекка была особым местом.",
  },
  {
    id: 5,
    text: "А за порядком в городе и вокруг Каабы большое влияние имело племя курайшитов.",
  },
  {
    id: 6,
    text: "Курайшиты были одним из самых известных и влиятельных племён Мекки.",
  },
  {
    id: 7,
    text: "Их положение было связано не только с Каабой. Через Мекку проходили торговые пути, а паломники приносили городу богатство.",
  },
  {
    id: 8,
    text: "Но далеко на юге Аравии, в Йемене, находился человек, которого всё это не устраивало.",
  },
  {
    id: 9,
    text: "Его звали Абраха. Он был правителем Йемена и обладал большой властью.",
  },
  {
    id: 10,
    text: "Абраха хотел, чтобы люди приезжали в Йемен, а не в Мекку.",
  },
  {
    id: 11,
    text: "Для этого он построил в Сане большое святилище и хотел привлечь туда арабов.",
  },
  {
    id: 12,
    text: "Но Кааба продолжала оставаться центром паломничества.",
  },
  {
    id: 13,
    text: "Тогда Абраха решил сделать то, чего от него никто не ожидал.",
  },
  {
    id: 14,
    text: "Если люди не перестают приходить к Каабе добровольно — значит, нужно уничтожить саму Каабу.",
  },
  {
    id: 15,
    text: "Абраха собрал большую армию и двинулся из Йемена на север.",
  },
  {
    id: 16,
    text: "Но это была необычная армия.",
  },
  {
    id: 17,
    text: "Вместе с солдатами шли боевые слоны.",
  },
  {
    id: 18,
    text: "Для жителей Аравии такое животное было почти невероятным зрелищем.",
  },
  {
    id: 19,
    text: "Один из слонов особенно выделялся. В традиционных рассказах его называют Махмудом.",
  },
  {
    id: 20,
    text: "Армия Абрахи приближалась к Мекке. С каждым днём опасность становилась всё ближе.",
  },
  {
    id: 21,
    text: "Курайшиты понимали: обычным сражением остановить такую армию почти невозможно.",
  },
  {
    id: 22,
    text: "Абдуль-Мутталиб, один из самых уважаемых людей Мекки, отправился встретиться с Абрахой.",
  },
  {
    id: 23,
    text: "Абраха ожидал, что перед ним будут просить сохранить Каабу.",
  },
  {
    id: 24,
    text: "Но просьба Абдуль-Мутталиба оказалась совсем другой.",
  },
  {
    id: 25,
    text: "Он попросил вернуть захваченных верблюдов.",
  },
  {
    id: 26,
    text: "Абраха удивился. Его армия пришла уничтожить Каабу, а человек перед ним говорит о верблюдах?",
  },
  {
    id: 27,
    text: "Тогда Абдуль-Мутталиб объяснил: он отвечает за своих верблюдов. А у Каабы есть свой Господь.",
  },
  {
    id: 28,
    text: "После этого жители Мекки оставили город и укрылись в горах.",
  },
  {
    id: 29,
    text: "Мекка осталась почти беззащитной.",
  },
  {
    id: 30,
    text: "Армия Абрахи приготовилась войти в город.",
  },
  {
    id: 31,
    text: "Вперёд двинули слона.",
  },
  {
    id: 32,
    text: "Но произошло нечто странное.",
  },
  {
    id: 33,
    text: "Слон остановился.",
  },
  {
    id: 34,
    text: "Его пытались направить к Каабе, но он не хотел идти вперёд.",
  },
  {
    id: 35,
    text: "И тогда произошло то, о чём потом будут рассказывать поколения.",
  },
  {
    id: 36,
    text: "Над армией появились стаи птиц.",
  },
  {
    id: 37,
    text: "Они несли камни из обожжённой глины и бросали их на войско.",
  },
  {
    id: 38,
    text: "Замысел огромной армии оказался разрушен.",
  },
  {
    id: 39,
    text: "Событие стало известно как Год слона. В Коране эта история сохранена в суре «Аль-Филь» — «Слон».",
  },
  {
    id: 40,
    text: "А самое удивительное было впереди. В этот период, согласно исламской традиции, в Мекке родился Мухаммад ﷺ.",
  },
];

export default function StoryPage({
  params,
}: {
  params: { id: string };
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const nextStoryUrl = "/stories/2"; 

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        
        const scrollTop = container.scrollTop;
        const clientHeight = container.clientHeight;
        const newIndex = Math.round(scrollTop / clientHeight);

        setActiveIndex((prevIndex) => {
          if (prevIndex !== newIndex) {
            return newIndex;
          }
          return prevIndex;
        });
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      
      {/* Зафиксированная шапка */}
      <header className="fixed top-0 left-0 w-full z-50 p-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <Link
            href="/stories"
            className="inline-block text-sm font-medium text-white hover:opacity-70 transition-opacity"
          >
            &larr; К списку историй
          </Link>
        </div>
      </header>

      {/* Контейнер со свайпами */}
      <div
        ref={scrollContainerRef}
        className="stories-container h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory touch-pan-y [&::-webkit-scrollbar]:hidden"
      >
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
                  isActive ? "story-text-enter" : "story-text-exit"
                }`}
              >
                {slide.text}
              </h2>
            </div>
          );
        })}

        {/* Финальный слайд с двумя кнопками */}
        <div
          data-index={slides.length}
          className="story-slide h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center p-6 relative"
        >
          <div className="flex flex-col items-center max-w-xl text-center animate-fadeIn">
            <span className="text-4xl mb-4">📖</span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Конец истории
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8">
              Вы дочитали эту историю до конца. Выберите дальнейшее действие:
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href={nextStoryUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-all shadow-lg"
              >
                Следующая история &rarr;
              </Link>

              <Link
                href="/stories"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-zinc-900 text-white border border-zinc-700 rounded-full hover:bg-zinc-800 transition-all"
              >
                К списку историй
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
          transition: transform 0.35s ease-out, opacity 0.35s ease-out;
        }

        .story-text-enter {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .story-text-exit {
          opacity: 0;
          transform: translateY(-16px) scale(0.98);
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