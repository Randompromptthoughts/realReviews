import React from 'react';
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Reviews from './Components/Reviews/Reviews';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem("token") ? <Component {...props}/> : <Redirect to='/login'></Redirect>
  )}/>
)

export default (
  <Switch>
    <Redirect exact from="/" to="/reviews"/>
    <Route exact path='/login' component={Auth} />
    <PrivateRoute path='/reviews' component={Reviews} />
    <PrivateRoute path='/about' component={About} />  {/*functional component*/}
    <PrivateRoute path='/profile' component={Profile} />
  </Switch>
);