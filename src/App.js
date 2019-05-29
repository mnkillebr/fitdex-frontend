import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Containers/Main';
import Profile from './Containers/Profile';
import Stats from './Containers/Stats';
import History from './Containers/History';
import Store from './Containers/Store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/history" component={History} />
          <Route path="/stats" component={Stats} />
          <Route path="/store" component={Store} />
          <Route path="/" component={Main} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
