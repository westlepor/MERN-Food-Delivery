import React from 'react';
import { Link } from 'react-router-dom';
import BizCaroussel from '../swipe/caroussel/biz_caroussel';
import BizInfo from '../swipe/biz_info/biz_info';
import LikeOrDislike from './like_or_dislike';
import SwipeMainMap from './swipe_main_map';
import SwipeUserInfo from './swipe_user_info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserAlt, faUserFriends, faUserCircle, faCompass, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash';
import './swipe.css';

class Swipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    }

    const pathname = this.props.history.location.pathname.split("/");
    this.curGroupId = pathname[pathname.length - 1];    
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    return this.props.fetchGroup(this.curGroupId).then(()=>{
      return this.props.fetchUser(this.props.user.id);
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

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.navOpen)
    if (this.state.navOpen === false) {
      this.setState({ navOpen: true })
    } else if (this.state.navOpen === true){
      this.setState({ navOpen: false})
    }
  }
  
  render() {
    if (_.isEmpty(this.props.groups) || _.isEmpty(this.props.users)){
      return null;
    }

    const curBiz = this.findCurBiz();
    if(curBiz === null){
      return this.swipeRedirect()
    }

    const curGroup = this.props.groups[this.curGroupId];
    const curBizs = curGroup.businesses;


    
    return (
      <div className="swipe">
        <div className="swipe-aside">
          <div id="mySideNav" className={`side-menu ${(this.state.navOpen === true) ? "nav-open" : null }`}>
              <div className="swipe-dropdown">
                <div className="welcome-swipe">
                  <div className="inner-swipe-header">
                  </div>
                  <div className="inner-swipe-body">
                    <div className="logout-container">
                      <Link className="logout-logo swipe-logout" to="/home">
                        <FontAwesomeIcon icon={faHome} color="black" size="3x" />
                      </Link>
                      <Link className="logout-logo swipe-logout" onClick={this.props.logout} to="/">
                        <FontAwesomeIcon icon={faSignOutAlt} color="black" size="2x" />
                      </Link>
                    </div>
                    <div className="swipe-group-info">
                      <div>
                        <FontAwesomeIcon icon={faUserAlt} color="black" size="1x" />
                        <span>{this.props.user.username}</span>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faUserFriends} color="black" size="1x" />
                        <span>{curGroup.groupName} [ {curGroup.users.map((user, idx) => <span key={idx}> <FontAwesomeIcon icon={faUserCircle} color="white" size="1x" /> {user.username} </span>)} ]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <a href="#" onClick={this.handleClick} className={`nav-toggle `}>
              <img src="chicken_logo_3.png"/>
            </a>
            </div>
          <section className="swipe-aside-nav">
            <h2>{curGroup.groupName}</h2>
          </section>
          <section className="swipe-body">
            <div className="caroussel">
              <BizCaroussel curBiz={curBiz}/>
            </div>
            <div className="bisuness-info">
              <BizInfo business={curBiz} />
            </div>
            <SwipeUserInfo foodRestrictions={curGroup.foodRestrictions}/>
          </section>
          <section className="swipe-footer">
            <LikeOrDislike user={this.props.user} curGroup={curGroup} updateGroup={this.props.updateGroup} fetchGroup={this.props.fetchGroup} curBiz={curBiz}/>
          </section>
        </div >
        <div className="swipe-main">
          <SwipeMainMap businesses={curBizs} curBiz={curBiz}/>
        </div>
      </div>
    );
  }
};

export default Swipe;
