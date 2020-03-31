import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart, faPoll } from '@fortawesome/free-solid-svg-icons';
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
          <span className="dislike" onClick={this.clickButton("dislike")} >
            <FontAwesomeIcon icon={faTimes} color="#ff3f3f" size="2x" />
          </span>
          <span className="results" >
            <FontAwesomeIcon icon={faPoll} color="#3ca4ff" size="2x" />
          </span>
          <span className="like" onClick={this.clickButton("like")} >
            <FontAwesomeIcon icon={faHeart} color="#01df8a" size="2x" />
          </span>
        </div>
      </div>
    )
  }
}

export default LikeOrDislike;