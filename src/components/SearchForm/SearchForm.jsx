import React from "react";
import './SearchForm.css';
import Container from "../Container/Container";

const SearchForm = () => {
  return (
    <div className="search-form">
      <Container class='search-form__container'>
        <form className="search-form__box">
          <div className='search-form__input-group'>
            <input type="text" className="search-form__input" placeholder="Фильм"/>
            <button className="search-form__button">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7927 12.2639C11.3608 13.6958 9.03915 13.6958 7.60723 12.2639C6.1753 10.832 6.1753 8.51036 7.60723 7.07844C9.03915 5.64652 11.3608 5.64652 12.7927 7.07844C14.2246 8.51036 14.2246 10.832 12.7927 12.2639ZM13.2331 13.6469C11.2728 15.1462 8.45724 14.9995 6.66442 13.2067C4.7118 11.2541 4.7118 8.08825 6.66442 6.13563C8.61704 4.18301 11.7829 4.18301 13.7355 6.13563C15.5282 7.92838 15.675 10.7438 14.1758 12.704L17.7425 16.2707L16.7997 17.2135L13.2331 13.6469Z" fill="white"/>
              </svg>
            </button>
          </div>
          <label className="search-form__checkbox-container">
            <input className="search-form__checkbox" type="checkbox"/>
            <span className="search-form__span"/>
            <span className="search-form__label">Короткометражки</span>
          </label>
        </form>
        <hr noshade="true" className="search-form__line"/>
      </Container>
    </div>
  );
};

export default SearchForm;
