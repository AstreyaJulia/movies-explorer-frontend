import React from "react";
import {classNames} from "../../utils/helpers";
import './SectionTitle.css';

/** Заголовок секции с подчеркиванием снизу
 * @props class - доп. класс
 * @props id - id (якорь для перехода по ссылке на секцию)
 * @props text - текст заголовка
 * @returns {JSX.Element}
 * @constructor
 */
const SectionTitle = (props) => {
  return (
    <h3 className={classNames('section-title', props.class)} id={props.id}>{props.text}</h3>
  );
};

export default SectionTitle;
