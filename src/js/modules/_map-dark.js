function initMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZW50aW5hNTMyIiwiYSI6ImNqb3cxaHVmdTFia2gza3M1MzNpcGowcTUifQ.aF2_XmuIhvKLDm4gPZGcUw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/valentina532/cjpo4i21a06d22rpcy4h6q1zg',
        center: [30.5933111, 50.4284607],
        zoom: 14
    });
    map.on("load", function () {
        map.loadImage('assets/img/index/map-marker.png', function (error, image) {
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