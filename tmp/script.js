var geoJsonObj = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.66714859008788,
          42.38758539041693
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            44.60054397583008,
            42.416486703159045
          ],
          [
            44.60552215576172,
            42.416486703159045
          ],
          [
            44.60861206054687,
            42.41699362490264
          ],
          [
            44.61599349975586,
            42.4168668948509
          ],
          [
            44.61942672729492,
            42.41737381352118
          ],
          [
            44.61994171142578,
            42.415821362151945
          ],
          [
            44.62127208709716,
            42.41455402641972
          ],
          [
            44.62328910827637,
            42.41369856032239
          ],
          [
            44.6259069442749,
            42.412526235977914
          ],
          [
            44.6279239654541,
            42.411544001412935
          ],
          [
            44.63667869567871,
            42.40777334522497
          ],
          [
            44.637794494628906,
            42.40790009365227
          ],
          [
            44.63895320892334,
            42.407614909330725
          ]
        ]
      }
    }
  ]
}

var topoJson = {
    "type": "Topology",
    "objects": {
        "collection": {
            "type": "GeometryCollection",
            "geometries": [
                {
                    "type": "Point",
                    "coordinates": [
                        9999,
                        0
                    ]
                },
                {
                    "type": "LineString",
                    "arcs": [
                        0
                    ]
                }
            ]
        }
    },
    "arcs": [
        [
            [
                0,
                9701
            ],
            [
                747,
                0
            ],
            [
                464,
                170
            ],
            [
                1108,
                -42
            ],
            [
                516,
                170
            ],
            [
                77,
                -521
            ],
            [
                200,
                -426
            ],
            [
                303,
                -287
            ],
            [
                393,
                -393
            ],
            [
                302,
                -330
            ],
            [
                1315,
                -1266
            ],
            [
                167,
                43
            ],
            [
                174,
                -96
            ]
        ]
    ],
    "bbox": [
        44.60054397583008,
        42.38758539041693,
        44.66714859008788,
        42.41737381352118
    ],
    "transform": {
        "scale": [
            0.0000066611275385343925,
            0.000002979140224447468
        ],
        "translate": [
            44.60054397583008,
            42.38758539041693
        ]
    }
}

var geojson2svg = require('geojson2svg');
var parseSVG = require('parse-svg');



var options =  {
    viewportSize: {width: 200, height: 100},
    mapExtent: {left: -180, bottom: -90, right: 180, top: 90},
    output: 'svg'
  }
var converter = geojson2svg(options);


var svgStrings = converter.convert(geoJsonObj,options);
var svgElements = svgStrings.map(function(svgString) {
  return parseSVG(svgString)
})
console.log(svgElements)
