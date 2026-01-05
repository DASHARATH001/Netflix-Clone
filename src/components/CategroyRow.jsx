import React, { useEffect, useRef, useState } from "react";
import MovieCard from "../components/MovieCard";
import { FetchfromTMDB } from "../api/tmdb";

export default function CategroyRow({
  title = "Popular",
  endpoint = "movie/popular"

}) {
  const [items, setItems] = useState([])
  const scrollRef = useRef();

  useEffect(() => {
    (async () => {
      const data = await FetchfromTMDB(endpoint, {
        language: "en-US",
        page: 1,
      });
      setItems(data.results || []);
    })();
  }, [endpoint]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth < 640 ? 250
      : window.innerWidth < 1024 ? 400 : 600;
    scrollRef.current.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div>
        <section className="my-8 w-full">
          {/* Heading + Buttons */}
          <div className="flex items-center justify-between px-4">
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className=" hover:bg-black backdrop-blur-sm px-3 py-2 rounded-ful transitionl">
                ◀️
              </button>
              <button
                onClick={() => scroll("right")}
                className=" hover:bg-black backdrop-blur-sm px-3 py-2 rounded-full transition">
                ▶️
              </button>
            </div>
          </div>
          {/* Movies Row */}
          <div
            ref={scrollRef}
            className="mt-4 px-4 flex space-x-4 overflow-x-auto py-3 scrollbar-hide">
            {items.map((items) => (
              <div key={items.id}
                className="
            w-[130px]
            sm:w-[150px]  md:w-[180px] lg:w-[200px]
            flex-shrink-0
            hover:scale-105
            transition
            duration-300
          "
              >
                <MovieCard
                  movie={items}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};


