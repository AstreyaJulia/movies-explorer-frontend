import React from 'react';
import './Main.css';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import LinkCustom from '../LinkCustom/LinkCustom';
import Footer from '../Footer/Footer';

const Main = () => {

  /** Стейт данных текущего пользователя (временно)
   * {name: 'Имя', email: 'эл. почта'} */
  /* FIXME временно, удалить */
  const [currentUser, setCurrentUser] = React.useState({name: "Виталий", email: "pochta@yandex.ru"}); /* TODO проверить без авторизации: изменить начальный стейт на пустой объект {} */

  return (
    <>
      <Header type='main'>
        <Navigation class='main__navigation'>
          {/* Десктопная навигация*/}
          <Navigation.Simple class='main__navigation-menu'>
            {currentUser.name ?
              <>
                <LinkCustom
                  class='main__navigation-link'
                  type='route'
                  to='/movies'
                  text='Фильмы'/>
                <LinkCustom
                  class='main__navigation-link'
                  type='route'
                  to='/saved-movies'
                  text='Сохраненные фильмы'/>
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
              </>
              :
              <>
                <LinkCustom
                  class='main__navigation-link'
                  type='route'
                  to='/signup'
                  text='Регистрация'/>
                <LinkCustom
                  class='navigation-menu__button-green'
                  type='route'
                  to='/signin'
                  text='Войти'/>
              </>
            }
          </Navigation.Simple>
        </Navigation>
      </Header>
      <main className='main'>
        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </main>
      <Footer/>
    </>
  );
};

export default Main;
