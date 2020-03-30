import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './like_or_dislike.css';

class LikeOrDislike extends React.Component{
  constructor(props){
    super(props);
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(type){
    return () => {
      if(type === "like"){
        const curGroup = this.props.curGroup;
        curGroup.likedBusinesses[this.props.curBiz._id].push(this.props.user.id)
        return this.props.updateGroup(curGroup).then(()=>{
          return this.props.fetchGroup(this.props.curGroup._id)
        })
      } else if (type === "dislike"){
        const curGroup = this.props.curGroup;
        curGroup.dislikedBusinesses[this.props.curBiz._id].push(this.props.user.id)
        return this.props.updateGroup(curGroup).then(() => {
          return this.props.fetchGroup(this.props.curGroup._id)
        })
      }
    }
  }

  render(){
    return(
      <div className="like-or-dislike">
        <div className="like-or-dislike-container">
          <span className="like" onClick={this.clickButton("like")} >
            <FontAwesomeIcon icon={faUtensils} color="rgba(0,150,136 ,1)" size="2x" />
            <div>
              <span>Vote for</span>
              <span>Fog Harbor Fish House</span>
            </div>
          </span>
          <span className="dislike" onClick={this.clickButton("dislike")} >
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