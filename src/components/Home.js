import Card from './Card';



function Home({movies}) {

  return (
      <div className="flex flex-col w-full">
        <div className="grid rounded-box place-items-center">
        </div>
          <div className="divider"></div>
          <div className="">
            <h1 className='text-white pb-5 pl-5'> populare choices :</h1>
            <div className='flex flex-row flex-wrap rounded-box place-items-center justify-center'>
            { movies.length === 0 ?
                <span className="loader mb-10"></span> :
                movies.map((movie) => <Card key={movie.title} movie={movie} />)}
            </div>
          </div>
      </div>
  );
}

export default Home