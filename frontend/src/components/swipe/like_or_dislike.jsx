import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './like_or_dislike.css';

class LikeOrDislike extends React.Component{
  render(){
    return(
      <div className="like-or-dislike">
        <div className="like-or-dislike-container">
          <span className="like">
            <FontAwesomeIcon icon={faUtensils} color="rgba(0,150,136 ,1)" size="2x" />
            <div>
              <span>Vote for</span>
              <span>Fog Harbor Fish House</span>
            </div>
          </span>
          <span className="dislike">
            <FontAwesomeIcon icon={faTimes} color="rgba(255,82,82 ,0.8)" size="2x" />
            <div>
              <span>Pass</span>
              <span>Fog Harbor Fish House</span>
            </div>
          </span>
        </div>
      </div>
    )
  }
}

export default LikeOrDislike;