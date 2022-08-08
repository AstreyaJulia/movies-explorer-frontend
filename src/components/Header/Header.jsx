import React from "react";
import Container from '../Container/Container';
import './Header.css';
import logoMain from '../../images/assets/header__logo.svg';
import logoMovies from '../../images/assets/header__logo_alt.svg';
import LinkCustom from "../LinkCustom/LinkCustom";

/**
 * @props type - тип хедера: main - для главной страницы, movies - для страницы с фильмами
 * @props children - дочерние элементы
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (props) => {

  /** Объект для хранения настроек заголовка для разных страниц
   * @type {Object}
   */
  const headerTypes = {
    main: {
      logo: logoMain
    },
    movies: {
      logo: logoMovies
    }
  }

  return (
    <header className='header'>
      <Container class='header__container'>
        <LinkCustom type='route' to='/' class='header__logo'>
          <img src={headerTypes[props.type].logo} alt='Логотип'/>
        </LinkCustom>
        <nav className='header__menu'>
          {props.children}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
