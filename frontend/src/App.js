import React from 'react';
import './app.css';
import SplashPage from "./components/main/main"
import Nav from "./components/nav/nav"
// import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <SplashPage />
      {/* <Route to="/" component={SplashPage} /> */}
      {/* <Route to="/" component={SignupComponent} />
      <Route to="/" component={Main} /> */}
      {/* <Route to="/signin" component={Session} />
      <Route to="/signup" component={Session} /> */}
    </div>
  );
}

export default App;


/*
1 nav+splash page (Chris)
1 modal (Arno)
1 signup page (hen)
1 redux (neil)

*/