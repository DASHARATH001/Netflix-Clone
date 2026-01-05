import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'


const App = () => {
  return (
    
      <div className='min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto' >
        <Navbar />
        <div className='pt-20'>
          <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path='/movie/:id' element={<MovieDetails/>}/>
          </Routes>
        </div>
      </div>
    
  )
}

export default App