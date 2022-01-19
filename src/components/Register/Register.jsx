import React from "react";
import "./Register.css";
import Form from "../Form/Form";
import icon from "../../images/header_logo.svg";
import { Link } from "react-router-dom";
import CallbackValidation from "../../helpers/Validiity";

function Register({ handleRegister, registrationError }) {
  const callbackValidation = CallbackValidation();
  const { email, password, name } = callbackValidation.values;
  const { values, onFocus, handleChange, isFocused, errors } =
    callbackValidation;

  const submitHandle = (e) => {
    e.preventDefault();
    handleRegister(name, email, password);
    callbackValidation.resetForm();
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link className="register__link" to="/">
          <img className="register__logo" src={icon} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать</h1>
        <Form
          submitText={{
            buttonText: "Зарегистрироваться",
            promt: "Уже зарегистрированы?",
            route: "/signin",
            linkText: "Войти",
          }}
          registrationError={registrationError}
          submitHandle={submitHandle}
          validation={callbackValidation}
          formName="register"
        >
          <label htmlFor="name" className="form__label">
            Имя
          </label>
          <input
            id="name"
            name="name"
            className="form__input"
            minLength="2"
            type="text"
            required
            value={values.name || ""}
            onFocus={onFocus}
            onChange={handleChange}
          />
          <span className="form__input-error">{isFocused && errors.name}</span>
        </Form>
      </div>
    </section>
  );
}

export default Register;
