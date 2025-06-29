import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Ui/Button/Index";

function DetailMovie() {
    // const params = useParams();
    const { id } = useParams();
    const [movie, setMovie] = useState("");

    useEffect(()=> {
         async function getDetailMovie(){
            // const trendingMovie = await getDetailMovie();
            // const id = trendingMovie.id;

            const API_KEY = import.meta.env.VITE_API_KEY;
            const params = `?api_key=${API_KEY}&append_to_response=videos`;
            const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
            // const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
            const response = await axios(URL);
            setMovie(response.data);
        }
        getDetailMovie();
    });

    return (
        <>
        {/* <h2>Detail Movie ID: {params.id}</h2> */}
        <div>
            <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
        </div>
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <Button>Watch</Button>
        </div>
        </>
    )
};

export default DetailMovie;