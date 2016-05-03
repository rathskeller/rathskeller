"use strict";

function Player(props){
  let options = Object.assign({
    'deck': [],
    'hand': [],
  }, props);

  return Object.create({
    'deck': options.deck,
    'hand': options.hand,

    getOrSetCards(prop, cards) {
      if (cards) {
        this[prop] = cards.slice();
      }

      return this[prop];
    },

    Deck(cards) {
      return this.getOrSetCards('deck', cards);
    },

    Hand(cards) {
      return this.getOrSetCards('hand', cards);
    },
  });
}

function chooseRandom(from, n, random) {
  var chosen = [];
  var copy = from.slice();

  while (chosen.length < n && copy.length > 0) {
    var i = Math.floor(random() * copy.length);
    chosen.push(copy.splice(i, 1)[0]);
  }

  return chosen;
}

module.exports = function(opts){
  let STARTING_HAND_SIZE = 3;

  var options = Object.assign({
    'random': Math.random
  }, opts);

  return Object.create({
    'players': {},
    'random': options.random,

    chooseStartingHand(player) {
      player.Hand(chooseRandom(player.Deck(), STARTING_HAND_SIZE, this.random));
    },

    Start() {
      for (let id in this.players){
        this.chooseStartingHand(this.players[id]);
      }
    },

    Player(id_or_properties) {
      if (typeof id_or_properties == "string") {
        return this.players[id_or_properties];
      }

      return this.players[id_or_properties['id']] = Player(id_or_properties);
    },
  });
};
