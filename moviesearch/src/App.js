import "./App.css";
import { getMovieList } from "./api";
import { useEffect, useState } from "react";

const App = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result);
        });
    }, []);

    console.log({ popularMovies: popularMovies });

    const search = (q) => {
        console.log(q);
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Keane Putra Setiawan</h1>
                <input placeholder="Search your favourite movie" className="Movie-search" onChange={({ target }) => search(target.value)} />
                <div className="Movie-container">
                    <div className="Movie-wrapper">
                        <div className="Movie-title">CONTOH PERTAMA</div>
                        <img className="Movie-image" />
                        <div className="Movie-date">11 21 22</div>
                        <div className="Movie-rate">9.2</div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default App;
