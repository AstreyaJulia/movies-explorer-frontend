import React from 'react';
import './Main.css';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Main = () => {

  /** Стейт данных текущего пользователя (временно)
   * {name: 'Имя', email: 'эл. почта'} */
  /* FIXME временно, удалить */
  const [currentUser, setCurrentUser] = React.useState({name: "Виталий", email: "pochta@yandex.ru"}); /* TODO проверить без авторизации: изменить начальный стейт на пустой объект {} */

  return (
    <>
      <Header authUser={!!currentUser.name}>
        <Navigation page='main' authUser={!!currentUser.name}/>
      </Header>
      <main className='main'>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </main>
      <Footer/>
    </>
  );
};

export default Main;
