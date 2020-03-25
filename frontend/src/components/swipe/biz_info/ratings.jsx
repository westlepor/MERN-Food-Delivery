import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faExternalLinkAlt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Ratings = (props) => {

    return (
        <div className="ratings">
            <FontAwesomeIcon icon={faStar} size="1x" />
            <FontAwesomeIcon icon={faStar} size="1x" />
            <FontAwesomeIcon icon={faStar} size="1x" />
            <FontAwesomeIcon icon={faStar} size="1x" />
            <FontAwesomeIcon icon={faStarHalfAlt} size="1x" />
        </div>
    )
}

export default Ratings;

