import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.props.clearErrors();
    // this.fillDemo = this.fillDemo.bind(this);
    // this.addTeam = this.addTeam.bind(this);
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
      );
    }
  }

  // fillDemo(e) {
  //     e.preventDefault();
  //     this.props.loginForm({ email: 'mca@beastieboys.com', password: 'password', team_id: 1 })
  //         .then(() => (this.props.closeModal())).then(() => this.props.history.push('/home'))
  // }

  // addDemo() {

  //     return (
  //         <input className='login-signup-button' onClick={this.fillDemo} value='DEMO LOGIN' />
  //     )

  // }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const user = Object.assign({}, this.state);

    this.props.login(user).then(
      () => {
        this.props.closeModal();
        this.props.history.push("/home");
      }
      // () => this.renderErrors()
    );
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">LOG IN</h1>
        <div className="form-top">
          <div className="email">
            {/* <label className="login-label" htmlFor="email">
                            Email
                        </label> */}
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
            {/* <label className="login-label" htmlFor="password">
                        Password
                    </label> */}
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
          <input className="login-button" type="submit" value="LOG IN" />
          <div className="instead">
            <br />
            <p className="link-form-label">Not a registered user? </p>
            <Link className="link-form" onClick={this.linkModal} to="/">
              Sign up
            </Link>
          </div>
          {/* {this.addDemo()} */}
          {/* {this.addLink()} */}
        </div>
      </form>
    );
  }
}

export default LoginForm;
