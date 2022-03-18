mapboxgl.accessToken =
  "pk.eyJ1IjoiaHRjOHMiLCJhIjoiY2wwdGFwcnFiMGxveTNkcG5hbXM5ZXg1MSJ9.I1Q_Ltvau-ZA1lAkCnsGhQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/outdoors-v11", // style URL
  center: [106.69739, 10.7571], // starting position
  zoom: 13, // starting zoom
  hash: true,
});
data = {
  type: "FeatureCollection",
};
let marker;
const setMarker = (e) => {
  if (marker) {
    marker.remove();
  }
  marker = new mapboxgl.Marker({ color: "red", anchor: "center" })
    .setLngLat([e[0], e[1]])

    .addTo(map);
};
map.on("click", (e) => {
  // console.log(e);

  var features = map.queryRenderedFeatures(e.point);

  // marker = new mapboxgl.Marker({ color: "red", anchor: "center" })
  //   .setLngLat([e.lngLat.lng, e.lngLat.lat])

  //   .addTo(map);
  setMarker([e.lngLat.lng, e.lngLat.lat]);
  const popup = new mapboxgl.Popup({ anchor: "bottom" })
    .setLngLat([e.lngLat.lng, e.lngLat.lat])
    .setText(`${features[0].properties.name}`)
    .addTo(map);
});
// map.addControl(
//   new mapboxgl.GeolocateControl({
//     positionOptions: {
//       enableHighAccuracy: true,
//     },
//     trackUserLocation: true,
//     showUserHeading: true,
//   })
// );
// const marker1 = new mapboxgl.Marker()
//   .setLngLat([109.5342828, 13.6212253])
//   .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
//   .addTo(map);

// console.log(marker.getPopup()); // return the popup instance
// map.addControl(
//   new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl,
//   })
// );
const searchBox = async () => {
  let valueSearch = document.getElementById("input_search").value;

  const temp = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${valueSearch}.json?limit=5&proximity=106.59050000000002%2C10.6965&language=en-US&access_token=pk.eyJ1IjoiaHRjOHMiLCJhIjoiY2wwdGFwcnFiMGxveTNkcG5hbXM5ZXg1MSJ9.I1Q_Ltvau-ZA1lAkCnsGhQ`
  );
  let result = await temp.json();
  let ul = document.getElementById("list_search");
  ul.style.display = "block";
  // console.log(ul);
  // console.log(result);
  ul.innerHTML = "";
  for (let i = 0; i < result.features.length; i++) {
    let li = document.createElement("li");
    console.log(result.features[i].place_name);

    li.appendChild(document.createTextNode(result.features[i].place_name));
    // li.setAttribute("lg", result.features[i].center[0]);
    // li.setAttribute("la", result.features[i].center[1]);
    li.addEventListener("click", () => {
      choiseLocation(result.features[i].center);
    });

    ul.appendChild(li);
  }
};
const choiseLocation = (e) => {
  let ul = document.getElementById("list_search");
  ul.style.display = "none";
  map.flyTo({
    center: e,
    zoom: 13,
  });
  setMarker(e);
};
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true,
  })
);