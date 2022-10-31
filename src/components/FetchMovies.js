import axios from 'axios'

const FetchMovie = async () => {
  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/movies',
    headers: {
      'X-RapidAPI-Key': '983bbb7656msh6054bb8b254d714p1aae71jsn78a0e163b423',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    return(response.data)
  } catch (error) {
    console.error(error);
  }

}
export default FetchMovie