// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/movies";
// import Footer from "../components/Footer/Footer";
import AddMovieForm from "../components/addMovie/AddMovie";
import data from "../utils/constans/data";
// import Button from "../components/UI/button/index";
import { useState } from "react";

function Home() {

  // const [movies, setMovies] = useState(data);
  // const [movies] = useState(data);

  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Hero />
        {/* <Button variant="primary">Lihat</Button>
        <Button variant="secondary" full>Lihat</Button> */}
        {/* <Movies movies={movies} setMovies={setMovies} /> */}
        <Movies />
        {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
        {/* <Counter /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
