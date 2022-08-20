import { apiSettings } from './constants';

export class MainApi {
  /** @param options - опции для работы с API (serverURL - url сервера, headers - заголовки в виде объекта) */
  constructor(options) {
    this._headers = options.headers;
    this._serverURL = options.serverURL;
    /** возвращает ответ / ошибку после выполнения промиса */
    this._handlePromiseReturn = ((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json()
        .then(data => {
          return Promise.reject(data.message || res.statusText);
        })
    })
  }

  /** Работа с данными пользователя */

  /** Получает инфо о пользователе с сервера
   * @returns {Promise<Response>} - объект с данными пользователя / текст ошибки */
  getUserInfo() {
    return fetch(`${this._serverURL}/users/me`, {
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers}
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /** Отправляет инфо о пользователе на сервер
   * @param userName - отправляемые данные
   * @param userEmail - отправляемые данные
   * @returns {Promise<Response>} - объект с обновленными данными / текст ошибки */
  sendUserInfo(userName, userEmail) {

    return fetch(`${this._serverURL}/users/me`, {
      method: 'PATCH',
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers},
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /** Работа с фильмами */

  /** Получить сохраненные фильмы
   * @returns {Promise<Response>}
   */
  getSavedMovies() {
    return fetch(`${this._serverURL}/movies`, {
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers}
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /** Отправляет данные о новом фильме на сервер
   * @param movieData - отправляемые данные
   * @returns {Promise<Response>} - объект фильма / текст ошибки */
  sendMovie(movieData) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      id,
    } = movieData;
    return fetch(`${this._serverURL}/movies`, {
      method: 'POST',
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers},
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: String(id),
      })
    })
      .then((res) => this._handlePromiseReturn(res));
  }

  /** Удаляет фильм с сервера
   * @param movieID - ID фильма
   * @returns {Promise<Response>} - объект фильма / текст ошибки */
  deleteMovie(movieID) {
    return fetch(`${this._serverURL}/movies/${movieID}`, {
      method: 'DELETE',
      headers: {authorization: 'Bearer ' + localStorage.getItem('jwt'), ...this._headers}
    })
  }
}

/** Экземпляр MainApi
 * @type {MainApi} */
export const mainApi = new MainApi(apiSettings);
