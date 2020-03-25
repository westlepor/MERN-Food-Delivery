import React from 'react';
import { Link } from 'react-router-dom';
import BizCaroussel from '../swipe/caroussel/biz_caroussel';
import BizInfo from '../swipe/biz_info/biz_info';
import LikeOrDislike from './like_or_dislike';
import SwipeMainMap from './swipe_main_map';
import SwipeUserInfo from './swipe_user_info';
import './swipe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserAlt, faUserFriends, faUserCircle, faCompass } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash';

class Swipe extends React.Component {
  constructor(props) {
    super(props);

    const pathname = this.props.history.location.pathname.split("/");
    this.curGroupId = pathname[pathname.length - 1];
    
  }

  componentDidMount() {
    this.props.fetchGroup(this.curGroupId).then(()=>{
      this.props.fetchUser(this.props.user.id);
    })
  }

  findCurBiz (){
    const curGroup = this.props.groups[this.curGroupId];
    for (let i = 0; i < curGroup.businesses.length; i++){
      const curBiz = curGroup.businesses[i];
      if (!curGroup.likedBusinesses[curBiz._id].includes(this.props.user.id) && !curGroup.dislikedBusinesses[curBiz._id].includes(this.props.user.id)){
        return curBiz;
      }
    }

    return null;
  }
  
  swipeRedirect(){
    setTimeout(() => this.props.history.push("/home"), 6000);
    return (
      <div className="swipe-finish-vote">
        <div className="swipe-finish-vote-container">
          <FontAwesomeIcon icon={faCompass} color="white" size="1x" />
          <span className="swipe-finish-vote-span">You finished your vote for this event!</span>
        </div>
        <span className="swipe-finish-vote-msg">redirect to the home page in 5 seconds.</span>
      </div>
    )
  }
  
  render() {
    if (_.isEmpty(this.props.groups) || _.isEmpty(this.props.users)){
      return null;
    }

    const curGroup = this.props.groups[this.curGroupId];
    const curBizs = curGroup.businesses;
    const curBiz = this.findCurBiz();
    if(curBiz === null){
      //probably want to redirect to the home page
      return this.swipeRedirect()
    }

    return (
      <div className="swipe">
        <div className="swipe-aside">
          <div className="swipe-aside-nav">
            <div className="nav-logo">
            </div>
              <div className="welcome-swipe">
                <div>
                  <FontAwesomeIcon icon={faUserAlt} color="white" size="1x" />
                  <span>{this.props.user.username}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUserFriends} color="white" size="1x" />
                <span>{curGroup.groupName} [ {curGroup.users.map((user, idx) => <span key={idx} > <FontAwesomeIcon icon={faUserCircle} color="white" size="1x" /> {user.username} </span>)} ]</span>
                </div>
              </div>
            <div className="logout-container">
              <Link className="logout-logo swipe-logout" onClick={this.props.logout} to="/">
                <FontAwesomeIcon icon={faSignOutAlt} color="white" size="2x"/>
              </Link>
            </div>
          </div>
          <div className="caroussel">
            <BizCaroussel />
          </div>
          <div className="bisuness-info">
            <BizInfo business={curBiz} />
          </div>
          <SwipeUserInfo foodRestrictions={curGroup.foodRestrictions}/>
          <LikeOrDislike updateGroup={this.props.updateGroup} curGroup={curGroup} user={this.props.user} curBiz={curBiz}/>
        </div >
        <div className="swipe-main">
          <SwipeMainMap businesses={curBizs} />
        </div>
      </div>
    );
  }
};

export default Swipe;
