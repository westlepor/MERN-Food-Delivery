import React from 'react';
import HomeMap from './home_map';
import HomeNavContent from './home_nav_content';
import HomeModal from './home_modal';
import "./home.css";
import _ from 'lodash';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: true
    }
  }

  componentDidMount(){
    this.props.fetchUsers()
  }
  
  render() {
    if (_.isEmpty(this.props.users) ){
      return null;
    }

    return (
      <div className="home-page">
        <section className="home-nav-bar">
          <section className="home-nav-bar-container">
            <HomeNavContent 
              history={this.props.history}
              user={this.props.user} 
              businesses={this.props.businesses} 
              users={this.props.users} 
              selectedFoodRestrictions={this.props.selectedFoodRestrictions} 
              openModal={this.props.openModal} 
              createGroup={this.props.createGroup}
              fetchUser={this.props.fetchUser}
              updateZoom={this.props.updateZoom} 
              coordinates={this.props.coordinates}
              />
            <div className="home-nav-content-bottom">
              <h2> Logged in as, {this.props.user.username}</h2>
              <button className="logout-button" onClick={this.props.logout}>LOGOUT</button>
            </div>
          </section>
        </section>
        <section className="home-map-section">
          <div className="home-map-container">
            <HomeMap fetchBusinessesByCoordinates={this.props.fetchBusinessesByCoordinates} zoom={this.props.zoom} businesses={this.props.businesses} updateFilter={this.props.updateFilter}/>  
          </div>
        </section>
        {this.state.openModal === true ? <HomeModal openModal={this.state.openModal}/> : null}
      </div>
    );
  }};

export default Home;
