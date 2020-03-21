import "./home.css";
import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      form: "create group"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChange(type) {
    let that = this;
    return function(e) {
      if (type === "groupName") {
        that.setState({ groupName: e.target.value });
      } else if (type === "endTime") {
        that.setState({ endTime: e.target.value});
      }
    }
  };

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
              <h3>GET STARTED</h3>
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
                    </label>
                  </div>
                </div>
                <div className="starttime">
                  <div className="starttime-container">
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
                    <label> Monetary Restriction
                      {/* gotta work here */}
                      <div>$ $$ $$$ $$$$</div>
                      {/* gotta work here */}
                    </label>
                  </div>
                </div>
                <div className="food-restriction">
                  <div className="food-restriction-container">
                    <label className="group-label" htmlFor="food-restriction">
                      Food Restriction
                    </label>
                    <div className="food-restriction-modal">
                      <button>+ Add Food Restriction</button>
                    </div>
                  </div>
                </div>
                <div className="is-split">
                  <div className="is-split-container">
                    <label htmlFor="styled"> Cost Covered?
                      <div className="toggles">
                        <input type="checkbox" name="styled" id="styled"/>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="add-users">
                  <div className="add-users-container">
                    <label className="group-label" htmlFor="add-users">
                      Add Users
                    </label>
                    <div className="add-users-modal">
                      <button>+ Add Users</button>
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
                <h2> Logged in as, {this.props.users}</h2>
                <button className="logout-button" onClick={this.props.logout}>LOGOUT</button>
            </div>
          </div>
        </section>
        <section className="home-map-section">
          <div className="home-map-container">
            <iframe
              src='https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=false&zoomwheel=true&access_token=pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw#15/37.771/-122.436' />
          </div>
        </section>
      </div>
    );
  }};

export default Home;
