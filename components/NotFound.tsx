import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";

interface NotFoundProps {
  title: string;
  description: string;
}

export function NotFound({ title, description }: NotFoundProps) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm
        dark:border-slate-700 dark:bg-slate-900">

        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full
          bg-amber-100 text-amber-600
          dark:bg-amber-500/10 dark:text-amber-400">
          <AlertTriangle size={22} />
        </div>

        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h2>

        <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium
            text-white hover:bg-slate-800
            dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
