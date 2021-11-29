import React from 'react'
import './Register.css'
import Form from '../Form/Form'
import icon from '../../images/header_logo.svg'
import {Link, useLocation} from 'react-router-dom'

function Register() {
    return (
        <section className="register">
            <div className="register__container">
                <Link to="/"><img className="register__logo" src={icon} alt="Логотип" /></Link>
                <h1 className="register__title">Добро пожаловать</h1>
                <Form
                    submitText={{
                buttonText: "Зарегистрироваться",
                promt: "Уже зарегистрированы?",
                route: "/signin",
                linkText: "Войти"
                }}
                >
                <label htmlFor="name" className="form__label">Имя</label>
                <input id="name" className="form__input" minLength="2" type="text" />
                <span className='form__input-error'>Текст ошибки</span>
                </Form>
            </div>

            
        </section>
    )
}

export default Register
