import React from "react";
import mapboxgl from "mapbox-gl";
import "./join_group_map.css";
import "./join_group_map_marker.css";
import JoinGroupMarkerManager from "./join_group_marker_manager";
import _ from "lodash";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw";

class JoinGroupMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.402022,
      lat: 37.788228,
      zoom: 13.5
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.402022, 37.788228],
      zoom: 13.5
    });
    this.joinMarkerManager = new JoinGroupMarkerManager(this.map);
    this.setState({
      lng: this.map.getCenter().lng.toFixed(4),
      lat: this.map.getCenter().lat.toFixed(4),
      zoom: this.map.getZoom().toFixed(2)
    });
  }

  markerRender() {
    if (_.isEmpty(this.curGroup)){
      return null;
    }
    // this.map.flyTo({
    //   center: [this.curGroup.longitude, this.curGroup.latitude],
    //   zoom: 14,
    //   bearing: 0,
    //   speed: 1,
    //   curve: 1,
    //   easing: function(t) {
    //     return t;
    //   },
    //   essential: true
    // });

    this.joinMarkerManager.updateMarkers(this.businesses);
  }

  render() {
    if (!_.isEmpty(this.props.groups)) {
      this.curGroup = Object.values(this.props.groups)[0];
      this.businesses = this.curGroup.businesses;
    } else {
      this.curGroup = {};
      this.businesses = [];
    }
    
    this.markerRender();

    return (
      <div className="join-group-map">
        <div>
          <div className="join-group-sidebar-style">
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div
          ref={el => (this.mapContainer = el)}
          className="join-group-map-container"
        />
      </div>
    );
  }
}

export default JoinGroupMap;
