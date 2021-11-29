import './App.css';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Form from '../Form/Form';
import Register from '../Register/Register';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header bgColor="blue" textColor="white"/>
          <Main/>
          <Footer/>
        </Route>
        <Route exact path="/movies">
          <Header bgColor="white" textColor="black"/>
            <Movies/>
          <Footer/>
        </Route>
        <Route exact path="/saved-movies">
          <Header bgColor="white" textColor="black"/>
          <Movies/>
        </Route>
        <Route exact path="/profile">
          <Header bgColor="white" textColor="black"/>
          <Profile/> 
        </Route>
        <Route exact path="/signin">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Register/>
        </Route>
        </Switch>
    </div>

  );
}

export default App;

