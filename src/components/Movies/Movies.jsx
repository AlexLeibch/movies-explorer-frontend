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
    const [renderMovie, setRenderMovie] = React.useState([]) 
    const [countClickMoreFilms, setCountClickMoreFilms] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState('')
    const [inputError, setInputError] = React.useState('')
    const [visibleMovie, setVisibleMovie] = React.useState('')
    const [isPreloaderOpen, setIsPreloaderOpen] = React.useState('')
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [visibilityButton, setVisibilityButton] = React.useState('movies__button_visibility')

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

    React.useEffect(() => {
        if (movies.length === renderMovie.length) {
            setVisibilityButton('movies__button_visibility');
        }
    }, [movies, renderMovie])

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

    function filterMoviesByKeyWord(movieList) {
        const films = movieList.filter(movie => movie.nameRU.includes(searchValue))
        setMovies(()=>{
          localStorage.setItem('foundFilms', JSON.stringify(films));
          return films;
        });
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
            if(!localStorage.getItem('movieList')) {
                moviesApi.getMovies()
                .then(movieList => {
                    localStorage.setItem('movieList', JSON.stringify(movieList))
                }).catch((err) => {console.log(err)})
            }

            filterMoviesByKeyWord(JSON.parse(localStorage.movieList))
            setVisibleMovie('movies__visibility')
            setVisibilityButton('')
            setIsPreloaderOpen('')

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
                setVisibleMovie={setVisibleMovie}
                setRenderMovie={setRenderMovie}
                handleMoreRenderMovie={handleMoreRenderMovie}
                countInitCards={countInitCards}
                savedMovies={savedMovies}
                addMovie={addMovie}
                deleteMovie={deleteMovie}
                visibilityButton={visibilityButton}
                setVisibilityButton={setVisibilityButton}
            />
            <Footer/>
        </>
    )
}

export default Movies
