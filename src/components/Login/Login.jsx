import React from "react";
import "./Login.css";
import icon from "../../images/header_logo.svg";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import CallbackValidation from "../../helpers/Validiity";

function Login({ handleLogin, loginError }) {
  const callbackValidation = CallbackValidation();
  const { email, password } = callbackValidation.values;

  const submitHandle = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    callbackValidation.resetForm();
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link className="login__link" to="/">
          <img className="login__logo" src={icon} alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <Form
          submitText={{
            buttonText: "Войти",
            promt: "Ещё не зарегестрированы?",
            route: "/signup",
            linkText: "Регистрация",
          }}
          submitHandle={submitHandle}
          validation={callbackValidation}
          formName="login"
          loginError={loginError}
        />
      </div>
    </section>
  );
}

export default Login;
