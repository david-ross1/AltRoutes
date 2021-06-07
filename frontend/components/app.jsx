import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link } from "react-router-dom";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav/nav_container";
import Footer from "../components/nav/footer";

import TrailShowContainer from "../components/trails/trails_show_container";
import MainPageContainer from "./main_page/main_page_container";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <div>
      <Route exact path="/" component={MainPageContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <GreetingContainer />

       {/* <Route
        path="/trails/:trailId"
        render={(props) => (
          <TrailShowContainer key={props.match.params.trailId} {...props} />
        )}
      />  */}

     <Route path='/trails/:trailId' component={TrailShowContainer} /> 



    </div>

    <Footer />
  </div>
);

export default App;
