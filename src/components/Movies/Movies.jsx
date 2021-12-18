import React from 'react'
import {useLocation} from 'react-router-dom'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {clientSizeScreen, coefficientScreen} from '../../utils/ScreenSize'
import moviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/mainApi'

function Movies({isLogin}) {

    const { pathname } = useLocation()
    const [movies, setMovies] = React.useState([])
    const [renderMovie, setRenderMovie] = React.useState([])  // Массив с отрисованными карточками с 
    const [countClickMoreFilms, setCountClickMoreFilms] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState('')
    const [inputError, setInputError] = React.useState('')
    const [visibleMovie, setVisibleMovie] = React.useState('')
    const [isPreloaderOpen, setIsPreloaderOpen] = React.useState('')
    const [savedMovies, setSavedMovies] = React.useState([]);

    React.useEffect(() => {
        mainApi.getSavedMovies()
          .then(savedMoviesData => {
            if(savedMoviesData) {
                setSavedMovies(savedMoviesData)
            }
          })
            if(pathname === '/saved-movies') {
                setVisibleMovie('movies__visibility')
            }
        }, []);

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
        setVisibleMovie('')

        if(pathname=== '/movies') {
 
        moviesApi.getMovies()
        .then(moviesList=> {
            localStorage.setItem('movieList', JSON.stringify(moviesList))
        })
        .then(() => {
            filterMoviesByKeyWord(JSON.parse(localStorage.movieList))
            setVisibleMovie('movies__visibility')
            setIsPreloaderOpen('')
        })
    } else {
        setSavedMovies(savedMovies.filter(movie => movie.nameRU.includes(searchValue)))
        setVisibleMovie('movies__visibility')
        setIsPreloaderOpen('')
    }

    }

    function addMovie(movie) {
        
        mainApi.addMovie(movie)
        .then((dataMovie) => {
          setSavedMovies([dataMovie.data, ...savedMovies]);
        })
    }

    function deleteMovie(movieId) {
        mainApi.removeMovie(movieId)
        .then(() => {
            const newMovies = savedMovies.filter(movie => movie._id !==  movieId);
            setSavedMovies(newMovies);
          })

    }
    
    return (
        <>
            <Header bgColor="white" textColor="black" isLogin={isLogin}/>
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
                savedMovies={savedMovies}
                addMovie={addMovie}
                deleteMovie={deleteMovie}
            />
            <Footer/>
        </>
    )
}

export default Movies
