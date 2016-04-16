"use strict";

describe('A Hero', function(){
  var Hero = require('../lib/hero');

  it('takes damage', function(){
    var hero = new Hero();

    expect(hero.health).toBe(30);
    hero.Damage(3);
    expect(hero.health).toBe(27);
  })
});
