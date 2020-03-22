import React from 'react';
import { Link } from 'react-router-dom';
import BizCaroussel from '../swipe/caroussel/biz_caroussel'
import './swipe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class Swipe extends React.Component {

  render() {
    return (
      <div className="swipe">
        <div className="swipe-aside">
          <div className="swipe-aside-nav">
            <div className="nav-logo">
              <Link to="/home">⌘</Link>
            </div>
            <h2 className="welcome-swipe">Hi Henry!</h2>
            {/* <h1>⌘</h1>
            <h2>gather</h2> */}
            {/* <div className="welcome-swipe">{props.currentUser.username}</div> */}
            <Link className="logout" onClick={this.props.logout} to="/">
              <FontAwesomeIcon icon={faSignOutAlt} color="white" size="2x" />
            </Link>
          </div>
          <div className="caroussel">
            <BizCaroussel />
          </div>
          <div className="business-info">BUSINESS INFO</div>
          <div className="like-or-dislike">
            <div className="like-or-dislike-container">
              <span className="like">
                <FontAwesomeIcon icon={faCheck} color="white" size="2x" />
              </span>
              <span className="dislike">
                <FontAwesomeIcon icon={faTimes} color="white" size="2x" />
              </span>
            </div>
          </div>
        </div>
        <div className="swipe-main">This is main</div>
      </div>
    );
  }
};

export default Swipe;

