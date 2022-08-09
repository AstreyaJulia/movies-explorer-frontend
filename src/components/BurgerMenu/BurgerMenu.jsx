import React from "react";
import {classNames} from "../../utils/helpers";
import LinkCustom from "../LinkCustom/LinkCustom";

const BurgerMenu = (props) => {

  /** Стейт открытия/закрытия меню */
  const [burgerMenuShown, setBurgerMenuShown] = React.useState(false);

  /** Открывает меню */
  const burgerShowHandler = () => {
    setBurgerMenuShown(true);
  }

  /** Закрывает меню */
  const burgerHideHandler = () => {
    setBurgerMenuShown(false);
  }

  return (
    <div className={classNames('navigation__burger-menu', props.class || '')}>
      {/* Кнопка вкл. меню*/}
      <button
        className='navigation__burger-button navigation__burger-button_show'
        onClick={burgerShowHandler}
        title='Открыть меню'
      >
        <svg className='navigation__burger-button-icon' width='44px' height='44px' viewBox="0 0 44 44"
             fill={props.page === 'movies' ? '#000000' : '#FFFFFF'}
             xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="12.5" x2="36" y2="12.5" stroke={props.page === 'movies' ? '#000000' : '#FFFFFF'} strokeWidth="3"/>
          <line x1="8" y1="22.5" x2="36" y2="22.5" stroke={props.page === 'movies' ? '#000000' : '#FFFFFF'} strokeWidth="3"/>
          <line x1="8" y1="32.5" x2="36" y2="32.5" stroke={props.page === 'movies' ? '#000000' : '#FFFFFF'} strokeWidth="3"/>
        </svg>
      </button>
      {burgerMenuShown ?
        <>
          {/* Оверлей */}
          <div className='navigation__burger-overlay'/>
          {/* Меню */}
          <div className={classNames('navigation__burger-container', props.page === 'movies' ? 'navigation__burger-container_light' : 'navigation__burger-container_dark')}>
            <button
              className='navigation__burger-button navigation__burger-button_close'
              onClick={burgerHideHandler}
              title='Закрыть меню'
            >
              <svg className='navigation__burger-button-icon' width='40px' height='40px' viewBox="0 0 32 32"
                   fill={props.page === 'movies' ? '#000000' : '#FFFFFF'} xmlns="http://www.w3.org/2000/svg">
                <rect x="7.16016" y="9.28271" width="3" height="22" transform="rotate(-45 7.16016 9.28271)"
                      fill={props.page === 'movies' ? '#000000' : '#FFFFFF'}/>
                <rect x="22.7168" y="7.16113" width="3" height="22" transform="rotate(45 22.7168 7.16113)"
                      fill={props.page === 'movies' ? '#000000' : '#FFFFFF'}/>
              </svg>
            </button>
            <div className='navigation__burger-nav'>
              <div className='navigation__burger-nav-top'>
                <LinkCustom
                  class={classNames('navigation-menu__link', props.page === 'main' ? 'navigation-menu__link_light': '', props.saved || props.profile || props.main ? '' : 'navigation-menu__link_active')}
                  type='route'
                  to='/movies'
                  text='Фильмы'
                />
                <LinkCustom
                  class={classNames('navigation-menu__link', props.page === 'main' ? 'navigation-menu__link_light': '', props.saved ? 'navigation-menu__link_active' : '')}
                  type='route'
                  to='/saved-movies'
                  text='Сохраненные фильмы'
                />
              </div>
              <div className='navigation__burger-nav-bottom'>
                {props.page === 'main' ?
                  <LinkCustom
                  class='navigation-menu__button-outline'
                  type='route'
                  to='/profile'
                  text='Аккаунт'>
                  <svg className='navigation-menu__icon-account' width='12' height='14' viewBox='0 0 12 14'
                       fill='#ffffff'
                       xmlns='http://www.w3.org/2000/svg'>
                    <path fillRule='evenodd' clipRule='evenodd'
                          d='M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9C1.79086 9 0 10.7909 0 13V14H2V13C2 11.8954 2.89543 11 4 11H8C9.10457 11 10 11.8954 10 13V14H12V13C12 10.7909 10.2091 9 8 9H4Z'
                          fill='white'/>
                  </svg>
                </LinkCustom>
                :
                  <LinkCustom
                    class={classNames('navigation-menu__button-white')}
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
                }
              </div>
            </div>
          </div>
        </>
        : null
      }
    </div>
  );
};

export default BurgerMenu;
