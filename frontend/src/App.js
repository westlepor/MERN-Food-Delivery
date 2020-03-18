import React from 'react';
import './app.css';
import Nav from './components/nav/nav';

import SplashPage from './components/main/main';
import Signup from './components/session/signup';
import NavContainer from './components/nav/nav_container';
import { Route } from 'react-router-dom';


import Onboarding from "./components/session/onboarding";


const App = () => {
  return (
    <div className="app">
      { <Nav />}
      <SplashPage /> */}
      {/* <Route to="/" component={SplashPage} /> */}
      {/* <Route to="/" component={NavContainer} /> */}
      {/* <Route to="/" component={SignupComponent} />
      <Route to="/" component={Main} /> */}
      {/* <Route to="/signin" component={Session} />
      <Route to="/signup" component={Session} /> */}
      <Onboarding/>
    </div>
  );
}

export default App;
