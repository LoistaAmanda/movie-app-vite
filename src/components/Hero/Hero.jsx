// import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Ui/Button/Index.jsx";
import axios from "axios";

const StyledHero = styled.div`
  // padding: 1rem
  section {
    display: flex;
    flex-direction: column;
    // padding: 7rem;
  }
  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 60%;
    }

    .hero__right {
      flex-basis: 40%;
    }
  }
`;

function Hero() {
  const [movie, setMovie] = useState("");
  // const genres = movie && movie.genres.map((genre)=> genre.name).join(" , ");
  // const idTrailer = movie && movie.videos.results[0].key;
  // const overview = movie.poster_path;
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchTrendingMovies() {
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(URL);
      const firstMovie = response.data.results[0]; //Mengambil data pertama
      return firstMovie;
    }
    fetchTrendingMovies();

    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;

      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);
      setMovie(response.data);
    }
    fetchDetailMovie();
    // fetchTrendingMovies();
  }, [API_KEY]);

  // useEffect(()=>{
  //     async function fetchMovie() {
  //         const response = await fetch ("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
  //         const data = await response.json();
  //         setMovie(data);
  //     }
  //     fetchMovie();
  // }, []);
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <Button variant="secondary" full>
            Watch Movie
          </Button>
          {/* <Button as="a" href={`https://www.youtube.com/watch?v=${idTrailer}`} target="_blank" variant="secondary" full>Watch Movie</Button> */}
          {/* <button >Watch</button> */}
        </div>
        <div className="hero__right">
          <img
            src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt=""
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
