import "./nav.css";
import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite, faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

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

          {/* <h1><Link to="/"><FontAwesomeIcon icon={faFeatherAlt} color="white" size="1x" /></Link></h1> */}
          <h1><Link to="/"><img src="chicken_logo_3.png" style={{ width: "2rem", height:"2.2rem"}}/></Link></h1>
          <h2><Link to="/">chicken tinder</Link></h2>

        </div>
        <div className="header-button">
          <button onClick={() => this.props.openModal("login")}>LOG IN</button>
        </div>
      </section>
    );
  }
}

export default Nav;
