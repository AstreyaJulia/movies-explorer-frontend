import React from "react";
import './Techs.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Container/Container";
import {TECHS_LIST} from "../../utils/constants";
import {getAmount} from "../../utils/helpers";

const Techs = () => {
  return (
    <section className='techs'>
      <Container class='techs__container'>
        <SectionTitle class='techs__title' id='techs' text='Технологии'/>
        <div className='techs__info'>
          <h4
            className='techs__subtitle'
          >
            {TECHS_LIST.length} {getAmount(TECHS_LIST.length, {
            single: 'технология',
            multi: 'технологии',
            count: 'технологий'
          })}
          </h4>
          <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном
            проекте.</p>
          <ul className='techs__list'>
            {TECHS_LIST.map((item) =>
              <li key={item} className='techs__item'>{item}</li>
            )}
          </ul>
        </div>

      </Container>
    </section>
  );
};

export default Techs;
