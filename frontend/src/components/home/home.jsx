import "./home.css";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Map from '../map/map'

class Home extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      form: "create group",
      groupName: "",
      startTime: "",
      endTime: "",
      users: [],
      selectedFoodRestrictions: this.props.selectedFoodRestrictions,
      monetaryRestriction: "",
      isSplit: true
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.moneySelect = this.moneySelect.bind(this);
    this.moneyHandle = this.moneyHandle.bind(this);
    this.foodRestrictionClick = this.foodRestrictionClick.bind(this);
  }

  handleChange(type) {
    let that = this;
    return function(e) {
      if (type === "groupName") {
        that.setState({ groupName: e.target.value });
      } else if (type === "endTime") {
        that.setState({ endTime: e.target.value});
      } else if (type === "monetary-restriction") {
        that.setState({ monetaryRestriction: e.target.value });
      } else if (type === "isSplit") {
        that.setState({ isSplit: e.target.value});
      }
    }
  };

  moneyHandle(e) {
    e.preventDefault();
    if (this.listBox.classList.contains("list-box-click")) {
      this.listBox.classList.remove("list-box-click")
    } else {
      this.listBox.classList.add("list-box-click")
    }
  };

  moneySelect(e) {
    this.setState({ monetaryRestriction: e.target.value });
  }

  handleChangeForm(e){
    e.preventDefault();
    if (this.state.form === "create group") {
      this.setState({ form: "join group"})
    } else if (this.state.form === "join group") {
      this.setState({ form: "create group"})
    }
  };
  
  componentDidMount(){
    this.props.fetchUsers();
  }
  
  foodRestrictionClick(e) {
    e.preventDefault();
    this.props.openModal("foodRestriction")
  }


  render() {
    return (
      <div className="home-page">
        <section className="home-nav-bar">
          <div className="home-search-section">
            <h1>⌘</h1>
            <div className="home-search-bar">
              <input type="search" placeholder="Find a place"/>
            </div>
          </div>
          <div className="home-nav-content">
            <div className="home-nav-content-top">
              <div className="get-started-container">
                <h3>GET STARTED</h3>
                <div className="get-started-bar"></div>
              </div>
              <div className="home-button-container">
                <button 
                  id={
                    this.state.form === "create group" ?
                      `selected-button`
                      :
                      null
                  }
                  onClick={this.handleChangeForm}
                >Start a Group</button>
                <button 
                  id={
                  this.state.form === "join group" ?
                    `selected-button`
                    :
                    null
                  }
                  onClick={this.handleChangeForm}
                >Join a Group</button> 
              </div>
            </div>
            {this.state.form === "create group" ? 
            <div className="create-group-form">
              <form>
                <div className="groupname">
                  <div className="groupname-container">
                    <label> Group Name
                      <input 
                        required
                        onChange={this.handleChange("groupName")}
                        className="input-field" 
                        type="text"
                        value={this.state.groupName}
                        placeholder="group name"
                      />
                      <span className="inputicon">
                        <FontAwesomeIcon icon={faUsers} color="#2c2c2c30" size="sm" />
                      </span>
                    </label>
                  </div>
                </div>
                <div className="add-users">
                  <div className="add-users-container">
                    <label className="group-label" htmlFor="add-users">
                      Add Users
                  </label>
                    <div className="add-users-modal">
                      <button onClick={this.foodRestrictionClick}>+ Add Users</button>
                    </div>
                  </div>
                </div>
                <div className="optional-divider">
                  <div className="get-started-bar"></div>
                  <h2>Optional</h2>
                  <div className="get-started-bar"></div>
                </div>
                <div className="create-group-form-row">
                  <div className="endtime">
                    <div className="endtime-container">
                      <label> End Time
                        <input 
                          onChange={this.handleChange("endTime")}
                          className="input-field"
                          type="time"
                          value={this.state.endTime}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="monetary-restriction">
                    <div className="monetary-restriction-container">
                        <div className="monetary-restriction-container">
                          <label className="onboarding-label" htmlFor="monetary-restriction">
                            Monetary Restriction
                          </label>
                          <div className="input-field-container">
                            <div className="drop-down">
                              <button className="drop-down-button" onClick={this.moneyHandle}>Select ▾ </button>
                              <div className="list-box" ref={el => this.listBox = el}>
                                <ul className="list-box-items">
                                  <li className="list-box-item">
                                    <label> $ </label>
                                    <input value="$" type="radio" onChange={this.moneySelect} checked={this.state.monetaryRestriction === "$"} />
                                  </li>
                                  <li className="list-box-item">
                                    <label> $$ </label>
                                    <input value="$$" type="radio" onChange={this.moneySelect} checked={this.state.monetaryRestriction === "$$"} />
                                  </li>
                                  <li className="list-box-item">
                                    <label> $$$ </label>
                                    <input value="$$$" type="radio" onChange={this.moneySelect} checked={this.state.monetaryRestriction === "$$$"} />
                                  </li>
                                  <li className="list-box-item">
                                    <label> $$$$ </label>
                                    <input value="$$$$" type="radio" onChange={this.moneySelect} checked={this.state.monetaryRestriction === "$$$$"} />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="create-group-form-row">
                  <div className="food-restriction">
                    <div className="food-restriction-container">
                      <label className="group-label" htmlFor="food-restriction">
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
                  <div className="is-split">
                    <div className="is-split-container">
                      <label> Cost Covered?</label>
                      <label htmlFor="styled">
                        <div className="switch">
                            <input type="checkbox" name="styled" id="styled" onChange={this.handleChange("isSplit")}/>
                            <div className="slider"></div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="submit-container">
                  <input className="submit-button" type="submit" value="Create Group"/>
                </div>
              </form>
            </div>
            : null}
            {this.state.form === "join group" ? 
              <div className="join-group-form">
                sup.
              </div>
            : null }
            <div className="home-nav-content-bottom">
                <h2> Logged in as, {this.props.user.email}</h2>
                <button className="logout-button" onClick={this.props.logout}>LOGOUT</button>
            </div>
          </div>
        </section>
        <section className="home-map-section">
          <div className="home-map-container">
            {/* <Map /> */}
            <iframe
              src='https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=false&zoomwheel=true&access_token=pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw#12.5/37.770/-122.448'>
            </iframe>  
          </div>
        </section>
      </div>
    );
  }};

export default Home;
