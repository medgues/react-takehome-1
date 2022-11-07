import { useEffect, useState } from 'react'
import FetchData from '../helpers/FetchData'

function useFetchData() {
  const [movies, setMovies] = useState([]) 
  const [series, setSeries] = useState([])
  const [allData, setAllData] = useState([])
  const fetchMovies = async () => {
    const [movies, series, allData] = await FetchData()
    setMovies(movies)
    setSeries(series)
    setAllData(allData)
  }
  useEffect(() => {
    fetchMovies()
  }, []) 
  return [movies, series, allData, setAllData]
}

export default useFetchData