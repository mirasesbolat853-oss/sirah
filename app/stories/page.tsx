import Link from "next/link";

export default function StoriesList() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-6 w-full flex flex-col items-center">
      {/* Шапка с кнопкой назад */}
      <div className="w-full max-w-2xl pt-4 pb-12">
        <Link
          href="/"
          className="text-zinc-500 hover:text-white transition text-sm inline-flex items-center gap-2"
        >
          ← На главную
        </Link>
      </div>

      {/* Основной контент */}
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight mb-10 text-white">
          Истории
        </h1>

        {/* Карточка истории */}
        <div className="w-full flex flex-col gap-4">
          <Link
            href="/story"
            className="group relative p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-2xl"
          >
            {/* Тонкий фоновый градиент при наведении */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/0 via-zinc-900/40 to-zinc-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h2 className="relative z-10 text-xl md:text-2xl font-normal text-zinc-100 tracking-wide group-hover:scale-105 transition-transform duration-300">
              Год слона
            </h2>
          </Link>
        </div>
      </div>
    </main>
  );
}