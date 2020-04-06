import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./login.css";
import _ from 'lodash';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderErrors() {
    if (!_.isEmpty(this.props.errors)) {
      return (
        <ul className="errors">
          {Object.values(this.props.errors).map((error, idx) => (
            <li className="error" key={idx}>
              {error}
            </li>
          ))}
        </ul>
      )
    } else {
      return null;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const user = Object.assign({}, this.state);
    this.props.clearUpData();
    this.props.login(user).then(
      (res) => {
        if (res.type === "RECEIVE_SESSION_ERRORS") {
          return null;
        }
        this.props.closeModal();
        this.props.history.push("/home");
      }
    )
  }

  demoLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    const demoUser = {
      email: "demouser@demo.com",
      password: "password"
    }

    const speed = 100;

    if (this.state.email !== demoUser.email) {
      const inputEmail = setInterval(() => {
        if (this.state.email !== demoUser.email) {
          const temp = demoUser.email.slice(0, this.state.email.length + 1);
          this.setState({ email: temp });
        } else {
          clearInterval(inputEmail);
          animatePassword();
        }
      }, speed);
    }

    const animatePassword = () => {

      if (this.state.password !== demoUser.password) {
        const inputPassword = setInterval(() => {
          if (this.state.password !== demoUser.password) {
            const temp = demoUser.password.slice(0, this.state.password.length + 1);
            this.setState({ password: temp });
          } else {
            clearInterval(inputPassword);
            this.props.login(demoUser).then(
              () => {
                this.props.closeModal();
              }
            )
          }
        }, speed);
      }
    }
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="x-mark" onClick={() => { this.props.closeModal(); }}>
          <FontAwesomeIcon icon={faTimes} color="#2c2c2c30" size="1x" />
        </div>
        <h1 className="form-title">LOG IN</h1>
        <div className="form-top">
          <div className="email">
            <div className="input-field-container">
              <input
                required
                onChange={this.update("email")}
                className="input-field"
                type="email"
                value={this.state.email}
                id="email"
                placeholder="email"
              />
              <span className="input-icon">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#2c2c2c30"
                  size="sm"
                />
              </span>
            </div>
          </div>

          <div className="password">
            <div className="input-field-container">
              <input
                onChange={this.update("password")}
                className="input-field"
                type="password"
                id="password"
                placeholder="password"
                value={this.state.password}
              />
              <span className="input-icon">
                <FontAwesomeIcon icon={faLock} color="#2c2c2c30" size="sm" />
              </span>
            </div>
          </div>
        </div>

        {this.renderErrors()}
        <div className="form-bottom">
          <br />
          <input className="login-button" type="submit" value="LOG IN" />
          <div className="form-bottom-demo">
            <button className="demo-user-button" onClick={this.demoLogin}>
              Demo User
            </button>
          </div>
          <div className="instead">
            <br />
            <p className="link-form-label">Not a registered user? </p>
            <Link className="link-form" onClick={this.props.closeModal} to="/onboarding">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
