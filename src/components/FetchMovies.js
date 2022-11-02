import axios from 'axios'

const FetchMovie = async () => {
  const options = {
    method: 'GET',
    url: 'https://raw.githubusercontent.com/codelabsacademy/react-takehome-1/main/feed/sample.json',
  };
  try {
    const res = await axios.get(options.url);
    return(res.data.entries)
  } catch (error) {
    console.error(error);
  }

}
export default FetchMovie