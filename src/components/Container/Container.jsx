import React from 'react';
import {classNames} from '../../utils/helpers';
import './Container.css';

/** Контейнер шириной 1140px
 * @props class - дополнительный класс, children - дочерние элементы
 * @returns {JSX.Element}
 * @constructor
 */
const Container = (props) => {
  return (
    <div className={classNames('container', props.class)}>{props.children}</div>
  );
};

export default Container;
