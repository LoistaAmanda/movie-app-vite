import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero.jsx";
import Movies from "../components/Movies/movies.jsx";
import ENDPOINTS from "../utils/constans/endpoint.jsx";
import MoviesContext from "../components/context/MoviesContext";

function PopularMovie() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  // const [movies, setMovies] = useState([]);
  const { setMovies } = useContext(MoviesContext);

  useEffect(function () {
    async function fetchPopularMovies() {
      try {
        // const response = await axios(URL);
        const response = await axios.get(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default PopularMovie;
