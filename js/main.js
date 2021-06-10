var map = L.map('map', {
	crs: L.CRS.Simple
});

var bounds = [[0,0], [2000,2000]];
var image = L.imageOverlay('/img/uqm_map_full.png', bounds).addTo(map);

map.fitBounds(bounds);