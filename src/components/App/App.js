import './App.css';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


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
          <Footer/>
          
        </Route>
        </Switch>
    </div>

  );
}

export default App;

