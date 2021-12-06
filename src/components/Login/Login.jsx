import React from 'react'
import './Login.css'
import icon from '../../images/header_logo.svg'
import {Link} from 'react-router-dom'
import Form from '../Form/Form'

function Login() {
    return (
        <section className="login">
            <div className="login__container">
                <Link to="/"><img className="login__logo" src={icon} alt="Логотип" /></Link>
                <h1 className="login__title">Рады видеть!</h1>
                <Form submitText={{
                    buttonText: "Войти",
                    promt:"Ещё не зарегестрированы?",
                    route:"/signup",
                    linkText:"Регистрация"
                }}/>
            </div>
        </section>
    )
}

export default Login
