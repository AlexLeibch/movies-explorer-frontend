import React from 'react'
import './App.css';
import Header from '../Header/Header';
import {Route, Switch, useHistory} from 'react-router-dom'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import mainApi from '../../utils/mainApi'


function App() {
  const history = useHistory();
  const [registrationError, setRegistrationError] = React.useState(false)
  const [loginError, setLoginError] = React.useState(false)
  const [isLogin, setIsLogin] = React.useState(false)

  const handleLogin = (email, password) => {
    mainApi.login(email, password)
    .then((data) => {
      if(data) {
        setIsLogin(true)
        history.push('/movies')
      }
    })
    .catch((err) => {
      setIsLogin(false);
      console.log(err)
    })
  };

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
    .then(data => {
      if(data) {
        handleLogin(email, password)
        history.push('/signin')
      }
    }).catch(() => {
      setRegistrationError(true)
    })
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header bgColor="blue" textColor="white" isLogin={isLogin}/>
          <Main/>
          <Footer/>
        </Route>
        <Route exact path="/movies">
          <Header bgColor="white" textColor="black" isLogin={isLogin}/>
            <Movies/>
          <Footer/>
        </Route>
        <Route exact path="/saved-movies">
          <Header bgColor="white" textColor="black" isLogin={isLogin}/>
          <Movies/>
        </Route>
        <Route exact path="/profile">
          <Header bgColor="white" textColor="black" isLogin={isLogin}/>
          <Profile/> 
        </Route>
        <Route exact path="/signin">
          <Login handleLogin={handleLogin} loginError={loginError}/>
        </Route>
        <Route exact path="/signup">
          <Register handleRegister={handleRegister} registrationError={registrationError}/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
        </Switch>
    </div>

  );
}

export default App;

