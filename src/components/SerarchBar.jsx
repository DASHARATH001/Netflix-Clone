import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchfromTMDB } from "../api/tmdb";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  async function onSearch(e) {
    e.preventDefault();
    if (!q.trim()) return;

    try {
      const data = await FetchfromTMDB(
        `search/movie?query=${encodeURIComponent(q)}&include_adult=false`
      );

      setResults(data?.results || []);
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  return (
    <div>
      <form onSubmit={onSearch} className="relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          type="text"
          placeholder="Search Movie"
          className="bg-slate-100 px-3 py-1 rounded-md w-48 text-black font-bold md:w-64 focus:outline-none text-sm"
        />

        {results.length > 0 && (
          <ul className="absolute right-0 mt-2 bg-slate-600 text-sm rounded-md overflow-hidden w-64 max-h-64 z-50">
            {results.slice(0, 6).map((r) => (
              <li
                key={r.id}
                onClick={() => {
                  setResults([]);
                  setQ("");
                  navigate(`/movie/${r.id}`);
                }}
                className="px-3 py-2 hover:bg-slate-400 cursor-pointer"
              >
                {r.title} ({(r.release_date || "").slice(0, 4)})
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}




