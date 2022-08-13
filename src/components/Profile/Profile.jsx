import React from 'react';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { classNames } from "../../utils/helpers";
import Container from "../Container/Container";
import './Profile.css';

const Profile = () => {

  /** Стейт данных текущего пользователя (временно)
   * {name: "Имя", email: "эл. почта"} */
  /* FIXME временно, удалить */
  const [currentUser, setCurrentUser] = React.useState({name: "Виталий", email: "pochta@yandex.ru"});

  /** Стейт для соообщений ошибок */
  const [errorMessage, setErrorMessage] = React.useState('');

  /** Стейт данных профиля
   * {name: "Имя", email: "эл. почта"} */
  const [profileData, setProfileData] = React.useState(currentUser);

  /** Стейт, блокирующий редактирование полей профиля */
  const [readOnly, setReadOnly] = React.useState(true);

  /** Стейт, проверяющий изменение полей профиля */
  const [profileChanged, setProfileChanged] = React.useState(false);

  /** Изменяет стейт profileData
   * получает атр. name и value события
   * @param evt */
  function handleProfileDataChange(evt) {
    const {name, value} = evt.target;
    /* FIXME временно */
    setErrorMessage('При обновлении профиля произошла ошибка.');
    setProfileChanged(true);
    setProfileData({
      ...profileData, [name]: value
    })
  }

  /** Отправка формы редактирования профиля
   * @param evt
   */
  function handleProfileSubmit(evt) {
    evt.preventDefault();
    /* TODO хандл отправки формы редактирования профиля*/
    setProfileChanged(false);
    handleProfileReadOnlyChange();
    setErrorMessage('');
    setCurrentUser(profileData);
  }

  /** Включает редактирование полей профиля */
  const handleProfileReadOnlyChange = () => setReadOnly(!readOnly);
  /* TODO заменить на setReadOnly(false) */

  const handleLogOut = () => setCurrentUser({})

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
                value={profileData.name || ''}
                onChange={handleProfileDataChange}
                disabled={readOnly}
                required
                minLength={2}
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
                value={profileData.email || ''}
                onChange={handleProfileDataChange}
                disabled={readOnly}
                required
                placeholder='E-mail'
              />
            </label>
            <div className='profile__input-group'>
              <p className='profile__error'>{errorMessage}</p>
              {
                readOnly ?
                  <>
                    <button className="profile__button profile__button-edit"
                            onClick={handleProfileReadOnlyChange} type='button'>Редактировать
                    </button>
                    <button className="profile__button profile__button-signout" onClick={handleLogOut}
                            type='button'>Выйти
                      из аккаунта
                    </button>
                  </> :
                  <button
                    className={classNames("profile__button profile__button-save", profileChanged ? '' : 'profile__button-save_disabled')}
                    disabled={!profileChanged} type='submit'>Сохранить</button>
              }
            </div>
          </form>
        </Container>
      </main>
    </>
  );
};

export default Profile;
