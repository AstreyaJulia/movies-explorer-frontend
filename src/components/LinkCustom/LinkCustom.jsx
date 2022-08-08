import React from 'react';
import {Link} from 'react-router-dom';
import {classNames} from '../../utils/helpers';
import './LinkCustom.css';

/** Ссылка внутренняя / внешняя
 * @props type ('external', 'route', 'anchor') - 'external' - ссылка внешняя, на др. ресурс, с аттр. rel='noreferrer' и target='_blank',
 * 'route' - внутренняя, компонент <Link> библиотеки 'react-router-dom'
 * 'link' - якорь / ссылка без роутинга
 * @props to - ссылка на ресурс
 * @props class - доп. класс
 * @props text - текст ссылки
 * @props children - дочерние элементы
 * для <LinkCustom> заданы стили, изменяющие прозрачность до 70% при наведении
 * @returns {{external: JSX.Element, route: JSX.Element, anchor: JSX.Element}}
 * @constructor
 */
const LinkCustom = (props) => {
  const linkType =
    {
      external: (<a
        href={props.to || ''}
        target='_blank'
        rel='noreferrer'
        className={classNames('link', props.class || '')}>
        <span>{props.text || ''}</span>
        {props.children}
      </a>),
      route: (<Link
        to={props.to || ''}
        className={classNames('link', props.class || '')}>
        <span>{props.text || ''}</span>
        {props.children}
      </Link>),
      link: (<a
        href={props.to || ''}
        className={classNames('link', props.class || '')}>
        <span>{props.text || ''}</span>
        {props.children}
      </a>)
    }

  return linkType[props.type];
};

export default LinkCustom;
