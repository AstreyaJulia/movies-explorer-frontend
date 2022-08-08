/* Контент сайта */

import React from "react";

/** Массив ссылок для навигации под промо
 * @type {[{href: string, title: string}]}
 */
export const NAV_MENU = [{title: "О проекте", href: "#about-project"}, {
  title: "Технологии",
  href: "#techs"
}, {title: "Студент", href: "#about-me"}]

/** Массив стека технологий для секции "Технологии"
 * @type {string[]}
 */
export const TECHS_LIST = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

/** Имя в секции "Студент"
 * @type {string}
 */
export const PORTFOLIO_NAME = 'Виталий';

/** Профессия, возраст в секции "Студент"
 * @type {string}
 */
export const PORTFOLIO_PROFESSION = 'Фронтенд-разработчик, 30 лет';

/** Информация в секции "Студент"
 * @type {string}
 */
export const PORTFOLIO_ABOUT = 'Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.';

/** Массив ссылок для портфолио (ссылки будут открываться в новом окне)
 * @type {[{href: string, title: string}]}
 */
export const PORTFOLIO_ITEMS = [{
  title: "Статичный сайт",
  href: "https://astreyajulia.github.io/how-to-learn/"
}, {
  title: "Адаптивный сайт",
  href: "https://astreyajulia.github.io/how-to-learn/"
}, {title: "Одностраничное приложение", href: "https://astreyajulia.github.io/russian-travel/"}]

/** Массив ссылок на соц-сети (ссылки будут открываться в новом окне)
 * @type {[{href: string, title: string}]}
 */
export const SOCIAL_LINKS = [{title: "Яндекс.Практикум", href: "https://practicum.yandex.ru"}, {
  title: "Github",
  href: "https://github.com/AstreyaJulia"
}, {title: "Vkontakte", href: "https://vk.com/astreya"}]
