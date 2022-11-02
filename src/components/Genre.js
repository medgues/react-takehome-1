import React from 'react'

function Genre() {
  return (
    <div className='flex gap-2 width-max-{10} text-center justify-center'>
      <div className="card m-1 text-white  flex glass">
        <figure><img className='p-1  w-20' src="series.png" alt="drama!" /></figure>
        <div className=" cardbackground">
          <div className='p-1 card-title block'>
            <a href='series'>Series</a>
          </div>
        </div>
      </div>
    
      <div className="card m-1 text-white text-center glass">
        <figure className='series'><img className='p-1' src="film.png" alt="drama!" /></figure>
        <div className=" cardbackground ">
          <div className=' p-1 card-title '>
            <a href='movies'>movies</a>
          </div>
        </div>
      </div>
      </div>

  )
}

export default Genre