"use client";

import { useEffect } from "react";

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

  return (
    <div className="p-6">
      <h2 className="mb-2 text-lg font-semibold">
        {isRateLimited ? "Too many requests" : "Something went wrong"}
      </h2>

      <p className="mb-4 text-sm text-gray-600">
        {isRateLimited
          ? "You’ve hit the request limit. Please wait a moment and try again."
          : "The service is temporarily unavailable."}
      </p>

      <button
        onClick={reset}
        className="rounded bg-black px-4 py-2 text-sm text-white"
      >
        Retry
      </button>
    </div>
  );
}
