import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

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
    if (this.props.errors) {
      return (
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li className="error" key={`error=${i}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const user = Object.assign({}, this.state);

    this.props.login(user).then(
      () => {
        this.props.closeModal();
        this.props.history.push("/home");
      }
    )
  }

  demoLogin(e){
    e.preventDefault();
    e.stopPropagation();
    const demoUser = {
      email: "stuff@stuff.stuff",
      password: "password"
    }
    this.props.login(demoUser).then(
      () => {
        this.props.closeModal();
        this.props.history.push("/home");
      }
    )
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="x-mark" onClick={() => { this.props.closeModal();}}>
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
          <div className="form-bottom-demo">
            <button className="demo-user-button" onClick={this.demoLogin}>
              Demo User
            </button>
          </div>
          <input className="login-button" type="submit" value="LOG IN" />
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
