"use strict";

describe('A Hero', function(){
  var Hero = require('../lib/hero');

  describe('damage', function(){
    it('reduces health when taken', function(){
      var hero = new Hero();
      expect(hero.Damage(0)).toBe(30);
      expect(hero.Damage(3)).toBe(27);
    });

    it('reduces armor when taken', function(){
      var hero = new Hero();
      expect(hero.Damage(0)).toBe(30);
      expect(hero.Armor(5)).toBe(5);

      expect(hero.Damage(3)).toBe(30);
      expect(hero.Armor(0)).toBe(2);
    });
  });

  it('heals', function(){
    var hero = new Hero();
    hero.health = 28;

    expect(hero.Heal(5)).toBe(30);
  });
});
