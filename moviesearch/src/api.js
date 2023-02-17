import axios from "axios";
import React from "react";

const apiKey = "176d1047582929d96c07d229e9962fc6";
const baseUrl = "https://api.themoviedb.org/3";

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return movie.data.results;
};

export const searchMovieList = async (q) => {
    const search = await axios.get(q);
    return;
};
