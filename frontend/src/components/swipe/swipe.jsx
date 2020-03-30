import React from 'react';
import { Link } from 'react-router-dom';
import BizCaroussel from '../swipe/caroussel/biz_caroussel';
import BizInfo from '../swipe/biz_info/biz_info';
import LikeOrDislike from './like_or_dislike';
import SwipeMainMap from './swipe_main_map';
import SwipeUserInfo from './swipe_user_info';
import './swipe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserAlt, faUserFriends, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash';

class Swipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    }
  }

  componentDidMount() {
    const pathname = this.props.history.location.pathname.split("/");
    const groupId = pathname[pathname.length-1];
    this.props.fetchGroup(groupId)
  }
  
  render() {
    if (_.isEmpty(this.props.groups)){
      return null;
    }
    
    const groups = Object.values(this.props.groups)[0]
    const businesses = groups.businesses;

    
    return (
      <div className="swipe">
        <div className="swipe-aside">
          <section className="swipe-aside-nav">
            <div id="mySideNav" className="nav-logo">⌘
              <div className={`swipe-dropdown ${this.state.navOpen ? "navOpen" : "navClosed"}`}>
                <a href="javascript:void(0)" class="closebtn">X</a>
                <div className="welcome-swipe">
                  <div>
                    <FontAwesomeIcon icon={faUserAlt} color="white" size="1x" />
                    <span>{this.props.user.username}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faUserFriends} color="white" size="1x" />
                    <span>{groups.groupName} [ {groups.users.map((user) => <span> <FontAwesomeIcon icon={faUserCircle} color="white" size="1x" /> {user.username} </span>)} ]</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="logout-container">
              <Link className="logout-logo swipe-logout" onClick={this.props.logout} to="/">
                <FontAwesomeIcon icon={faSignOutAlt} color="white" size="2x"/>
              </Link>
            </div>
          </section>
          <section className="swipe-body">
            <div className="caroussel">
              <BizCaroussel />
            </div>
            <div className="bisuness-info">
              <BizInfo business={businesses[0]} />
            </div>
            <SwipeUserInfo foodRestrictions={groups.foodRestrictions}/>
          </section>
          <section className="swipe-footer">
            <LikeOrDislike/>
          </section>
        </div >
        <div className="swipe-main">
          <SwipeMainMap businesses={businesses} />
        </div>
      </div>
    );
  }
};

export default Swipe;
