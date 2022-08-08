import React from 'react';
import './AuthLayout.css';
import Container from "../Container/Container";
import {classNames} from "../../utils/helpers";

const AuthLayout = (props) => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("pochta@yandex.ru");
  const [password, setPassword] = React.useState("какой-топароль");

  const authActionsSettings = {
    login: {
     class: 'auth_login',
      formName: 'login-form',
      formTitle: 'Рады видеть!'
    },
    register: {
      class: 'auth_register',
      formName: 'register-form',
      formTitle: 'Добро пожаловать!'
    }
  }

  /** Состояние ошибок инпутов
   * FIXME временное
   * @type {{}}
   */
  const errorStates = {
    name: '',
    email: '',
    password: 'Что-то пошло не так...'
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
  }

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  }

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
  }

  return (
    <main className={classNames('auth', authActionsSettings[props.action].class)}>
      <Container class='auth__container'>
        <svg className='auth__logo' width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19Z" fill="#2BE080"/>
          <path d="M26.3752 11H11.6248C10.1751 11 9 12.212 9 13.7061V21.203C9 21.3421 9.01022 21.4788 9.03025 21.6124C9.00974 21.8121 9 22.014 9 22.2178C9 26.5151 13.4769 30 18.9999 30C24.5229 30 29 26.5151 29 22.2178C29 22.0139 28.9893 21.8121 28.9697 21.6124C28.9893 21.4789 29 21.3421 29 21.203V13.7062C29 12.2116 27.8236 11 26.3752 11Z" fill="white"/>
        </svg>
        <h1 className='auth__title'>{authActionsSettings[props.action].formTitle}</h1>
        <form
          className='auth__form'
          name={authActionsSettings[props.action].formName}
          onSubmit={handleFormSubmit}
          >
          {props.action === 'register'
          ?
            <>
              <label className="auth__label" htmlFor="name">Имя</label>
              <input
                id="name"
                className={classNames('auth__input', errorStates.name ? 'auth__input_state_error' : '')}
                name="name"
                type="text"
                onChange={handleChangeName}
                value={name || ""}
                minLength="2"
                required
              />
              <span
                className='auth__error'
                id="name-error"
              >
            {errorStates.name || ''}
          </span>
            </>
          : null
          }
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input
            id="email"
            className={classNames('auth__input', errorStates.email ? 'auth__input_state_error' : '')}
            name="email"
            type="email"
            onChange={handleChangeEmail}
            value={email || ""}
            minLength="2"
            required
          />
          <span
            className='auth__error'
            id="email-error"
          >
            {errorStates.email || ''}
          </span>
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input
            id="password"
            className={classNames('auth__input', errorStates.password ? 'auth__input_state_error' : '')}
            name="password"
            type="password"
            onChange={handleChangePassword}
            value={password || ""}
            minLength="7"
            required
          />
          <span
            className='auth__error'
            id="password-error"
          >
            {errorStates.password || ''}
          </span>
        </form>
      </Container>
    </main>
  );
};

export default AuthLayout;
