import React from 'react';
import { Link } from 'react-router-dom';
import './biz_info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faExternalLinkAlt, faStar  } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

class BizInfo extends React.Component {
    constructor(props) {
        super(props);
    }
  
    // handleRating() {
    //     const ratings = {
    //         biz_stars: 2.8
    //     };

    //     // total number of stars
    //     const starTotal = 5;

    //     for (const rating in ratings) {
    //         const starPercentage = (ratings[rating] / starTotal) * 100;
    //         const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    //         document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
    //     }
    // }

    render() {
        return (
            <div className='biz-info'>
                <h1 className='biz-name'>Fog Harbor Fish House</h1>
                <div className="biz-ratings-container">
                    <div className='biz-rating'>Rating: 5.0</div>
                    <div className='biz-stars' >
                        <div className="stars-outer">
                            <div className="stars-inner"></div>
                        </div>
                    </div>
                    <div className='biz-review-count'>5000 reviews</div>
                </div>
                <div className="biz-price-categories-container">
                    <div className='biz-price'>$$$</div>
                    <div className='biz-categories'>Seafood, Bars</div>
                </div>
                <div className='biz-location-hours-container'>
                        <h2>Location & Hours</h2>
                    <div className='biz-location-hours-subcontainer'>
                        <div className='biz-location'>
                            <ul>Location:
                                <li>Pier 39</li>
                                <li>Ste A-202</li>
                                <li>address3</li>
                                <li>San Francisco</li>
                                <li>CA 94133</li>
                            </ul>
                        </div>
                        <div className='biz-hours'>
                            <ul>Hours:
                                <li>Mon hours</li>
                                <li>Tue hours</li>
                                <li>Wed hours</li>
                                <li>Thu hours</li>
                                <li>Fri hours</li>
                                <li>Sat hours</li>
                                <li>Sun hours</li>
                            </ul>
                        </div>
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
                    <div className='biz-phone'>(415) 421-2442</div>
                </div>
                <div className='biz-yelp-container'>
                    <span className="biz-yelp-icon">
                        <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            color="#000000"
                            size="sm"
                        />
                    </span>
                    <div className='biz-yelp'>yelp.com/fogharborfishhouse</div>
                </div>

            </div>
        );
    }
};

export default BizInfo;

// businessName: {
//     type: String,
//         required: true
// },
// yelpUrl: {
//     type: String,
//         required: true
// },
// latitude: {
//     type: Number,
//         required: true
// },
// longitude: {
//     type: Number,
//         required: true
// },
// categories: {
//     type: Schema.Types.ObjectId,
//         ref: "categories"
// },
// hours: {
//     type: Schema.Types.ObjectId,
//         ref: "hours"
// },
// phone: {
//     type: String,
//         required: true
// },
// reviewCount: {
//     type: Number,
//         required: true
// },
// price: {
//     type: String,
//         required: true
// },
// rating: {
//     type: String,
//         required: true
// },
// zipcode: {
//     type: String,
//         required: true
// },
// country: {
//     type: String,
//         required: true
// },
// state: {
//     type: String,
//         required: true
// },
// city: {
//     type: String,
//         required: true
// },
// address1: {
//     type: String,
//         required: true
// },
// address2: {
//     type: String
// },
// address3: {
//     type: String
// },
// isClosed: {
//     type: Boolean
// },
// createdAt: {
//     type: Date,
//     default: Date.now
// }