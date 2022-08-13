import React from "react";
import './Promo.css';
import Container from "../Container/Container";
import NavTab from "../NavTab/NavTab";

const Promo = (props) => {
  return (
    <section className="promo">
      {props.children}
      <Container class='promo__container'>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab/>
      </Container>
    </section>
  );
};

export default Promo;
