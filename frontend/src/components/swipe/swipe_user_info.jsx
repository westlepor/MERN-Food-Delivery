import React from 'react';
import './swipe-user-info.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes, faUtensils } from '@fortawesome/free-solid-svg-icons';
// import './like_or_dislike.css';

class SwipeUserInfo extends React.Component {
  render() {
    return (
      <div className="swipe-user-info">
        <h2>The recommended price level for your group is: {this.props.monetaryRestriction}</h2>
        <h2>Users in your group have the following food restrictions:</h2>
          {this.props.foodRestrictions.map((fr, idx) => (
            <li key={idx}>
              {fr.restriction}
            </li>
          ))}
      </div>
    )
  }
}

export default SwipeUserInfo;