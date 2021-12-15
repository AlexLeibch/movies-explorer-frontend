import React from 'react'
import {useLocation} from 'react-router-dom'
import './MoviesCard.css'
import selectedMovie from '../../images/save_movie_img.svg'
import unselectedMovie from '../../images/unselected_movie_img.png'
import deleteIcon from '../../images/deleted_icon.png'

function MoviesCard({movie, cardName, timeDuration, imageLink, trailerLink, addMovie, savedMovies, deleteMovie}) {
    const {pathname} = useLocation();
    const [isSavedMovie, setIsSavedMovie] = React.useState(false)
    const movieIcon = (isSavedMovie ? selectedMovie : unselectedMovie)
    const cardIcon = (pathname === '/movies' ? movieIcon : deleteIcon)

    function handleLikeMovie() {
        if(!isSavedMovie) {
            addMovie(movie)
            setIsSavedMovie(true)
            console.log(savedMovies, 'saved-movies')

        } else {
            const movieItem = savedMovies.filter((savedMovie) => savedMovie.movieId === movie.id)
            console.log(movieItem, 'moveItem')
            deleteMovie(movieItem[0].data.movieId)
            setIsSavedMovie(false)
        }
    }


    return (
        <li className="card">
                <div className="card__header">
                    <div className="card__info">
                        <h3 className="card__title">{cardName}</h3>
                        <p className="card__duration">{timeDuration}</p>
                    </div>
                    <img src={cardIcon} alt="" className="card__selector" onClick={handleLikeMovie}  />
                </div>
                <a className="card__trailer-link" href={trailerLink} target="_blank" rel="noreferrer">
                    <img src={imageLink} alt="testPic" className="card__photo" />  
                </a>
        </li>
    )
}

export default MoviesCard
