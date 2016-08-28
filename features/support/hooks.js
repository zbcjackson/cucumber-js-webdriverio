'use strict';

var server = require('./mockServer')
var myHooks = function () {
  this.After(function(scenario) {
    server.clean();
  });
};

module.exports = myHooks;
