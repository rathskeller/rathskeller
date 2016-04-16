"use strict";

module.exports = function(){
  var MAX_HEALTH = 30;

  return Object.create({
    health: MAX_HEALTH,
    maxHealth: MAX_HEALTH,
    armor: 0,
    takeDamage(taken) {
      this.health -= taken;
      return this.health;
    },
    Damage(taken) {
      if (this.armor) {
        this.armor -= taken;
        taken = Math.max.apply(null, [-this.armor, 0])
        this.armor = Math.max.apply(null, [this.armor, 0]);
      }

      return this.takeDamage(taken);
    },
    Heal(amount) {
      this.health = Math.min.apply(null, [this.health + amount, this.maxHealth]);
      return this.health;
    },
    Armor(received) {
      this.armor += received;
      return this.armor;
    }
  });
};
