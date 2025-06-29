import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero.jsx";
import Movies from "../components/Movies/movies.jsx";
import MoviesContext from "../components/context/MoviesContext";
import ENDPOINTS from "../utils/constans/endpoint.jsx";

function TopRated() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  const { setMovies } = useContext(MoviesContext);

  useEffect(function () {
    async function getTopRatedMovies() {
      try {
        // const response = await axios.get(URL);
        const response = await axios.get(ENDPOINTS.TOP_RATED);
        if (response.data && response.data.results) {
          setMovies(response.data.results);
        } else {
          console.error(
            "Data dari API tidak memiliki properti 'results':",
            response.data
          );
        }
      } catch (error) {
        console.error("Gagal mengambil data film top rated:", error);
      }
    }

    getTopRatedMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movies" />
    </>
  );
}

export default TopRated;
