"use strict";

describe('Rexxar', function(){
  var Rexxar = require('../../lib/heroes/rexxar');

  it('has a hero power', function(){
    var hero = new Rexxar();
    var target = jasmine.createSpyObj('target', ['Damage']);

    expect(hero.Power).toBeDefined();
    hero.Power.Target(target);
    expect(target.Damage).toHaveBeenCalledWith(2);
  })
});
