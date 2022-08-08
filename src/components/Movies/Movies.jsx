import React from 'react';
import MoviesLayout from "../MoviesLayout/MoviesLayout";
import './Movies.css';

/* FIXME временный набор карточек */
import films from '../../utils/beatfilm-movies.json';

const Movies = () => {
  return <MoviesLayout class='movies' films={films.slice(0, 16)}/>
};

export default Movies;
