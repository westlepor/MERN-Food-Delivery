import React from 'react';
import "./join_group_modal.css";
import "balloon-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faPhone, faDirections } from "@fortawesome/free-solid-svg-icons";

class JoinGroupModal extends React.Component {

  percentVotes(group){
    let voteCount = 0;
    Object.values(group.likedBusinesses).forEach(el => {
      voteCount += el.length;
    });
    Object.values(group.dislikedBusinesses).forEach(el => {
      voteCount += el.length;
    });
    return Math.round((group.users.length  * group.businesses.length ) / (group.users.length) * 100 );
  }

  render(){
    if (this.props.topThree.first === undefined) return null;
    const photoFirst = this.props.topThree.first.photos[0];
    const photoSecond = this.props.topThree.second.photos[0];
    const photoThird = this.props.topThree.third.photos[0];
    const firstBalloon = `# 1. ${this.props.topThree.first.businessName
      .split("_")
      .join(" ")}`;
    const secondBalloon = `# 2. ${this.props.topThree.second.businessName
      .split("_")
      .join(" ")}`;
    const thirdBalloon = `# 3. ${this.props.topThree.third.businessName
      .split("_")
      .join(" ")}`;
    const firstGoogleMap = `https://www.google.com/maps/search/?api=1&query=${this.props.topThree.first.latitude}, ${this.props.topThree.first.longitude}`;
    const secondGoogleMap = `https://www.google.com/maps/search/?api=1&query=${this.props.topThree.second.latitude}, ${this.props.topThree.second.longitude}`          
    const thirdGoogleMap = `https://www.google.com/maps/search/?api=1&query=${this.props.topThree.third.latitude}, ${this.props.topThree.third.longitude}`

    return (
      <div className="join-group-content-items-expand">
        <div className="join-group-content-items-expand-container">
          <div className="join-group-content-items-title">
            It's a Match!
          </div>
          <div className="join-group-content-items-subtitle">
            Your group members liked these restaurants.
          </div>
          <div className="join-group-content-items-expand-ranks">
            <div className="join-group-content-items-expand-photo-1">
              <img src={photoFirst} alt="1st" />
              <div className="join-group-content-items-expand-text-1">
                <div className="join-group-content-items-expand-text-1-name">
                  {firstBalloon}
                </div>
                <div className="join-group-content-items-expand-text-1-details">
                  <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{this.props.topThree.first.phone}</span>
                  </div>
                  <div>
                    <a href={firstGoogleMap}>
                      <FontAwesomeIcon icon={faDirections} />
                      <span>Get Direction</span>
                    </a>
                  </div>
                  <div>
                    <a href={this.props.topThree.first.yelpUrl}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Make a reservation in Yelp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="join-group-content-items-expand-photo-2">
              <img src={photoSecond} alt="1st" />
              <div className="join-group-content-items-expand-text-1">
                <div className="join-group-content-items-expand-text-1-name">
                  {secondBalloon}
                </div>
                <div className="join-group-content-items-expand-text-1-details">
                  <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{this.props.topThree.second.phone}</span>
                  </div>
                  <div>
                    <a href={secondGoogleMap}>
                      <FontAwesomeIcon icon={faDirections} />
                      <span>Get Direction</span>
                    </a>
                  </div>
                  <div>
                    <a href={this.props.topThree.second.yelpUrl}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Make a reservation in Yelp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="join-group-content-items-expand-photo-1">
              <img src={photoThird} alt="1st" />
              <div className="join-group-content-items-expand-text-1">
                <div className="join-group-content-items-expand-text-1-name">
                  {thirdBalloon}
                </div>
                <div className="join-group-content-items-expand-text-1-details">
                  <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{this.props.topThree.third.phone}</span>
                  </div>
                  <div>
                    <a href={thirdGoogleMap}>
                      <FontAwesomeIcon icon={faDirections} />
                      <span>Get Direction</span>
                    </a>
                  </div>
                  <div>
                    <a href={this.props.topThree.third.yelpUrl}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Make a reservation in Yelp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinGroupModal;