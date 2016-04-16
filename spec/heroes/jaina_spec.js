"use strict";

describe('Jaina', function(){
  var Jaina = require('../../lib/heroes/jaina');

  it('has a hero power', function(){
    var hero = Jaina();
    var target = jasmine.createSpyObj('target', ['Damage']);

    expect(hero.Power).toBeDefined();
    hero.Power.Target(target);
    expect(target.Damage).toHaveBeenCalledWith(1);
  })
});
