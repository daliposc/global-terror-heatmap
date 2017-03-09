// basemap objects
darkBasemap = L.tileLayer(('https://api.mapbox.com/styles/v1/connord/cj00qqid7007i2rpla8qitsgl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29ubm9yZCIsImEiOiJjaXIya3VjYXgwMDA4ZnBubWMwbGM4aW4yIn0.OmX2i2_gUHm12VynRff6qA'), {
        maxZoom: 10, 
        minZoom: 3,
        attribution: 'Mapbox &copy | OpenStreetMaps &copy'
    });

lightBasemap = L.tileLayer(('https://api.mapbox.com/styles/v1/connord/ciy3qjp5800012spckvsivlx8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29ubm9yZCIsImEiOiJjaXIya3VjYXgwMDA4ZnBubWMwbGM4aW4yIn0.OmX2i2_gUHm12VynRff6qA'), {
        maxZoom: 10, 
        minZoom: 3, 
        attribution: 'Mapbox &copy | OpenStreetMaps &copy',
    });

// storymap layers
var layers= {
    'Light Basemap': [lightBasemap],
    'Dark Basemap': [darkBasemap],
    '1971': [seventyOne_ninetyOne_lyr],
    '1991': [ninetyOne_twentyEleven_lyr],
    '2012': [twentyTwelve_twentyFifteen_lyr]
};

// story map scenes
var scenes = {
    scene1: {lat: 40.111688, lng: -97.77832, zoom:4, layers: ['Dark Basemap', '1971']},
    scene2: {lat: 40.111688, lng: -97.77832, zoom:4, layers: ['Dark Basemap', '1991']},
    scene3: {lat: 40.111688, lng: -97.77832, zoom:4, layers: ['Dark Basemap', '2012']}
};

// initialize storymap
$('.main').storymap({
    scenes: scenes,
    layers: layers,
    legend: true
});