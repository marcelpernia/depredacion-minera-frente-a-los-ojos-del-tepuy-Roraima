// define access token
mapboxgl.accessToken = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g';

// Set bounds to the Canaima National Park
var bounds = [
  [-64, 4], // Southwest coordinates
  [-59, 7] // Northeast coordinates
];

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/infoamazonia/ckb0vj6k80lz51inzxg2uvw0c',
  zoom: 7.1,
  maxBounds: bounds, // Sets bounds as max
  minZoom: 7,
  maxZoom: 16,
  center: [-62, 5.594],
  attributionControl: false
})

// Make sure the park is fitting to the screen at start
map.fitBounds([
    [-63, 4.7], // Southwest coordinates
    [-60.7, 6.5] // Northeast coordinates
  ])

  // Use a compact attribution
  .addControl(new mapboxgl.AttributionControl({
    compact: true,
    customAttribution: 'Data – Mining sectors: <a target="_blank" rel="noopener" href="https://sosorinoco.org/">SOS Orinoco</a> (2018) and MSc. Vilisa I. Morón Zambrano (Update, Pulitzer 2020) | Satellite imagery by <a target="_blank" rel="noopener" href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/">Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community</a> | Map – Stefano Wrobleski / <a href="https://infoamazonia.org/" target="_bank" rel="noopener">InfoAmazonia <img src="  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAACZ0lEQVQYGQXBXWhVdQAA8N/5n3Pv7r4/btR0fTmcZQma0SISCivDIJYhSET01EMQ9CCl66WHoD3swSBqvfRQBAm9JCU15saKjGEOxbCVKWlbRFPndHe7d/fjnH6/aHJiSiRyRzzg2/L7I+OV47sPNX36fLG1d3Fh7aKOuNXtLV1CllrMytIsFbIo05sMOFf/5sCh6x8fnrp5ZfDdytNnKvW1nu3FneZzpXvfOPXZ6Dunvx7ta+5UyOUlrYoWahf6htdeP2oJCTPdNn7Y2DfVP3VwcuT7o2/KnY61pnpa2uvvDQ4NR+cm/zK28tr4WHZij99iCg2DWzjVhGNs/Khf+eFmN7YvUS04duDI1nCpOnvf2PqJPR0BpR4yGrCCfeT3Br2/R9SKVK44MvfTwfBrdfIVGRtSrLYAUEXM5acukuVYbNDWYfrqH7vCn43ZXQL/NFBpBgECncsYIH//Gv/G5DtYXS6Gvxu/bBYo1VFLyABYr6KNbNOKplsJYur1pnAjy7pEaKAWUyeJgApExMWSehaRNghREtJICiCNqSVCBICIlrimkQtUlmjrng8bQtdVKQKilHKXWgbEGSKs52lHteTVux/5ImyJHzsrZVMOhSq3Oq02aI9oJGxd5eTybRTm6Nt9/a0de0fDo8kLn8ioN6F7haVO5yt0JDxeZO4sLi+y44HSxLNvP5Er5NfDtuYnJw43v/TlfIbeea7l+Y9rbZw8g9l+3c/s/25iaGTbPV295y/dXBT9PD0jVAp+XP98+Ifog5ePjz94p9as+uJDlfmFC0Mz++/a+dVzA5unV8plS1lZU5LzP6Bw8goeTvHbAAAAAElFTkSuQmCC" alt="Logo do InfoAmazonia"></a>'
  }));

// START DISPLAY POPUP ON CLICK: LAYER 'mining-inside-canaima'

// Create a popup, but don't add it to the map yet.
var popupmining_inside = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('click', 'mining-inside-canaima', function(e) {
  // Change the cursor style as a UI indicator.
  map.getCanvas().style.cursor = 'pointer';

  // Get data from map
  var coordinates = e.features[0].geometry.coordinates.slice();
  var name = e.features[0].properties.Name.toUpperCase();
  var mining_area = e.features[0].properties.AMinera;
  var size = Math.round((e.features[0].properties.ha + Number.EPSILON) * 100) / 100; // Get number and round it to up to two decimal places
  var hectare = (size > 2) ? ' hectares' : ' hectare'; // Return plural for measure unit name
  var year = e.features[0].properties.Ano;
  var source = e.features[0].properties.Fuente;

  // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  // Populate the popup and set its coordinates based on the feature found.
  popupmining_inside.setLngLat([e.lngLat.lng, e.lngLat.lat])
    .setHTML('<h2>' + name + '</h2>' + '<p><strong>Mining area: </strong>' + mining_area + '</p>' + '<p><strong>Size: </strong>' + size + hectare + '<p><strong>Year detected: </strong>' + year + '<p><strong>Source: </strong>' + source + '</p>')
    .addTo(map);
});

map.on('mouseleave', 'mining-inside-canaima', function() {
  map.getCanvas().style.cursor = '';
  popupmining_inside.remove();
});


// END DISPLAY POPUP ON CLICK: LAYER 'mining-inside-canaima'

// Change the cursor to a pointer when the mouse is over the mining-inside-canaima layer.
map.on('mouseenter', 'mining-inside-canaima', function() {
  map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'mining-inside-canaima', function() {
  map.getCanvas().style.cursor = '';
});

// START DISPLAY POPUP ON CLICK: LAYER 'mining-outside-canaima'


// Create a popup, but don't add it to the map yet.
var popupmining_inside = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('click', 'mining-outside-canaima', function(e) {
  // Change the cursor style as a UI indicator.
  map.getCanvas().style.cursor = 'pointer';

  // Get data from map
  var coordinates = e.features[0].geometry.coordinates.slice();
  var size = Math.round((e.features[0].properties.Ha + Number.EPSILON) * 100) / 100; // Get number and round it to up to two decimal places
  var hectare = (size > 2) ? ' hectares' : ' hectare'; // Return plural for measure unit name
  var year = e.features[0].properties.Ano;
  var source = e.features[0].properties.Fuente;

  // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  // Populate the popup and set its coordinates based on the feature found.
  popupmining_inside.setLngLat([e.lngLat.lng, e.lngLat.lat])
    .setHTML('<h2>MINING AREA</h2>' + '<p><strong>Size: </strong>' + size + hectare + '<p><strong>Year detected: </strong>' + year + '<p><strong>Source: </strong>' + source + '</p>')
    .addTo(map);
});

map.on('mouseleave', 'mining-outside-canaima', function() {
  map.getCanvas().style.cursor = '';
  popupmining_inside.remove();
});


// END DISPLAY POPUP ON CLICK: LAYER 'mining-outside-canaima'

// Change the cursor to a pointer when the mouse is over the mining-outside-canaima layer.
map.on('mouseenter', 'mining-outside-canaima', function() {
  map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'mining-outside-canaima', function() {
  map.getCanvas().style.cursor = '';
});

map.on('load', function() {
  var layers = map.getStyle().layers;
  // Find the index of all layers except for rasters in the map style
  var firstStyleElements;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type !== 'raster') {
      firstStyleElements = layers[i].id;
      break;
    }
  }
  map.addSource('arcgis', {
    type: 'raster',
    tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
    tileSize: 256
  });

  map.addLayer({
      'id': 'arcgis',
      'type': 'raster',
      'source': 'arcgis',
    },
    firstStyleElements
  );
});

map.addControl(new mapboxgl.NavigationControl({
  showCompass: false
}), 'top-right');
map.scrollZoom.disable();
map.dragRotate.disable();
map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
map.touchZoomRotate.disableRotation();
