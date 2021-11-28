import './App.css';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header bgColor="blue" textColor="white"/>
          <Main/>
          <Footer/>
        </Route>
        <Route exact to="/movies">
          <Header bgColor="white" textColor="black"/>
          <SearchForm/>
          <MoviesCardList/>
          <Footer/>
        </Route>
        </Switch>
    </div>

  );
}

export default App;

