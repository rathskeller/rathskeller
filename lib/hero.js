"use strict";

module.exports = function(){
  return Object.create({
    health: 30,
    Damage(taken) {
      this.health -= taken;
      return this.health;
    }
  });
};
