import React from 'react';
import './Main.css';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Main = (props) => {

  return (
    <>
      <Header authUser={props.loggedIn}>
        <Navigation page='main' authUser={props.loggedIn}/>
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
