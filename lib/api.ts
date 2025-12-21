const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error("API base URL is not defined");
}

export class ApiError extends Error {
  status: number;
  retryAfter?: number;

  constructor(message: string, status: number, retryAfter?: number) {
    super(message);
    this.status = status;
    this.retryAfter = retryAfter;
  }
}

export async function fetchFromApi<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    let retryAfter: number | undefined;

    try {
      const errorBody = await res.json();
      retryAfter = errorBody.retry_after;
    } catch { }

    if (res.status === 429) {
      throw new ApiError(
        "Too many requests. Please wait and try again.",
        429,
        retryAfter
      );
    }

    throw new ApiError("Service temporarily unavailable.", res.status, retryAfter);

  }

  return res.json();
}
