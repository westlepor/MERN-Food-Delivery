import "./nav.css";
import React from "react";

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
          <h1>⌘</h1>
          <h2>gather</h2>
        </div>
        <div className="header-button">
          <button onClick={() => this.props.openModal("login")}>LOG IN</button>
        </div>
      </section>
    );
  }
}

export default Nav;
