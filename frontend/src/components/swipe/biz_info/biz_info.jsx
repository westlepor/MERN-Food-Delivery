import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class BizInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='biz-info'>
                <h1 className='biz-name'>Blue Bottle</h1>
                <div className='biz-rating'>5.0</div>
                <div className='biz-review-count'>5000</div>
                <div>categories</div>

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