import React from 'react';
import './SavedMovies.css';
import MoviesLayout from '../MoviesLayout/MoviesLayout';

const SavedMovies = (props) => {
  return <MoviesLayout
    saved={true}
    movies={props.movies}
    loggedIn={props.loggedIn}
    isLoading={props.isLoading}
    error={props.error}
    handleMoviesLike={props.handleMoviesLike}
    handleSearchMovies={props.handleSearchMovies}
  />;
};

export default SavedMovies;
