"use strict";

describe('Game', function(){
  var Game = require('../lib/game');

  it('choose starting hand for players', function(){
    var random = jasmine.createSpy("random").and.returnValue(0.5);
    var game = Game({
      'random': random,
    });

    game.Player({
      'id': 'jaina',
      'deck': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    });

    game.Player({
      'id': 'rexxar',
      'deck': [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    });

    game.Start();

    expect(game.Player('jaina').Hand()).toEqual([6, 5, 7]);
    expect(game.Player('rexxar').Hand()).toEqual([16, 15, 17]);
  })
});
