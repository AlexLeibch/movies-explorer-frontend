import React from "react";
import "./AboutMe.css";
import photo from "../../images/about_me.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__description-container">
          <div className="about-me__wrap">
            <h3 className="about-me__name">Александр</h3>
            <p className="about-me__description">
              Фронтенд-разработчик, 25 лет
            </p>
            <p className="about-me__text">
              Живу в Калининграде, закончил факультет энергетики КГТУ. С 2019
              года работаю на электростанции в должности инженера по
              эксплуатации. Так же параллельно занимался тестированием поисковых
              систем. Люблю активыне виды спорта, чтение и настольные игры
            </p>
            <div className="about-me__links">
              <a
                href="https://t.me/VisVies"
                target="_blank"
                className="about-me__link"
                rel="noreferrer"
              >
                Telegramm
              </a>
              <a
                href="https://github.com/AlexLeibch"
                target="_blank"
                className="about-me__link"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <img src={photo} alt="pic-of-me" className="about-me__photo" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
