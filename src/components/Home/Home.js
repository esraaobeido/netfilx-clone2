import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import './Home.css';

function Home() {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL || "http://localhost:3004"}/trending`;
        const result = await axios.get(serverUrl);
        setMovieData(result.data);  
        console.log(serverUrl);
    };
    fetchMovies();
  }, []);
  return (
    <>
      <MovieList movieData={movieData} />
    </>
  );
}
export default Home;

