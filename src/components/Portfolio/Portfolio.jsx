import React from "react";
import LinkCustom from "../LinkCustom/LinkCustom";
import './Portfolio.css';

/** Секция с ссылками на работы
 * @returns {JSX.Element}
 * @props links - массив ссылок на работы
 * @constructor
 */
const Portfolio = (props) => {
  return (
    <div className='portfolio'>
      <h5 className='portfolio__title'>Портфолио</h5>
      <ul className='portfolio__list'>
        {/* Мапинг ссылок */}
        {props.links.map((item) =>
          <li className='portfolio__item' key={item.title}>
            <LinkCustom
              type='external'
              to={item.href}
              class='portfolio__link'
              text={item.title}>
              <span className='portfolio__arrow'>&#8599;</span>
            </LinkCustom>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Portfolio;
