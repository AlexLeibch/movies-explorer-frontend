import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({
  formName,
  submitText,
  children,
  registrationError,
  submitHandle,
  validation,
}) {
  const { values, handleChange, errors, isValid, onFocus, isFocused } =
    validation;

  return (
    <form className="form" onSubmit={submitHandle} name={`${formName}-form`}>
      {children}
      <label htmlFor="email" className="form__label">
        E-mail
      </label>
      <input
        id="email"
        name="email"
        className="form__input"
        minLength="2"
        type="email"
        required
        onFocus={onFocus}
        onChange={handleChange}
      />
      <span className="form__input-error">{isFocused && errors.email}</span>
      <label htmlFor="password" className="form__label">
        Пароль
      </label>
      <input
        name="password"
        id="password"
        className="form__input"
        minLength="2"
        type="password"
        required
        value={values.password || ""}
        onFocus={onFocus}
        onChange={handleChange}
      />
      <span className="form__input-error">{isFocused && errors.password}</span>
      <button className="form__button" type="submit" disabled={!isValid}>
        {submitText.buttonText}
      </button>
      {registrationError && (
        <p className="form__input-error">Произошла ошибка при регистрации</p>
      )}
      <p className="form__promt">
        {`${submitText.promt} `}
        <Link className="form__link" to={submitText.route}>
          {submitText.linkText}
        </Link>
      </p>
    </form>
  );
}
export default Form;
