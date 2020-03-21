import React from 'react';

const BizCarousselGalleryCell = (props) => {
    const srcLink = props.photoUrl;

    return (
        <div className="biz-caroussel-gallery-cell">
            <img src={srcLink} />
        </div>
    )
}

export default BizCarousselGalleryCell;