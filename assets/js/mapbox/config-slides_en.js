// define access token
mapboxgl.accessToken = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/infoamazonia/ckb0vj6k80lz51inzxg2uvw0c',
    zoom: 7.1,
    center: [-62, 5.594],
    attributionControl: false
  })

  // Use a compact attribution
  .addControl(new mapboxgl.AttributionControl({
    compact: true,
    customAttribution: 'Data – Mining sectors: <a target="_blank" rel="noopener" href="https://sosorinoco.org/">SOS Orinoco</a> (2018) and MSc. Vilisa I. Morón Zambrano (Update, Pulitzer 2020) | Satellite imagery by <a target="_blank" rel="noopener" href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/">Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community</a> | Map – Stefano Wrobleski / <a href="https://infoamazonia.org/" target="_bank" rel="noopener">InfoAmazonia <img src="  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAACZ0lEQVQYGQXBXWhVdQAA8N/5n3Pv7r4/btR0fTmcZQma0SISCivDIJYhSET01EMQ9CCl66WHoD3swSBqvfRQBAm9JCU15saKjGEOxbCVKWlbRFPndHe7d/fjnH6/aHJiSiRyRzzg2/L7I+OV47sPNX36fLG1d3Fh7aKOuNXtLV1CllrMytIsFbIo05sMOFf/5sCh6x8fnrp5ZfDdytNnKvW1nu3FneZzpXvfOPXZ6Dunvx7ta+5UyOUlrYoWahf6htdeP2oJCTPdNn7Y2DfVP3VwcuT7o2/KnY61pnpa2uvvDQ4NR+cm/zK28tr4WHZij99iCg2DWzjVhGNs/Khf+eFmN7YvUS04duDI1nCpOnvf2PqJPR0BpR4yGrCCfeT3Br2/R9SKVK44MvfTwfBrdfIVGRtSrLYAUEXM5acukuVYbNDWYfrqH7vCn43ZXQL/NFBpBgECncsYIH//Gv/G5DtYXS6Gvxu/bBYo1VFLyABYr6KNbNOKplsJYur1pnAjy7pEaKAWUyeJgApExMWSehaRNghREtJICiCNqSVCBICIlrimkQtUlmjrng8bQtdVKQKilHKXWgbEGSKs52lHteTVux/5ImyJHzsrZVMOhSq3Oq02aI9oJGxd5eTybRTm6Nt9/a0de0fDo8kLn8ioN6F7haVO5yt0JDxeZO4sLi+y44HSxLNvP5Er5NfDtuYnJw43v/TlfIbeea7l+Y9rbZw8g9l+3c/s/25iaGTbPV295y/dXBT9PD0jVAp+XP98+Ifog5ePjz94p9as+uJDlfmFC0Mz++/a+dVzA5unV8plS1lZU5LzP6Bw8goeTvHbAAAAAElFTkSuQmCC" alt="Logo do InfoAmazonia"></a>'
  }));

// Slider elements
var title = document.getElementById('location-title');
var description = document.getElementById('location-description');

var locations = [{
    'id': '1',
    'title': 'The Mines in the Gran Sabana',
    'description': '1,033 hectares inside Canaima National Park are being occupied by mining operations. These show the greatest activity. This study detected 21 new illegal mining sites.',
    'camera': {
      center: [-62, 5.594],
      zoom: 7.1
    }
  },
  {
    'id': '2',
    'title': 'Campo Alegre',
    'description': 'The sector most impacted by mining activity inside the Park. Located in the Park’s eastern sector, in the Gran Sabana. Today only a handful of miners are working in the obliterated area.',
    'camera': {
      center: [-61.2, 4.925],
      zoom: 13,
      speed: 0.5,
      curve: 1
    }
  },
  {
    'id': '3',
    'title': 'San José de Guarima',
    'description': 'Covers 85 hectares inside the Park. It stands in third place among the sectors most affected by mining activity in the protected zone and is one of the areas requiring greater attention.',
    'camera': {
      center: [-61.42, 4.93],
      zoom: 13,
      speed: 0.5,
      curve: 1
    }
  },
  {
    'id': '4',
    'title': 'Acareden',
    'description': 'Upstream from the mouth of the Aponwao River, a must-see destination, thanks to the falls sharing  the same name. The mines occupy 84 hectares inside the Park.',
    'camera': {
      center: [-61.62, 4.8],
      zoom: 13,
      speed: 0.5,
      curve: 1
    }
  },
  {
    'id': '5',
    'title': 'Río Pirma',
    'description': 'At the mouth of the Pirma River, there are two large mining focal points inside the Park, occupying 71 hectares. The satellite imagery shows a landing strip outside the Park’s boundaries.',
    'camera': {
      center: [-62.425, 4.87],
      zoom: 13,
      speed: 0.5,
      curve: 1
    }
  },
  {
    'title': 'The Mines in the Gran Sabana',
    'description': '1,033 hectares inside Canaima National Park are being occupied by mining operations. These show the greatest activity. This study detected 21 new illegal mining sites.',
    'camera': {
      center: [-62, 5.594],
      zoom: 7.1,
      speed: 0.5,
      curve: 1
    }
  }
];

function playback(index) {
  title.textContent = locations[index].title;
  description.textContent = locations[index].description;

  // Animate the map position based on camera properties
  map.flyTo(locations[index].camera);

  map.once('moveend', function() {
    // Duration the slide is on screen after interaction
    window.setTimeout(function() {
      // Increment index
      index = index + 1 === locations.length ? 0 : index + 1;
      playback(index);
    }, 5000); // After callback, show the location for 5 seconds.
  });
}

// Display the last title/description first
title.textContent = locations[locations.length - 1].title;
description.textContent = locations[locations.length - 1].description;


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
    firstStyleElements,
    // Start the playback animation for each borough
    playback(0)
  );
});

map.scrollZoom.disable();
map.dragRotate.disable();
map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
map.touchZoomRotate.disableRotation();
