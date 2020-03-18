import React from 'react';
import './app.css';

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
      <Signup/>
    </div>
  );
}

export default App;
