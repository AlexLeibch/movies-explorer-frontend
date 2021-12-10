import React from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

function Form({children, submitText }) {
    
    return (

        <form className="form">
            {children}
            <label htmlFor="email" className="form__label">E-mail</label>
            <input id="email" className="form__input" minLength="2" type="email" required />
            <span className='form__input-error'>Текст ошибки</span>
            <label htmlFor="password" className="form__label">Пароль</label>
            <input id="password" className="form__input" minLength="2" type="password" required />
            <span className='form__input-error'> Текст ошибки</span>
            <button className="form__button" type="submit">{submitText.buttonText}</button>
            <p className="form__promt">
                {`${submitText.promt} `}
                <Link className="form__link" to={submitText.route}>{submitText.linkText}</Link>
            </p>
        </form>
    )
}
export default Form
