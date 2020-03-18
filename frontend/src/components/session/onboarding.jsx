import React from 'react';
import './onboarding.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faVoicemail, faEnvelope, faUserAlt, faLock, faHome } from '@fortawesome/free-solid-svg-icons'

class Onboarding extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          username: "henry",
          email: "hkryucr@gmail.com",
          password: "",
          password2: "",
          zipcode:"",
          monetaryRestriction: "",
          foodRestriction: [],
          MM: "",
          DD: "",
          YYYY: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type){
        let that = this;
        return function(e){
            if (type === "username") {
              that.setState({ username: e.target.value });
            } else if (type === "email") {
              that.setState({ email: e.target.value });
            } else if (type === "password") {
              that.setState({ password: e.target.value });
            } else if (type === "password2") {
              that.setState({ password2: e.target.value });
            } else if (type === "zipcode") {
              that.setState({ zipcode: e.target.value });
            } else if (type === "monetary-restriction") {
              that.setState({ monetaryRestriction: e.target.value });
            } else if (type === "food-restriction") {
              that.setState({ foodRestriction: e.target.value });
            } else if (type === "MM") {
              that.setState({ mm: e.target.value });
            } else if (type === "DD") {
              that.setState({ DD: e.target.value });
            } else if (type === "YYYY") {
              that.setState({ YYYY: e.target.value });
            }
        }
    }

    render(){
        return (
          <div className="onboarding">
            this is onboarding
            <form>
              <div className="onboarding-title">
                <h1>CREATE ACCOUNT</h1>
              </div>
              <div className="onboarding-row">
                <div className="username">
                  <div className="username-container">
                    <label className="onboarding-label" htmlFor="username">
                      Username
                    </label>
                    <div className="input-field-container">
                      <input
                        required
                        minLength="2"
                        maxLength="15"
                        onChange={this.handleChange("username")}
                        className="input-field"
                        type="text"
                        value={this.state.username}
                        id="username"
                        placeholder="username"
                      />
                      <span className="input-icon">
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          color="#2c2c2c30"
                          size="sm"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="email">
                  <div className="email-container">
                    <label className="onboarding-label" htmlFor="email">
                      Email
                    </label>
                    <div className="input-field-container">
                      <input
                        required
                        onChange={this.handleChange("email")}
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
                </div>
              </div>
              <div className="onboarding-row">
                <div className="password">
                  <div className="password-container">
                    <label className="onboarding-label" htmlFor="password">
                      Password
                    </label>
                    <div className="input-field-container">
                      <input
                        onChange={this.handleChange("password")}
                        className="input-field"
                        type="password"
                        id="password"
                        placeholder="password"
                      />
                      <span className="input-icon">
                        <FontAwesomeIcon
                          icon={faLock}
                          color="#2c2c2c30"
                          size="sm"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="password-confirm">
                  <div className="password-confirm-container">
                    <label className="onboarding-label" htmlFor="password2">
                      Confirm Password
                    </label>
                    <div className="input-field-container">
                      <input
                        onChange={this.handleChange("password2")}
                        className="input-field"
                        type="password"
                        id="password2"
                        placeholder="password"
                      />
                      <span className="input-icon">
                        <FontAwesomeIcon
                          icon={faLock}
                          color="#2c2c2c30"
                          size="sm"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="onboarding-row">
                <div className="zipcode">
                  <div className="zipcode-container">
                    <label className="onboarding-label" htmlFor="zipcode">
                      Zipcode
                    </label>
                    <div className="input-field-container">
                      <input
                        onChange={this.handleChange("zipcode")}
                        className="input-field"
                        type="text"
                        id="zipcode"
                        placeholder="Zipcode"
                      />
                      <span className="input-icon">
                        <FontAwesomeIcon
                          icon={faHome}
                          color="#2c2c2c30"
                          size="sm"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="monetary-restriction">
                  <div className="monetary-restriction-container">
                    <label
                      className="onboarding-label"
                      htmlFor="monetary-restriction"
                    >
                      Monetary Restriction
                    </label>
                    <div className="input-field-container">
                      <div className="drop-down">
                        <button className="drop-down-button">Select</button>
                        <div className="list-box">
                          {/* <ul>
                            <li>$</li>
                            <li>$$</li>
                            <li>$$$</li>
                            <li>$$$$</li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="onboarding-break">
                <hr className="onboarding-hr" />
                <div> Optional </div>
                <hr className="onboarding-hr" />
              </div>

              <div className="onboarding-row">
                <div className="food-restriction">
                  <div className="food-restriction-container">
                    <label
                      className="onboarding-label"
                      htmlFor="food-restriction"
                    >
                      Food Restriction
                    </label>
                    <div className="food-restriction-modal">
                      <button>+ Add Food Restriction</button>
                    </div>
                  </div>
                </div>
                <div className="birthday">
                  <div className="birthday-container">
                    <legend
                      className="onboarding-legend"
                      htmlFor="birthday"
                    ></legend>
                    Birthday
                    <div className="input-field-container">
                      <input
                        maxLength="2"
                        minLength="2"
                        onChange={this.handleChange("MM")}
                        className="birthday-input-field"
                        type="text"
                        id="MM"
                        placeholder="MM"
                      />
                      <input
                        maxLength="2"
                        minLength="2"
                        onChange={this.handleChange("DD")}
                        className="birthday-input-field"
                        type="text"
                        id="DD"
                        placeholder="DD"
                      />
                      <input
                        onChange={this.handleChange("YYYY")}
                        className="birthday-input-field"
                        maxLength="4"
                        minLength="4"
                        type="text"
                        id="YYYY"
                        placeholder="YYYY"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default Onboarding;