import React from 'react'
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="about">
            <div className="about__container">
                <h1 className="about__title">
                    О проекте
                </h1>
                <div className="about__wrapper">
                    <div className="about__diplom-description">
                        <h2 className="about__diplom-title">
                            Дипломный проект включал 5 этапов
                        </h2>
                        <p className="about__diplom-subtitle">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="about__diplom-description">
                        <h2 className="about__diplom-title">
                            На выполнение диплома ушло 5 недель
                        </h2>
                    <p className="about__diplom-subtitle">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="about__wrapper">
                    <div className="about__duration-wrapper about__duration-wrapper_backend">
                        <div className="about__duration about__duration_backend">1 неделя</div>
                        <p className="about__duration-subtitle">Back-end</p>
                    </div>
                    <div className="about__duration-wrapper bout__duration-wrapper_frontend">
                        <div className="about__duration about__duration_frontend">4 недели</div>
                        <p className="about__duration-subtitle">Front-end</p>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default AboutProject

