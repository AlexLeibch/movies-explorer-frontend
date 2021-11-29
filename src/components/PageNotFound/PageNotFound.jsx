import React from 'react'
import './PageNotFound.css'
import {useHistory} from 'react-router-dom'

function PageNotFound() {
    const history = useHistory()

    return (
        <section className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__subtitle">Страница не найдена</p>
                <p className="not-found__back" onClick={() => history.goBack()}>Назад</p>
            </div>           
        </section>
    )
}

export default PageNotFound
