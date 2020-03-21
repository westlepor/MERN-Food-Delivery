import React from 'react';
import $ from 'jquery';
import './flickity.css';
import './biz-caroussel.css';
// import './flickity.pkgd';
// import jQueryBridget from 'jquery-bridget';
import Flickity from 'flickity';

class BizCaroussel extends React.Component {
    constructor(props) {
        super(props); 
    }
    
    componentDidMount() {
            // jQueryBridget('flickity', Flickity, $);
            // $('.biz-caroussel-gallery').flickity({
            // wrapAround: 'true',
            // autoPlay: 3000
            // });  
            
        var elem = document.querySelector('.biz-caroussel-gallery');
        var flkty = new Flickity(elem, {
            // options
            // cellAlign: 'left',
            // contain: true
            wrapAround: 'true',
            autoPlay: 3000
        });
        // element argument can be a selector string
        //   for an individual element
        // var flkty = new Flickity('.main-carousel', {
        //     // options
        // });
    }

    render() {

        // let photoDiv = null;
        // const carousselGallery = [
        // ];
        
        
        return(
            <div className="biz-caroussel">
                <div className="biz-caroussel-container">
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
            </div>
        )
    }
}

export default BizCaroussel;