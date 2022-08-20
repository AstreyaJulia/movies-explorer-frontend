import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import './MoviesLayout.css';
import Container from '../Container/Container';

const MoviesLayout = (props) => {

  const [isShow, setIsShow] = React.useState(false)

  useEffect(() => {
    localStorage.getItem(`resultSearch-${props.saved ? 'savedMovies' : 'movies'}`) ? setIsShow(true) : setIsShow(false)
  }, [props.movies])

  return (
    <>
      <Header authUser={true}>
        <Navigation page={props.saved ? 'saved-movies' : 'movies'} authUser={props.loggedIn}/>
      </Header>
      <main className='movies'>
        <SearchForm handleSearchMovies={props.handleSearchMovies} type={props.saved ? 'savedMovies' : 'movies'}/>
        {props.error || (props.movies.length === 0 && isShow) ?
            <Container>
              <p className='movies__text'>{props.error || (props.movies.length === 0 && isShow) ? 'Ничего не найдено' : ''}</p>
            </Container> : ''}
        {/* Если состояние загрузки true, то покажет загрузчик */}
        {props.isLoading ?
          <Container class='preloader__container'>
            <Preloader/>
          </Container>
          :
          <MoviesCardList movies={props.movies} saved={props.saved} handleMoviesLike={props.handleMoviesLike}/>
        }
      </main>
      <Footer/>
    </>
  );
};

export default MoviesLayout;
