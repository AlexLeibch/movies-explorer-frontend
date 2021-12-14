import React from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import {clientSizeScreen, coefficientScreen} from '../../utils/ScreenSize'
import moviesApi from '../../utils/MoviesApi'

function Movies() {

    const [movies, setMovies] = React.useState([])
    const [renderMovie, setRenderMovie] = React.useState([])
    const [countClickMoreFilms, setCountClickMoreFilms] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState('')
    const [inputError, setInputError] = React.useState('')
    const [visibleMovie, setVisibleMovie] = React.useState('')
    const [isPreloaderOpen, setIsPreloaderOpen] = React.useState('')

    function countInitCards() {
        const width = clientSizeScreen();
        if (width >= 1280) {
          return 12;
        } if (width >= 757) {
          return 8;
        } return 5;
      }


    function handleMoreRenderMovie() {
        const card = countInitCards()
        setRenderMovie(movies.slice(0, card + countClickMoreFilms * coefficientScreen()))
        setCountClickMoreFilms(countClickMoreFilms + 1)
    }

    function filterMoviesByKeyWord(moviesList) {
        setMovies(moviesList.filter(movie => movie.nameRU.includes(searchValue)))
    }

    
    function handleSearch(evt) {
        evt.preventDefault()

        if(searchValue === '') {
            setInputError('Нужно ввести ключевое слово')
            return
        }

        setIsPreloaderOpen('preloader_active')
        moviesApi.getMovies()
        .then(moviesList=> {
            localStorage.setItem('movieList', JSON.stringify(moviesList))
        })
        .then(() => {
            filterMoviesByKeyWord(JSON.parse(localStorage.movieList))
            setVisibleMovie('movies__visibility')
            setIsPreloaderOpen('')
        })

    }




    
    return (
        <>
            <SearchForm
                onSubmit={handleSearch}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                inputError={inputError}
                setInputError={setInputError}            
            />
            <Preloader isPreloaderOpen={isPreloaderOpen}/>
            <MoviesCardList
                renderMovie={renderMovie}
                movies={movies}
                visibleMovie={visibleMovie}
                setRenderMovie={setRenderMovie}
                handleMoreRenderMovie={handleMoreRenderMovie}
                countInitCards={countInitCards}
            />
        </>
    )
}

export default Movies
