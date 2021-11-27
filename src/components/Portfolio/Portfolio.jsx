import React from 'react'
import './Portfolio.css'
function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__projects">
            <li className="portfolio__project">
                <a className="portfolio__link" href="https://alexleibch.github.io/how-to-learn/">
                <p className="portfolio__name">Статичный сайт</p>
                <svg className="portfolio__icon" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black" />
                </svg>
                </a>
            </li>
            <li className="portfolio__project">
                <a className="portfolio__link" href="https://alexleibch.github.io/russian-travel/#">
                <p className="portfolio__name">Адаптивный сайт</p>
                <svg className="portfolio__icon" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black" />
                </svg>
                </a>
            </li>
            <li className="portfolio__project">
                <a className="portfolio__link" href="https://github.com/AlexLeibch/react-mesto-api-full">
                <p className="portfolio__name">Одностраничное приложение</p>
                <svg className="portfolio__icon" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black" />
                </svg>
                </a>
            </li>
            </ul>
      </section>
    )
}

export default Portfolio