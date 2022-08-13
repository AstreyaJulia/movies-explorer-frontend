import React, { useEffect } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Container from "../Container/Container";

/**
 * @param props.films {Array} - массив с фильмами
 * @param props.saved {boolean} - карточка фильма сервиса или сохраненная пользователем (лайкнутая/закладка)
 * @returns {JSX.Element}
 * @constructor
 */
const MoviesCardList = (props) => {

  /** Стейт, хранящий кол-во карточек на страницу в зависимости от ширины экрана */
  const [moviesCardsCount, setMoviesCardsCount] = React.useState(0);

  /** Стейт пагинации фильмов для кнопки Еще */
  const [moviesCardsPagination, setMoviesCardsPagination] = React.useState(1);

  /** Хандл обновления стейта кол-ва карточек */
  const handleCardsCountUpdate = () => {
    const count = () => {
      if (window.innerWidth < 768) {
        return 4
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        return 8
      } else if (window.innerWidth >= 1280) {
        return 12
      }
    }
    setMoviesCardsCount(count);
  }

  /** Обновление стейта кол-ва карточек при монтировании */
  useEffect(() => {
    handleCardsCountUpdate()
  }, [])

  /** Обновление стейта кол-ва карточек при изменении размера окна */
  useEffect(() => {
    window.addEventListener('resize', handleCardsCountUpdate)
  })

  /** Увеличивает кол-во страниц отображаемых карточек */
  const moreMoviesHandle = () => setMoviesCardsPagination(moviesCardsPagination + 1)

  return (
    <section className="movie-card-list">
      <Container class='movie-card-list__container'>
        <ul className='movie-card-list__movies-cards'>
          {/* Берем от начала массива карточек произведение кол-ва карточек в объекте на кол-во отображаемых страниц */}
          {props.films.slice(0, moviesCardsCount * moviesCardsPagination).map((film) =>
            <li key={film.id}>
              <MoviesCard film={film} saved={props.saved}/>
            </li>
          )}
        </ul>
        {/* если фильмов меньше moviesCardsCount или больше или равно кол-ву отображаемых фильмов, то кнопка скроется */}
        {props.films.length >= moviesCardsCount && props.films.length > moviesCardsCount * moviesCardsPagination ?
          <button className="movie-card-list__button" onClick={moreMoviesHandle}>Ещё</button> : ''}
      </Container>
    </section>
  );
};

export default MoviesCardList;
