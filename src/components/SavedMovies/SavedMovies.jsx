import React from 'react';
import './SavedMovies.css';
import MoviesLayout from "../MoviesLayout/MoviesLayout";
import filmsSaved from "../../utils/beatfilm-movies-saved.json";

const SavedMovies = () => {
  return <MoviesLayout saved={true} films={filmsSaved.slice(0, 12)}/>; /* TODO проверить с пустым состоянием: передать в пропс films пустой массив [] */
};

export default SavedMovies;
