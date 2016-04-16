"use strict";

module.exports = Object.create({
  Target(target) {
    //check if can target
    this.Action(target);
  },
  MakeDamage(target) {
    target.Damage(this.damage);
  }
});
