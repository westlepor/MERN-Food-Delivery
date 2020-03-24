import React from 'react';
import './swipe-user-info.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes, faUtensils } from '@fortawesome/free-solid-svg-icons';
// import './like_or_dislike.css';

class SwipeUserInfo extends React.Component {
  render() {
    return (
      <div className="swipe-user-info">
        Users in your group has the following restrictions: {this.props.foodRestrictions.map((fr) => { return fr.restriction}).join(', ')}
      </div>
    )
  }
}

export default SwipeUserInfo;