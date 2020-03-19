import React from "react";
import "./gather.css";
import NavContainer from "./components/nav/nav_container";
import SplashPage from "./components/main/main";
import Onboarding from "./components/session/onboarding";
import Modal from "./components/modal/modal";
import Swipe from "./components/swipe/swipe";
import { Route } from "react-router-dom";

const Gather = () => {
  return (
    <div className="gather">
      <Route
        exact
        path="/"
        render={props => (
          <div className="splash-page">
            <Modal />
            <NavContainer />
            <SplashPage />
          </div>
        )}
      />

      <Route
        exact
        path="/onboarding"
        render={props => (
          <div className="register">
            <Modal />
            <NavContainer />
            <Onboarding />
          </div>
        )}
      />

      <Route exact path="/swipe" component={Swipe} />
    </div>
  );
};

export default Gather;
