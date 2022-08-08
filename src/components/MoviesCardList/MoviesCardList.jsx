import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Container from "../Container/Container";

const MoviesCardList = (props) => {
  return (
    <section className="movie-card-list">
      <Container class='movie-card-list__container'>
        <div className='movie-card-list__movies-cards'>
          {props.films.map((film) =>
            <MoviesCard key={film.id} film={film} saved={props.saved}/>
          )}
        </div>
        {/* если фильмов меньше 16, то кнопка скроется */}
        {props.films.length >= 16 ? <button className="movie-card-list__button">Ещё</button> : null}
      </Container>
    </section>
  );
};

export default MoviesCardList;
