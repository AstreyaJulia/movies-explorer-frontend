import React, { useEffect } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import './MoviesLayout.css';
import Container from "../Container/Container";

const MoviesLayout = (props) => {

  /** Стейт состояния загрузки. Управляет отображением загрузчика */
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoadingFinished = () => setIsLoading(false)

  /** FIXME удалить. Эмуляция загрузки для отображения загрузчика */
  useEffect(() => {
    setTimeout(handleLoadingFinished, 2000)
  }, [])

  return (
    <>
      <Header authUser={true}>
        <Navigation page={props.saved ? 'saved-movies' : 'movies'} authUser={true}/>
      </Header>
      <main className='movies'>
        <SearchForm/>
        {/* Если состояние загрузки true, то покажет загрузчик */}
        {isLoading ?
          <Container class='preloader__container'>
            <Preloader/>
          </Container>
          :
          <MoviesCardList films={props.films} saved={props.saved}/>
        }
      </main>
      <Footer/>
    </>
  );
};

export default MoviesLayout;
