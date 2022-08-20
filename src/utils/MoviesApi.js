import { beatFilmApiSettings } from "./constants";

export class MoviesApi {
  /** @param options - опции для работы с API (serverURL - url сервера, headers - заголовки в виде объекта) */
  constructor(options) {
    this._headers = options.headers;
    this._serverURL = options.serverURL;
    /** возвращает ответ / ошибку после выполнения промиса */
    this._handlePromiseReturn = ((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ошибка: ${res.status}`);
    })
  }

  /** Получить фильмы с сервера
   * @returns {Promise<Response>}
   */
  getMovies() {
    return fetch(`${this._serverURL}`, {
      headers: this._headers,
    })
      .then((res) => this._handlePromiseReturn(res));
  }

}

/** Экземпляр MoviesApi
 * @type {MoviesApi} */
export const moviesApi = new MoviesApi(beatFilmApiSettings);
