import React from 'react';
import './NotFound.css';
import LinkCustom from "../LinkCustom/LinkCustom";

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__container'>
        <div className='not-found__message'>
          <h1 className='not-found__status'>404</h1>
          <p className='not-found__text'>Страница не найдена</p>
        </div>
        <LinkCustom type='route' to={-1} class='not-found__button' text='Назад'/>
      </div>
    </div>
  );
};

export default NotFound;
