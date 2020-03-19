import React from 'react';
import './app.css';
// import NavContainer from './components/nav/nav';

import SplashPage from './components/main/main';
import Onboarding from "./components/session/onboarding";
import NavContainer from './components/nav/nav_container';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <NavContainer />
      <SplashPage />
      {/* <Route to="/" component={SplashPage} /> */}
      {/* <Route to="/" component={NavContainer} /> */}
      {/* <Route to="/" component={SignupComponent} />
      <Route to="/" component={Main} /> */}
      {/* <Route to="/signin" component={Session} />
      <Route to="/signup" component={Session} /> */}
      {/* <Onboarding /> */}
    </div>
  );
}

export default App;
