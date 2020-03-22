import React from "react";
import mapboxgl from "mapbox-gl";
import './swipe_main_map.css';

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw";

class SwipeMainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.431297,
      lat: 37.773972,
      zoom: 13
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    if (this.props.businesses != null){
        const curBusinesses = Object.values(
            this.props.businesses
        );
        
        curBusinesses.forEach( function(marker) {
          // create a HTML element for each feature
          var el = document.createElement("div");
          var childEl = document.createElement("div");
          childEl.className = "marker";
          el.appendChild(childEl);

          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el)
            .setLngLat([marker.longitude, marker.latitude])
            .addTo(map);

          new mapboxgl.Marker(el)
            .setLngLat([marker.longitude, marker.latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  "<h3>" +
                    marker.businessName +
                    "</h3><p>" +
                    marker.businessName +
                    "</p>"
                )
            )
            .addTo(map);
        });    
    }
  }

  render() {
    return (
      <div className="swipe-main-map">
        <div>
          <div className="sidebar-style">
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="map-container" />
      </div>
    );
  }
}

export default SwipeMainMap;


