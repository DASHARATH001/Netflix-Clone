import React from 'react'
import { imageUrl } from '../api/tmdb'
import {Link} from 'react-router-dom'

export default function MovieCard  ({movie}) {
  return (
    <div>
    <Link to={`/movie/${movie.id}`} className='block transform hover:scale-105 transition-transform w-[150px' >
      <img src={imageUrl(movie.poster_path,"w342")} alt="demo" className='w-full rounded-lg' />
      <div className='mt-2 text-sm'>
        <div className='font-medium line-clamp-1'>{movie.title || movie.name}</div>
          <div className='text-xs text-gray-200'>{(movie.release_date || movie.first_air_date || "").slice(0,4)}</div>
      </div>
    </Link>
    </div>
  )
}

