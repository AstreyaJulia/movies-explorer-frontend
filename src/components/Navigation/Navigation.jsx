import React from "react";
import './Navigation.css';
import { classNames } from "../../utils/helpers";

/** Навигация
 * Комонент позволяет создавать адаптивные меню -
 * десктопное меню скрывается на разрешениях ниже 768px
 * и отображается мобильное меню, например, в виде кнопки,
 * а так же, простое меню без разделения на десктоп / мобильные
 * @props class - доп. класс
 * @props children - дочерние элементы:
 * Navigation.Simple - дочерний компонент для простого меню,
 * Navigation.Desktop, Navigation.Mobile - дочерний компоненты для
 * десктопного меню (> 786px ширины) и мобильного меню (< 786px ширины)
 * @returns {JSX.Element}
 * @constructor
 */
const Navigation = (props) => {
  return (
    <div className={classNames('navigation', props.class || '')}>
      {props.children}
    </div>
  );
};

/** Меню навигции без разделения десктоп / мобильные
 * @props class - доп. класс
 * @props children - дочерние элементы
 * @returns {JSX.Element}
 * @constructor
 */
Navigation.Simple = (props) =>
  <div className={classNames('navigation__menu', props.class || '')}>
    {props.children}
  </div>;

/** Меню навигции для десктопа (> 786px ширина)
 * @props class - доп. класс
 * @props children - дочерние элементы
 * @returns {JSX.Element}
 * @constructor
 */
Navigation.Desktop = (props) =>
  <div className={classNames('navigation__menu navigation__menu_desktop', props.class || '')}>
    {props.children}
  </div>;

/** Меню навигции для мобильных и планшетов (< 786px ширина)
 * @props class - доп. класс
 * @props children - дочерние элементы
 * @returns {JSX.Element}
 * @constructor
 */
Navigation.Mobile = (props) =>
  <div className={classNames('navigation__menu navigation__menu_mobile', props.class || '')}>
    {props.children}
  </div>;

export default Navigation;
