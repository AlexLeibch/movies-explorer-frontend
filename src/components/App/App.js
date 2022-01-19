import React from "react";
import "./App.css";
import Header from "../Header/Header";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import mainApi from "../../utils/mainApi";
import CurrentUserContext from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const [registrationError, setRegistrationError] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [profileError, setProfileError] = React.useState(false);
  const [isEditProfile, setIsEditProfile] = React.useState(false);

  function isLoggedCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUser()
        .then((userInfo) => {
          if (userInfo) {
            setCurrentUser(userInfo.data);
            setIsLogin(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  React.useEffect(() => {
    isLoggedCheck();
  }, []);

  React.useEffect(() => {
    if (isLogin) {
      mainApi
        .getUser()
        .then((userInfo) => {
          if (userInfo) {
            setCurrentUser(userInfo.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogin]);

  const handleLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((data) => {
        if (data) {
          setIsLogin(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setLoginError(true);
        console.log(err);
      });
  };

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
          history.push("/signin");
        }
      })
      .catch((err) => {
        setRegistrationError(true);
        console.log(err);
      });
  }

  function handleLogout() {
    history.push("/");
    setIsLogin(false);
    localStorage.clear();
  }

  function editProfile(name, email) {
    mainApi
      .setUser(name, email)
      .then((info) => {
        setCurrentUser(info);
        setIsEditProfile(true);
        setTimeout(() => {
          setIsEditProfile(false);
        }, 3000);
      })
      .catch(() => {
        setProfileError(true);
      });
  }

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header bgColor="blue" textColor="white" isLogin={isLogin} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/movies"
            exact
            component={Movies}
            isLogin={isLogin}
            currentUser={currentUser}
          />
          <ProtectedRoute
            path="/saved-movies"
            exact
            component={Movies}
            isLogin={isLogin}
            currentUser={currentUser}
          />
          <ProtectedRoute
            path="/profile"
            exact
            component={Profile}
            handleLogout={handleLogout}
            editProfile={editProfile}
            isLogin={isLogin}
            currentUser={currentUser}
            isEditProfile={isEditProfile}
            profileError={profileError}
          />
          <Route exact path="/signin">
            <Login handleLogin={handleLogin} loginError={loginError} />
          </Route>
          <Route exact path="/signup">
            <Register
              handleRegister={handleRegister}
              registrationError={registrationError}
            />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
