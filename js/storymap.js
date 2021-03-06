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

// layer control groups
var basemaps = {
    "Light Basemap": lightBasemap,
    "Dark Basemap": darkBasemap
};

var overlays= {
    "1971-1991 (41,196 pts)": seventyOne_ninetyOne_lyr,
    "1991-2011 (53,275 pts)": ninetyOne_twentyEleven_lyr,
    "2012-2015 (51,789 pts)": twentyTwelve_twentyFifteen_lyr
};

// initialize map object
var map = L.map('map', {
    center: [40.111688,-97.77832], 
    zoom: 4,
    zoomControl: false,
    layers: [lightBasemap, darkBasemap, seventyOne_ninetyOne_lyr, ninetyOne_twentyEleven_lyr, twentyTwelve_twentyFifteen_lyr]
});

// add zoom control, layer controls, and scale bar
L.control.zoom({position:'bottomright'}).addTo(map);
L.control.scale({position: 'bottomleft'}).addTo(map);
var controls = L.control.layers(basemaps, overlays,{collapsed: false});
controls.addTo(map)

// add title control
var controlTitle = L.control({position: 'topleft'});
controlTitle.onAdd = function(){
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<h1>Global Terror Attacks Heatmap</h1>';
    div.innerHTML += '<h3>From: <a href="https://www.start.umd.edu/gtd/">https://www.start.umd.edu/gtd/</a></h3>'
    return div;
};
controlTitle.addTo(map);

// resize heatmap radius on zoom
map.on('zoomstart', function () {
    var rad = 7 + map.getZoom();
    seventyOne_ninetyOne_lyr.setOptions({radius: rad});
    ninetyOne_twentyEleven_lyr.setOptions({radius: rad});
    twentyTwelve_twentyFifteen_lyr.setOptions({radius: rad})
});