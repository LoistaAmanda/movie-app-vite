import CreateMovie from "./pages/Create";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"; //install dulu react router dom di terminal
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Layout from "./Layout/Index";
import DetailMovie from "./pages/Detail";
import { useState } from "react";
import data from "./utils/constans/data";
import MoviesContext from "./components/context/MoviesContext";

function App() {
  const [movies, setMovies] = useState(data);
  const contextValue = {
    movies,
    setMovies,
  };

  return (
    <>
      <MoviesContext.Provider value={contextValue}>
        <Layout>
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/movie/create"
              element={<CreateMovie />}
            ></Route>
            <Route path="/movie/now" element={<NowPlaying />}></Route>
            <Route path="/movie/popular" element={<Popular />}></Route>
            <Route path="/movie/top" element={<TopRated />}></Route>
            <Route path="/movie/:id" element={<DetailMovie />}></Route>
          </Routes>
        </Layout>
      </MoviesContext.Provider>
    </>
  );
}

export default App;
