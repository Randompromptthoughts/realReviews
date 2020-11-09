import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Reviews from './Components/Reviews/Reviews';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import Post from './Components/Post/Post';

export default (
  <Switch>
    <Route exact path='/' component={Auth} />
    <Route path='/reviews' component={Reviews} />
    <Route path='/about' component={About} />  {/*functional component*/}
    <Route path='/profile' component={Profile} />
  </Switch>
);