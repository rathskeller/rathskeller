"use strict";

describe('Garrosh', function(){
  var Garrosh = require('../../lib/heroes/garrosh');

  it('has a hero power', function(){
    var hero = Garrosh();

    expect(hero.Power).toBeDefined();
    expect(hero.armor).toBe(0);
    hero.Power.Target(hero); //TODO this can never target somebody else
    expect(hero.armor).toBe(2);
  })
});
