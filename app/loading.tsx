export default function Loading() {
  return (
    <section className="space-y-8 animate-pulse">
      <div className="h-7 w-40 rounded bg-slate-200 dark:bg-slate-700" />

      <div className="rounded-2xl bg-white p-6 shadow-sm space-y-4
        dark:bg-slate-800 dark:border dark:border-slate-700">
        <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-20 rounded-xl bg-slate-100 dark:bg-slate-700"
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm space-y-4
        dark:bg-slate-800 dark:border dark:border-slate-700">
        <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-10 rounded bg-slate-100 dark:bg-slate-700"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
