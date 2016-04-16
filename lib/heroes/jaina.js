"use strict";

var Hero = require('../hero');
var Power = require('../power');

module.exports = function(){
  return Object.assign(Hero(), {
    Name: "Jaina",
    Power: Object.assign(Power, {
      damage: 1,
      targets: ['hero', 'minion'],
      Action: Power.MakeDamage,
    }),
  });
};
