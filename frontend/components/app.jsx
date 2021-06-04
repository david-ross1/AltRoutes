import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav/nav_container';
import Footer from '../components/nav/footer';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <GreetingContainer />
    </header>
    <Footer />
  </div>
);

export default App;
