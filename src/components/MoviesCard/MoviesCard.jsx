import React from "react";
import { classNames, getHour } from "../../utils/helpers";
import './MoviesCard.css';

/** Карточка фильма
 * @param props.film {Object} - объект фильма {nameRU, image, duration, liked}
 * @param props.saved {boolean} - карточка фильма сервиса или сохраненная пользователем (лайкнутая/закладка)
 * @returns {JSX.Element}
 * @constructor
 */
const MoviesCard = (props) => {
  const {nameRU, image, duration, liked} = props.film;

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title" title={nameRU}>{nameRU}</p>
        {/* Для сохраненных фильмов будет отрисована кнопка удаления на месте кнопки лайка */}
        {props.saved
          ?
          <button className='movies-card__delete' type='button'>
            <svg className='movies-card__delete-icon' width="8" height="8" viewBox="0 0 8 8"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M4 5.06055L6.65156 7.71211L7.71222 6.65145L5.06066 3.99989L7.71211 1.34844L6.65145 0.287781L4 2.93923L1.34826 0.287484L0.287598 1.34814L2.93934 3.99989L0.287484 6.65174L1.34814 7.7124L4 5.06055Z"
                    fill="black"/>
            </svg>
          </button>
          :
          <button className={classNames('movies-card__like', liked === "true" ? 'movies-card__like_active' : '')} type='button'>
            <svg
              className={classNames("movies-card__like-icon", liked === "true" ? 'movies-card__like-icon_active' : '')}
              width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              {liked === "true" ?
                <path
                  d="M0 1.9C0 1.1268 0.626801 0.5 1.4 0.5H8.6C9.3732 0.5 10 1.1268 10 1.9V12.4789C10 12.9367 9.50791 13.2258 9.10798 13.003L5.97341 11.2566C5.36826 10.9195 4.63174 10.9195 4.0266 11.2566L0.892022 13.003C0.492092 13.2258 0 12.9367 0 12.4789V1.9Z"
                  fill="white"/>
                :
                <path
                  d="M0.5 1.9C0.5 1.40294 0.902944 1 1.4 1H8.6C9.09706 1 9.5 1.40294 9.5 1.9V12.4789C9.5 12.5552 9.41798 12.6034 9.35133 12.5662L6.21676 10.8198C5.46033 10.3984 4.53968 10.3984 3.78324 10.8198L0.648671 12.5662C0.582015 12.6034 0.5 12.5552 0.5 12.4789V1.9Z"
                  stroke="#E8E8E8"/>
              }
            </svg>
          </button>
        }
        <p className="movies-card__time">{getHour(duration)}</p>
      </div>
      <img className="movies-card__image" src={`https://api.nomoreparties.co${image.url}`} alt={nameRU}/>
    </div>
  );
};

export default MoviesCard;
