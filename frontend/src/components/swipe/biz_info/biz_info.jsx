import React from 'react';
import './biz_info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faExternalLinkAlt  } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

class BizInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleName = this.handleName.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.handleHours = this.handleHours.bind(this);
    }
    
    handleName() {
        if (_.isEmpty(this.props.business)) {
            return null;
        } else {
            return (
                <h1 className='biz-name'>
                    {
                        this.props.business.businessName.split('_').join(' ')
                    }
                </h1>
            )
        }
    }

    handleCategories() {
        if (_.isEmpty(this.props.business)) {
            return null;
        } else {
            return (
            <div className='biz-categories'>{
                this.props.business.categories.map(category => {
                    return (
                        <div className='biz-category' >{category.name}</div>
                    )
                })
            }</div>    
            )
        }

    }
   

    handleHours() {
        if (_.isEmpty(this.props.business)) {
            return null;
        } else {
            let hours = this.props.business.hours;
            const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

            return (
                <div className='biz-hours'>
                    <ul>Hours:
                        {hours.map(hour => {
                            return (
                                <li className='biz-hours-day' key={hour.day}>
                                    <div className='week-day'>{weekDays[hour.day]}</div>
                                    <div className='biz-hours-hour'>{hour.start} - {hour.end}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }
 
    render() {

        if (!this.props.business) {
            return null;
        } 
        return (
            <div className='biz-info'>
                {this.handleName()}
                <div className="biz-ratings-container">
                    <div className='biz-rating'>Rating: {this.props.business.rating}</div>
                    <div className='biz-stars' >
                        <div className="stars-outer">
                            <div className="stars-inner"></div>
                        </div>
                    </div>
                    <div className='biz-review-count'>{this.props.business.reviewCount} reviews</div>
                </div>
                <div className="biz-price-categories-container">
                    <div className='biz-price'>{this.props.business.price}</div>
                    {this.handleCategories()}
                </div>
                <div className='biz-location-hours-container'>
                        <h2>Location & Hours</h2>
                    <div className='biz-location-hours-subcontainer'>
                        <div className='biz-location'>
                            <ul>Location:
                                <li>{this.props.business.address1}</li>
                                <li>{this.props.business.address2}</li>
                                <li>{this.props.business.address3}</li>
                                <li>{this.props.business.city}</li>
                                <li>{this.props.business.state}, {this.props.business.zipcode}</li>
                            </ul>
                        </div>
                        {this.handleHours()}
                    </div>  
                </div>
                <div className='biz-phone-container'>
                    <span className="biz-phone-icon">
                        <FontAwesomeIcon
                            icon={faPhoneAlt}
                            color="#000000"
                            size="sm"
                        />
                    </span>
                    <div className='biz-phone'>{this.props.business.phone}</div>
                </div>
                <div className='biz-yelp-container'>
                    <span className="biz-yelp-icon">
                        <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            color="#000000"
                            size="sm"
                        />
                    </span>
                    <div className='biz-yelp'>
                        <a href={this.props.business.yelpUrl}>Yelp Link</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default BizInfo;

