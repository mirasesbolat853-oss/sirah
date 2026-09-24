import Link from "next/link";
import Image from "next/image";

export default function InstallPage() {
  return (
    <main className="min-h-[100dvh] bg-black text-white">
      <div className="mx-auto w-full max-w-2xl px-6 py-8">

        {/* Верхняя навигация */}
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

        {/* Заголовок */}
        <section className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-4">
            SIRAH
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            Добавить Sirah
            <br />
            на телефон
          </h1>

          <p className="text-zinc-400 leading-relaxed">
            Sirah можно добавить на главный экран телефона и открывать
            как обычное приложение — без поиска сайта в браузере.
          </p>
        </section>

        {/* Важно */}
        <section className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black text-lg">
              +
            </div>

            <h2 className="text-xl font-semibold">
              Это бесплатно
            </h2>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            Ничего скачивать из App Store или Google Play не нужно.
            Sirah устанавливается прямо с сайта на главный экран телефона.
          </p>
        </section>

        {/* iPhone */}
        <section className="mb-14">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-2">
              Шаг за шагом
            </p>

            <h2 className="text-2xl font-semibold">
              🍎 iPhone
            </h2>

            <p className="text-zinc-500 mt-2">
              Установка через Safari
            </p>
          </div>

          <div className="space-y-10">

            {/* iPhone 1 */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-zinc-500">
                  Шаг 1
                </span>

                <h3 className="text-lg font-medium mt-1">
                  Открой Sirah в Safari
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  Открой сайт Sirah именно в браузере Safari.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/install/iphone-4.jpeg"
                  alt="Sirah открыт в Safari на iPhone"
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
                  Шаг 2
                </span>

                <h3 className="text-lg font-medium mt-1">
                  Нажми «Поделиться»
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  В нижней части Safari нажми кнопку со значком
                  «Поделиться».
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/install/iphone-1.jpeg"
                  alt="Кнопка Поделиться в Safari"
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
                  Шаг 3
                </span>

                <h3 className="text-lg font-medium mt-1">
                  Выбери «На экран "Домой"»
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  В открывшемся меню найди пункт добавления сайта
                  на главный экран.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/install/iphone-2.jpeg"
                  alt="Добавить Sirah на экран Домой"
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
                  Шаг 4
                </span>

                <h3 className="text-lg font-medium mt-1">
                  Нажми «Добавить»
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  Если появится пункт «Открывать как веб-приложение»,
                  включи его. Затем нажми «Добавить». На фоте конечный итог.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/install/iphone-3.jpeg"
                  alt="Добавление Sirah на главный экран iPhone"
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
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-2">
                Готово
              </p>

              <h2 className="text-2xl font-semibold">
                Как будет выглядеть Sirah
              </h2>

              <p className="text-zinc-500 mt-2">
                После установки иконка Sirah появится на главном экране.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
              <Image
                src="/install/iphone-3.jpeg"
                alt="Sirah на главном экране iPhone"
                width={800}
                height={1200}
                className="w-full h-auto"
              />
            </div>

          </section>

          <div className="mt-8 rounded-2xl border border-zinc-800 p-5">
            <p className="text-sm text-zinc-400 leading-relaxed">
              После этого иконка Sirah появится на главном экране.
              Нажимай на неё — и Sirah откроется как приложение.
            </p>
          </div>
        </section>

        {/* Android */}
        <section className="mb-14">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-2">
              Шаг за шагом
            </p>

            <h2 className="text-2xl font-semibold">
              🤖 Android
            </h2>

            <p className="text-zinc-500 mt-2">
              Установка через Google Chrome
            </p>
          </div>

          <div className="space-y-10">

            {/* Android 1 */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-zinc-500">
                  Шаг 1
                </span>

                <h3 className="text-lg font-medium mt-1">
                  Открой Sirah в Chrome
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  Открой сайт Sirah в браузере Google Chrome.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/install/android-1.jpeg"
                  alt="Sirah открыт в Google Chrome на Android"
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
                  Шаг 2
                </span>

                <h3 className="text-lg font-medium mt-1">
                  Открой меню
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  Нажми на три точки
                  <span className="text-white"> ⋮ </span>
                  в правом верхнем углу Chrome.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/install/android-2.jpeg"
                  alt="Меню Google Chrome на Android"
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
                  Шаг 3
                </span>

                <h3 className="text-lg font-medium mt-1">
                  Нажми «Установить»
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  В зависимости от версии Chrome пункт может называться
                  «Установить приложение» или находиться внутри
                  «Установить и создать ярлык».
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/install/android-3.jpeg"
                  alt="Установка Sirah на Android"
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
                  Шаг 4
                </span>

                <h3 className="text-lg font-medium mt-1">
                  Подтверди установку
                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  Подтверди установку. После этого Sirah появится
                  среди приложений и на главном экране.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/install/android-4.jpeg"
                  alt="Sirah установлен на Android"
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
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-2">
                Готово
              </p>

              <h2 className="text-2xl font-semibold">
                Как будет выглядеть Sirah
              </h2>

              <p className="text-zinc-500 mt-2">
                После установки иконка Sirah появится на главном экране.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
              <Image
                src="/install/android-5.jpeg"
                alt="Sirah на главном экране Android"
                width={800}
                height={1200}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-800 p-5">
              <p className="text-sm text-zinc-400 leading-relaxed">
                Нажимаешь на иконку Sirah — и Sirah открывается
                как отдельное приложение, без обычного интерфейса Chrome.
              </p>
            </div>
          </section>
        </section>

        {/* Возврат */}
        <section className="pb-8">
          <Link
            href="/stories"
            className="flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-black font-medium hover:bg-zinc-200 transition-colors"
          >
            Перейти к историям →
          </Link>

          <p className="text-center text-xs text-zinc-700 mt-8">
            Sirah
          </p>
        </section>

      </div>
    </main>
  );
}