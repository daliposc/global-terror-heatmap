// basemap objects
darkBasemap = L.tileLayer(('https://api.mapbox.com/styles/v1/connord/cj00qqid7007i2rpla8qitsgl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29ubm9yZCIsImEiOiJjaXIya3VjYXgwMDA4ZnBubWMwbGM4aW4yIn0.OmX2i2_gUHm12VynRff6qA'), {
        maxZoom: 10, 
        minZoom: 3,
        attribution: 'Mapbox &copy | OpenStreetMaps &copy'
    });

satelliteBasemap = L.tileLayer(('https://api.mapbox.com/styles/v1/connord/ciugec1dm009f2iruamiched0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29ubm9yZCIsImEiOiJjaXIya3VjYXgwMDA4ZnBubWMwbGM4aW4yIn0.OmX2i2_gUHm12VynRff6qA'), {
        maxZoom: 10, 
        minZoom: 3, 
        attribution: 'Mapbox &copy | OpenStreetMaps &copy',
    });

// storymap layers
var layers= {
    'Satellite': [satelliteBasemap],
    'Dark Basemap': [darkBasemap],
    '1971': [seventyOne_ninetyOne_lyr],
    '1991': [ninetyOne_twentyEleven_lyr],
    '2012': [twentyTwelve_twentyFifteen_lyr]
};

// story map scenes
var scenes = {
    scene1: {lat: 40.111688, lng: -97.77832, zoom:4, layers: ['1971']},
    scene2: {lat: 40.111688, lng: -97.77832, zoom:4, layers: ['1991']},
    scene3: {lat: 40.111688, lng: -97.77832, zoom:4, layers: ['2012']}
};

// initialize storymap
$('.main').storymap({
    scenes: scenes,
    layers: layers,
    legend: true,
    createMap: function () {
    var map = L.map('map', {zoomControl: false}).setView([44, -120], 7);

    darkBasemap.addTo(map);

    // heatmap radius change based on zoom levels
    map.on('zoomend', function () {
        var rad = 7 + map.getZoom();
        layers['1971'][0].setOptions({radius: rad});
        layers['1991'][0].setOptions({radius: rad});
        layers['2012'][0].setOptions({radius: rad});
    });
        
    // scale bar
    L.control.scale({position: 'bottomright'}).addTo(map);
        
    // add mini globe to map
    var miniMap = new L.Control.GlobeMiniMap({
        marker:'red',
        position: 'bottomright'
    }).addTo(map);

    return map;
}
});