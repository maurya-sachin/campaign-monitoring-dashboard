"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { status?: number; retryAfter?: number };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isRateLimited = error.status === 429;

  function handleRetry() {
    if (isRateLimited) {
      window.location.reload();
      return;
    }

    reset();
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div
        className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm
        dark:border-slate-700 dark:bg-slate-900"
      >
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full
          bg-red-100 text-red-600
          dark:bg-red-500/10 dark:text-red-400"
        >
          <AlertCircle size={22} />
        </div>

        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          {isRateLimited ? "Too many requests" : "Something went wrong"}
        </h2>

        <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
          {isRateLimited
            ? "You’ve hit the API rate limit. Please wait a moment and try again."
            : "The service is temporarily unavailable. Please retry."}
        </p>

        <button
          onClick={handleRetry}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium
            text-white hover:bg-slate-800
            dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          <RefreshCw size={16} />
          Retry
        </button>
      </div>
    </div>
  );
}
