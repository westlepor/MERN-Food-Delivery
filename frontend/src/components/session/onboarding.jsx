import React from "react";
import "./onboarding.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserAlt, faLock, faHome } from "@fortawesome/free-solid-svg-icons";
import _ from 'lodash';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      zipcode: "",
      monetaryRestriction: "",
      selectedFoodRestrictions: this.props.selectedFoodRestrictions,
      MM: "",
      DD: "",
      YYYY: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.moneyHandle = this.moneyHandle.bind(this);
    this.moneySelect = this.moneySelect.bind(this);
    this.foodRestrictionClick = this.foodRestrictionClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    let that = this;
    return function(e) {
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
      } else if (type === "MM") {
        that.setState({ MM: e.target.value });
      } else if (type === "DD") {
        that.setState({ DD: e.target.value });
      } else if (type === "YYYY") {
        that.setState({ YYYY: e.target.value });
      }
    };
  }

  moneyHandle(e){
    e.preventDefault();
    if (this.listBox.classList.contains("list-box-click")){
      this.listBox.classList.remove("list-box-click")
    } else {
      this.listBox.classList.add("list-box-click")
    }
  }
  
  moneySelect(e){
    this.setState({ monetaryRestriction: e.target.value });
  }

  foodRestrictionClick(e){
    e.preventDefault();
    this.props.openModal("foodRestriction")
  }

  handleSubmit(e){
    e.preventDefault();
    const birthday = new Date(parseInt(this.state.YYYY), parseInt(this.state.MM) - 1, parseInt(this.state.DD))

    let selectedFoodRestrictions = null;
    
    if (!_.isEmpty(this.props.foodRestrictions)){
      selectedFoodRestrictions = this.state.selectedFoodRestrictions.map((selectedRestriction)=>{
        let curEl = Object.values(this.props.foodRestrictions).filter(restriction => restriction.restriction === selectedRestriction)        
        return curEl[0]._id
      })
    }

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      zipcode: this.state.zipcode,
      monetaryRestriction: this.state.monetaryRestriction,
      selectedFoodRestrictions: selectedFoodRestrictions,
      birthday: birthday
    }

    this.props.signup(newUser);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedFoodRestrictions !== prevProps.selectedFoodRestrictions) {
      this.setState({ selectedFoodRestrictions: this.props.selectedFoodRestrictions });
    }
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

  render() {
    return (
      <div className="onboarding">
        <form onSubmit={this.handleSubmit}>
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
                  <input required minLength="2" maxLength="15" onChange={this.handleChange("username")} className="input-field" type="text" value={this.state.username} placeholder="username"/>
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faUserAlt} color="#2c2c2c30" size="sm"/>
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
                  <input required onChange={this.handleChange("email")} className="input-field" type="email" value={this.state.email} placeholder="email"/>
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faEnvelope} color="#2c2c2c30" size="sm"/>
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
                  <input required minLength="6" onChange={this.handleChange("password")} className="input-field" type="password" placeholder="password" />
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faLock} color="#2c2c2c30" size="sm"/>
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
                  <input required minLength="6" onChange={this.handleChange("password2")} className="input-field" type="password" placeholder="password"/>
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faLock} color="#2c2c2c30" size="sm"/>
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
                  <input required minLength="5" onChange={this.handleChange("zipcode")} className="input-field" type="text" placeholder="Zipcode"/>
                  <span className="input-icon">
                    <FontAwesomeIcon icon={faHome} color="#2c2c2c30" size="sm"/>
                  </span>
                </div>
              </div>
            </div>
            <div className="monetary-restriction">
              <div className="monetary-restriction-container">
                <label className="onboarding-label" htmlFor="monetary-restriction">
                  Monetary Restriction
                </label>
                <div className="input-field-container">
                  <div className="drop-down">
                    <button className="drop-down-button" onClick={this.moneyHandle}>Select ▾ </button>
                    <div className="list-box" ref={el => this.listBox = el }>
                      <ul className="list-box-items">
                        <li className="list-box-item">
                          <label> $
                          </label> 
                          <input value="$" type="radio" onChange={this.moneySelect} checked={this.state.monetaryRestriction === "$"}/>
                        </li>
                        <li className="list-box-item">
                          <label> $$
                          </label> 
                          <input value="$$" type="radio" onChange={this.moneySelect} checked={this.state.monetaryRestriction === "$$"}/>
                        </li>
                        <li className="list-box-item">
                          <label> $$$
                          </label> 
                          <input value="$$$" type="radio" onChange={this.moneySelect} checked={this.state.monetaryRestriction === "$$$"}/>
                        </li>
                        <li className="list-box-item">
                          <label> $$$$
                          </label> 
                          <input value="$$$$" type="radio" onChange={this.moneySelect} checked={this.state.monetaryRestriction === "$$$$"}/>
                        </li>
                      </ul>
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
                <label className="onboarding-label" htmlFor="food-restriction">
                  Food Restriction
                </label>
                <div className="food-restriction-modal">
                  <button onClick={this.foodRestrictionClick}>+ Add Food Restriction</button>
                </div>
                <div className="food-restriction-items" onClick={this.foodRestrictionClick}>
                  {(this.state.selectedFoodRestrictions === null ? null : this.state.selectedFoodRestrictions.map((selectedFoodRestriction, idx) =>
                    <div className="food-restriction-item" key={idx}>
                      {selectedFoodRestriction}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="birthday">
              <div className="birthday-container">
                <legend className="onboarding-legend" htmlFor="birthday"></legend>
                Birthday
                <div className="input-field-container">
                  <input maxLength="2" minLength="2" onChange={this.handleChange("MM")} className="birthday-input-field" type="text" id="MM" placeholder="MM"/>
                  <input maxLength="2" minLength="2" onChange={this.handleChange("DD")} className="birthday-input-field" type="text" id="DD" placeholder="DD"/>
                  <input onChange={this.handleChange("YYYY")} className="birthday-input-field" maxLength="4" minLength="4" type="text" id="YYYY" placeholder="YYYY"/>
                </div>
              </div>
            </div>
          </div>
          <div className="onboarding-submit">
            {this.renderErrors()}
            <input type="submit" className="onboarding-submit-button" value="Continue"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Onboarding;
