import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
function MoviesCardList() {
    return (
        <section className="movies">
            <ul className="movies__list">
                <MoviesCard name="Кука" timeDuration="1 ч 37м"/>
                <MoviesCard name="Кука" timeDuration="1 ч 37м"/>
                <MoviesCard name="Кука" timeDuration="1 ч 37м"/>
                <MoviesCard name="Кука" timeDuration="1 ч 37м"/>
                <MoviesCard name="Кука" timeDuration="1 ч 37м"/>
                <MoviesCard name="Кука" timeDuration="1 ч 37м"/>
            </ul>
            <button className="movies__button" type="button">Ещё</button>
        </section>
    )
}

export default MoviesCardList
