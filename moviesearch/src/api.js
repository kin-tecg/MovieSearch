import axios from "axios";
import React from "react";

const apiKey = "";
const baseUrl = "https://api.themoviedb.org/3";

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    return movie.data.results;
};

export const searchMovieList = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
    return search.data;
};
