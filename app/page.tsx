import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <p className="text-center tracking-[0.4em] text-zinc-500 text-sm">
          SIRAH
        </p>

        <h1 className="mt-6 text-center text-5xl font-bold">
          Жизнь Посланника ﷺ
        </h1>

        <p className="mt-6 text-center text-zinc-400 leading-8">
          История,
          <br />
          которую хочется читать дальше.
        </p>

        <Link
          href="/stories"
          className="mt-14 block rounded-2xl bg-white py-4 text-center text-black text-lg font-semibold transition hover:scale-[1.02]"
        >
          Бисмиллях
        </Link>

      </div>
    </main>
  );
}