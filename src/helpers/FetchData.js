import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';


const FetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://raw.githubusercontent.com/codelabsacademy/react-takehome-1/main/feed/sample.json',
  };
  try {
    const res = await axios.get(options.url);
    const dataWithId = await res.data.entries.map(item => {return (
      {
        ...item,
        id: uuidv4()
      }
    )})
    const movies = dataWithId.filter((item)=> item["programType"] === "movie")
    const series = dataWithId.filter((item)=> item["programType"] === "series")
    const allData = dataWithId
    return [movies, series, allData]
  } catch (error) {
    console.error(error);
  }

}
export default FetchData