import React from "react";
import Container from '../Container/Container';
import LinkCustom from "../LinkCustom/LinkCustom";
import { classNames } from "../../utils/helpers";
import logoMain from '../../images/assets/header__logo.svg';
import './Header.css';

/** Хедер
 * @param props.authUser {boolean} - навигация для авт. пользователя и для не авт. пользователя
 * @param props.children {JSX.Element} - дочерние элементы навигации
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (props) => {

  return (
    <header className='header'>
      <Container class={classNames('header__container', props.authUser ? 'header__container_auth' : '')}>
        <LinkCustom type='route' to='/' class='header__logo'>
          <img src={logoMain} alt='Логотип'/>
        </LinkCustom>
        <nav className={classNames('header__menu', props.authUser ? '' : 'header__menu_noauth')}>
          {props.children}
        </nav>
      </Container>
    </header>);
};

export default Header;
