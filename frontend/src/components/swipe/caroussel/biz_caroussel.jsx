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
                    <div className="biz-caroussel-cell">
                        <img className="caroussel-picture" src="http://localhost:3000/images/carousel-1.jpg" alt="" />
                    </div>
                    <div className="biz-caroussel-cell">
                        <img className="caroussel-picture" src="http://localhost:3000/images/carousel-2.jpg" alt="" />
                    </div>
                    <div className="biz-caroussel-cell">
                        <img className="caroussel-picture" src="http://localhost:3000/images/carousel-3.jpg" alt="" />
                    </div>
                    <div className="biz-caroussel-cell">
                        <img className="caroussel-picture" src="http://localhost:3000/images/carousel-4.jpg" alt="" />
                    </div>
                    <div className="biz-caroussel-cell">
                        <img className="caroussel-picture" src="http://localhost:3000/images/carousel-5.jpg" alt="" />
                    </div>
                    <div className="biz-caroussel-cell">
                        <img className="caroussel-picture" src="http://localhost:3000/images/carousel-6.jpg" alt="" />
                    </div>
                    <div className="biz-caroussel-cell">
                        <img className="caroussel-picture" src="http://localhost:3000/images/carousel-8.jpg" alt="" />
                    </div>
                    <div className="biz-caroussel-cell">
                        <img className="caroussel-picture" src="http://localhost:3000/images/carousel-9.jpg" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default BizCaroussel;