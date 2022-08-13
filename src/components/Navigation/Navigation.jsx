import React, { useEffect } from "react";
import './Navigation.css';
import LinkCustom from "../LinkCustom/LinkCustom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { classNames } from "../../utils/helpers";

/** Навигация
 * для авт. пользователя
 * десктопное меню скрывается на разрешениях ниже 768px
 * и отображается мобильное меню в виде кнопки,
 * для не авт. пользователя меню без разделения на десктоп / мобильные
 * @param props.page {string} - страница
 * @param props.authUser {boolean} - состояние авторизации
 * @returns {JSX.Element}
 * @constructor
 */
const Navigation = (props) => {

  /** Стейт, хранящий ширину экрана для отображения бургер-меню */
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  /** Хандл обновления стейта ширины экрана */
  const handleScreenWidthUpdate = () => {
    setScreenWidth(window.innerWidth);
  }

  /** Обновление стейта ширины экрана при монтировании */
  useEffect(() => {
    handleScreenWidthUpdate()
  }, [])

  /** Обновление стейта ширины экрана при изменении размера окна */
  useEffect(() => {
    window.addEventListener('resize', handleScreenWidthUpdate)
  })

  /** Возвращает меню для авт. пользователя в зависимости от ширины экрана
   * @param width {number} - ширина экрана
   * @returns {JSX.Element}
   */
  const authUserMenu = (width) => {
      /* Если ширина меньше или равна 768, то отрисует только бургер-меню */
      if (width <= 768) {
        return (
          <BurgerMenu page={props.page}/>
        )
      } else {
        /* Иначе бургер-меню скроется, отрисует обычное меню */
        return (
          <>
            <div className='navigation__menu'>
              <LinkCustom
                class={classNames('navigation__menu-link', props.page === 'saved-movies' || props.page === 'profile' || props.page === 'main' ? '' : 'navigation__menu-link_active')}
                type='route'
                to='/movies'
                text='Фильмы'/>
              <LinkCustom
                class={classNames('navigation__menu-link', props.page === 'saved-movies' ? 'navigation__menu-link_active' : '')}
                type='route'
                to='/saved-movies'
                text='Сохраненные фильмы'/>
            </div>
            <LinkCustom
              class='navigation-menu__button-white'
              type='route'
              to='/profile'
              text='Аккаунт'
            >
              <svg
                className='navigation-menu__icon-user'
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  width="30"
                  height="30"
                  rx="6"
                  fill="#F5F5F5"/>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4305 16.9675C17.7919 16.4052 18.75 15.0645 18.75 13.5C18.75 11.4289 17.0711 9.75 15 9.75C12.9289 9.75 11.25 11.4289 11.25 13.5C11.25 15.0645 12.2081 16.4052 13.5695 16.9675C12.1752 17.1998 10.8926 17.7657 9.80859 18.5802L11.1901 20.419C12.2514 19.6217 13.569 19.1496 15.0001 19.1496C16.4312 19.1496 17.7488 19.6217 18.8101 20.419L20.1916 18.5802C19.1075 17.7657 17.8249 17.1997 16.4305 16.9675Z"
                  fill="black"/>
              </svg>
            </LinkCustom>
          </>
        )
      }
    }

  ;

  /* Навигация для не авт. пользователя */
  const notAuthMenu = (
    <div className={classNames('navigation__menu', props.authUser ? '' : 'navigation__menu_noauth')}>
      <LinkCustom
        class={classNames('navigation__menu-link', props.authUser ? '' : 'navigation__menu-link_noauth')}
        type='route'
        to='/signup'
        text='Регистрация'/>
      <LinkCustom
        class='navigation-menu__button-green'
        type='route'
        to='/signin'
        text='Войти'/>
    </div>
  );

  if (props.authUser) {
    return authUserMenu(screenWidth)
  } else {
    return notAuthMenu
  }

};


export default Navigation;
