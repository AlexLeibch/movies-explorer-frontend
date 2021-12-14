import React from 'react'
import {useLocation} from 'react-router-dom'
import './MoviesCard.css'
import selectedMovie from '../../images/save_movie_img.svg'
import unselectedMovie from '../../images/unselected_movie_img.png'
import deleteIcon from '../../images/deleted_icon.png'

function MoviesCard({cardName, timeDuration, imageLink, trailerLink}) {
    const {pathname} = useLocation();
    // const isAdded = false;
    // const movieIcon = (isAdded ? selectedMovie : unselectedMovie)
    const [isSavedMovie, setIsSavedMovie] = React.useState(false)

    function handleClickSavedMovie() {
        setIsSavedMovie(!isSavedMovie)
    }


    return (
        <li className="card">
                <div className="card__header">
                    <div className="card__info">
                        <h3 className="card__title">{cardName}</h3>
                        <p className="card__duration">{timeDuration}</p>
                    </div>
                    {pathname === '/movies' ? 
                    <img src={isSavedMovie ? selectedMovie : unselectedMovie} alt="" className="card__selector" onClick={handleClickSavedMovie}  />
                    :
                    <img src={deleteIcon} alt="" className="card__selector" />
                    }
                </div>
                <a className="card__trailer-link" href={trailerLink} target="_blank" rel="noreferrer">
                    <img src={imageLink} alt="testPic" className="card__photo" />  
                </a>
        </li>
    )
}

export default MoviesCard
