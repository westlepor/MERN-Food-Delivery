import React from 'react';
import _ from 'lodash';
import './join_group.css'
import { Link } from "react-router-dom"

class JoinGrorup extends React.Component {
  constructor(props) {
    super(props);
    
  }

  formatTime(endTime) {
    const date = endTime.split("T")[0].split('-');
    const time = endTime.split("T")[1].split(':');
    const timeOfDay = (parseInt(time[0]) > 12) ? "PM" : "AM" 
    return (
        (parseInt(time[0]) % 12)
        + ":" 
        + time[1]
        + timeOfDay
        + " on "
        + date[1] 
        + "/" 
        + date[2] 
        + "/" 
        + date[0]
      );
  }

  render(){
    return(
      <div className="join-group-form">
        <div className="join-group-content">
          <div>
            <div className="optional-divider">
              <div className="get-started-bar"></div>
              <h2>My Groups</h2>
              <div className="get-started-bar"></div>
            </div>
            <div className="join-group-headers">
              <h2>Group Name</h2>
              <h2>Decide By</h2>
            </div>
            <div>
              {this.props.user.groups.map((group) => (
                <div >
                  <Link to={`/swipe/${group._id}`} className="join-group-item" >
                    <h2>{group.groupName}</h2>
                    <h2>{this.formatTime(group.endTime)}</h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinGrorup;