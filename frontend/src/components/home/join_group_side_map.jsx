import React from "react";
import mapboxgl from "mapbox-gl";
import "./join_group_map.css";
import "./join_group_map_marker.css";
import JoinGroupMarkerManager from "./join_group_marker_manager";
import _ from "lodash";

mapboxgl.accessToken =
    "pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw";

class JoinGroupSideMap extends React.Component {
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
        if (_.isEmpty(this.curGroup)) {
            return null;
        }
        this.findTopThree(this.curGroup)
        this.joinMarkerManager.updateMarkers(this.firstBiz, this.secondBiz, this.thirdBiz, this.businesses);
        const averageCoodinates = {
            latitude: ((this.firstBiz.latitude + this.secondBiz.latitude + this.thirdBiz.latitude) / 3),
            longitude: ((this.firstBiz.longitude + this.secondBiz.longitude + this.thirdBiz.longitude) / 3)
        }

        this.map.flyTo({
            center: [averageCoodinates.longitude, averageCoodinates.latitude],
            zoom: 13,
            bearing: 0,
            speed: 1,
            curve: 1,
            easing: function (t) {
                return t;
            },
            essential: true
        });
    }

    findTopThree(group) {
        const bizsValues = Object.values(this.businesses);
        const likedBizs = group.likedBusinesses;
        this.first = 0;
        this.second = 0;
        this.third = 0;
        for (let i = 0; i < bizsValues.length; i++) {
            const curBizId = bizsValues[i]._id;
            if (likedBizs[curBizId].length >= this.first) {
                this.third = this.second;
                this.thirdBiz = this.secondBiz;
                this.second = this.first;
                this.secondBiz = this.firstBiz;
                this.first = likedBizs[curBizId].length;
                this.firstBiz = bizsValues[i];
            } else if (likedBizs[curBizId].length >= this.second) {
                this.third = this.second;
                this.thirdBiz = this.secondBiz;
                this.second = likedBizs[curBizId].length;
                this.secondBiz = bizsValues[i];
            } else if (likedBizs[curBizId].length >= this.third) {
                this.third = likedBizs[curBizId].length;
                this.thirdBiz = bizsValues[i];
            }
        }
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
                <div
                    ref={el => (this.mapContainer = el)}
                    className="join-group-map-container"
                />
            </div>
        );
    }
}

export default JoinGroupSideMap;