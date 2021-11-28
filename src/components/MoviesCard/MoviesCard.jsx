import React from 'react'
import './MoviesCard.css'
import savedCard from '../../images/save_movie_img.svg'
import testPic from '../../images/test_pic.png'

function MoviesCard({name, timeDuration}) {
    return (
        <li className="card">

                <div className="card__header">
                    <div className="card__info">
                        <h3 className="card__title">{name}</h3>
                        <p className="card__duration">{timeDuration}</p>
                    </div>
                    <img src={savedCard} alt="" className="card__selector" /> 
                </div>
                <img src={testPic} alt="" className="card__photo" />  
 
        </li>
    )
}

export default MoviesCard
