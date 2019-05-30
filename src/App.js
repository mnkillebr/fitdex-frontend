import React, {Component} from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Containers/Main';
import Profile from './Containers/Profile';
import Stats from './Containers/Stats';
import History from './Containers/History';
import Store from './Containers/Store';
import './App.css';

class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/')
    .then(res=>res.json())
    .then(users=>{
      this.setState({
        user: users[0]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
      <main>
        <Switch>
          <Route path="/profile" render={(routerProps)=><Profile currentUser={this.state.user} />} />
          <Route path="/history" render={(routerProps)=><History currentUser={this.state.user} />} />
          <Route path="/stats" render={(routerProps)=><Stats currentUser={this.state.user} />} />
          <Route path="/store" render={(routerProps)=><Store currentUser={this.state.user} />} />
          <Route path="/" component={Main} />
        </Switch>
      </main>
      </div>
    )
  }
}

export default withRouter(App);
