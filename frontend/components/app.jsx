import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>More Trails</h1>
      <GreetingContainer />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </header>
  </div>
);

export default App;
