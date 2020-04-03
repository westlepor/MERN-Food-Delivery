import React from "react";
import Ratings from './ratings';
import BizHour from './biz_hour';
import './biz_info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faExternalLinkAlt, faDirections } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

class BizInfo extends React.Component {
  constructor(props) {
      super(props);
      this.handleCategories = this.handleCategories.bind(this);
      this.open = false;
  }
  
  handleCategories() {
    return (
      <div className='biz-categories'>
        {this.props.business.categories.map((category, idx) => {
              return (<div className='biz-category' key={idx} >{category.name}</div>)
          })}
      </div>    
    )
  }

  isOpen() {
    if (new Date().getDay() != this.props.hour.day) {
      return null;
    }
    const startHourMin = parseFloat(this.props.hour.start) / 100
    const endHourMin = parseFloat(this.props.hour.end) / 100
    const curTime = new Date().getHours() + (new Date().getMinutes() / 100);

    if (curTime > startHourMin && curTime < endHourMin) {
      return <span className="biz-hour-opened">Open now</span >
    } else {
      return <span className="biz-hour-closed"></span >
    }
  }

  render() {
    if (!this.props.business) {
        return null;
    } 
    console.log(this.props.business);

    const mapLocation = `https://www.google.com/maps?q=${this.props.business.latitude},${this.props.business.longitude}`

    const curHours = this.props.business.hours.map((hour, idx) => {
      let prevId;

      if (new Date().getDay() != hour.day) {
        const startHourMin = parseFloat(hour.start) / 100
        const endHourMin = parseFloat(hour.end) / 100
        const curTime = new Date().getHours() + (new Date().getMinutes() / 100);
  
        if (curTime > startHourMin && curTime < endHourMin) {
          this.open = true;
        }
      }

      if (idx != 0 && this.props.business.hours[idx - 1].day === hour.day) {
        hour.day = 7;
      }

      return hour;
    });

    return (
      <div className="biz-info">
        <div className="biz-info-container">
            <div className="biz-name">
              {this.props.business.businessName.split("_").join(" ")}
            </div>
            <div className="biz-ratings-container">
              <div className="biz-rating">
                <Ratings ratings={this.props.business.rating}/>
              </div>
              <div className="biz-review-count">
                {this.props.business.reviewCount} Reviews
              </div>
            </div>
            <div className="biz-price-categories-container">
                <div className="biz-price">{this.props.business.price}</div>
                <span>•</span>
                {this.handleCategories()}
            </div>
            <div className="biz-location">
              {/* <FontAwesomeIcon icon={faDirections} color="#999" size="1x"/> */}
              <div>
              {this.props.business.address1}{this.props.business.address2 ? `, ${this.props.business.address2}` : null}{this.props.business.address3 ? `, ${this.props.business.address3}` : null}, {this.props.business.city}, {this.props.business.state}, {this.props.business.zipcode}
              </div>
            </div>

            <div className="biz-details">
              <div className="biz-phone-yelp">
                <div className="biz-phone-container">
                    <span className="biz-phone-icon">
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        color="#999"
                        size="sm"
                      />
                    </span>
                    <div className="biz-phone">{this.props.business.phone}</div>
                  </div>
                <div className="biz-yelp-container">
                  <span className="biz-yelp-icon">
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      color="#999"
                      size="sm"
                    />
                  </span>
                  <div className="biz-yelp">
                    <a href={this.props.business.yelpUrl}>Yelp Link</a>
                  </div>
                </div>
                <div className="biz-direction biz-yelp-container">
                  <span className="biz-yelp-icon">
                    <FontAwesomeIcon
                      icon={faDirections}
                      color="#999"
                      size="sm"
                    />
                  </span>
                  <div className="biz-yelp">
                    <a href={mapLocation}>Get Directions</a>
                  </div>
                </div>
              </div>
              <div className="biz-hours">
                {this.open === false ? <div className="biz-hours-closed">Currently Closed</div>
                : <div className="biz-hours-open">Currently Open</div>
                }
                
                {curHours.map((hour, idx) => <BizHour key={idx} hour={hour} />)}
              </div>
            </div>
        </div>
      </div>
    );
  }
};

export default BizInfo;
