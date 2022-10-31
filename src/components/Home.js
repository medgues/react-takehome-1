import React, { useEffect, useState } from 'react'
import Search from './search'
import Card from './Card';
import FetchMovies from './FetchMovies';

function Home() {
  const [movies, setMovies] = useState([])
  console.log(movies)
  const fetchMovies = async () => {
    const fetchedMovies = await FetchMovies()
    setMovies(fetchedMovies.results)
    console.log('movies', fetchedMovies)
  }
  useEffect(() => {
    fetchMovies()
  }, [])
  
  return (
    <>
      {/* <Fetch /> */}
      <div className="flex flex-col w-full">
        <div className="grid rounded-box place-items-center">
          <Search />
        </div>
        <div className="divider"></div>
        <div className="">
          <h1 className='text-white pb-5 pl-5'> populare choices :</h1>
          <div className='flex flex-row flex-wrap rounded-box place-items-center justify-center'>
            { movies.length === 0  ? <span class="loader mb-10"></span>  : <Card movies={movies} /> }
          </div>
        </div>
      </div>
    </>
  );
}

export default Home