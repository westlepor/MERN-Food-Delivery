import React from 'react';
import _ from 'lodash';
import './join_group.css'
import JoinGroupItems from "./join_group_items";

class JoinGroup extends React.Component {
  constructor(props) {
    super(props);
    this.completedGroups = [];
    this.finishedGroups = [];
    this.ongoingGroups = [];
  }

  formatTime(endTime) {
    const date = endTime.split("T")[0].split("-");
    const time = endTime.split("T")[1].split(":");
    const timeOfDay = parseInt(time[0]) > 12 ? "PM" : "AM";
    return (
      (parseInt(time[0]) % 12) +
      ":" +
      time[1] +
      timeOfDay +
      " on " +
      date[1] +
      "/" +
      date[2] +
      "/" +
      date[0]
    );
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
  }

  isExpired(endTime) {
    const date = endTime.split("T")[0].split("-");
    const time = endTime.split("T")[1].split(":");
    const [YYYY, MM, DD] = date;
    const [Hr, Min, Sec] = time;

    const gruopEndTime = new Date(YYYY, MM, DD, Hr, Min, Sec.slice(0, 2));
    const currentTime = new Date();

    return gruopEndTime.getTime() < currentTime.getTime();
  }

  // finishedVotes(curGroup) {
  //   let count;
  //   Object.values(curGroup.likedBusinesses).forEach(el => {
  //     if(el.length !== 0) count++; 
  //   })
  //   Object.values(curGroup.likedBusinesses).forEach(el => {
  //     if(el.length !== 0) count++; 
  //   })
  //   return (curGroup.businesses.length === count)
  // }

  categorizeGroups() {
    const groups = this.props.users[this.props.user.id].groups;
    const completedGroups = [];
    const ongoingGroups = [];

    for (let i = 0; i < groups.length; i++) {
      const curGroup = groups[i];
      const date = curGroup.endTime.split("T")[0].split("-");
      const time = curGroup.endTime.split("T")[1].split(":");
      const [YYYY, MM, DD] = date;
      const [Hr, Min, Sec] = time;
      const gruopEndTime = new Date(YYYY, MM, DD, Hr, Min, Sec.slice(0, 2));
      const currentTime = new Date();

      if (gruopEndTime.getTime() > currentTime.getTime()) {
        completedGroups.push(curGroup);
      } else {
        ongoingGroups.push(curGroup);
      }
      this.completedGroups = completedGroups;
      this.ongoingGroups = ongoingGroups;
    }
  }

  render() {
    if (
      this.props.users[this.props.user.id].groups.length > 0 &&
      typeof this.props.users[this.props.user.id].groups[0] === "string"
    ) {
      return null;
    }

    this.categorizeGroups();
    
    return (
      <div className="join-group-form">
        <div className="join-group-form-container">
          <JoinGroupItems
            type="Completed Group Event"
            users={this.props.users}
            user={this.props.user}
            groups={this.completedGroups}
            fetchGroup={this.props.fetchGroup}
            clearGroups={this.props.clearGroups}
          />

          <JoinGroupItems
            type="Ongoing Group Event"
            users={this.props.users}
            user={this.props.user}
            groups={this.ongoingGroups}
            fetchGroup={this.props.fetchGroup}
            clearGroups={this.props.clearGroups}
          />
        </div>
      </div>
    );
  }
}

export default JoinGroup;