"use strict";

var Hero = require('../hero');

function Rexxar() {}
Rexxar.prototype = Hero.prototype;

var Power = Rexxar.prototype.Power;
Power.damage = 2;
Power.targets = 'hero';
Power.Action = Power.MakeDamage;

module.exports = Rexxar;
