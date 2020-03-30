import React from 'react';
import HomeMap from './home_map';
import HomeSearch from './home_search';
import HomeNavContent from './home_nav_content';
import Modal from "../modal/modal";
import "./home.css";
import _ from 'lodash';

class Home extends React.Component {

  constructor(props) {
    super(props);
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
        <Modal />
        <section className="home-nav-bar">
          <section className="home-nav-bar-container">
            <HomeSearch updateZoom={this.props.updateZoom}/>
            <HomeNavContent 
              history={this.props.history}
              user={this.props.user} 
              businesses={this.props.businesses} 
              users={this.props.users} 
              selectedFoodRestrictions={this.props.selectedFoodRestrictions} 
              openModal={this.props.openModal} 
              createGroup={this.props.createGroup}
              fetchUser={this.props.fetchUser}
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
      </div>
    );
  }};

export default Home;
