import Link from "next/link";

const sections = [
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
        href: "#",
        available: false,
      },
      {
        number: "04",
        title: "Рождение Мухаммада ﷺ",
        description: "Ночь, с которой началась новая глава истории",
        href: "#",
        available: false,
      },
    ],
  },

  {
    title: "Детство и юность",
    description: "Первые годы жизни Мухаммада ﷺ",
    stories: [
      {
        number: "01",
        title: "Халима ас-Са'дия",
        description: "Годы, проведённые среди Бану Са'д",
        href: "#",
        available: false,
      },
      {
        number: "02",
        title: "Возвращение к матери",
        description: "Детство Мухаммада ﷺ после жизни в пустыне",
        href: "#",
        available: false,
      },
      {
        number: "03",
        title: "Смерть матери",
        description: "Когда Мухаммад ﷺ остался без матери",
        href: "#",
        available: false,
      },
      {
        number: "04",
        title: "Под опекой Абдуль-Мутталиба",
        description: "Дед, который заботился о своём внуке",
        href: "#",
        available: false,
      },
      {
        number: "05",
        title: "Абу Талиб",
        description: "Новая глава жизни под опекой дяди",
        href: "#",
        available: false,
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
        href: "#",
        available: false,
      },
      {
        number: "02",
        title: "Аль-Амин",
        description: "Почему жители Мекки называли его Достоверным",
        href: "#",
        available: false,
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
        title: "Та'иф",
        description: "Тяжёлое путешествие и великое терпение",
        href: "#",
        available: false,
      },
      {
        number: "02",
        title: "Ночная поездка",
        description: "Аль-Исра валь-Ми'радж",
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
];

export default function StoriesList() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Верхняя часть */}
      <div className="w-full max-w-3xl mx-auto px-5 pt-6 pb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
        >
          ← На главную
        </Link>

        <div className="mt-12 mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-4">
            SIRAH
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Истории
          </h1>

          <p className="mt-4 text-zinc-500 max-w-xl leading-relaxed">
            Путь Посланника Аллаха Мухаммада ﷺ — от событий до его рождения
            до последних дней его жизни.
          </p>
        </div>

        {/* Разделы */}
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <section key={section.title}>
              {/* Заголовок раздела */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-700 font-mono">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-medium">
                    {section.title}
                  </h2>
                </div>

                <p className="text-sm text-zinc-600 mt-2 ml-8">
                  {section.description}
                </p>
              </div>

              {/* Истории */}
              <div className="space-y-3">
                {section.stories.map((story) => {
                  if (story.available) {
                    return (
                      <Link
                        key={story.title}
                        href={story.href}
                        className="group block"
                      >
                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-5 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900">
                          <div className="flex items-center gap-5">
                            <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                              {story.number}
                            </span>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors">
                                {story.title}
                              </h3>

                              <p className="text-sm text-zinc-600 mt-1 group-hover:text-zinc-500 transition-colors">
                                {story.description}
                              </p>
                            </div>

                            <span className="text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all text-lg">
                              →
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={story.title}
                      className="rounded-2xl border border-zinc-900 bg-zinc-950/40 px-5 py-5 opacity-60"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-xs font-mono text-zinc-700">
                          {story.number}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-lg font-medium text-zinc-400">
                              {story.title}
                            </h3>

                            <span className="text-[10px] uppercase tracking-wider text-zinc-700 border border-zinc-800 rounded-full px-2 py-0.5">
                              Скоро
                            </span>
                          </div>

                          <p className="text-sm text-zinc-700 mt-1">
                            {story.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Низ */}
        <div className="mt-20 pt-8 border-t border-zinc-900 text-center">
          <p className="text-xs text-zinc-700 tracking-wide">
            Истории добавляются постепенно
          </p>

          <p className="text-xs text-zinc-800 mt-2">
            Пусть изучение сиры будет полезным знанием.
          </p>
        </div>
      </div>
    </main>
  );
}