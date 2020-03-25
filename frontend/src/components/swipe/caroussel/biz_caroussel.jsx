import React from 'react';
import './biz-caroussel.css';
import Flickity from "flickity";

class BizCaroussel extends React.Component {
    componentDidMount() {
        var elem = document.querySelector('.biz-caroussel-gallery');
        new Flickity(elem, {
          wrapAround: "true",
          autoPlay: 3000,
          contain: true,
          setGallerySize: false
        });
    }

    render() {
        return(
            <div className="biz-caroussel">
                <div className="biz-caroussel-gallery">
                    {this.props.curBiz.photos.map((photoUrl, idx)=>(
                        <div className="biz-caroussel-cell" key={idx}>
                            <img className="caroussel-picture" src={photoUrl}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default BizCaroussel;
