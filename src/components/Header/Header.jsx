import React from 'react'
import "./Header.css"
import icon from '../../images/header_logo.svg'
import {Link, useLocation} from 'react-router-dom'
import Navigation from '../Navigation/Navigation'


function Header({ bgColor, textColor }) {
    const { pathname } = useLocation();
    const text = `${pathname === '/movies' ? 'Аккаунт' : 'Регистрация'}`;
  
    return (
      <header className={`header header_bg-color_${bgColor}`}>
      <div className="header__container">
        <div className="header__wrapper">
          <Link to="/"><img className="header__logo" src={icon} alt="Логотип" /></Link>
        </div>
        <div className="header__wrapper">
          {pathname === "/" ? ( "" ) : <Navigation />}
          <Link
            className={`header__sign-text header__sign-text_color_${textColor}`}
            to={`${pathname === "/" ? "/movies" : "/profile"}`}
          >
            {text}
          </Link>
          {pathname === "/" ? (
            <button className="header__btn-signin" type="button">
              Войти
            </button>
          ) : (
            <button className="header__btn-account" type="button" />
          )}
        </div>
      </div>
    </header>
    );
  }

export default Header
