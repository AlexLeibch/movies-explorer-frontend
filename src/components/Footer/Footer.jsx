import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум x BeatFilm.
        </p>
        <div className="footer__wrap">
          <p className="footer__copyright">© 2021</p>
          <nav className="footer__nav">
            <ul className="footer__links-list">
              <li className="footer__link-item">
                <a
                  href="https://github.com/AlexLeibch"
                  target="_blank"
                  className="footer__link"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="footer__link-item">
                <a
                  href="https://t.me/VisVies"
                  target="_blank"
                  className="footer__link"
                  rel="noreferrer"
                >
                  Telegramm
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Footer;
