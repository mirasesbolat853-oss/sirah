import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-[100dvh] bg-black text-white">
      <div className="mx-auto w-full max-w-2xl px-6 py-8">

        <div className="flex items-center justify-between mb-10">
          <Link
            href="/stories"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← К историям
          </Link>

          <span className="text-sm text-zinc-500">
            Sirah
          </span>
        </div>

        <section className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-4">
            SIRAH
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            О приложении
          </h1>

          <p className="text-zinc-400 leading-relaxed">
            Sirah — это простой способ знакомиться с жизнеописанием
            Пророка Мухаммада ﷺ небольшими историями.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            Зачем создан Sirah?
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Мы хотели сделать изучение сиры простым и доступным.
            Вместо длинных текстов история разделена на небольшие
            части, которые можно читать одну за другой.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Цель приложения — помочь человеку начать знакомство
            с жизнью Пророка ﷺ даже тогда, когда у него мало времени
            на чтение.
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black text-lg">
              ✓
            </div>

            <h2 className="text-xl font-semibold">
              Проверка материалов
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            Материалы текущих историй были представлены{" "}
            <span className="text-white font-medium">
              Омирбекову Ернару, наиб-имаму области Жетісу
            </span>
            {" "}и получили его одобрение.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            О достоверности
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Мы стремимся излагать историю жизни Пророка ﷺ кратко
            и понятно, опираясь на достоверные источники и не добавляя
            вымышленных диалогов или неподтверждённых деталей.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">
            Как добавить Sirah на главный экран
          </h2>

          <div className="mb-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-lg font-medium mb-4">
              🍎 iPhone
            </h3>

            <ol className="space-y-3 text-sm text-zinc-400">
              <li>
                <span className="text-white">1.</span>{" "}
                Открой Sirah в Safari.
              </li>

              <li>
                <span className="text-white">2.</span>{" "}
                Нажми кнопку «Поделиться».
              </li>

              <li>
                <span className="text-white">3.</span>{" "}
                Выбери «На экран "Домой"».
              </li>

              <li>
                <span className="text-white">4.</span>{" "}
                Нажми «Добавить».
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-lg font-medium mb-4">
              🤖 Android
            </h3>

            <ol className="space-y-3 text-sm text-zinc-400">
              <li>
                <span className="text-white">1.</span>{" "}
                Открой Sirah в Chrome.
              </li>

              <li>
                <span className="text-white">2.</span>{" "}
                Нажми меню <span className="text-white">⋮</span>.
              </li>

              <li>
                <span className="text-white">3.</span>{" "}
                Выбери «Добавить на главный экран» или
                «Установить приложение».
              </li>

              <li>
                <span className="text-white">4.</span>{" "}
                Подтверди установку.
              </li>
            </ol>
          </div>
        </section>

        <Link
          href="/stories"
          className="flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-black font-medium hover:bg-zinc-200 transition-colors"
        >
          Перейти к историям →
        </Link>

        <p className="text-center text-xs text-zinc-700 mt-8">
          Sirah
        </p>

      </div>
    </main>
  );
}