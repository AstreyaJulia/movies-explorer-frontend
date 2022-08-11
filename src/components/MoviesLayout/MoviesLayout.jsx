import React from "react";
import './MoviesLayout.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import LinkCustom from "../LinkCustom/LinkCustom";
import { classNames } from "../../utils/helpers";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const MoviesLayout = (props) => {

  const isLoading = false
  let loader
  if (isLoading) loader = <Preloader/>

  return (
    <>
      <Header type='movies'>
        <Navigation class='movies__navigation'>
          {/* Десктопная навигация*/}
          <Navigation.Desktop class='movies__navigation-menu movies__navigation-menu_desktop'>
            <LinkCustom
              class={classNames('movies__navigation-link', props.saved ? '' : 'movies__navigation-link_active')}
              type='route'
              to='/movies'
              text='Фильмы'
            />
            <LinkCustom
              class={classNames('movies__navigation-link', props.saved ? 'movies__navigation-link_active' : '')}
              type='route'
              to='/saved-movies'
              text='Сохраненные фильмы'
            />
            <LinkCustom
              class={classNames('movies__navigation-link', 'movies__navigation-button movies__navigation-button_gray')}
              type='route'
              to='/profile'
              text='Аккаунт'
            />
          </Navigation.Desktop>
          {/* Мобильная навигация*/}
          <Navigation.Mobile class='movies__navigation-menu movies__navigation-menu_mobile'>
            <BurgerMenu page='movies' saved={props.saved}/>
          </Navigation.Mobile>
        </Navigation>
      </Header>
      <main className='movies'>
        <SearchForm/>
        {loader}
        <MoviesCardList films={props.films} saved={props.saved}/>
      </main>
      <Footer/>
    </>
  );
};

export default MoviesLayout;
