/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { useLocation } from "react-router-dom";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { clientSizeScreen, coefficientScreen } from "../../utils/ScreenSize";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/mainApi";
import shortMoviesHandle from "../../helpers/shortMoviesHandle";

function Movies({ isLogin }) {
  const { pathname } = useLocation();
  const [movies, setMovies] = React.useState([]);
  const [renderMovie, setRenderMovie] = React.useState([]);
  const [countClickMoreFilms, setCountClickMoreFilms] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  const [visibleMovie, setVisibleMovie] = React.useState("");
  const [isPreloaderOpen, setIsPreloaderOpen] = React.useState("");
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [visibilityButton, setVisibilityButton] = React.useState(
    "movies__button_visibility"
  );
  const [isShortFilms, setIsShortFilms] = React.useState(false);

  React.useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((savedMoviesData) => {
        if (savedMoviesData) {
          setSavedMovies(savedMoviesData);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (pathname === "/saved-movies") {
      setVisibleMovie("movies__visibility");
    }
  }, [pathname]);

  function filterMovies(films) {
    if (isShortFilms) {
      return shortMoviesHandle(films);
    }
    return films.filter((movie) => movie.duration >= 40);
  }

  const filteredMovies = React.useMemo(
    () => filterMovies(movies),
    [isShortFilms, movies]
  );
  const filteredRenderMovies = React.useMemo(
    () => filterMovies(renderMovie),
    [isShortFilms, renderMovie]
  );
  const filteredSavedMovies = React.useMemo(
    () => filterMovies(savedMovies),
    [isShortFilms, savedMovies]
  );

  React.useEffect(() => {
    if (filteredMovies.length <= filteredRenderMovies.length) {
      setVisibilityButton("movies__button_visibility");
    }
  }, [filteredMovies, filteredRenderMovies]);

  function countInitCards() {
    const width = clientSizeScreen();
    if (width >= 1280) {
      return 12;
    }
    if (width >= 757) {
      return 8;
    }
    return 5;
  }

  function handleMoreRenderMovie() {
    const card = countInitCards();
    setRenderMovie(
      filteredMovies.slice(0, card + countClickMoreFilms * coefficientScreen())
    );
    setCountClickMoreFilms(countClickMoreFilms + 1);
  }

  function filterMoviesByKeyWord(moviesList) {
    const films = moviesList.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMovies(() => {
      localStorage.setItem("foundFilms", JSON.stringify(films));
      return films;
    });
  }

  function handleSearch(evt) {
    evt.preventDefault();

    if (searchValue === "") {
      setInputError("?????????? ???????????? ???????????????? ??????????");
      return;
    }

    setIsPreloaderOpen("preloader_active");
    setVisibleMovie("");
    if (pathname === "/movies") {
      if (!localStorage.getItem("moviesList")) {
        moviesApi
          .getMovies()
          .then((moviesList) => {
            localStorage.setItem("moviesList", JSON.stringify(moviesList));
            filterMoviesByKeyWord(JSON.parse(localStorage.moviesList));
            setIsPreloaderOpen("");
            setVisibleMovie("movies__visibility");
            setVisibilityButton("");
          })
          .catch((err) => {
            console.log(err);
          });
        return;
      }

      filterMoviesByKeyWord(
        localStorage.getItem("moviesList")
          ? JSON.parse(localStorage.moviesList)
          : []
      );
      setVisibleMovie("movies__visibility");
      setVisibilityButton("");
      setIsPreloaderOpen("");
    } else {
      setSavedMovies(
        savedMovies.filter((movie) => movie.nameRU.includes(searchValue))
      );
      setVisibleMovie("movies__visibility");
      setIsPreloaderOpen("");
    }
  }

  function addMovie(movie) {
    mainApi
      .addMovie(movie)
      .then((dataMovie) => {
        setSavedMovies([dataMovie.data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteMovie(movieId) {
    mainApi
      .removeMovie(movieId)
      .then(() => {
        const newMovies = savedMovies.filter((movie) => movie._id !== movieId);
        setSavedMovies(newMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header bgColor="white" textColor="black" isLogin={isLogin} />
      <SearchForm
        onSubmit={handleSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        inputError={inputError}
        setInputError={setInputError}
        isShortFilms={isShortFilms}
        setIsShortFilms={setIsShortFilms}
      />
      <Preloader isPreloaderOpen={isPreloaderOpen} />
      <MoviesCardList
        renderMovie={filteredRenderMovies}
        movies={filteredMovies}
        visibleMovie={visibleMovie}
        setVisibleMovie={setVisibleMovie}
        setRenderMovie={setRenderMovie}
        handleMoreRenderMovie={handleMoreRenderMovie}
        countInitCards={countInitCards}
        savedMovies={filteredSavedMovies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
        visibilityButton={visibilityButton}
        setVisibilityButton={setVisibilityButton}
      />
      <Footer />
    </>
  );
}

export default Movies;
