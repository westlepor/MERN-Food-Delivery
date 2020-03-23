import "./home.css";
import React from 'react';
import HomeMap from './home_map';
import HomeSearch from './home_search';
import HomeNavContent from './home_nav_content';
import Modal from "../modal/modal";
import _ from 'lodash';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      map: null
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
        <Modal />
        <section className="home-nav-bar">
          <HomeSearch updateZoom={this.props.updateZoom}/>
          <HomeNavContent user={this.props.user} businesses={this.props.businesses} users={this.props.users} selectedFoodRestrictions={this.props.selectedFoodRestrictions}/>
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
