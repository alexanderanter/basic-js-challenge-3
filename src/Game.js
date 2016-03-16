/**
 * Created by AANTER on 16/03/2016.
 */

"use strict";

var Cards = require("./Cards");
var Player = require("./Player");

/*
var firstDeck = new Cards();
firstDeck.newDeck();
firstDeck.shuffle();
console.log(firstDeck.deck);
*/



function Game(players, deck) {
    this.players = players || 1;
    this.deck = deck || [];
}

Game.prototype.newGame = function(numberOfPlayers) {
    var newDeck = new Cards();
    var players = [];

    newDeck.newDeck();
    newDeck.shuffle();

    for (var i = 0; i < numberOfPlayers; i++) {
        var tempPlayerName = "player" + (i + 1);
        var tempPlayer = new Player(tempPlayerName);
        players.push(tempPlayer);
    }

    this.players = players;
    this.deck = newDeck.deck;
};

// Exports

module.exports = Game;
