import React from "react";
import './Promo.css';
import Container from "../Container/Container";

const Promo = (props) => {
  return (
    <section className="promo">
      {props.children}
      <Container class='promo__container'>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <div className="promo__image"/>
      </Container>
    </section>
  );
};

export default Promo;
