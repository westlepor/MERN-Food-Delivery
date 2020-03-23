import mapboxgl from "mapbox-gl";

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) {
        let businessesObj = {}
        for (let i = 0; i < businesses.length; i++) {
            const curId = businesses[i].id;
            businessesObj[curId] = businesses[i]
        }

        for (let i = 0; i < this.markers.length; i++) {
            if (businessesObj[this.markers[i]] === undefined) {
                this.removeMarker(this.markers[i]);
            }
        }

        for (let i = 0; i < businesses.length; i++) {
            const marker = businesses[i];
            let el = document.createElement("div");
            let childEl = document.createElement("div");
            childEl.className = "marker";
            el.appendChild(childEl);

            new mapboxgl.Marker(el)
                .setLngLat([marker.longitude, marker.latitude])
                .addTo(this.map);

            new mapboxgl.Marker(el)
                .setLngLat([marker.longitude, marker.latitude])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 })
                        .setHTML(
                            "<h3>" +
                            marker.businessName +
                            "</h3><p>"
                        )
                )
                .addTo(this.map);
        }
    }

    removeMarker(marker) {
        this.markers.remove();
        delete this.markers[marker.id];
    }

}