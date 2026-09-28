"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Language = "ru" | "kz";
type Theme = "light" | "dark";

export default function InstallPage() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Язык
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "kz" || savedLanguage === "ru") {
      setLanguage(savedLanguage);
    } else {
      setLanguage("ru");
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
  }, []);

  if (language === null || theme === null) {
    return (
      <main className="min-h-[100dvh] bg-background" />
    );
  }

  const isKz = language === "kz";
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
            {isKz ? "← Хикаяларға" : "← К историям"}
          </Link>

          <div className="flex items-center gap-5">

            <span className="text-sm text-zinc-500">
              Sirah
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
            SIRAH
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            {isKz ? (
              <>
                Sirah-ны
                <br />
                телефонға қосу
              </>
            ) : (
              <>
                Добавить Sirah
                <br />
                на телефон
              </>
            )}
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {isKz
              ? "Sirah-ны телефонның негізгі экранына қосып, оны браузерден сайт іздемей-ақ кәдімгі қолданба сияқты ашуға болады."
              : "Sirah можно добавить на главный экран телефона и открывать как обычное приложение — без поиска сайта в браузере."}
          </p>

        </section>

        {/* Важно */}
        <section className="mb-12 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-6 transition-colors duration-300">

          <div className="flex items-center gap-3 mb-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-lg">
              +
            </div>

            <h2 className="text-xl font-semibold">
              {isKz ? "Бұл тегін" : "Это бесплатно"}
            </h2>

          </div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {isKz
              ? "App Store немесе Google Play-ден ештеңе жүктеудің қажеті жоқ. Sirah-ты сайттың өзінен тікелей телефонның негізгі экранына қосуға болады."
              : "Ничего скачивать из App Store или Google Play не нужно. Sirah устанавливается прямо с сайта на главный экран телефона."}
          </p>

        </section>

        {/* iPhone */}
        <section className="mb-14">

          <div className="mb-6">

            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
              {isKz ? "Қадам бойынша" : "Шаг за шагом"}
            </p>

            <h2 className="text-2xl font-semibold">
              🍎 iPhone
            </h2>

            <p className="text-zinc-500 mt-2">
              {isKz
                ? "Safari арқылы орнату"
                : "Установка через Safari"}
            </p>

          </div>

          <div className="space-y-10">

            {/* iPhone 1 */}
            <div>

              <div className="mb-4">

                <span className="text-sm text-zinc-500">
                  {isKz ? "1-қадам" : "Шаг 1"}
                </span>

                <h3 className="text-lg font-medium mt-1">
                  {isKz
                    ? "Sirah-ны Safari-де аш"
                    : "Открой Sirah в Safari"}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {isKz
                    ? "Sirah сайтын дәл Safari браузерінде аш."
                    : "Открой сайт Sirah именно в браузере Safari."}
                </p>

              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

                <Image
                  src="/install/iphone-4.jpeg"
                  alt={
                    isKz
                      ? "iPhone телефонында Safari-де ашылған Sirah"
                      : "Sirah открыт в Safari на iPhone"
                  }
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

            {/* iPhone 2 */}
            <div>

              <div className="mb-4">

                <span className="text-sm text-zinc-500">
                  {isKz ? "2-қадам" : "Шаг 2"}
                </span>

                <h3 className="text-lg font-medium mt-1">
                  {isKz
                    ? "«Бөлісу» батырмасын бас"
                    : "Нажми «Поделиться»"}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {isKz
                    ? "Safari браузерінің төменгі жағындағы «Бөлісу» белгішесін бас."
                    : "В нижней части Safari нажми кнопку со значком «Поделиться»."}
                </p>

              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

                <Image
                  src="/install/iphone-1.jpeg"
                  alt={
                    isKz
                      ? "Safari-дегі Бөлісу батырмасы"
                      : "Кнопка Поделиться в Safari"
                  }
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

            {/* iPhone 3 */}
            <div>

              <div className="mb-4">

                <span className="text-sm text-zinc-500">
                  {isKz ? "3-қадам" : "Шаг 3"}
                </span>

                <h3 className="text-lg font-medium mt-1">
                  {isKz
                    ? "«Негізгі экранға» таңда"
                    : 'Выбери «На экран "Домой"»'}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {isKz
                    ? "Ашылған мәзірден сайтты негізгі экранға қосу пунктін тап."
                    : "В открывшемся меню найди пункт добавления сайта на главный экран."}
                </p>

              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

                <Image
                  src="/install/iphone-2.jpeg"
                  alt={
                    isKz
                      ? "Sirah-ты iPhone негізгі экранына қосу"
                      : "Добавить Sirah на экран Домой"
                  }
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

            {/* iPhone 4 */}
            <div>

              <div className="mb-4">

                <span className="text-sm text-zinc-500">
                  {isKz ? "4-қадам" : "Шаг 4"}
                </span>

                <h3 className="text-lg font-medium mt-1">
                  {isKz
                    ? "«Қосу» батырмасын бас"
                    : "Нажми «Добавить»"}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {isKz
                    ? "Егер «Веб-қолданба ретінде ашу» деген пункт шықса, оны қос. Содан кейін «Қосу» батырмасын бас. Суретте соңғы нәтиже көрсетілген."
                    : "Если появится пункт «Открывать как веб-приложение», включи его. Затем нажми «Добавить». На фото конечный итог."}
                </p>

              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

                <Image
                  src="/install/iphone-3.jpeg"
                  alt={
                    isKz
                      ? "Sirah-ты iPhone негізгі экранына қосу"
                      : "Добавление Sirah на главный экран iPhone"
                  }
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

          </div>

          {/* Как будет выглядеть на iPhone */}
          <section className="mt-12">

            <div className="mb-6">

              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
                {isKz ? "Дайын" : "Готово"}
              </p>

              <h2 className="text-2xl font-semibold">
                {isKz
                  ? "Sirah қалай көрінеді"
                  : "Как будет выглядеть Sirah"}
              </h2>

              <p className="text-zinc-500 mt-2">
                {isKz
                  ? "Орнатқаннан кейін Sirah белгішесі негізгі экранда пайда болады."
                  : "После установки иконка Sirah появится на главном экране."}
              </p>

            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

              <Image
                src="/install/iphone-3.jpeg"
                alt={
                  isKz
                    ? "iPhone негізгі экранындағы Sirah"
                    : "Sirah на главном экране iPhone"
                }
                width={800}
                height={1200}
                className="w-full h-auto"
              />

            </div>

          </section>

          <div className="mt-8 rounded-2xl border border-zinc-300 dark:border-zinc-800 p-5">

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isKz
                ? "Осыдан кейін Sirah белгішесі негізгі экранда пайда болады. Оны бассаң, Sirah қолданба сияқты ашылады."
                : "После этого иконка Sirah появится на главном экране. Нажми на неё — и Sirah откроется как приложение."}
            </p>

          </div>

        </section>

        {/* Android */}
        <section className="mb-14">

          <div className="mb-6">

            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
              {isKz ? "Қадам бойынша" : "Шаг за шагом"}
            </p>

            <h2 className="text-2xl font-semibold">
              🤖 Android
            </h2>

            <p className="text-zinc-500 mt-2">
              {isKz
                ? "Google Chrome арқылы орнату"
                : "Установка через Google Chrome"}
            </p>

          </div>

          <div className="space-y-10">

            {/* Android 1 */}
            <div>

              <div className="mb-4">

                <span className="text-sm text-zinc-500">
                  {isKz ? "1-қадам" : "Шаг 1"}
                </span>

                <h3 className="text-lg font-medium mt-1">
                  {isKz
                    ? "Sirah-ны Chrome-да аш"
                    : "Открой Sirah в Chrome"}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {isKz
                    ? "Sirah сайтын Google Chrome браузерінде аш."
                    : "Открой сайт Sirah в браузере Google Chrome."}
                </p>

              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

                <Image
                  src="/install/android-1.jpeg"
                  alt={
                    isKz
                      ? "Android телефонында Google Chrome-да ашылған Sirah"
                      : "Sirah открыт в Google Chrome на Android"
                  }
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

            {/* Android 2 */}
            <div>

              <div className="mb-4">

                <span className="text-sm text-zinc-500">
                  {isKz ? "2-қадам" : "Шаг 2"}
                </span>

                <h3 className="text-lg font-medium mt-1">
                  {isKz
                    ? "Мәзірді аш"
                    : "Открой меню"}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">

                  {isKz ? (
                    <>
                      Chrome браузерінің жоғарғы оң жақ бұрышындағы
                      <span className="text-foreground"> ⋮ </span>
                      үш нүктені бас.
                    </>
                  ) : (
                    <>
                      Нажми на три точки
                      <span className="text-foreground"> ⋮ </span>
                      в правом верхнем углу Chrome.
                    </>
                  )}

                </p>

              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

                <Image
                  src="/install/android-2.jpeg"
                  alt={
                    isKz
                      ? "Android жүйесіндегі Google Chrome мәзірі"
                      : "Меню Google Chrome на Android"
                  }
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

            {/* Android 3 */}
            <div>

              <div className="mb-4">

                <span className="text-sm text-zinc-500">
                  {isKz ? "3-қадам" : "Шаг 3"}
                </span>

                <h3 className="text-lg font-medium mt-1">
                  {isKz
                    ? "«Орнату» батырмасын бас"
                    : "Нажми «Установить»"}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {isKz
                    ? "Chrome нұсқасына байланысты бұл пункт «Қолданбаны орнату» деп аталуы немесе «Орнату және таңбаша жасау» бөлімінің ішінде болуы мүмкін."
                    : "В зависимости от версии Chrome пункт может называться «Установить приложение» или находиться внутри «Установить и создать ярлык»."}
                </p>

              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

                <Image
                  src="/install/android-3.jpeg"
                  alt={
                    isKz
                      ? "Sirah-ты Android-қа орнату"
                      : "Установка Sirah на Android"
                  }
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

            {/* Android 4 */}
            <div>

              <div className="mb-4">

                <span className="text-sm text-zinc-500">
                  {isKz ? "4-қадам" : "Шаг 4"}
                </span>

                <h3 className="text-lg font-medium mt-1">
                  {isKz
                    ? "Орнатуды раста"
                    : "Подтверди установку"}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {isKz
                    ? "Орнатуды раста. Осыдан кейін Sirah қолданбалар арасында және негізгі экранда пайда болады."
                    : "Подтверди установку. После этого Sirah появится среди приложений и на главном экране."}
                </p>

              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

                <Image
                  src="/install/android-4.jpeg"
                  alt={
                    isKz
                      ? "Android-қа орнатылған Sirah"
                      : "Sirah установлен на Android"
                  }
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

          </div>

          {/* Как будет выглядеть на Android */}
          <section className="mt-12">

            <div className="mb-6">

              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
                {isKz ? "Дайын" : "Готово"}
              </p>

              <h2 className="text-2xl font-semibold">
                {isKz
                  ? "Sirah қалай көрінеді"
                  : "Как будет выглядеть Sirah"}
              </h2>

              <p className="text-zinc-500 mt-2">
                {isKz
                  ? "Орнатқаннан кейін Sirah белгішесі негізгі экранда пайда болады."
                  : "После установки иконка Sirah появится на главном экране."}
              </p>

            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">

              <Image
                src="/install/android-5.jpeg"
                alt={
                  isKz
                    ? "Android негізгі экранындағы Sirah"
                    : "Sirah на главном экране Android"
                }
                width={800}
                height={1200}
                className="w-full h-auto"
              />

            </div>

            <div className="mt-5 rounded-2xl border border-zinc-300 dark:border-zinc-800 p-5">

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {isKz
                  ? "Sirah белгішесін бассаң, Sirah кәдімгі Chrome интерфейсінсіз жеке қолданба ретінде ашылады."
                  : "Нажимаешь на иконку Sirah — и Sirah открывается как отдельное приложение, без обычного интерфейса Chrome."}
              </p>

            </div>

          </section>

        </section>

        {/* Возврат */}
        <section className="pb-8">

          <Link
            href="/stories"
            className="flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-background font-medium hover:opacity-80 transition-opacity"
          >
            {isKz
              ? "Хикаяларға өту →"
              : "Перейти к историям →"}
          </Link>

          <p className="text-center text-xs text-zinc-500 mt-8">
            Sirah
          </p>

        </section>

      </div>
    </main>
  );
}