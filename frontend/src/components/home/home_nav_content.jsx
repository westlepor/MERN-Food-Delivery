import CreateGroup from './create_group';
import JoinGroup from './join_group';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import _ from 'lodash';

class HomeNavContent extends React.Component{
  constructor(props) {
    super(props);    
  }

  render(){
    const currentTab =
      this.props.form === "create group" ? (
        <CreateGroup
          clearUpData={this.props.clearUpData}
          updateZoom={this.props.updateZoom}
          history={this.props.history}
          user={this.props.user}
          users={this.props.users}
          selectedFoodRestrictions={this.props.selectedFoodRestrictions}
          createGroup={this.props.createGroup}
          businesses={this.props.businesses}
          coordinates={this.props.coordinates}
          errors={this.props.errors}
        />
      ) : (
        <JoinGroup
          users={this.props.users}
          user={this.props.user}
          fetchUser={this.props.fetchUser}
          fetchGroup={this.props.fetchGroup}
          clearGroups={this.props.clearGroups}
          clearUpData={this.props.clearUpData}
        />
      );

    const createBtId = (this.props.form === "create group") ? `selected-button` : `unselected-button`;
    const joinBtId = (this.props.form === "join group") ? `selected-button` : `unselected-button`;

    return (
      <div className="home-nav-content">
        <div className="home-nav-content-top">
          <div className="home-nav-content-top-container">
            <div className="home-nav-logo">
              <h1><img src="chicken_logo_3.png"/></h1>
            </div>
            <div className="home-button-container">
              <button id={createBtId} onClick={this.props.handleChangeForm("create group")}> Start a Group </button>
              <button id={joinBtId} onClick={this.props.handleChangeForm("join group")}> My Groups </button>
            </div>
            <div className="home-nav-logo" onClick={()=>this.props.handleModal()}>
              <FontAwesomeIcon icon={faInfo}
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