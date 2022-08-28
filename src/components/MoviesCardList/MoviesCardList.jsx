import React, {useEffect} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Container from '../Container/Container';
import { WIDTH_BREAKPOINTS } from "../../utils/constants";

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
  const [moviesCardsPagination, setMoviesCardsPagination] = React.useState(0);

  /** Хандл обновления стейта кол-ва карточек */
  const handleCardsCountUpdate = () => {
    if (window.innerWidth < WIDTH_BREAKPOINTS[0].max) {
      setMoviesCardsColsCount(WIDTH_BREAKPOINTS[0].cols)
      setMoviesCardsRowsCount(WIDTH_BREAKPOINTS[0].rows)
    } else if (window.innerWidth >= WIDTH_BREAKPOINTS[1].min && window.innerWidth < WIDTH_BREAKPOINTS[1].max) {
      setMoviesCardsColsCount(WIDTH_BREAKPOINTS[1].cols)
      setMoviesCardsRowsCount(WIDTH_BREAKPOINTS[1].rows)
    } else if (window.innerWidth >= WIDTH_BREAKPOINTS[2].min) {
      setMoviesCardsColsCount(WIDTH_BREAKPOINTS[2].cols)
      setMoviesCardsRowsCount(WIDTH_BREAKPOINTS[2].rows)
    }
  }

  /** Обновление стейта кол-ва карточек при монтировании */
  useEffect(() => {
    handleCardsCountUpdate()
  }, [])

  useEffect(() => {
    setMoviesCardsPagination(0)
    // eslint-disable-next-line
  }, [localStorage.getItem(`search-movies`), localStorage.getItem(`search-savedMovies`)])

  /** Обновление стейта кол-ва карточек при изменении размера окна */
  useEffect(() => {
    window.addEventListener('resize', handleCardsCountUpdate);

// returned function will be called on component unmount
    return () => {
      window.removeEventListener('resize', handleCardsCountUpdate)
    }
  })

  /** Увеличивает кол-во страниц отображаемых карточек */
  const moreMoviesHandle = () => {
    setMoviesCardsPagination(moviesCardsPagination + 1)
  }

  return (
    <section className='movie-card-list'>
      <Container class='movie-card-list__container'>
        <ul className='movie-card-list__movies-cards'>
          {/* Берем от начала массива карточек произведение кол-ва карточек в объекте на кол-во отображаемых страниц */}
          {props.movies.length > 0 ? props.movies.slice(0, moviesCardsColsCount * moviesCardsRowsCount + (moviesCardsPagination * moviesCardsColsCount)).map((movie) =>
            <li key={props.saved ? movie._id : movie.id}>
              <MoviesCard movie={movie} saved={props.saved} handleMoviesLike={props.handleMoviesLike}/>
            </li>
          ) : null}
        </ul>
        {/* если фильмов меньше moviesCardsCount или больше или равно кол-ву отображаемых фильмов, то кнопка скроется */}
        {props.movies.length >= moviesCardsColsCount * moviesCardsRowsCount + (moviesCardsPagination * moviesCardsColsCount) && props.movies.length > moviesCardsColsCount * moviesCardsRowsCount + (moviesCardsPagination * moviesCardsColsCount) ?
          <button className='movie-card-list__button' onClick={moreMoviesHandle}>Ещё</button> : ''}
      </Container>
    </section>
  );
};

export default MoviesCardList;
