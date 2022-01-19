import React from "react";

import "./Tech.css";
function Tech() {
  return (
    <section className="tech">
      <div className="tech__container">
        <h2 className="tech__section-title">Технологии</h2>
        <h3 className="tech__title">7 технологий</h3>
        <p className="tech__subtitle">
          На курсе веб-разработки мы осваивали технологии, которые применили в
          дипломном проекте
        </p>
        <ul className="tech__list">
          <li className="tech__list-item">
            <a
              className="tech__list-link"
              href="https://ru.wikipedia.org/wiki/HTML"
              target="_blank"
              rel="noreferrer"
            >
              HTML
            </a>
          </li>
          <li className="tech__list-item">
            <a
              className="tech__list-link"
              href="https://ru.wikipedia.org/wiki/CSS"
              target="_blank"
              rel="noreferrer"
            >
              CSS
            </a>
          </li>
          <li className="tech__list-item">
            <a
              className="tech__list-link"
              href="https://ru.wikipedia.org/wiki/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              JS
            </a>
          </li>
          <li className="tech__list-item">
            <a
              className="tech__list-link"
              href="https://ru.wikipedia.org/wiki/React"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>
          </li>
          <li className="tech__list-item">
            <a
              className="tech__list-link"
              href="https://ru.wikipedia.org/wiki/Git"
              target="_blank"
              rel="noreferrer"
            >
              Git
            </a>
          </li>
          <li className="tech__list-item">
            <a
              className="tech__list-link"
              href="https://ru.wikipedia.org/wiki/Express.js"
              target="_blank"
              rel="noreferrer"
            >
              Express.js
            </a>
          </li>
          <li className="tech__list-item">
            <a
              className="tech__list-link"
              href="https://ru.wikipedia.org/wiki/MongoDB"
              target="_blank"
              rel="noreferrer"
            >
              mongoDB
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Tech;
