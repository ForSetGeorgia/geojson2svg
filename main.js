
var width = 960,
    height = 600;


var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray")



var projection = d3.geoMercator().scale(1).translate([0, 0])
var path = d3.geoPath(projection);
// Compute the bounds of a feature of interest, then derive scale & translate.


d3.json('data/geojson2.json', function(error, mapData) {
  console.log(mapData)
  var b = path.bounds(mapData),
      s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
      t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

  projection
      .scale(s)
      .translate(t);



  svg.selectAll("path")
    .data(mapData.features)
    .enter().append("path")
      .attr("class", (d) => { return d.geometry.type })
      .attr("d", path);
})


// old code
  // mapboxgl.accessToken = '...';
  // var map = new mapboxgl.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/...',
  //     // zoom: 7
  // });
  // console.log(map, map.getStyle())


// var svg = d3.select("#map").append("svg")
//             .attr("width", 800)
//             .attr("height", 600);

// svg.append("g")
//             .selectAll("path")
//             .data(geoJsonObj.features)
//             .enter().append("path")
//             .attr("d", path);


// var topology = topojson.topology({foo: geojson});
// console.log(topology)

// var geojson = topojson.feature(topology, topology.objects.foo);

// console.log("geojson", geojson)

// g = svg.append('g')
// g.append("path")//.data(topology.features).attr("d", path);
// console.log(path(geoFeatureCollection))
