import React, { useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Container from '../Container/Container';

/**
 * @param props.movies {Array} - массив с фильмами
 * @param props.saved {boolean} - карточка фильма сервиса или сохраненная пользователем (лайкнутая/закладка)
 * @returns {JSX.Element}
 * @constructor
 */
const MoviesCardList = (props) => {

  /** Стейт, хранящий кол-во карточек на страницу в зависимости от ширины экрана */
  const [moviesCardsColsCount, setMoviesCardsColsCount] = React.useState(0);
  const [moviesCardsRowsCount, setMoviesCardsRowsCount] = React.useState(0);

  /** Стейт пагинации фильмов для кнопки Еще */
  const [moviesCardsPagination, setMoviesCardsPagination] = React.useState(1);

  /** Хандл обновления стейта кол-ва карточек */
  const handleCardsCountUpdate = () => {
      if (window.innerWidth < 768) {
        setMoviesCardsColsCount(1)
        setMoviesCardsRowsCount(5)
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setMoviesCardsColsCount(2)
        setMoviesCardsRowsCount(4)
      } else if (window.innerWidth >= 1280) {
        setMoviesCardsColsCount(3)
        setMoviesCardsRowsCount(4)
      }
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
    <section className='movie-card-list'>
      <Container class='movie-card-list__container'>
        <ul className='movie-card-list__movies-cards'>
          {/* Берем от начала массива карточек произведение кол-ва карточек в объекте на кол-во отображаемых страниц */}
          {props.movies.length > 0 ? props.movies.slice(0, moviesCardsColsCount * (moviesCardsPagination + moviesCardsRowsCount)).map((movie) =>
            <li key={props.saved ? movie._id : movie.id}>
              <MoviesCard movie={movie} saved={props.saved} handleMoviesLike={props.handleMoviesLike}/>
            </li>
          ) : null}
        </ul>
        {/* если фильмов меньше moviesCardsCount или больше или равно кол-ву отображаемых фильмов, то кнопка скроется */}
        {props.movies.length >= moviesCardsColsCount * (moviesCardsPagination + moviesCardsRowsCount) && props.movies.length > moviesCardsColsCount * (moviesCardsPagination + moviesCardsRowsCount) ?
          <button className='movie-card-list__button' onClick={moreMoviesHandle}>Ещё</button> : ''}
      </Container>
    </section>
  );
};

export default MoviesCardList;
