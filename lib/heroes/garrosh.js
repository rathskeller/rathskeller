"use strict";

var Hero = require('../hero');
var Power = require('../power');

module.exports = function(){
  return Object.assign(Hero(), {
    Name: "Garrosh",
    Power: Object.assign(Power, {
      targets: ['self'],
      Action: Power.GainArmor(2),
    }),
  });
};
