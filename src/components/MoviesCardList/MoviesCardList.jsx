import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({renderMovie, handleMoreRenderMovie, movies, visibleMovie, setRenderMovie, countInitCards }) {

    React.useEffect(() => {

        const cards = countInitCards();
        setRenderMovie(movies.slice(0, cards));
        console.log(renderMovie)
        console.log(movies)
      }, [movies, setRenderMovie])

    function parseTimeFilm(parseMinute) {
        const hours = Math.floor(parseMinute / 60)
        const minutes = parseMinute % 60;
        const durationTime = `${hours}ч ${minutes}м`;
        return durationTime;
    }

    return (
        <section className={`movies ${visibleMovie}`}>
            {movies.length > 0 ? '' : <p className='movies__not-found'>Ничего не найдено</p>}
            <ul className="movies__list">
               {renderMovie.map((movie) => (
                <MoviesCard
                   key={movie.id}
                   cardName={movie.nameRU}
                   timeDuration = {parseTimeFilm(movie.duration)}
                   trailerLink = {movie.trailerLink}
                   imageLink={movie.image ? `https://api.nomoreparties.co${movie.image.url}` :  "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/c/e/e/5/95df-f97e-4e8b-a1d5-94f3ceb4f5ea"}
                />
               ))} 
            </ul>
            {movies.length > renderMovie.length ? <button className="movies__button" type="button" onClick={handleMoreRenderMovie}>Ещё</button> : ''}
        </section>
    )
}

export default MoviesCardList
