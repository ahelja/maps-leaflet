var map = L.map('map', {
	crs: L.CRS.Simple,
	center: [0, 0],
	zoom: 3
});

var TILE_URL = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';

L.TileLayer.CusomMap = L.TileLayer.extend({
	getTileUrl: function(coord) {

		var url = TILE_URL
			.replace('{x}', coord.x)
			.replace('{y}', coord.y)
			.replace('{z}', coord.z);
		
		console.log('url:', url);

		return url;
	}
});

L.tileLayer.customMap = function() {
	return new L.TileLayer.CusomMap();
}

map.addLayer( L.tileLayer.customMap() );

