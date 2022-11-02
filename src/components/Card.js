import React from 'react'

function Card({ movie }) {
  return (
    <div className="card cardwidth m-1 text-white  glass">
      <figure><img src={movie.images['Poster Art'].url} alt="car!" /></figure>
      <div className="card-body cardbackground flex flex-col">
        <div>
        <h3 className="card-title">{movie.title}</h3>
        </div>
        <div className='flex flex-row justify-between'>
        <div>
        <p>{movie.releaseYear}</p>
        <p>{movie.programType}</p>
        </div>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Details</button>
        </div>
        </div>
      </div>
    </div>

  )
}


export default Card