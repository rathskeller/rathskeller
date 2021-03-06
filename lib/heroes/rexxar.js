"use strict";

var Hero = require('../hero');
var Power = require('../power');

module.exports = function(){
  return Object.assign(Hero(), {
    Name: "Rexxar",
    Power: Object.assign(Power, {
      damage: 2,
      targets: ['hero'],
      Action: Power.MakeDamage,
    }),
  });
};
