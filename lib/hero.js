"use strict";

function Power() {
  this.targets = [];
}

Power.prototype.Target = function(target) {
  //check if can target
  this.Action(target);
}

Power.prototype.MakeDamage = function(target) {
  target.Damage(this.damage);
}

function Hero() {
}

Hero.prototype.health = 30;
Hero.prototype.manaCristals = 0;
Hero.prototype.manaAvailable = 0;
Hero.prototype.manaLocked = 0;

Hero.prototype.Damage = function(taken) {
  this.health -= taken;
  return this.health;
}

Hero.prototype.Power = new Power();

module.exports = Hero;
