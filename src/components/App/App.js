import './App.css';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


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
          <Footer/>
        </Route>
        </Switch>
    </div>

  );
}

export default App;

