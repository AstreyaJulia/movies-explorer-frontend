import { useCallback, useState } from 'react';
import { VALIDATION_ERRORS } from "../constants";

export function useForms() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const regexEmail = /\S+@\S+\.\S+/;
  const regexName = /^[a-zA-Z ]+$/;

  const validationEmail = (name, value) => {
    if (!regexEmail.test(value)) {
      setErrors({...errors, [name]: VALIDATION_ERRORS.email});
      setIsValid(false)
    }
  }

  const validationName = (name, value) => {
    if (!regexName.test(value)) {
      setErrors({...errors, [name]: VALIDATION_ERRORS.name});
      setIsValid(false)
    }
  }

  const handleChange = (evt) => {
    const {name, value} = evt.target
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: evt.target.validationMessage});
    setIsValid(evt.target.closest('form').checkValidity());
    if (evt.target.type === 'email' && evt.target.validity.valid) validationEmail(name, value)
    if (evt.target.id === 'name' && evt.target.validity.valid) validationName(name, value)
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return {values, handleChange, errors, isValid, resetForm, setValues, setIsValid};
}