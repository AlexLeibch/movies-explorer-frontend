import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import {useLocation} from 'react-router-dom'

function MoviesCardList({renderMovie, handleMoreRenderMovie, movies, visibleMovie, setRenderMovie, countInitCards, addMovie, savedMovies, deleteMovie}) {
    const {pathname} = useLocation()
    const [visibilityButton, setVisibilityButton] = React.useState('')
    const [visibilityNotFound, setVisibilityNotFound] = React.useState('')

    React.useEffect(() => {
        const cards = countInitCards();
        setRenderMovie(movies.slice(0, cards));
        if(pathname === '/saved-movies') {
            setVisibilityButton('movies__button_visibility')
            setVisibilityNotFound('movies__button_visibility')

        }   else {
            setVisibilityButton('')
            setVisibilityNotFound('')
        }

      }, [movies, setRenderMovie])

    function parseTimeFilm(parseMinute) {
        const hours = Math.floor(parseMinute / 60)
        const minutes = parseMinute % 60;
        const durationTime = `${hours}ч ${minutes}м`;
        return durationTime;
    }

    return (
        <section className={`movies ${visibleMovie}`}>
            {pathname === '/movies'
            ?
            (movies.length > 0 ? '' : <p className={`movies__not-found ${visibilityNotFound}`}>Ничего не найдено</p>)
            :
            (savedMovies.length > 0 ? '' : <p className={`movies__not-found ${visibilityNotFound}`}>Ничего не найдено</p>)}
            <ul className="movies__list">
                {pathname === '/movies' ?
               renderMovie.map((movie) => (
                <MoviesCard
                   key={movie.id}
                   cardName={movie.nameRU}
                   timeDuration = {parseTimeFilm(movie.duration)}
                   imageLink={movie.image ? `https://api.nomoreparties.co${movie.image.url}` :  "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/c/e/e/5/95df-f97e-4e8b-a1d5-94f3ceb4f5ea"}
                   trailerLink = {movie.trailerLink}
                   movie={movie}
                   addMovie={addMovie}
                   savedMovies={savedMovies}
                   deleteMovie={deleteMovie}
                />
               ))
               :
               savedMovies.map((movie) => (
                <MoviesCard
                movie={movie}
                   key={movie._id}
                   cardName={movie.nameRU}
                   timeDuration = {parseTimeFilm(movie.duration)}
                   imageLink={movie.image ? movie.image :  "https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/c/e/e/5/95df-f97e-4e8b-a1d5-94f3ceb4f5ea"}
                   trailerLink = {movie.trailerLink}
                   addMovie={addMovie}
                   savedMovies={savedMovies}
                   deleteMovie={deleteMovie}
                />
               ))
                }
            </ul>
            {movies.length > renderMovie.length || pathname !== '/saved-movies' ? <button className={`movies__button ${visibilityButton}`} type="button" onClick={handleMoreRenderMovie}>Ещё</button> : ''}
        </section>
    )
}

export default MoviesCardList
