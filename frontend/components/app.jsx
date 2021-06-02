import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'

const App = () => (
  <div>
    <header>
      <h1>More Trails</h1>
      <GreetingContainer />
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </header>
  </div>
);

export default App;
