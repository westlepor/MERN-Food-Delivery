import React from 'react';

class JoinGroupCompleted extends React.Component {

  formatTime(endTime) {
    const date = endTime.split("T")[0].split("-");
    const time = endTime.split("T")[1].split(":");
    const timeOfDay = parseInt(time[0]) > 12 ? "PM" : "AM";
    return (
      (parseInt(time[0]) % 12) + ":" + time[1] + timeOfDay + " on " + date[1] + "/" + date[2] + "/" + date[0]
    );
  }

  renderItems(){
    const curUserId = this.props.user.id;
    const curGroups = this.props.users[curUserId].groups;
    console.log(curGroups[0].endTime);
    return curGroups.map((group, idx) => (
      <div className="join-group-content-items" key={idx}>
        <div className="join-group-content-item" >{group.groupName}</div>
        <div className="join-group-content-item">{this.props.users[group.creator].username}</div>
        <div className="join-group-content-item">{this.formatTime(group.endTime)}</div>            
      </div>
    ))
  }
  

  render() {
    

    return (
      <div className="join-group-completed">
        <div className="join-group-title">
          <div>Completed Group Event</div>
          <div className="line-bar"></div>
          {/* <div className="get-started-bar"></div> */}
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

export default JoinGroupCompleted;