import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
function MoviesCardList() {
    return (
        <section className="movies">
            <ul className="movies__list">
                <MoviesCard name="Кука" timeDuration="1:37"/>
                <MoviesCard name="Кука" timeDuration="1:37"/>
                <MoviesCard name="Кука" timeDuration="1:37"/>
                <MoviesCard name="Кука" timeDuration="1:37"/>
                <MoviesCard name="Кука" timeDuration="1:37"/>
                <MoviesCard name="Кука" timeDuration="1:37"/>
            </ul>
            <button className="movies__button" type="button">Ещё</button>
        </section>
    )
}

export default MoviesCardList
