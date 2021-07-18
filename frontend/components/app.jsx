import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./nav/nav_container";
import Footer from "../components/nav/footer";
import TrailShowContainer from "../components/trails/trails_show_container";
import MainPageContainer from "./main_page/main_page_container";
import ParkShowContainer from "./parks/parks_show_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/trails/:trailId" component={TrailShowContainer} />
      <Route exact path="/" component={MainPageContainer} />
      <Route exact path="/parks/:parkId" component={ParkShowContainer} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default App;
