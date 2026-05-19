// frontend/src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-slate-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-indigo-400">
          My Developer Portfolio
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          React + TypeScript + Next.js で構築する技術証明のためのポートフォリオサイト
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <span className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Coming Soon...
          </span>
        </div>
      </div>
    </main>
  );
}