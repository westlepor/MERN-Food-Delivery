import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
    console.log("index.js")
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
    //ReactDOM.render(<Root store={store} />, root);
});


