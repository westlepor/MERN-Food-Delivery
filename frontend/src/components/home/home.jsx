import React from 'react';
import HomeMap from './home_map';
import JoinGroupMap from './join_group_map';
import HomeNavContent from './home_nav_content';
import HomeModal from './home_modal';
import "./home.css";
import _ from 'lodash';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "create group",
      openModal: false
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleModal() {
    if (this.state.openModal === false) {
      this.setState({
        openModal: true
      })
    } else {
      this.setState({
        openModal: false
      })
    }
  };

  componentDidMount() {
    this.props.fetchUsers().then(()=>{
      if (this.props.info === true){
        this.props.closeInfo();
        this.setState({openModal: true});
      }
    });
  }

  handleChangeForm(type) {
    return e => {
      e.preventDefault();
      if (type === "create group") {
        this.setState({ form: "create group" });
        this.props.clearGroups();
      } else if (type === "join group") {
        this.setState({ form: "join group" });
        this.props.clearGroups();
      }
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.clearUpData();
    this.props.logout();
  }

  render() {
    if (_.isEmpty(this.props.users)) {
      return null;
    }
    
    return (
      <div className="home-page">
        <section className="home-nav-bar">
          <section className="home-nav-bar-container">
            <HomeNavContent
              handleChangeForm={this.handleChangeForm}
              form={this.state.form}
              history={this.props.history}
              user={this.props.user}
              businesses={this.props.businesses}
              users={this.props.users}
              selectedFoodRestrictions={this.props.selectedFoodRestrictions}
              handleModal={this.handleModal} 
              createGroup={this.props.createGroup}
              fetchUser={this.props.fetchUser}
              updateZoom={this.props.updateZoom}
              coordinates={this.props.coordinates}
              errors={this.props.errors}
              fetchGroup={this.props.fetchGroup}
              clearGroups={this.props.clearGroups}
              clearUpData={this.props.clearUpData}
            />
            <div className="home-nav-content-bottom">
              <div className="home-nav-content-bottom-container">
                <button className="logout-button" onClick={this.handleClick}>
                  LOGOUT
                </button>
              </div>
            </div>
          </section>
        </section>
        <section className="home-map-section">
          <div className="home-map-container">
            {this.state.form === "join group" ? (
              <JoinGroupMap
                form={this.state.form}
                zoom={this.props.zoom}
                businesses={this.props.businesses}
                updateFilter={this.props.updateFilter}
                groups={this.props.groups}
              />
            ) : (
              <HomeMap
                fetchBusinessesByCoordinates={
                  this.props.fetchBusinessesByCoordinates
                }
                form={this.state.form}
                zoom={this.props.zoom}
                businesses={this.props.businesses}
                updateFilter={this.props.updateFilter}
              />
            )}
          </div>
        </section>
        {this.state.openModal === true ? <HomeModal handleModal={this.handleModal}/> : null}
      </div>
    );
  }
};

export default Home;
