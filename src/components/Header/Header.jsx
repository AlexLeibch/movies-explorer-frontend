import React from 'react'
import "./Header.css"
import icon from '../../images/header_logo.svg'
import {Link, useLocation} from 'react-router-dom'


function Header({ bgColor, textColor }) {
    const { pathname } = useLocation();
    const text = `${pathname === '/movies' ? 'Аккаунт' : 'Регистрация'}`;
  
    return (
      <div className={`header header__bg-color_blue`}>  {/* не забыть поменять на header__bg_color_${bgColor}  */}
        <div className="header__container">
          <img className="header__logo" src={icon} alt="Логотип" />
          <div className="header__wrapper">    
            <p className={`header__sign-text header__sign-text_color_white`}>{text}</p>           {/* не забыть поменять на header_sign-text_color{$textColor}  */}
            {pathname === '/movies' ? 
              <button className="header__btn-account" type="button" /> : <button className="header__btn-signin" type="button">Войти</button>}
          </div>
        </div>
      </div>
    );
  }

export default Header
