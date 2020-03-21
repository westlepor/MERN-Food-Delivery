import React from "react";
import "./gather.css";
import '../src/components/main/main.css';
import HomeContainer from './components/home/home_container'
// import Swipe from "./components/swipe/swipe";
import SplashPage from "./components/main/splash_page";
import { AuthRoute, ProtectedRoute } from "./util/route_util"; 
import Register from './components/session/register';
import SwipeContainer from './components/swipe/swipe_container';
// TO BE DELETED
import { Route } from 'react-router-dom';

const Gather = () => {
  return (
    <div className="gather">
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/onboarding" component={Register} />
      <ProtectedRoute exact path="/home" component={HomeContainer}/>
      {/* <ProtectedRoute exact path="/swipe" component={Swipe} /> */}
      <Route path="/swipe" component={SwipeContainer} />
    </div>
  );
};

export default Gather;
