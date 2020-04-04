import React from 'react';
import _ from 'lodash';
import './join_group.css'
import JoinGroupItems from "./join_group_items";
import JoinGroupSideMap from './join_group_side_map'

class JoinGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "join group"
    }
    this.completedGroups = [];
    this.finishedGroups = [];
    this.ongoingGroups = [];
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
  }

  isExpired(endTime) {
    const date = endTime.split("T")[0].split("-");
    const time = endTime.split("T")[1].split(":");
    const [ YYYY, MM, DD ] = date;
    const [ Hr, Min, Sec ] = time;

    const gruopEndTime = new Date(YYYY, MM, DD, Hr, Min, Sec.slice(0, 2));
    const currentTime = new Date();

    return gruopEndTime.getTime() < currentTime.getTime();
  }

  finishedVotes(group) {
    let count = 0;
    let curUserNum = group.users.length;

    Object.values(group.likedBusinesses).forEach(el => {
      count += el.length;
    });
    Object.values(group.dislikedBusinesses).forEach(el => {
      count += el.length;
    });

    return curUserNum * group.businesses.length <= count;
  }

  categorizeGroups() {
    const groups = this.props.users[this.props.user.id].groups;
    const completedGroups = [];
    const ongoingGroups = [];

    for (let i = 0; i < groups.length; i++) {
      const curGroup = groups[i];
      const gruopEndTime = new Date(curGroup.endTime);
      const currentTime = new Date();

      if (gruopEndTime.getTime() < currentTime.getTime()) {
        completedGroups.push(curGroup);
      } else if (this.finishedVotes(curGroup)){
        completedGroups.push(curGroup);
      } else{
        ongoingGroups.push(curGroup);
      }
      this.completedGroups = completedGroups;
      this.ongoingGroups = ongoingGroups;
    }
  }

  emptySpaceDiv (type){
    return (
      <div className="join-group-items">
        <div className="join-group-title">
          <div>{type}</div>
          <div className="line-bar"></div>
        </div>
        <div className="join-group-contents">
          <div className="join-group-content-head">
            <div className="join-group-content-item">Group Name</div>
            <div className="join-group-content-item">Creator</div>
            <div className="join-group-content-item">Decide By</div>
            <div className="join-group-content-item-last">Voted?</div>
          </div>
        </div>
        <div className="join-group-empty"> 
          <div>
            You don't have any <span>{type}</span> yet.
          </div>  
          <div>
            {type === "Completed Group Event" ? 
              <div>
                If you have not participated in any group event, please go to <span>Start a Group</span> tab and <span>create a new group</span>.
              Also, you can also finish the current <span>Ongoing Group Events</span>.</div> 
            : null}
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (
      this.props.users[this.props.user.id].groups.length > 0 &&
      typeof this.props.users[this.props.user.id].groups[0] === "string"
    ) {
      return null;
    }

    this.categorizeGroups();

    const completedGroupDiv = () => {
      if (this.completedGroups === undefined) return this.emptySpaceDiv("Completed Group Event");
      if (this.completedGroups.length === 0) return this.emptySpaceDiv("Completed Group Event");
      return (<JoinGroupItems
        type="Completed Group Event"
        users={this.props.users}
        user={this.props.user}
        groups={this.completedGroups}
        fetchGroup={this.props.fetchGroup}
        clearGroups={this.props.clearGroups}
      />)
    }

    const ongoingGroupDiv = () => {
      if (this.ongoingGroups === undefined) return this.emptySpaceDiv("Ongoing Group Event");
      if (this.ongoingGroups.length === 0) return this.emptySpaceDiv("Ongoing Group Event");
      return (<JoinGroupItems
        type="Ongoing Group Event"
        users={this.props.users}
        user={this.props.user}
        groups={this.ongoingGroups}
        clearGroups={this.props.clearGroups}
        clearUpData={this.props.clearUpData}
      />)
    }
    
    return (
      <div className="join-group-form">
        <div className="join-group-side-map-container">
          <JoinGroupSideMap
            form={this.props.form}
            zoom={this.props.zoom}
            businesses={this.props.businesses}
            updateFilter={this.props.updateFilter}
            groups={this.props.groups}
          />
        </div>
        <div className="join-group-form-container">
          {completedGroupDiv()}
          {ongoingGroupDiv()}
        </div>
      </div>
    );
  }
}

export default JoinGroup;