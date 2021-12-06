import React from 'react'
import "./Header.css"
import icon from '../../images/header_logo.svg'
import {Link, useLocation} from 'react-router-dom'
import Navigation from '../Navigation/Navigation'


function Header({ bgColor, textColor }) {
    const { pathname } = useLocation();
    const text = `${pathname === '/' ? 'Регистрация' : 'Аккаунт'}`;
    const [activeBurger, setActiveBurger] = React.useState(false)
    const ref = React.useRef(null)
    function handleActiveBurger() {
      setActiveBurger(!activeBurger)
      console.log(activeBurger)
    }

    React.useEffect(() => {
      function handler(event) {
          if(!ref.current?.contains(event.target) && !event.target.classList.contains('header__burger_active') ) {
              setActiveBurger(!activeBurger)
          }
      }
      window.addEventListener('click', handler)
      return () => window.removeEventListener('click', handler)
  }, [activeBurger])
     

  


    return (
      <header className={`header header_bg-color_${bgColor}`}>
      <div className="header__container">
        <div className="header__wrapper">
          <Link to="/"><img className="header__logo" src={icon} alt="Логотип" /></Link>
        </div>
        <div className={`header__wrapper ${pathname === "/" ? "" : "header__wrapper_burger"}`}>
          {pathname === "/" ? ( "" ) : <Navigation />}
          <Link
            className={`header__sign-text header__sign-text_color_${textColor}`}
            to={`${pathname === "/" ? "/signup" : "/profile"}`}
          >
            {text}
          </Link>
          {pathname === "/" ? (
            <Link to="/signin" className="header__btn-signin" type="button">
              Войти
            </Link>
          ) : (
            <button className="header__btn-account" type="button" />
          )}
        </div>
        {pathname === "/" ? '' : (
          <>
            <div className={`header__burger ${activeBurger ? 'header__burger_active' : ''}`} onClick={handleActiveBurger} >
                <div className="header__burger-line"/>
                <div className="header__burger-line"/>
                <div className="header__burger-line"/>
            </div>
            <div className={`header__burger-menu-wrap ${activeBurger ? 'header__burger-menu-wrap_active' : ''}`} ref={ref} >
                <nav className="header__burger-nav">
                  <ul className="header__burger-list">
                    <li className="header__burger-item">
                      <Link className="header__burger-link" onClick={handleActiveBurger} to="/">Главная</Link>
                    </li>
                    <li className="header__burger-item">
                      <Link className="header__burger-link" onClick={handleActiveBurger} to="/movies">Фильмы</Link>
                    </li>
                    <li className="header__burger-item">
                      <Link className="header__burger-link" onClick={handleActiveBurger} to="/saved-movies">Сохраненные Фильмы</Link>
                    </li>
                  </ul>
                </nav>
                <div className={`header__wrapper header__wrapper_burger-menu ${pathname === "/" ? "header__wrapper_burger" : ""}`}>
                <Link
                  className={`header__sign-text header__sign-text_color_${textColor}`}
                  to={`${pathname === "/" ? "/signup" : "/profile"}`}
                  onClick={handleActiveBurger}
                >
                  {text}
                </Link>
                {pathname === "/" ? (
                  <Link to="/signin" onClick={handleActiveBurger} className="header__btn-signin" type="button">
                    Войти
                  </Link>
                    ) : (
                      <Link to="/profile"  onClick={handleActiveBurger} className="header__btn-account" type="button" ></Link>
                    )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
    );
  }

export default Header


