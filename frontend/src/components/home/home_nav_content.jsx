import React from 'react';
import CreateGroup from './create_group';
import JoinGroup from './join_group';
import _ from 'lodash';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

class HomeNavContent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      form: "create group"
    }
    
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(type) {
    return (e)=>{
      e.preventDefault();
      if (type === "create group") {
        this.setState({ form: "create group" })
      } else if (type === "join group") {
        this.setState({ form: "join group" })
      }
    }
  };

  render(){
    if (_.isEmpty(this.props.businesses)){
      return <div style={{ display: "flex", justifyContent: "center", width: "100%" }}><img src="loading2.gif" style={{ width: "auto", height: "300px",}}/></div>;;
    }

    const currentTab = (this.state.form === "join group") 
      ? <JoinGroup users={this.props.users} user={this.props.user} fetchUser={this.props.fetchUser}/> 
    : <CreateGroup 
      updateZoom={this.props.updateZoom}
      history={this.props.history}
      user={this.props.user}
      users={this.props.users} 
      selectedFoodRestrictions={this.props.selectedFoodRestrictions} 
      openModal={this.props.openModal} 
      createGroup={this.props.createGroup} 
      businesses={this.props.businesses}
      coordinates={this.props.coordinates}
    />

    const createBtId = (this.state.form === "create group") ? `selected-button` : `unselected-button`;
    const joinBtId = (this.state.form === "join group") ? `selected-button` : `unselected-button`;

    return (
      <div className="home-nav-content">
        <div className="home-nav-content-top">
          <div className="home-nav-content-top-container">
            <div className="home-nav-logo">
              <h1><img src="chicken_logo_3.png"/></h1>
            </div>
            <div className="home-button-container">
              <button id={joinBtId} onClick={this.handleChangeForm("join group")}> Join a Group </button>
              <button id={createBtId} onClick={this.handleChangeForm("create group")}> Start a Group </button>
            </div>

            <div className="home-nav-logo" onClick={()=>this.props.handleModal()}>
              <FontAwesomeIcon icon={faUser}
                color="white"
                size="sm"
              />
            </div>
          </div>
        </div>
        {currentTab}
      </div>
    )
  }
}

export default HomeNavContent;