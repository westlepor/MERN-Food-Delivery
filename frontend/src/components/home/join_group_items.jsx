import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import JoinGroupModal from './join_group_modal';
import "balloon-css";

class JoinGroupItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
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

  timeValid(endTime) {
    const date = endTime.split("T")[0].split("-");
    const time = endTime.split("T")[1].split(":");
    const [YYYY, MM, DD] = date;
    const [Hr, Min, Sec] = time;

    const gruopEndTime = new Date(YYYY, MM, DD, Hr, Min, Sec.slice(0, 2));
    const currentTime = new Date();

    return gruopEndTime.getTime() < currentTime.getTime();
  }

  fetchGroup(groupId, idx) {
    this.props.clearGroups();
    if(this.state.selected === idx){
      this.setState({ selected: null });
    } else {
      this.props.fetchGroup(groupId).then(({group}) => {
        this.findTopThree(group);
        this.setState({ selected: idx });
      }
    )}
  }

  finishedVotes(group) {
    let count = 0;
    Object.values(group.likedBusinesses).forEach(el => {
      if (el.includes(this.props.user.id)) count++;
    });
    Object.values(group.dislikedBusinesses).forEach(el => {
      if (el.includes(this.props.user.id)) count++;
    });
    return group.businesses.length === count;
  }

  isCompleted(group) {
    if (this.finishedVotes(group)) {
      return null;
    } else {
      return <FontAwesomeIcon icon={faCheck} size="2x" />;
    }
  }

  findTopThree(group){
    const bizsValues = Object.values(group.businesses);
    const likedBizs = group.likedBusinesses;
    this.first = 0;
    this.second = 0; 
    this.third = 0;
    for (let i = 0; i < bizsValues.length; i++) {
      const curBizId = bizsValues[i]._id;
      if (likedBizs[curBizId].length >= this.first) {
        this.third = this.second;
        this.thirdBiz = this.secondBiz;
        this.second = this.first;
        this.secondBiz = this.firstBiz;
        this.first = likedBizs[curBizId].length;
        this.firstBiz = bizsValues[i];
      } else if (likedBizs[curBizId].length >= this.second) {
        this.third = this.second;
        this.thirdBiz = this.secondBiz;
        this.second = likedBizs[curBizId].length;
        this.secondBiz = bizsValues[i];
      } else if (likedBizs[curBizId].length >= this.third) {
        this.third = likedBizs[curBizId].length;
        this.thirdBiz = bizsValues[i];
      }
    }
  }

  renderItems() {
    return (this.props.groups.map((group, idx) => {
      const curClass1 = `join-group-content-item ${ idx % 2 === 0 ? "even-index" : "odd-index" }`;
      const curClass2 = `join-group-content-item-last ${ idx % 2 === 0 ? "even-index" : "odd-index" }`;
      const topThree = {
        first: this.firstBiz,
        second: this.secondBiz,
        third: this.thirdBiz
      }
      const completeGroupEventDiv = (
        <Fragment key={idx}>
          <div className="join-group-content-items" onClick={() => this.fetchGroup(group._id, idx)}>
            <div className={curClass1}>{group.groupName}</div>
            <div className={curClass1}>
              {this.props.users[group.creator].username}
            </div>
            <div className={curClass1}>{this.formatTime(group.endTime)}</div>
            <div className={curClass2}>{this.isCompleted(group)}</div>
          </div>
          {(this.state.selected === idx && this.first !== 0) ? <JoinGroupModal topThree={topThree}/> : null }
        </Fragment>
      )

      const alreadyVotedDiv = (
        <div
          aria-label="You already voted for this event!"
          data-balloon-pos="down"
          className="join-group-content-items"
          key={idx}
        >
          <div className={curClass1}>{group.groupName}</div>
          <div className={curClass1}>
            {this.props.users[group.creator].username}
          </div>
          <div className={curClass1}>{this.formatTime(group.endTime)}</div>
          <div className={curClass2}>{this.isCompleted(group)}</div>
        </div>
      )

      const ongoingDiv = (
        <Link
          to={`/swipe/${group._id}`}
          className="join-group-content-items"
          key={idx}
        >
          <div className={curClass1}>{group.groupName}</div>
          <div className={curClass1}>
            {this.props.users[group.creator].username}
          </div>
          <div className={curClass1}>{this.formatTime(group.endTime)}</div>
          <div className={curClass2}>{this.isCompleted(group)}</div>
        </Link>
      )

      if (this.props.type === "Completed Group Event") {
        return completeGroupEventDiv;
      } else if (this.finishedVotes(group)) {
        return alreadyVotedDiv;
      } else {
        return ongoingDiv;;
      }
    }));
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
            <div className="join-group-content-item">Group Name</div>
            <div className="join-group-content-item">Creator</div>
            <div className="join-group-content-item">Decide By</div>
            <div className="join-group-content-item-last">Voted?</div>
          </div>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default JoinGroupItems;