"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Language = "ru" | "kz";
type Theme = "light" | "dark";

type Story = {
  number: string;
  title: string;
  description: string;
  href: string;
  available: boolean;
};

type Section = {
  title: string;
  description: string;
  stories: Story[];
};

const content: Record<Language, Section[]> = {
  ru: [
    {
      title: "До рождения",
      description: "События и люди, связанные с появлением Пророка ﷺ",
      stories: [
        {
          number: "01",
          title: "Год Слона",
          description: "Как Аллах защитил Каабу от войска Абрахи",
          href: "/story/elephant",
          available: true,
        },
        {
          number: "02",
          title: "Абдуллах",
          description: "Отец Пророка Мухаммада ﷺ",
          href: "/story/abdullah",
          available: true,
        },
        {
          number: "03",
          title: "Амина",
          description: "Мать будущего Посланника Аллаха ﷺ",
          href: "/story/amina",
          available: true,
        },
        {
          number: "04",
          title: "Рождение Мухаммада ﷺ",
          description: "Ночь, с которой началась новая глава истории",
          href: "/story/birth",
          available: true,
        },
      ],
    },

    {
      title: "Детство и юность",
      description: "Первые годы жизни Мухаммада ﷺ",
      stories: [
        {
          number: "01",
          title: "Халима ас-Са‘дийя",
          description: "Как Мухаммад ﷺ оказался среди Бану Са‘д",
          href: "/story/halima",
          available: true,
        },
        {
          number: "02",
          title: "Благословение в доме Халимы",
          description: "Перемены, которые Халима заметила после его появления",
          href: "/story/halima-blessing",
          available: true,
        },
        {
          number: "03",
          title: "День, который испугал Халиму",
          description: "Событие с расщеплением груди в детстве Мухаммада ﷺ",
          href: "/story/halima-scary-day",
          available: true,
        },
        {
          number: "04",
          title: "Возвращение к матери",
          description: "Мухаммад ﷺ снова возвращается к Амине",
          href: "/story/returnmother",
          available: true,
        },
        {
          number: "05",
          title: "Последние годы с Аминой",
          description: "Детство Мухаммада ﷺ рядом с матерью",
          href: "/story/last-years-with-amina",
          available: true,
        },
        {
          number: "06",
          title: "Смерть матери",
          description: "Когда Мухаммад ﷺ потерял Амину",
          href: "/story/aminadeath",
          available: true,
        },
        {
          number: "07",
          title: "Под опекой Абдуль-Мутталиба",
          description: "Дед, который заботился о своём внуке",
          href: "/story/undergrandfather",
          available: true,
        },
        {
          number: "08",
          title: "Абу Талиб",
          description: "Новая глава жизни под опекой дяди",
          href: "/story/under-abu-talib",
          available: true,
        },
      ],
    },

    {
      title: "До пророчества",
      description: "Мухаммад ﷺ до начала откровения",
      stories: [
        {
          number: "01",
          title: "Торговые поездки",
          description: "Путешествия за пределами Мекки",
          href: "/story/tradejourneys",
          available: true,
        },
        {
          number: "02",
          title: "Аль-Амин",
          description: "Почему жители Мекки называли его Достоверным",
          href: "/story/alamin",
          available: true,
        },
        {
          number: "03",
          title: "Хильф аль-Фудуль",
          description: "Союз ради справедливости",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Хадиджа رضي الله عنها",
          description: "Женщина, которая стала его супругой",
          href: "#",
          available: false,
        },
        {
          number: "05",
          title: "Восстановление Каабы",
          description: "Событие, показавшее мудрость Мухаммада ﷺ",
          href: "#",
          available: false,
        },
        {
          number: "06",
          title: "Пещера Хира",
          description: "Уединение перед величайшим событием",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Начало пророчества",
      description: "Первые откровения и первые уверовавшие",
      stories: [
        {
          number: "01",
          title: "Первое откровение",
          description: "Встреча с Джибрилем عليه السلام",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Первые уверовавшие",
          description: "Люди, первыми принявшие Ислам",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Тайный призыв",
          description: "Первые годы распространения Ислама",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Открытый призыв",
          description: "Когда призыв стал известен всему Курайшу",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Испытания в Мекке",
      description: "Притеснения, терпение и стойкость первых мусульман",
      stories: [
        {
          number: "01",
          title: "Первые притеснения",
          description: "Как Курайш начал бороться с Исламом",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Первая хиджра в Абиссинию",
          description: "Мусульмане покидают Мекку ради своей веры",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Бойкот Бану Хашим",
          description: "Три тяжёлых года в ущелье",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Год печали",
          description: "Потеря Хадиджи и Абу Талиба",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Путь к Медине",
      description: "События, приведшие к великой Хиджре",
      stories: [
        {
          number: "01",
          title: "Та‘иф",
          description: "Тяжёлое путешествие и великое терпение",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Ночная поездка",
          description: "Аль-Исра валь-Ми‘радж",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Присяги в Акабе",
          description: "Медина открывает свои двери",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Хиджра",
          description: "Путь из Мекки в Медину",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Мединский период",
      description: "Новая община и важнейшие события Медины",
      stories: [
        {
          number: "01",
          title: "Прибытие в Медину",
          description: "Начало новой эпохи",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Мечеть Пророка ﷺ",
          description: "Центр новой общины",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Битва при Бадре",
          description: "Великий день различения истины и лжи",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Битва при Ухуде",
          description: "Испытание для мусульман",
          href: "#",
          available: false,
        },
        {
          number: "05",
          title: "Битва у Рва",
          description: "Когда Медина оказалась окружена",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Последние годы",
      description: "Последние великие события жизни Пророка ﷺ",
      stories: [
        {
          number: "01",
          title: "Худайбия",
          description: "Договор, который изменил ход истории",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Завоевание Мекки",
          description: "Возвращение в город без мести",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Прощальное паломничество",
          description: "Последнее паломничество Пророка ﷺ",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Последние дни",
          description: "Последние дни жизни Посланника Аллаха ﷺ",
          href: "#",
          available: false,
        },
      ],
    },
  ],

  kz: [
    {
      title: "Дүниеге келуіне дейін",
      description:
        "Пайғамбар ﷺ дүниеге келуіне байланысты оқиғалар мен адамдар",
      stories: [
        {
          number: "01",
          title: "Піл жылы",
          description: "Алланың Абраһаның әскерінен Қағбаны қорғауы",
          href: "/story/elephant",
          available: true,
        },
        {
          number: "02",
          title: "Абдулла",
          description: "Мұхаммед ﷺ Пайғамбардың әкесі",
          href: "/story/abdullah",
          available: true,
        },
        {
          number: "03",
          title: "Әмина",
          description: "Алланың Елшісінің ﷺ анасы",
          href: "/story/amina",
          available: true,
        },
        {
          number: "04",
          title: "Мұхаммедтің ﷺ дүниеге келуі",
          description: "Тарихтың жаңа тарауы басталған түн",
          href: "/story/birth",
          available: true,
        },
      ],
    },

    {
      title: "Балалық және жастық шағы",
      description: "Мұхаммед ﷺ өмірінің алғашқы жылдары",
      stories: [
        {
          number: "01",
          title: "Халима ас-Сағдия",
          description: "Мұхаммед ﷺ Бану Сағд арасында қалай тәрбиеленді",
          href: "/story/halima",
          available: true,
        },
        {
          number: "02",
          title: "Халима үйіндегі береке",
          description:
            "Мұхаммед ﷺ келгеннен кейін Халима байқаған өзгерістер",
          href: "/story/halima-blessing",
          available: true,
        },
        {
          number: "03",
          title: "Халиманы қорқытқан күн",
          description:
            "Мұхаммед ﷺ балалық шағындағы көкіректің жарылуы оқиғасы",
          href: "/story/halima-scary-day",
          available: true,
        },
        {
          number: "04",
          title: "Анасына оралуы",
          description: "Мұхаммед ﷺ қайтадан Әминаға оралды",
          href: "/story/returnmother",
          available: true,
        },
        {
          number: "05",
          title: "Әминамен бірге өткен соңғы жылдар",
          description: "Мұхаммед ﷺ анасының жанындағы балалық шағы",
          href: "/story/last-years-with-amina",
          available: true,
        },
        {
          number: "06",
          title: "Анасының қайтыс болуы",
          description: "Мұхаммед ﷺ Әминадан айырылған кезде",
          href: "/story/aminadeath",
          available: true,
        },
        {
          number: "07",
          title: "Абдулмутталибтің қамқорлығында",
          description: "Немересіне қамқор болған атасы",
          href: "/story/undergrandfather",
          available: true,
        },
        {
          number: "08",
          title: "Әбу Талиб",
          description: "Көкесі Әбу Талибтің қамқорлығындағы жаңа кезең",
          href: "/story/under-abu-talib",
          available: true,
        },
      ],
    },

    {
      title: "Пайғамбарлыққа дейін",
      description: "Уахи басталғанға дейінгі Мұхаммад ﷺ өмірі",
      stories: [
        {
          number: "01",
          title: "Сауда сапарлары",
          description: "Меккеден тыс жерлерге жасалған сапарлар",
          href: "/story/tradejourneys",
          available: true,
        },
        {
          number: "02",
          title: "Әл-Амин",
          description: "Мекке тұрғындары оны неге Сенімді деп атаған",
          href: "/story/alamin",
          available: true,
        },
        {
          number: "03",
          title: "Хильф әл-Фудуль",
          description: "Әділдік үшін құрылған одақ",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Хадиша رضي الله عنها",
          description: "Оның жары болған әйел",
          href: "#",
          available: false,
        },
        {
          number: "05",
          title: "Қағбаны қайта қалпына келтіру",
          description: "Мұхаммед ﷺ даналығын көрсеткен оқиға",
          href: "#",
          available: false,
        },
        {
          number: "06",
          title: "Хира үңгірі",
          description: "Ұлы оқиғаның алдындағы оңаша кезең",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Пайғамбарлықтың басталуы",
      description: "Алғашқы уахи және алғаш иман келтіргендер",
      stories: [
        {
          number: "01",
          title: "Алғашқы уахи",
          description: "Жәбірейіл عليه السلام-пен кездесу",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Алғаш иман келтіргендер",
          description: "Исламды алғаш қабылдаған адамдар",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Жасырын шақыру",
          description: "Исламды таратудың алғашқы жылдары",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Ашық шақыру",
          description: "Исламға шақыру Құрайышқа жария болған кезде",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Меккедегі сынақтар",
      description:
        "Алғашқы мұсылмандардың көрген қысымы, сабыры мен табандылығы",
      stories: [
        {
          number: "01",
          title: "Алғашқы қуғын-сүргін",
          description: "Құрайыштың Исламға қарсы күресе бастауы",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Хабашстанға алғашқы хижра",
          description:
            "Мұсылмандар діндері үшін Меккеден кеткен кезде",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Бану Хашимге жасалған бойкот",
          description: "Аңғарда өткен үш ауыр жыл",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Қайғы жылы",
          description: "Хадиша мен Әбу Талибтен айырылу",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Мәдинаға жол",
      description: "Ұлы Хижраға алып келген оқиғалар",
      stories: [
        {
          number: "01",
          title: "Таиф",
          description: "Ауыр сапар және ұлы сабыр",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Түнгі сапар",
          description: "Исра және Мираж",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Ақабадағы серттер",
          description: "Мәдина өз есігін ашқан кезде",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Хижра",
          description: "Меккеден Мәдинаға сапар",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Мәдина кезеңі",
      description:
        "Жаңа үмбет және Мәдинадағы маңызды оқиғалар",
      stories: [
        {
          number: "01",
          title: "Мәдинаға келу",
          description: "Жаңа дәуірдің басталуы",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Пайғамбар мешіті ﷺ",
          description: "Жаңа үмбеттің орталығы",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Бәдір шайқасы",
          description: "Ақиқат пен жалғанды ажыратқан ұлы күн",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Ұхұд шайқасы",
          description: "Мұсылмандар үшін үлкен сынақ",
          href: "#",
          available: false,
        },
        {
          number: "05",
          title: "Ор қазылған шайқас",
          description: "Мәдина қоршауда қалған кезде",
          href: "#",
          available: false,
        },
      ],
    },

    {
      title: "Соңғы жылдар",
      description: "Пайғамбар ﷺ өмірінің соңғы ұлы оқиғалары",
      stories: [
        {
          number: "01",
          title: "Худайбия",
          description: "Тарихтың бағытын өзгерткен келісім",
          href: "#",
          available: false,
        },
        {
          number: "02",
          title: "Меккенің алынуы",
          description: "Кек алмай қалаға қайта оралу",
          href: "#",
          available: false,
        },
        {
          number: "03",
          title: "Қоштасу қажылығы",
          description: "Пайғамбар ﷺ жасаған соңғы қажылық",
          href: "#",
          available: false,
        },
        {
          number: "04",
          title: "Соңғы күндер",
          description: "Алла Елшісі ﷺ өмірінің соңғы күндері",
          href: "#",
          available: false,
        },
      ],
    },
  ],
};

const ui = {
  ru: {
    home: "← На главную",
    about: "О приложении →",
    heading: "Истории",
    intro:
      "Путь Посланника Аллаха Мухаммада ﷺ — от событий до его рождения до последних дней его жизни.",
    install: "📱 Добавить Сира на телефон →",
    soon: "Скоро",
    footer1: "Истории добавляются постепенно",
    footer2: "Пусть изучение сиры будет полезным знанием.",
  },

  kz: {
    home: "← Басты бетке",
    about: "Қосымша туралы →",
    heading: "Хикаялар",
    intro:
      "Алла Елшісі Мұхаммед ﷺ өмірінің дүниеге келуіне дейінгі оқиғалардан бастап соңғы күндеріне дейінгі жолы.",
    install: "📱 Сира-ны телефонға қосу →",
    soon: "Жақында",
    footer1: "Хикаялар біртіндеп қосылады",
    footer2: "Сираны оқу пайдалы білім болсын.",
  },
};

export default function StoriesList() {
  const router = useRouter();

  const [language, setLanguage] =
    useState<Language | null>(null);

  const [theme, setTheme] =
    useState<Theme | null>(null);

  useEffect(() => {
    // =========================
    // ЯЗЫК
    // =========================

    const savedLanguage =
      localStorage.getItem("language");

    if (
      savedLanguage === "ru" ||
      savedLanguage === "kz"
    ) {
      setLanguage(savedLanguage);
    } else {
      router.replace("/language");
    }

    // =========================
    // ТЕМА
    // =========================

    const savedTheme =
      localStorage.getItem("theme");

    if (
      savedTheme === "light" ||
      savedTheme === "dark"
    ) {
      setTheme(savedTheme);

      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    } else {
      const prefersDark =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

      const initialTheme: Theme =
        prefersDark ? "dark" : "light";

      setTheme(initialTheme);

      document.documentElement.classList.toggle(
        "dark",
        initialTheme === "dark"
      );
    }
  }, [router]);

  if (!language || !theme) {
    return (
      <main className="min-h-screen bg-background" />
    );
  }

  const sections = content[language];
  const text = ui[language];

  const isDark = theme === "dark";

  // =========================
  // ПЕРЕКЛЮЧЕНИЕ ТЕМЫ
  // =========================

  const toggleTheme = () => {
    const newTheme: Theme =
      isDark ? "light" : "dark";

    localStorage.setItem(
      "theme",
      newTheme
    );

    setTheme(newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">

      <div className="w-full max-w-3xl mx-auto px-5 pt-6 pb-10">

        {/* =========================
            ВЕРХНЯЯ НАВИГАЦИЯ
        ========================= */}

        <div className="flex items-center justify-between">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors"
          >
            {text.home}
          </Link>

          <div className="flex items-center gap-5">

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors"
            >
              {text.about}
            </Link>

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

        {/* =========================
            ЗАГОЛОВОК
        ========================= */}

        <div className="mt-12 mb-14">

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">
            Сира
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {text.heading}
          </h1>

          <p className="mt-4 text-zinc-500 max-w-xl leading-relaxed">
            {text.intro}
          </p>

          <Link
            href="/install"
            className="inline-flex items-center gap-2 mt-6 text-sm text-zinc-500 hover:text-foreground transition-colors"
          >
            {text.install}
          </Link>

        </div>

        {/* =========================
            РАЗДЕЛЫ
        ========================= */}

        <div className="space-y-16">

          {sections.map(
            (section, sectionIndex) => (
              <section
                key={section.title}
              >

                {/* Заголовок раздела */}

                <div className="mb-6">

                  <div className="flex items-center gap-3">

                    <span className="text-xs text-zinc-500 font-mono">
                      {String(
                        sectionIndex + 1
                      ).padStart(2, "0")}
                    </span>

                    <h2 className="text-2xl md:text-3xl font-medium">
                      {section.title}
                    </h2>

                  </div>

                  <p className="text-sm text-zinc-500 mt-2 ml-8">
                    {section.description}
                  </p>

                </div>

                {/* =========================
                    ИСТОРИИ
                ========================= */}

                <div className="space-y-3">

                  {section.stories.map(
                    (story) => {

                      // =========================
                      // ДОСТУПНАЯ ИСТОРИЯ
                      // =========================

                      if (story.available) {
                        return (
                          <Link
                            key={story.title}
                            href={story.href}
                            className="group block"
                          >

                            <div
                              className="
                                relative
                                overflow-hidden
                                rounded-2xl

                                border
                                border-zinc-300
                                dark:border-zinc-900

                                bg-white
                                dark:bg-zinc-950

                                px-5
                                py-5

                                transition-all
                                duration-300

                                hover:border-zinc-400
                                dark:hover:border-zinc-800

                                hover:bg-zinc-50
                                dark:hover:bg-zinc-900
                              "
                            >

                              <div className="flex items-center gap-5">

                                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-600 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors">
                                  {story.number}
                                </span>

                                <div className="flex-1 min-w-0">

                                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                                    {story.title}
                                  </h3>

                                  <p className="text-sm text-zinc-600 dark:text-zinc-600 mt-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-500 transition-colors">
                                    {story.description}
                                  </p>

                                </div>

                                <span className="text-zinc-500 dark:text-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all text-lg">
                                  →
                                </span>

                              </div>

                            </div>

                          </Link>
                        );
                      }

                      // =========================
                      // СКОРО
                      // =========================

                      return (
                        <div
                          key={story.title}
                          className="
                            rounded-2xl

                            border
                            border-zinc-300
                            dark:border-zinc-900

                            bg-zinc-50
                            dark:bg-zinc-950/40

                            px-5
                            py-5

                            opacity-60
                          "
                        >

                          <div className="flex items-center gap-5">

                            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-700">
                              {story.number}
                            </span>

                            <div className="flex-1 min-w-0">

                              <div className="flex items-center gap-3 flex-wrap">

                                <h3 className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
                                  {story.title}
                                </h3>

                                <span
                                  className="
                                    text-[10px]
                                    uppercase
                                    tracking-wider

                                    text-zinc-500
                                    dark:text-zinc-700

                                    border
                                    border-zinc-300
                                    dark:border-zinc-800

                                    rounded-full
                                    px-2
                                    py-0.5
                                  "
                                >
                                  {text.soon}
                                </span>

                              </div>

                              <p className="text-sm text-zinc-500 dark:text-zinc-700 mt-1">
                                {story.description}
                              </p>

                            </div>

                          </div>

                        </div>
                      );
                    }
                  )}

                </div>

              </section>
            )
          )}

        </div>

        {/* =========================
            НИЖНИЙ ТЕКСТ
        ========================= */}

        <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-900 text-center">

          <p className="text-xs text-zinc-500 dark:text-zinc-700 tracking-wide">
            {text.footer1}
          </p>

          <p className="text-xs text-zinc-400 dark:text-zinc-800 mt-2">
            {text.footer2}
          </p>

        </div>

      </div>

    </main>
  );
}