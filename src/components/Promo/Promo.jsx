import React from 'react'
import './Promo.css'
function Promo() {
    return (
        <div className="promo">
            <div className="promo__container">
                <div className="promo__wrapper">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
                    <button className="promo__button">Узнать больше</button>
                </div>
                <div className="promo__img"></div>
            </div>

        </div>
    )
}

export default Promo
