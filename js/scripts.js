var map = L.map('mapContainer').setView([40.689021, -74.018397], 11);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

L.marker([40.738107, -73.879215]).addTo(map)
  .bindPopup('Elmhurst')

L.marker([40.628772, -74.029068]).addTo(map)
  .bindPopup('Bay Ridge')

L.marker([40.737850, -73.978825]).addTo(map)
  .bindPopup('Kips Bay')

L.marker([40.572419, -74.093762]).addTo(map)
  .bindPopup('Midland Beach');