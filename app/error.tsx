"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6">
      <h2 className="mb-2 text-lg font-semibold">Something went wrong</h2>
      <p className="mb-4 text-sm text-gray-600">
        Failed to load data. Please try again.
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
