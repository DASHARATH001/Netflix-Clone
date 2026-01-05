import React from 'react'
import HeroSalider from '../components/HeroSalider'
import CategroyRow from '../components/CategroyRow'

const Home = () => {
  return (
    <div className=''>
      <HeroSalider/>
      <div className='max-w-6xl mx-auto'>
        <CategroyRow title="trading movie" endpoint='trending/movie/week' />
         <CategroyRow title="top rated movie" endpoint='movie/top_rated' />
          <CategroyRow title="romanic movie" endpoint='discover/movie?with_genres=28' />
           <CategroyRow title=" amzing movie"  endpoint='discover/movie?with_genres=28'  />
      </div>
    </div>
  )
}

export default Home
