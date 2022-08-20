import { apiSettings } from "./constants";

/** Хандл проверки ответа при регистрации / авторизации, возвращает ответ или ошибку
 * @param res - ответ
 * @returns {*}
 */
const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
    .then(data => {
      return Promise.reject(data.message || res.statusText);
    })
}

/** Отправка рег. данных
 * @param registerData - рег. данные {email: string, password: string, name: string}
 * @returns {Promise<Response>}
 */
export const register = (registerData) => {
  return fetch(`${apiSettings.serverURL}/signup`, {
    method: "POST",
    headers: apiSettings.headers,
    body: JSON.stringify(registerData)
  })
    .then((res) => handleResponse(res))
    .then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
      }
      return res;
    });
}

/** Отправка данных входа
 * @param loginData - данные входа {email: string, password: string}
 * @returns {Promise<Response>}
 */
export const authorize = (loginData) => {
  return fetch(`${apiSettings.serverURL}/signin`, {
    method: "POST",
    headers: apiSettings.headers,
    body: JSON.stringify(loginData)
  })
    .then((res) => handleResponse(res))
    .then((res) => {
      if (res.token) {
        localStorage.setItem("jwt", res.token);
      }
      return res;
    });
}

/** Выход
 * @returns {Promise<Response>}
 */
export const signout = () => {
  return fetch(`${apiSettings.serverURL}/signout`, {
    method: "GET",
    headers: {authorization: 'Bearer ' + localStorage.getItem("jwt"), ...apiSettings.headers},
    credentials: 'include',
  })
    .then((res) => handleResponse(res));
}
