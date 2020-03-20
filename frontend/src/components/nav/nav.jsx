import "./nav.css";
import React from "react";
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <section className="header-container">
        <div className="header-logo">
          <h1><Link to="/">⌘</Link></h1>
          <h2><Link to="/">gather</Link></h2>
        </div>
        <div className="header-button">
          <button onClick={() => this.props.openModal("login")}>LOG IN</button>
        </div>
      </section>
    );
  }
}

export default Nav;
