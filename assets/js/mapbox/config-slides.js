// define access token
mapboxgl.accessToken = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/infoamazonia/ckaq9zn241cux1iqmv7p7fnwg',
    zoom: 7.1,
    center: [-62, 5.594],
    attributionControl: false
  })

  // Use a compact attribution
  .addControl(new mapboxgl.AttributionControl({
    compact: true,
    customAttribution: 'Datos – Minería: <a target="_blank" rel="noopener" href="https://sosorinoco.org/">SOS Orinoco</a> (2018) y MSc. Vilisa I. Morón Zambrano (Actualización, Pulitzer 2020) | Imágenes satelitales por <a target="_blank" rel="noopener" href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/">Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN y la comunidad de usuários GIS</a> | Mapa – Stefano Wrobleski / <a href="https://infoamazonia.org/" target="_bank" rel="noopener">InfoAmazonia <img src="  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAACZ0lEQVQYGQXBXWhVdQAA8N/5n3Pv7r4/btR0fTmcZQma0SISCivDIJYhSET01EMQ9CCl66WHoD3swSBqvfRQBAm9JCU15saKjGEOxbCVKWlbRFPndHe7d/fjnH6/aHJiSiRyRzzg2/L7I+OV47sPNX36fLG1d3Fh7aKOuNXtLV1CllrMytIsFbIo05sMOFf/5sCh6x8fnrp5ZfDdytNnKvW1nu3FneZzpXvfOPXZ6Dunvx7ta+5UyOUlrYoWahf6htdeP2oJCTPdNn7Y2DfVP3VwcuT7o2/KnY61pnpa2uvvDQ4NR+cm/zK28tr4WHZij99iCg2DWzjVhGNs/Khf+eFmN7YvUS04duDI1nCpOnvf2PqJPR0BpR4yGrCCfeT3Br2/R9SKVK44MvfTwfBrdfIVGRtSrLYAUEXM5acukuVYbNDWYfrqH7vCn43ZXQL/NFBpBgECncsYIH//Gv/G5DtYXS6Gvxu/bBYo1VFLyABYr6KNbNOKplsJYur1pnAjy7pEaKAWUyeJgApExMWSehaRNghREtJICiCNqSVCBICIlrimkQtUlmjrng8bQtdVKQKilHKXWgbEGSKs52lHteTVux/5ImyJHzsrZVMOhSq3Oq02aI9oJGxd5eTybRTm6Nt9/a0de0fDo8kLn8ioN6F7haVO5yt0JDxeZO4sLi+y44HSxLNvP5Er5NfDtuYnJw43v/TlfIbeea7l+Y9rbZw8g9l+3c/s/25iaGTbPV295y/dXBT9PD0jVAp+XP98+Ifog5ePjz94p9as+uJDlfmFC0Mz++/a+dVzA5unV8plS1lZU5LzP6Bw8goeTvHbAAAAAElFTkSuQmCC" alt="Logo do InfoAmazonia"></a>'
  }));

// Slider elements
var title = document.getElementById('location-title');
var description = document.getElementById('location-description');

var locations = [{
    'id': '1',
    'title': 'Minas en la Gran Sabana',
    'description': '1.033 hectáreas dentro del Parque Nacional Canaima están intervenidas por la actividad minera. Estas son las de mayor operación. En este estudio se detectaron 21 nuevos sitios de extracción ilegal.',
    'camera': {
      center: [-62, 5.594],
      zoom: 7.1
    }
  },
  {
    'id': '2',
    'title': 'Campo Alegre',
    'description': 'El sector con mayor área impactada por minería dentro del Parque. Está en la zona oriental, en la Gran Sabana. En el área arrasada trabajan hoy contados mineros.',
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
    'description': 'Se extiende en 85 hectáreas dentro del Parque. Es el tercer sector con mayor impacto por la minería en la zona protegida y una de las áreas que requiere mayor atención.',
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
    'description': 'Aguas arriba de la desembocadura del río Aponwao, un destino obligado por el salto de agua homónimo. Las minas ocupan 84 hectáreas dentro del Parque.',
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
    'description': 'En la desembocadura del río Pirma, hay dos grandes focos mineros dentro del Parque en 71 hectáreas. Los sensores muestran, fuera del parque, una pista de aterrizaje.',
    'camera': {
      center: [-62.425, 4.87],
      zoom: 13,
      speed: 0.5,
      curve: 1
    }
  },
  {
    'title': 'Minas en la Gran Sabana',
    'description': '1.033 hectáreas dentro del Parque Nacional Canaima están intervenidas por la actividad minera. Estas son las de mayor operación. En este estudio se detectaron 21 nuevos sitios de extracción ilegal.',
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
