import styles from "./Movies.module.css";
import Movie from "../Movie/Movie.jsx";
// import data from "../../utils/constants/data.js";
// import { useState } from "react";
import AddMovie from "../addMovie/AddMovie.jsx";
import { useContext } from "react";
import MoviesContext from "../context/MoviesContext.jsx";

function Movies(props) {
  // const movies = data;
  // const [movies, setMovies] = useState(data);

  const { title = "Latest Movies" } = props;
  const { movies } = useContext(MoviesContext);

  function handleClick() {
    const movie = {
      id: "xyz",
      title: "jigsaw",
      year: 2022,
      type: "movie",
      poster: "https://picsum.photos/seed/picsum/200/300",
    };

    // movies.push(movie);
    // setMovies([...movies, movie]);
  }

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{title}</h2>
          <div className={styles.movie__container}>
            {/* <Movie />
                <Movie />
                <Movie /> */}
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
          <button onClick={handleClick}>Add Movie</button>
        </section>
      </div>
    </div>
  );
}

export default Movies;
