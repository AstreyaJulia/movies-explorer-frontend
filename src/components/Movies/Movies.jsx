import React from 'react';
import MoviesLayout from '../MoviesLayout/MoviesLayout';
import './Movies.css';

const Movies = (props) => {
  return <MoviesLayout
    movies={props.movies}
    loggedIn={props.loggedIn}
    isLoading={props.isLoading}
    error={props.error}
    handleMoviesLike={props.handleMoviesLike}
    handleSearchMovies={props.handleSearchMovies}
  />
};

export default Movies;
