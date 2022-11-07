import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Search from './components/search'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import useFetchData from './hooks/useFetchData';
import Main from './components/Main';
import MoviePage from './components/MoviePage';

function App() {

  const [movies, series, allData, setAllData] = useFetchData()
  const [movie, setMovie] = useState('')
  const handelSearch = (event) => {
    const searchTriger = movies.filter((item) => item.title.toLowerCase().includes(event))
    setAllData(searchTriger)
  }
  const handelDetailsClick = (movies) => {
    
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Search handelSearch={handelSearch} />
      <Routes>
        <Route path="/" element={<Main program={allData} handelDetailsClick={handelDetailsClick} />} />
        <Route path="/series" element={<Main program={series} handelDetailsClick={handelDetailsClick} />} />
        <Route path="/movies" element={<Main program={movies} handelDetailsClick={handelDetailsClick} />} />
        <Route path={`/${movie.id}`} element={<MoviePage program={movie} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
