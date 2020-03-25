import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faExternalLinkAlt, faStar as faStarSolid, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const StarDiv = () => (
    <FontAwesomeIcon icon={faStarSolid} size="1x" />
);

const HalfStarDiv = () => (
    <FontAwesomeIcon icon={faStarHalfAlt} size="1x" />
);

const WhiteStarDiv = () => (
    <FontAwesomeIcon icon={faStarEmpty} size="1x" />
);


const Ratings = (props) => {
    const starDiv = [];
    const starInt = parseInt(props.ratings);
    const starFloat = parseFloat(props.ratings);

    if (starInt === starFloat){
        for (var i = 0; i < starInt; i++) {
            starDiv.push(<StarDiv key={i} />);
        }
        for (var i = 4; i >= starInt; i--) {
            starDiv.push(<WhiteStarDiv key={i} />);
        }
    } else {
        for (var i = 0; i < starInt; i++) {
            starDiv.push(<StarDiv key={i} />);
        }

        starDiv.push(<HalfStarDiv key={starInt} />);

        for (var i = 4; i >= starFloat; i--) {
            starDiv.push(<WhiteStarDiv key={i} />);
        }
    }
    return (
        <div className="ratings">
            {starDiv}
        </div>
    )
}

export default Ratings;
