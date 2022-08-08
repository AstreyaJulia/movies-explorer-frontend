import React from "react";
import './AboutMe.css';
import Portfolio from "../Portfolio/Portfolio";
import {
  PORTFOLIO_ABOUT,
  PORTFOLIO_ITEMS,
  PORTFOLIO_NAME,
  PORTFOLIO_PROFESSION,
  SOCIAL_LINKS
} from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Container/Container";
import aboutMePhoto from '../../images/content/about-me__photo.jpg'
import LinkCustom from "../LinkCustom/LinkCustom";

const AboutMe = () => {
  return (
    <section className='about-me'>
      <Container class='about-me__container'>
        <SectionTitle class='about-me__title' id='about-me' text='Студент'/>
        {/* Секция с информацией о себе */}
        <div className='about-me__info'>
          <div className='about-me__bio'>
            <h4 className='about-me__bio-name'>{PORTFOLIO_NAME}</h4>
            <p className='about-me__bio-profession'>{PORTFOLIO_PROFESSION}</p>
            <p className='about-me__bio-about'>{PORTFOLIO_ABOUT}</p>
            <ul className='about-me__social-menu'>
              {/* Мапинг соц-ссылок. Кроме первой - Яндекс.Практикум */}
              {SOCIAL_LINKS.slice(1).map((link) =>
                <li key={link.title} className='about-me__social-item'>
                  <LinkCustom
                    type='external'
                    to={link.href}
                    class='about-me__social-link'
                    text={link.title}
                  />
                </li>
              )}
            </ul>
          </div>
          <img className='about-me__photo' src={aboutMePhoto} alt={[PORTFOLIO_NAME, PORTFOLIO_PROFESSION].join('. ')}/>
        </div>
        {/* Секция с портфолио */}
        <Portfolio links={PORTFOLIO_ITEMS}/>
      </Container>
    </section>
  );
};

export default AboutMe;
