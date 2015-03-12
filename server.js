var http = require('http');
var path = require('path');

var socketio = require('socket.io');
var express = require('express');
var parseXMLString = require('xml2js').parseString;
var request = require('request');

var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));

var SSC = {
  soapClient: 0,
  groundStations: {
    "NULL": {
      id: "",
      latitude: 0,
      longitude: 0,
      name: "",
      country: "",
    },
  },
  loadGroundStations: function() {
    request('http://sscweb.gsfc.nasa.gov/WS/sscr/2/groundStations', function(err, response, body) {
      parseXMLString(body, function(err, res) {
        res.GroundStationResponse.GroundStation.forEach(function(station) {
          request('http://api.geonames.org/countryCode?lat=' + station.Location[0].Latitude + '&lng=' + station.Location[0].Longitude + '&username=scjosh', function(err, response, countryCode) {
            SSC.groundStations[station.Id] = {
              id: station.Id,
              latitude: station.Location[0].Latitude,
              longitude: station.Location[0].Longitude,
              name: station.Name[0],
              country: countryCode
            };
          });
        });
      });
    });
  },
};

SSC.loadGroundStations();

io.on('connection', function (socket) {
  socket.emit('groundStations', SSC.groundStations);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Web server listening at", addr.address + ":" + addr.port);
  
  SSC.loadGroundStations();
});