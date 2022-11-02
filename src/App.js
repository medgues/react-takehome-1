import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Search from './components/search'
import FetchMovies from './components/FetchMovies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() { 

  const [movies, setMovies] = useState([]) 
  const fetchMovies = async () => {
    const fetchedMovies = await FetchMovies()
    setMovies(fetchedMovies)
    
  }
  useEffect(() => {
    fetchMovies()
    console.log('movies',movies)
  }, []) 

  const handelSearch = (event) => {
    const searchTriger = movies.filter((item)=> item.title === event)
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Search handelSearch={handelSearch} />
      <Routes>
        <Route path="/" element={<Home movies={movies.filter((item)=> item.releaseYear >= 2010)} />} />
        <Route path="/series" element={<Home movies={movies.filter((item)=> item["programType"] === "series")} />} />
        <Route path="/movies" element={<Home movies={movies.filter((item)=> item["programType"] === "movie")} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
