import React from 'react';
import { Link } from 'react-router-dom';

class JoinGroupItems extends React.Component {

  formatTime(endTime) {
    const date = endTime.split("T")[0].split("-");
    const time = endTime.split("T")[1].split(":");
    const timeOfDay = parseInt(time[0]) > 12 ? "PM" : "AM";
    return (
      (parseInt(time[0]) % 12) + ":" + time[1] + timeOfDay + " on " + date[1] + "/" + date[2] + "/" + date[0]
    );
  }

  timeValid(endTime){
    const date = endTime.split("T")[0].split("-");
    const time = endTime.split("T")[1].split(":");
    const [ YYYY, MM, DD ] = date;
    const [ Hr, Min, Sec ] = time;

    const gruopEndTime = new Date(YYYY, MM, DD, Hr, Min, Sec.slice(0, 2)); 
    const currentTime = new Date();


    return (gruopEndTime.getTime() < currentTime.getTime())
  }

  fetchGroup (groupId){
    this.props.clearGroups();
    this.props.fetchGroup(groupId);
  }

  renderItems(){
    const curGroups = this.props.groups;
    
    return curGroups.map((group, idx) => { 
      const curClass = `join-group-content-item ${(idx % 2) === 0 ? "even-index" : "odd-index"}`;
      // to={`/swipe/${group._id}`}
      return (
        <div className="join-group-content-items" key={idx} onClick={()=>this.fetchGroup(group._id)}>
          <div className={curClass}>{group.groupName}</div>
          <div className={curClass}>{this.props.users[group.creator].username}</div>
          <div className={curClass}>{this.formatTime(group.endTime)}</div>            
        </div>
    )})
  }
  
  render() {
    return (
      <div className="join-group-items">
        <div className="join-group-title">
          <div>{this.props.type}</div>
          <div className="line-bar"></div>
        </div>
        <div className="join-group-contents">
          <div className="join-group-content-head">
            <div className="join-group-content-item">
              Group Name
            </div>
            <div className="join-group-content-item">
              Creator
            </div>
            <div className="join-group-content-item">
              Decide By
            </div>
          </div>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default JoinGroupItems;