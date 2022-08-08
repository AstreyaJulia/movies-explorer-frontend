import React from "react";
import './MoviesCard.css';
import {classNames, getHour} from "../../utils/helpers";
import Container from "../Container/Container";

const MoviesCard = (props) => {
  const {nameRU, image, duration, liked} = props.film;

  return (
    <div className="movies-card">
      <Container class='movies-card__container'>
        <img className="movies-card__image" src={`https://api.nomoreparties.co${image.url}`} alt={nameRU}/>
        <div className="movies-card__info">
          <div className="movies-card__description">
            <p className="movies-card__title">{nameRU}</p>
            {props.saved
              ?
              <button className='movies-card__delete'>
                <svg className='movies-card__delete-icon' width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 5.06055L6.65156 7.71211L7.71222 6.65145L5.06066 3.99989L7.71211 1.34844L6.65145 0.287781L4 2.93923L1.34826 0.287484L0.287598 1.34814L2.93934 3.99989L0.287484 6.65174L1.34814 7.7124L4 5.06055Z" fill="black"/>
                </svg>
              </button>
              :
              <button className='movies-card__like'>
                <svg className={classNames("movies-card__like-icon", liked === "true" ? 'movies-card__like-icon_active' : '')} width="10" height="9" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.27273 0C6.27273 0 5.54545 0.523077 5 1.08974C4.45455 0.566667 3.72727 0 2.72727 0C1.13636 0 0 1.2641 0 2.83333C0 3.61795 0.318182 4.31538 0.909091 4.79487L5 8.5L9.09091 4.79487C9.63636 4.27179 10 3.61795 10 2.83333C10 1.2641 8.86364 0 7.27273 0Z"/>
                </svg>
              </button>
            }
          </div>
          <p className="movies-card__time">{getHour(duration)}</p>
        </div>
      </Container>
    </div>
  );
};

export default MoviesCard;
