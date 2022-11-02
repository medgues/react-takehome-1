import React from 'react'
import Genre from './Genre'

function Search() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
        <div className='homeofmovies flex flex-row items-center w-full justify-center'>
        <div className=''>
          <img src="https://img.icons8.com/nolan/96/play.png" alt='logo' className=' homelogo' />
          </div>
          <p className=' font-semibold main-txt text-6xl text-center text-slate-100 '>the home of movies</p>
        </div> 
      <div className='flex flex-row z-10 items-center'>
      <form method="GET">
        <div className="relative  text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" name="q" className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
        </div>
      </form>
      <button className="px-4 nermophism py-2 text-white bg-purple-600 ml-1 rounded-md p-10 focus:outline-none ">
        Search
      </button>
      </div>
      <div>
        <Genre />
      </div>
    </div>
  )
}

export default Search