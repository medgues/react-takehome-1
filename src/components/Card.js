import React from 'react'
import { Link } from 'react-router-dom'


function Card({ movie, handelDetailsClick}) {
  return (
    <div className="card w-min m-1 text-white  glass ">
      <figure><img src={movie.images['Poster Art'].url} alt="car!" /></figure>
      <div className="card-body p-2 cardbackground flex flex-col">
        <div>
        <h3 className="card-title">{movie.title}</h3>
        </div>
        <div className='flex flex-row justify-between'>
        <div>
        <p>{movie.releaseYear}</p>
        <p>{movie.programType}</p>
        </div>
        <div className="card-actions justify-end">
        <button onClick={()=>handelDetailsClick(movie)} className="btn btn-primary"><Link to={`/${movie.id}`}>Details</Link></button>
        </div>
        </div>
      </div>
    </div>

  )
}


export default Card