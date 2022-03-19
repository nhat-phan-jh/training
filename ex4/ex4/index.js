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
let checkChoise = false;
let popup;
let nameLocal;
let fromLocation = [];
let toLocation = [];
const setMarker = async (e) => {
  if (marker) {
    marker.remove();
    popup.remove();
  }
  let textPopup;
  if (e) {
    await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${e[0]},${e[1]}.json?types=poi&access_token=pk.eyJ1Ijoic2VubmluZSIsImEiOiJjbDB0aHljY2UwNnE5M2lwZXA3dG02amRoIn0.OReYhfaCWigJ7ae-eGqogg`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.features.length) {
          textPopup = data.features[0].place_name;
        }
      });
  }

  marker = new mapboxgl.Marker({ color: "red", anchor: "center" })
    .setLngLat([e[0], e[1]])
    .addTo(map);
  popup = new mapboxgl.Popup({ anchor: "bottom" })
    .setLngLat([e[0], e[1]])
    .setText(textPopup || nameLocal)
    .addTo(map);
};
map.on("click", async (e) => {
  // console.log(e);

  let tempName = map.queryRenderedFeatures(e.point);
  if (tempName.length) {
    nameLocal = tempName[0].properties.name;
  }
  // marker = new mapboxgl.Marker({ color: "red", anchor: "center" })
  //   .setLngLat([e.lngLat.lng, e.lngLat.lat])

  //   .addTo(map);

  await setMarker([e.lngLat.lng, e.lngLat.lat]);
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
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${valueSearch}.json?limit=7&proximity=106.59050000000002%2C10.6965&language=en-US&access_token=pk.eyJ1IjoiaHRjOHMiLCJhIjoiY2wwdGFwcnFiMGxveTNkcG5hbXM5ZXg1MSJ9.I1Q_Ltvau-ZA1lAkCnsGhQ`
  );
  let result = await temp.json();
  let ul = document.getElementById("list_search");

  // console.log(ul);
  // console.log(result);
  ul.innerHTML = "";
  for (let i = 0; i < result.features.length; i++) {
    let li = document.createElement("li");
    console.log(result.features[i].place_name);

    li.appendChild(document.createTextNode(result.features[i].place_name));
    // li.setAttribute("lg", result.features[i].center[0]);
    li.setAttribute("value", result.features[i].place_name);
    li.addEventListener("click", () => {
      choiseLocation(result.features[i].center, result.features[i].place_name);
    });

    ul.appendChild(li);
  }
};
const choiseLocation = (e, name) => {
  let ul = document.getElementById("list_search");
  document.getElementById("input_search").value = name;
  ul.innerHTML = "";
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
const fromBox = async () => {
  let valueSearch = document.getElementById("input_search_direct1").value;

  const temp = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${valueSearch}.json?limit=10&proximity=106.59050000000002%2C10.6965&language=en-US&access_token=pk.eyJ1IjoiaHRjOHMiLCJhIjoiY2wwdGFwcnFiMGxveTNkcG5hbXM5ZXg1MSJ9.I1Q_Ltvau-ZA1lAkCnsGhQ`
  );
  let result = await temp.json();
  let ul = document.getElementById("list_direct");

  // console.log(ul);
  fromLocation = result.features[0].center;
  // console.log(result.features[0].center);
  ul.innerHTML = "";
  for (let i = 0; i < result.features.length; i++) {
    let li = document.createElement("li");
    console.log(result.features[i].place_name);

    li.appendChild(document.createTextNode(result.features[i].place_name));
    // li.setAttribute("lg", result.features[i].center[0]);
    li.setAttribute("value", result.features[i].place_name);
    li.addEventListener("click", () => {
      choiseFrom(result.features[i].center, result.features[i].place_name);
    });

    ul.appendChild(li);
  }
};
const toBox = async () => {
  let valueSearch = document.getElementById("input_search_direct2").value;
  // console.log(valueSearch);
  const temp = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${valueSearch}.json?limit=7&proximity=106.59050000000002%2C10.6965&language=en-US&access_token=pk.eyJ1IjoiaHRjOHMiLCJhIjoiY2wwdGFwcnFiMGxveTNkcG5hbXM5ZXg1MSJ9.I1Q_Ltvau-ZA1lAkCnsGhQ`
  );
  let result = await temp.json();
  let ul = document.getElementById("list_direct");

  // console.log(ul);
  // console.log(result);

  ul.innerHTML = "";
  for (let i = 0; i < result.features.length; i++) {
    let li = document.createElement("li");
    // console.log(result.features[i].place_name);

    li.appendChild(document.createTextNode(result.features[i].place_name));
    // li.setAttribute("lg", result.features[i].center[0]);
    li.setAttribute("value", result.features[i].place_name);
    li.addEventListener("click", () => {
      choiseTo(result.features[i].center, result.features[i].place_name);
    });

    ul.appendChild(li);
  }
};
const choiseFrom = (e, name) => {
  let ul = document.getElementById("list_direct");

  document.getElementById("input_search_direct1").value = name;

  fromLocation = e;
  ul.innerHTML = "";
  // map.flyTo({
  //   center: e,
  //   zoom: 13,
  // });
  // setMarker(e);
};
const choiseTo = async (e, name) => {

  let ul = document.getElementById("list_direct");
  document.getElementById("input_search_direct2").value = name;
  ul.innerHTML = "";
  toLocation = e;
  if (fromLocation.length) {
    const temp = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${fromLocation[0]},${fromLocation[1]};${toLocation[0]},${toLocation[1]}.json?geometries=geojson&steps=true&overview=full&language=en&access_token=pk.eyJ1IjoiaHRjOHMiLCJhIjoiY2wwdGFwcnFiMGxveTNkcG5hbXM5ZXg1MSJ9.I1Q_Ltvau-ZA1lAkCnsGhQ`
    );
    // const temp = await fetch(
    //   `https://api.mapbox.com/matching/v5/mapbox/driving/${fromLocation[0]},${fromLocation[1]};${toLocation[0]},${toLocation[1]}?geometries=geojson&radiuses=25;25&steps=true&access_token=pk.eyJ1Ijoic2VubmluZSIsImEiOiJjbDB0aHljY2UwNnE5M2lwZXA3dG02amRoIn0.OReYhfaCWigJ7ae-eGqogg`
    // );

    let result = await temp.json();
    console.log(result.routes[0].legs[0].steps);
    if (map.getSource("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: result.routes[0].geometry,
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#03AA46",
        "line-width": 8,
        "line-opacity": 0.8,
      },
    });
    console.log(result.waypoints[0].location);
    map.flyTo({
      center: result.waypoints[0].location,
      zoom: 8,
    });
    // ul.style.overflow ="auto";
    //   ul.style.maxHeight = "300px"; 
    if (result.routes[0].legs[0].steps.length) {
      for (let i = 0; i < result.routes[0].legs[0].steps.length; i++) {
        let li = document.createElement("li");
        // console.log(result.features[i].place_name);

        li.appendChild(
          document.createTextNode(
            result.routes[0].legs[0].steps[i].maneuver.instruction
          )
        );
        // li.setAttribute("lg", result.features[i].center[0]);
        // li.setAttribute("value", result.features[i].place_name);
        // li.addEventListener("click", () => {
        //   choiseTo(result.features[i].center, result.features[i].place_name);
        // });

        ul.appendChild(li);
      }
    }
  }
  
  
  // map.flyTo({
  //   center: e,
  //   zoom: 13,
  // });
  // setMarker(e);
};
function setShowDirect() {
  let box_direct = document.getElementById("box_direct");
  box_direct.style.display = "block";
}
function setColoseDirect() {
  let box_direct = document.getElementById("box_direct");
  fromLocation = [];
  toLocation = [];
  let ul = document.getElementById("list_direct");
  ul.innerHTML = "";
  document.getElementById("input_search_direct1").value = "";
  document.getElementById("input_search_direct2").value = "";
    if (map.getSource("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
  box_direct.style.display = "none";
}
