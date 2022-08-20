import React, { useContext } from 'react';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { classNames } from "../../utils/helpers";
import Container from "../Container/Container";
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForms } from "../../utils/hooks/useForms";

const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const { handleChange, errors, isValid, setIsValid} = useForms();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isChanged, setIsChanged] = React.useState(false);

  /** Стейт, блокирующий редактирование полей профиля */
  const [readOnly, setReadOnly] = React.useState(true);

  React.useEffect(() => {
    setIsValid(false)
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');
    setIsChanged(false)
  }, [currentUser])

  const handleChangeName = (evt) => {
    if (evt.target.value !== currentUser.name) setIsChanged(true)
    else setIsChanged(false)
    setName(evt.target.value)
    handleChange(evt)
  }

  const handleChangeEmail = (evt) => {
    if (evt.target.value !== currentUser.email) setIsChanged(true)
    else setIsChanged(false)
    setEmail(evt.target.value)
    handleChange(evt)
  }

  /** Отправка формы редактирования профиля
   * @param evt
   */
  function handleProfileSubmit(evt) {
    evt.preventDefault();
    props.handleUpdateUser(name, email)
  }

  /** Включает редактирование полей профиля */
  const handleProfileReadOnlyChange = () => setReadOnly(false);

  return (
    <>
      <Header Header authUser={true}>
        <Navigation page='profile' authUser={true}/>
      </Header>
      <main className="profile">
        <Container class='profile__container'>
          <form className="profile__container" onSubmit={handleProfileSubmit}>
            <h2 className="profile__title">Привет, {currentUser.name}</h2>
            <label className="profile__label">
              Имя
              <input
                id="name"
                name="name"
                type="text"
                className="profile__input"
                value={name || ''}
                onChange={handleChangeName}
                required
                minLength={2}
                disabled={readOnly}
                placeholder='Имя'
              />
            </label>
            <label className="profile__label">
              E-mail
              <input
                id="email"
                name="email"
                type="email"
                className="profile__input"
                value={email || ''}
                onChange={handleChangeEmail}
                required
                disabled={readOnly}
                placeholder='E-mail'
              />
            </label>
            <div className='profile__input-group'>
              <p className='profile__error'>{props.error}</p>
              {
                readOnly ?
                  <>
                    <button className="profile__button profile__button-edit"
                            onClick={handleProfileReadOnlyChange} type='button'>Редактировать
                    </button>
                    <button className="profile__button profile__button-signout" onClick={props.signOut}
                            type='button'>Выйти
                      из аккаунта
                    </button>
                  </> :
                  <button
                    className={classNames("profile__button profile__button-save", isChanged ? '' : 'profile__button-save_disabled')}
                    disabled={!isChanged} type='submit'>Сохранить</button>
              }
            </div>
          </form>
        </Container>
      </main>
    </>
  );
};

export default Profile;
