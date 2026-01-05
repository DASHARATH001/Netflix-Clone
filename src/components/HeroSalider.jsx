import React, { useEffect, useState } from "react";
import { FetchfromTMDB, imageUrl } from "../api/tmdb";
import { Link } from "react-router-dom";

const HeroSalider = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await FetchfromTMDB("trending/movie/week");
        setItem(data?.results?.slice(0, 5) || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="relative overflow-hidden h-[60vh] md:h-[70vh] rounded-b-lg ">
      {item.map((item, i) => (
        <div
          key={item.id}
          className={`absolute inset-0 opacity-100 z-10 duration-100  ${
            i === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
          } `}
          style={{
            background: `linear-gradient(to right, rgba(6,6,7,.7), rgba(6,6,7,0.2)),url(${imageUrl(item.backdrop_path, "w780")}) `,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-6xl flex items-center p-4 h-full mx-auto text-white">
            <div className="max-w-2xl">
              <h2 className="font-bold text-3xl md:text-5xl">Movie Title</h2>
              <p className="mt-4 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="flex gap-3 mt-6">
                <Link
                  to={`/movie/${item.id}`}
                  className="bg-slate-200 text-black font-semibold rounded-md px-4 py-2"
                >
                  Play
                </Link>
                <button className="bg-slate-200 text-black font-semibold rounded-md px-4 py-2">
                  My list
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSalider;
