import React from "react";
import mapboxgl from "mapbox-gl";
import './home_map.css';
import './home_map_marker.css';
import MarkerManager from './marker_manager';
import _ from 'lodash';
// import { updateFilter } from "../../actions/filter_action";
// import { fetchBusinessesByCoordinates } from '../../actions/business_actions';

mapboxgl.accessToken =
    "pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw";

class HomeSideMap extends React.Component {
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
        this.MarkerManager = new MarkerManager(this.map);

        this.map.on("idle", () => {
            const curBound = this.map.getBounds()
            this.props.updateFilter("bounds", curBound);
            this.props.fetchBusinessesByCoordinates(curBound).then(() => {
                return this.setState({
                    lng: this.map.getCenter().lng.toFixed(4),
                    lat: this.map.getCenter().lat.toFixed(4),
                    zoom: this.map.getZoom().toFixed(2)
                });
            })
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEmpty(this.props.zoom) && (prevProps.zoom.longitude !== this.props.zoom.longitude) && (prevProps.zoom.latitude !== this.props.zoom.latitude)) {
            this.map.flyTo({
                center: [this.props.zoom.longitude, this.props.zoom.latitude],
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
        if (!_.isEmpty(this.props.businesses)) {
            this.MarkerManager.updateMarkers(Object.values(this.props.businesses));
        }
    }

    render() {
        return (
            <div className="home-map">
                <div ref={el => (this.mapContainer = el)} className="map-container" />
            </div>
        );
    }
}

export default HomeSideMap;


