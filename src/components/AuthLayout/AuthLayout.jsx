import React from 'react';
import Container from "../Container/Container";
import {classNames} from "../../utils/helpers";
import LinkCustom from "../LinkCustom/LinkCustom";
import './AuthLayout.css';
import {useForms} from "../../utils/hooks/useForms";

/** Раскладка для авторизации / регистрации
 * @param props.action {string} - тип 'login' - страница логина, 'register' - страница регистрации
 * заголовок формы, классы берутся из объекта с настройками
 * @returns {JSX.Element}
 * @constructor
 */
const AuthLayout = (props) => {

  /** Объект для хранения классов, названий форм, и заголовков
   * @type {Object}
   */
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

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSubmit, setIsSubmit] = React.useState(false);
  const {handleChange, errors, isValid, resetForm, setIsValid} = useForms();

  React.useEffect(() => {
    setIsSubmit(false)
    resetForm();
    setIsValid(true);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    setIsSubmit(false)
    resetForm();
    setIsValid(true);
    // eslint-disable-next-line
  }, [props.error]);


  /** Хандл отправки формы
   * @param evt
   */
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (!isValid) return
    setIsSubmit(true)
    if (props.action === 'register') {
      if (!name && !password && !email) return
      props.handleSubmit({password: password, email: email, name: name})
    } else {
      if (!password && !email) return
      props.handleSubmit({password: password, email: email})
    }
  }

  /** Хандл смены имени
   * @param evt
   */
  const handleChangeName = (evt) => {
    setName(evt.target.value);
    handleChange(evt);
  }

  /** Хандл смены е-майла
   * @param evt
   */
  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
    handleChange(evt);
  }

  /** Хандл смены пароля
   * @param evt
   */
  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
    handleChange(evt);
  }

  return (
    <main className={classNames('auth', authActionsSettings[props.action].class)}>
      <Container class='auth__container'>
        <LinkCustom type='route' to='/' class='header__logo'>
          <svg className='auth__logo' width="38" height="38" viewBox="0 0 38 38" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19Z"
              fill="#2BE080"/>
            <path
              d="M26.3752 11H11.6248C10.1751 11 9 12.212 9 13.7061V21.203C9 21.3421 9.01022 21.4788 9.03025 21.6124C9.00974 21.8121 9 22.014 9 22.2178C9 26.5151 13.4769 30 18.9999 30C24.5229 30 29 26.5151 29 22.2178C29 22.0139 28.9893 21.8121 28.9697 21.6124C28.9893 21.4789 29 21.3421 29 21.203V13.7062C29 12.2116 27.8236 11 26.3752 11Z"
              fill="white"/>
          </svg>
        </LinkCustom>
        <h1 className='auth__title'>{authActionsSettings[props.action].formTitle}</h1>
        <form
          className='auth__form'
          name={authActionsSettings[props.action].formName}
          onSubmit={handleFormSubmit}
        >
          {/* Для формы входа поле ввода имени не будет отрисовано */}
          {props.action === 'register'
            ?
            <>
              <label className="auth__label" htmlFor="name">Имя</label>
              <input
                id="name"
                className={classNames('auth__input', errors.name ? 'auth__input_state_error' : '')}
                name="name"
                type="text"
                onChange={handleChangeName}
                value={name || ""}
                minLength="2"
                placeholder='Имя'
                required
                disabled={isSubmit}
              />
              <span
                className='auth__error'
                id="name-error"
              >
            {errors.name || ''}
          </span>
            </>
            : ''
          }
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input
            id="email"
            className={classNames('auth__input', errors.email ? 'auth__input_state_error' : '')}
            name="email"
            type="email"
            onChange={handleChangeEmail}
            value={email || ""}
            minLength="2"
            placeholder='E-mail'
            required
            disabled={isSubmit}
          />
          <span
            className='auth__error'
            id="email-error"
          >
            {errors.email || ''}
          </span>
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input
            id="password"
            className={classNames('auth__input', errors.password ? 'auth__input_state_error' : '')}
            name="password"
            type="password"
            onChange={handleChangePassword}
            value={password || ""}
            minLength="5"
            placeholder='Пароль'
            required
          />
          <span
            className='auth__error'
            id="password-error"
          >
            {errors.password || ''}
          </span>
          <div className='auth__input-group'>
            <p className="auth__button-error">{props.error}</p>
            {props.action === 'register' ?
              <>
                <button className={classNames('auth_button', !isValid ? 'auth_button_disabled' : '')}
                        type='submit'>Зарегистрироваться
                </button>
                <p className='auth__action'>Уже зарегистрированы?
                  <LinkCustom type='route' to='/signin' class='auth__action-link' text='Войти'/>
                </p>
              </>
              :
              <>
                <button className={classNames('auth_button', !isValid ? 'auth_button_disabled' : '')}
                        type='submit'>Войти
                </button>
                <p className='auth__action'>Ещё не зарегистрированы?
                  <LinkCustom type='route' to='/signup' class='auth__action-link' text='Регистрация'/>
                </p>
              </>
            }
          </div>
        </form>
      </Container>
    </main>
  );
};

export default AuthLayout;
