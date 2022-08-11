import React from 'react';
import Container from '../Container/Container';
import LinkCustom from "../LinkCustom/LinkCustom";
import { SOCIAL_LINKS } from "../../utils/constants";
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container class='footer__container'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__menu'>
          {/* Получает текущий год */}
          <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
          <nav className='footer__nav'>
            {/* Мапинг соц-ссылок */}
            {SOCIAL_LINKS.map((link) =>
              <LinkCustom
                key={link.title}
                type='external'
                to={link.href}
                class='footer__link'
                text={link.title}
              />
            )}
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
