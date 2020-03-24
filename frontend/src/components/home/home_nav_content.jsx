import React from 'react';
import CreateGroup from './create_group';
import JoinGroup from './join_group';
import _ from 'lodash';

class HomeNavContent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      form: "create group"
    }
    
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(e) {
    e.preventDefault();
    if (this.state.form === "create group") {
      this.setState({ form: "join group" })
    } else if (this.state.form === "join group") {
      this.setState({ form: "create group" })
    }
  };

  render(){
    if (_.isEmpty(this.props.businesses)){
      return null;
    }

    const currentTab = (this.state.form === "join group") 
    ? <JoinGroup /> 
    : <CreateGroup 
      history={this.props.history}
      user={this.props.user}
      users={this.props.users} 
      selectedFoodRestrictions={this.props.selectedFoodRestrictions} 
      openModal={this.props.openModal} 
      createGroup={this.props.createGroup} 
      businesses={this.props.businesses}
    />

    return (
      <div className="home-nav-content">
        <div className="home-nav-content-top">
          <div className="get-started-container">
            <h3>GET STARTED</h3>
            <div className="get-started-bar"></div>
          </div>
          <div>
            "Get started by filtering results by neighborhood and costs"
          </div>
          <div className="home-button-container">
            <button id={this.state.form === "create group" ? `selected-button` : null }
              onClick={this.handleChangeForm}
            >Start a Group</button>
            <button id={this.state.form === "join group" ? `selected-button` : null }
              onClick={this.handleChangeForm}
            >Join a Group</button>
          </div>
        </div>
        {currentTab}
        <div className="home-nav-content-bottom">
          <h2> Logged in as, {this.props.user.email}</h2>
          <button className="logout-button" onClick={this.props.logout}>LOGOUT</button>
        </div>
      </div>
    )
  }
}

export default HomeNavContent;