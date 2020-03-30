import React from "react";
import mapboxgl from "mapbox-gl";
import './swipe_main_map.css';

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw";

class SwipeMainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: this.props.curBiz.longitude,
      lat: this.props.curBiz.latitude,
      zoom: 14
    };
    this.addCurrentPopup = this.addCurrentPopup.bind(this);
    console.log(this.props.curBiz)
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    this.map.on("move", () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });

    if (this.props.businesses != null){
        const curBusinesses = Object.values(
            this.props.businesses
        );

        const that = this;
        curBusinesses.forEach( function(marker) {
          // create a HTML element for each feature
          const el = document.createElement("div");
          const childEl = document.createElement("div");
          childEl.className = "marker";
          el.appendChild(childEl);

          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el)
            .setLngLat([marker.longitude, marker.latitude])
            .addTo(that.map);

          if (marker._id === that.props.curBiz._id){
            that.addCurrentPopup(el)
          } else {
            new mapboxgl.Marker(el)
              .setLngLat([marker.longitude, marker.latitude])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                  .setHTML(
                    '<div class="' + "swipe-map-popup" + '">' +
                      '<img src="' + marker.photos[0] + '" style="' + "height:200px; width:200px; object-fit:cover; border-radius: 4px" + '"/>' +
                      '<div class="' + "swipe-map-popup-title" + '">' + marker.businessName.split("_").join(" ") +  "</div>" +
                      '<div class="' + "swipe-map-popup-price-span" + '">' + 
                        '<span>' + marker.price + '∙' + "</span>" +
                        '<span>' + marker.categories.map(category=>category.name).join(", ") + "</span>" + 
                      "</div>" +
                      '<div class="' + "swipe-map-popup-rating" + '">' +
                        '<span class="' + "swipe-map-popup-rating-span" + '">' + marker.rating + "</span>" +
                        " rating out of " +
                        '<span class="' + "g-map-infowindow-rating-span" + '">' + marker.reviewCount + "</span>" 
                        + " reviews" + 
                      "</div>" + 
                    "<div>"
                  )
              )
              .addTo(that.map);
          }
        });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.curBiz._id !== prevProps.curBiz._id)) {
      this.map.flyTo({
        center: [this.props.curBiz.longitude, this.props.curBiz.latitude],
        zoom: 14,
        bearing: 0,
        speed: 1,
        curve: 1,
        easing: function (t) {
          return t;
        },
        essential: true
      });
    }
    const el = document.createElement("div");
    const childEl = document.createElement("div");
    childEl.className = "marker";
    el.appendChild(childEl);
    this.addCurrentPopup(el);
  }   

  addCurrentPopup(el){
    new mapboxgl.Marker(el)
      .setLngLat([this.props.curBiz.longitude, this.props.curBiz.latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25, closeOnMove: true })
          .setHTML(
            '<div class="' + "swipe-map-popup" + '">' +
            '<img src="' + this.props.curBiz.photos[0] + '" style="' + "height:200px; width:200px; object-fit:cover; border-radius: 4px" + '"/>' +
            '<div class="' + "swipe-map-popup-title" + '">' + this.props.curBiz.businessName.split("_").join(" ") + "</div>" +
            '<div class="' + "swipe-map-popup-price-span" + '">' +
            '<span>' + this.props.curBiz.price + '∙' + "</span>" +
            '<span>' + this.props.curBiz.categories.map(category => category.name).join(", ") + "</span>" +
            "</div>" +
            '<div class="' + "swipe-map-popup-rating" + '">' +
            '<span class="' + "swipe-map-popup-rating-span" + '">' + this.props.curBiz.rating + "</span>" +
            " rating out of " +
            '<span class="' + "g-map-infowindow-rating-span" + '">' + this.props.curBiz.reviewCount + "</span>"
            + " reviews" +
            "</div>" +
            "<div>"
          )
      )
      .addTo(this.map)
      .togglePopup();
  }

  render() {
    return (
      <div className="swipe-main-map">
        <div className="sidebar-style">
          Longitude : {this.state.lng} | Latitude : {this.state.lat} | Zoom:{" "}
          {this.state.zoom}
        </div>
        <div ref={el => (this.mapContainer = el)} className="map-container" />
      </div>
    );
  }
}

export default SwipeMainMap;


