function initWhiteMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZW50aW5hNTMyIiwiYSI6ImNqb3cxaHVmdTFia2gza3M1MzNpcGowcTUifQ.aF2_XmuIhvKLDm4gPZGcUw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/valentina532/cjpstjqno3hfb2rnqai46wm83',
        center: [30.5933111, 50.4284607],
        zoom: 14
    });
    map.on("load", function () {
        map.loadImage('../img/index/map-marker-green.png', function (error, image) {
            if (error) throw error;
            map.addImage("custom-marker", image);
            map.addLayer({
                id: "markers",
                type: "symbol",
                source: {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [{
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": ["30.5933111", "50.4284607"]
                            }
                        }]
                    }
                },
                layout: {
                    "icon-image": "custom-marker",
                }
            });
        });
    });
}