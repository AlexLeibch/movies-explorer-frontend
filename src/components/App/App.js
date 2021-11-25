import './App.css';
import Header from '../Header/Header';
import {Route, Switch} from 'react-router-dom'
import Main from '../Main/Main';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header bgColor="blue" textColor="white"/>
          <Main/>
        </Route>
        <Route exact to="/movies">
          <Header bgColor="white" textColor="black"/>
        </Route>
        </Switch>
    </div>

  );
}

export default App;

