const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE = import.meta.env.VITE_TMDB_BASE_URL;

export async function FetchfromTMDB(endpoint, params = {}) {
  const url = new URL(`${BASE}/${endpoint}`);

  Object.entries(params).forEach(([k, v]) =>
    url.searchParams.set(k, v)
  );

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("TMDB fetch failed");
  }

  return res.json();
}

export const imageUrl = (path, size = "w500") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;


