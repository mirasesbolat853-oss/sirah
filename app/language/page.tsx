"use client";

import { useRouter } from "next/navigation";

export default function LanguagePage() {
  const router = useRouter();

  function selectKazakh() {
    localStorage.setItem("language", "kz");
    router.push("/");
  }

  function selectRussian() {
    localStorage.setItem("language", "ru");
    router.push("/");
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xs space-y-3">
        <button
          type="button"
          onClick={selectKazakh}
          className="w-full rounded-2xl bg-white py-4 text-black text-lg font-semibold"
        >
          Қазақша
        </button>

        <button
          type="button"
          onClick={selectRussian}
          className="w-full rounded-2xl border border-zinc-700 py-4 text-white text-lg font-semibold"
        >
          Русский
        </button>
      </div>
    </main>
  );
}