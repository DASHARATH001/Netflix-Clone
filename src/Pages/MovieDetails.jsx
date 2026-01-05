import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchfromTMDB, imageUrl } from "../api/tmdb";

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // movie details
        const details = await FetchfromTMDB(`movie/${id}`);
        setMovie(details);

        // movie videos
        const v = await FetchfromTMDB(`movie/${id}/videos`);
        setVideos(v?.results || []);
      } catch (error) {
        console.error("TMDB Error:", error);
      }
    })();
  }, [id]);

  if (!movie) {
    return <div className="mt-32 text-center">Loading...</div>;
  }

  // safely find trailer
  const trailer = videos.find(
    (video) =>
      video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Poster */}
        <div>
          <img
            src={imageUrl(movie.poster_path, "w500")}
            alt={movie.title}
            className="rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-400 mt-1">{movie.tagline}</p>
          <p className="mt-4">{movie.overview}</p>

          {/* Trailer */}
          <div className="mt-6">
            {trailer?.key ? (
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Movie Trailer"
                allowFullScreen
                className="w-full h-[400px] rounded"
              />
            ) : (
              <div className="bg-slate-900 p-6 rounded text-center">
                trailer loading......
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}



