import Card from './Card';



function Main({program, handelDetailsClick}) {
  console.log('main',program)
  return (
      <div className="flex flex-col w-full">
        <div className="grid rounded-box place-items-center">
        </div>
          <div className="divider"></div>
          <div className="">
            <h1 className='text-white pb-5 pl-5'> populare choices :</h1>
            <div className='flex flex-row flex-wrap  place-items-center justify-center'>
            { program.length === 0 ?
                <span className="loader mb-10"></span> :
                program.map((movie) => <Card key={movie.title} movie={movie} handelDetailsClick={handelDetailsClick}/>)}
            </div>
          </div>
      </div>
  );
}

export default Main