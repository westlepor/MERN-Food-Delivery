import React from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons'

class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "henry",
            email: "hkryucr@gmail.com"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type){
        let that = this;
        return function(e){
            if(type === "username"){
                that.setState({ username: e.target.value })
            } else if (type === "email"){
                that.setState({ email: e.target.value })
            }
        }
    }

    render(){
        return (
          <div className="signup">
            this is signup
            <form>
              <div className="signup-title">
                <h1>CREATE ACCOUNT</h1>
              </div>
              <div className="signup-row">
                <div className="username">
                  <div className="username-container">
                    <label className="signup-label" htmlFor="username">
                      Username
                    </label>
                    <div className="input-field-container">
                      <input
                        onChange={this.handleChange("username")}
                        className="input-field"
                        type="text"
                        value={this.state.username}
                      />
                      <span> </span>
                    </div>
                  </div>
                </div>
                <div className="email">
                  <div className="email-container">
                    <label className="signup-label" htmlFor="email">
                      Email
                    </label>
                    <div className="input-field-container">
                      <input
                        onChange={this.handleChange("email")}
                        className="input-field"
                        type="text"
                        value={this.state.email}
                      />
                      <span>
                        <FontAwesomeIcon icon={ faFish } color="gray" size="2x"/>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="signup-row">
                <div className="password">
                  <div className="password-container">
                    <label className="signup-label" htmlFor="username">
                      Password
                    </label>
                    <div className="input-field-container">
                      <input
                        onChange={this.handleChange("username")}
                        className="input-field"
                        type="password"
                      />
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="password-confirm">
                  <div className="password-confirm-container">
                    <label className="signup-label" htmlFor="username">
                      Confirm Password
                    </label>
                    <div className="input-field-container">
                      <input
                        onChange={this.handleChange("username")}
                        className="input-field"
                        type="password"
                      />
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="signup-row"></div>
              <div className="zipcode"></div>
              <div className="food-restriction"></div>
              <div className="monetary-restriction"></div>
              <div className="birthday"></div>
            </form>
          </div>
        );
    }
}

export default Signup;