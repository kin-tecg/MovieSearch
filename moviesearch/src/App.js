import "./App.css";
import { getMovieList, searchMovieList } from "./api";
import { useEffect, useState } from "react";

const App = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result);
        });
    }, []);

    const PopularMovieList = () => {
        const baseImgUrl = "https://image.tmdb.org/t/p/w500";
        return popularMovies.map((movie, i) => {
            return (
                <div className="Movie-wrapper" key={i}>
                    <div className="Movie-title">{movie.title}</div>
                    <img className="Movie-image" src={`${baseImgUrl}/${movie.poster_path}`} />
                    <div className="Movie-date">Released Date : {movie.release_date}</div>
                    <div className="Movie-rate">Average Rating : {movie.vote_average}</div>
                </div>
            );
        });
    };

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovieList(q);
            setPopularMovies(query.results);
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Keane Putra Setiawan Movie Searcher</h1>
                <input placeholder="Search your favourite movie" className="Movie-search" onChange={({ target }) => search(target.value)} />
                <div className="Movie-container">
                    <PopularMovieList />
                </div>
            </header>
        </div>
    );
};

export default App;
