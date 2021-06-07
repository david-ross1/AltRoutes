import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Redirect, Link, Switch } from "react-router-dom";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav/nav_container";
import Footer from "../components/nav/footer";
import TrailShowContainer from "../components/trails/trails_show_container";
import MainPageContainer from "./main_page/main_page_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/" component={MainPageContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <GreetingContainer /> */}

      <Route path="/trails/:trailId" component={TrailShowContainer} />
      {/* <Redirect to="/">/</Redirect> */}
      {/* <Route
        render={() => {
          return <Redirect to="/login" />;
        }}
      /> */}
    </Switch>
    <Footer />
  </div>
);

export default App;



// import React from 'react'
// import { Redirect, Switch, withRouter } from 'react-router-dom'
// import { AuthRoute, ProtectedRoute } from '../util/route_util'
// import Splash from './splash/splash'
// import NavbarContainer from './navbar/navbar_container'
// import AnimeIndexContainer from './anime/anime_index_container'
// import AnimeShowContainer from './anime/anime_show_container'
// import EpisodeShowContainer from './anime/episode_show_container'
// import BookmarkedAnimeContainer from './bookmarked/bookmarked_anime_container'
// import Footer from './footer/footer'

// const App = (props) => {
//     let navbar = <NavbarContainer />
//     if (props.location.pathname === '/login' || props.location.pathname === '/signup') {
//         navbar = ""
//     }
//     let footer = <Footer />
//     if (props.location.pathname === '/login' || props.location.pathname === '/signup') {
//         footer = ""
//     }
//     return (
//         <main>
//             {navbar} 
//             <Switch>
//                 <ProtectedRoute path="/animes/:animeId" component={AnimeShowContainer} />
//                 <ProtectedRoute path="/episodes/:episodeId" component={EpisodeShowContainer} />
//                 <ProtectedRoute path="/bookmarked_animes/" component={BookmarkedAnimeContainer} />
//                 <AuthRoute path="/login" component={Splash} />
//                 <AuthRoute path="/signup" component={Splash} />
//                 <ProtectedRoute exact path='/' component={AnimeIndexContainer} />
//                 <Redirect to='/'>/</Redirect>
//             </Switch>
//             {footer}
//         </main>
//     )
// };

// export default withRouter(App);