// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

import AddMovie from "../components/addMovie/AddMovie";
import Hero from "../components/Hero/Hero";
import { useContext } from "react";
import MoviesContext from "../components/context/MoviesContext";

function CreateMovie() {
  const { movies, setMovies } = useContext(MoviesContext);

  return (
    <>
      {/* <Navbar/> */}
      <Hero />
      <AddMovie movies={movies} setMovies={setMovies} />
      {/* <Footer/> */}
    </>
  );
}

export default CreateMovie;
