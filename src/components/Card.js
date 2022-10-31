import React from 'react'

function Card({ movies }) {
  return (
    movies.map((movie) => {
      return (
        <div class="m-2 relative cardwidth bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={movie.image} alt="" />
          </a>
          <div class="backdrop-blur-sm w-full  bg-slate-50 cardwidth rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
            </a>
            <div className='flex flex-row justify-between items-center'>
              <div>
                <p class=" font-light text-gray-700 dark:text-gray-400">{movie.release}</p>
                <p class=" font-normal text-gray-700 dark:text-gray-400">Rating : {movie.rating}</p>
              </div>
              <a href="#" class="inline-flex mr-1 justify-center items-center p-2 text-sm font-medium text-center text-white bg-violet-800 rounded-lg hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Details
              </a>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Card