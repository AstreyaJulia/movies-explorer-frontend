import { useCallback, useState } from 'react';

export function useForms() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  /** Объект с настройками валидации для полей
   * @type {Object}
   */
  const validationSettings = {
    name: {
      regexp: /^[a-zA-Z, -]+$/,
      validationError: 'Имя указано некорректно'
    },
    email: {
      regexp: /\S+@\S+\.\S+/,
      validationError: 'Указан некорректный адрес почты'
    },
    password: {
      regexp: /^[\da-zA-Z]{5,}$/,
      validationError: 'Пароль должен быть не менее 5 знаков, содержать буквы или цифры'
    },
    search: {
      regexp: /[\d\w\u0430-\u044f]+/ig,
      validationError: 'Нужно ввести ключевое слово'
    }
  }

  /** Валидация поля
   * @param name
   * @param value
   */
  const fieldValidation = (name, value) => {
    if (!validationSettings[name].regexp.test(value)) {
      setErrors({...errors, [name]: validationSettings[name].validationError});
      setIsValid(false)
    }
  }

  /** Хандл смены значения, валидации поля, записи ошибок валидации
   * @param evt
   */
  const handleChange = (evt) => {
    const {name, value, validationMessage} = evt.target;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: validationMessage});
    setIsValid(evt.target.closest('form').checkValidity());
    fieldValidation(name, value)
  };

  /** Сброс значений, ошибок валидации формы
   * @type {(function(): void)|*}
   */
  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return {values, handleChange, errors, isValid, resetForm, setValues, setIsValid};
}