import React from 'react';
import './app.css';
import Signup from './components/session/signup';

const App = () => {
  return (
    <div className="app">
      This is app
      {/* <Nav /> */}
      {/* <Route to="/" component={Main} />
      <Route to="/" component={SignupComponent} />
      <Route to="/" component={Main} /> */}
      {/* <Route to="/signin" component={Session} />
      <Route to="/signup" component={Session} /> */}
      <Signup/>
    </div>
  );
}

export default App;
