import React from "react";
import "./Promo.css";
function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__wrapper">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя
          </p>
          <a className="promo__link" href="#about">
            <button className="promo__button" type="button">
              Узнать больше
            </button>
          </a>
        </div>
        <div className="promo__img"></div>
      </div>
    </section>
  );
}

export default Promo;
