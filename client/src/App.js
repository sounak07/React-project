import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuthState } from './store/actions/authActions';

import './App.css';

import NavBar from './components/layouts/navbar';
import Landing from './components/layouts/landing';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Dashboard from './components/profileDash/dashboard';
import createProfile from './components/createProfile/createprofile';
import editProfile from './components/editProfile/editProfile';

class App extends Component {
  componentDidMount() {
    this.props.checkAuthState();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createprofile" component={createProfile} />
            <Route exact path="/editprofile" component={editProfile} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { checkAuthState })(App);
