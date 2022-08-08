import React from 'react';
import './SavedMovies.css';
import MoviesLayout from "../MoviesLayout/MoviesLayout";
import filmsSaved from "../../utils/beatfilm-movies-saved.json";

const SavedMovies = () => {
  return <MoviesLayout saved={true} class='saved-movies' films={filmsSaved.slice(0, 12)}/>;
};

export default SavedMovies;
