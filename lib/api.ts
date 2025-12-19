const BASE_URL = "https://mixo-fe-backend-task.vercel.app";

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
    const message = `API error: ${res.status}`;
    throw new Error(message);
  }

  return res.json();
}
