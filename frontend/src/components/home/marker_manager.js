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
                            '<div class="' + "home-map-popup" + '">' +
                            '<img src="' + marker.photos[0] + '" style="' + "height:200px; width:200px; object-fit:cover; border-radius: 4px" + '"/>' +
                            '<div class="' + "home-map-popup-title" + '">' + marker.businessName.split("_").join(" ") + "</div>" +
                            '<div class="' + "home-map-popup-price-span" + '">' +
                            '<span>' + marker.price + '∙' + "</span>" +
                            '<span>' + marker.categories.map(category => category.name).join(", ") + "</span>" +
                            "</div>" +
                            '<div class="' + "home-map-popup-rating" + '">' +
                            '<span class="' + "home-map-popup-rating-span" + '">' + marker.rating + "</span>" +
                            " rating out of " +
                            '<span class="' + "g-map-infowindow-rating-span" + '">' + marker.reviewCount + "</span>"
                            + " reviews" +
                            "</div>" +
                            "<div>"
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