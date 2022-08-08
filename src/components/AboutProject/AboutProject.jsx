import React from "react";
import './AboutProject.css';
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutProject = () => {
  return (
    <section className='about-project'>
      <Container class='about-project__container'>
        <SectionTitle class="about-project__title" id='about-project' text='О проекте' />
        <div className='about-project__info'>
          <div className='about-project__info-column'>
            <h4 className='about-project__info-title'>Дипломный проект включал 5 этапов</h4>
            <p className='about-project__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about-project__info-column'>
            <h4 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h4>
            <p className='about-project__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__timeline'>
          <div className='about-project__timeline-column'>
            <p className='about-project__timeline-range about-project__timeline-range_backend'>1 неделя</p>
            <p className='about-project__timeline-description about-project__timeline-description_backend'>Back-end</p>
          </div>
          <div className='about-project__timeline-column'>
            <p className='about-project__timeline-range about-project__timeline-range_frontend'>4 недели</p>
            <p className='about-project__timeline-description about-project__timeline-description_frontend'>Front-end</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutProject;
