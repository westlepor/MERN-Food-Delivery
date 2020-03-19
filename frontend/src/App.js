import React from 'react';
import './app.css';
import NavContainer from './components/nav/nav_container';
import SplashPage from './components/main/main';
import Onboarding from './components/session/onboarding';
import Modal from './components/modal/modal'
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Modal />
      <Route exact to="/" component={SplashPage} />
      <Route exact to="/" component={NavContainer} />
      <Route exact to="/onboarding" component={Onboarding}/>
      {/* <Route exact to="/" component={Main} /> */}
      {/* <Route to="/signin" component={Session} />
      <Route to="/signup" component={Session} /> */}
      {/* <Onboarding /> */}
    </div>
  );
}

export default App;
