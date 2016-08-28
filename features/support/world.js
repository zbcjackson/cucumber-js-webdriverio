'use strict';

var fs = require('fs');
var server = require('./mockServer')

function World() {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";
  this.server = server;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
};

module.exports = function() {
  this.World = World;
}
