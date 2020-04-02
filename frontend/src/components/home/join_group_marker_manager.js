import mapboxgl from "mapbox-gl";

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(first, second, third, businesses) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].remove();
    }

    for (let i = 0; i < businesses.length; i++) {
      const curBiz = businesses[i];
      let el = document.createElement("div");
      let childEl = document.createElement("div");

      if (curBiz === first) {
        childEl.className = "first-marker";
      } else if (curBiz === second) {
        childEl.className = "second-marker";
      } else if (curBiz === third) {
        childEl.className = "third-marker";
      } else {
        childEl.className = "marker";
      }
      
      el.appendChild(childEl);

      let newMarker = new mapboxgl.Marker(el)
        .setLngLat([curBiz.longitude, curBiz.latitude])
        .addTo(this.map);

      newMarker
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            '<div class="' +
              "home-map-popup" +
              '">' +
              '<img src="' +
              curBiz.photos[0] +
              '" style="' +
              "height:200px; width:200px; object-fit:cover; border-radius: 4px" +
              '"/>' +
              '<div class="' +
              "home-map-popup-title" +
              '">' +
              curBiz.businessName.split("_").join(" ") +
              "</div>" +
              '<div class="' +
              "home-map-popup-price-span" +
              '">' +
              "<span>" +
              curBiz.price +
              "∙" +
              "</span>" +
              "<span>" +
              curBiz.categories.map(category => category.name).join(", ") +
              "</span>" +
              "</div>" +
              '<div class="' +
              "home-map-popup-rating" +
              '">' +
              '<span class="' +
              "home-map-popup-rating-span" +
              '">' +
              curBiz.rating +
              "</span>" +
              " rating out of " +
              '<span class="' +
              "g-map-infowindow-rating-span" +
              '">' +
              curBiz.reviewCount +
              "</span>" +
              " reviews" +
              "</div>" +
              "<div>"
          )
        )
        .addTo(this.map);

      this.markers.push(newMarker);
    }
  }
}
