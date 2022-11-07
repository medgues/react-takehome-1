import React from 'react'
import { Link } from 'react-router-dom'

function Genre() {
  return (
    <div className='flex gap-2 width-max-{10} text-center justify-center'>
      <div className="card m-1 text-white  flex glass transform hover:scale-125 duration-300 ease-in-out">
        <figure><img className='p-1  w-20' src="series.png" alt="drama!" /></figure>
        <div className=" cardbackground">
          <div className='p-1 card-title block'>
            <Link to='series'>Series</Link>
          </div>
        </div>
      </div>
    
      <div className="card m-1 text-white text-center glass transform hover:scale-125 duration-300 ease-in-out">
        <figure className='series'><img className='p-1' src="film.png" alt="drama!" /></figure>
        <div className=" cardbackground ">
          <div className=' p-1 card-title '>
            <Link to='movies'>movies</Link>
          </div>
        </div>
      </div>
      </div>

  )
}

export default Genre