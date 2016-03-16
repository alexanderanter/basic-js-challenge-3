/**
 * Created by AANTER on 16/03/2016.
 */

"use strict";

var Cards = require("./Cards");
var Player = require("./Player");

function Game(players, deck, lastCardIndex) {
    this.players = players || ["gambler1"];
    this.deck = deck || [];
    this.lastCardIndex = lastCardIndex || 0;
}

Game.prototype.newGame = function(numberOfPlayers) {
    var newDeck = new Cards();
    var players = [];
    newDeck.newDeck();
    newDeck.shuffle();

    var dealer = new Player("Dealer");
    players.push(dealer);

    //create players
    for (var i = 1; i < numberOfPlayers + 1; i++) {
        var tempPlayerName = "player" + (i);
        var tempPlayer = new Player(tempPlayerName);
        players.push(tempPlayer);
        console.log("Game on");
    }

    this.players = players;
    this.deck = newDeck.deck;
};

Game.prototype.newDeal = function() {
    var result;
    this.players[1].cardHand.push(this.deck[0]);
    this.players[1].cardHand.push(this.deck[1]);

    this.players[1].updateTotVal();

    var i = this.lastCardIndex + 1;
    while (this.players[1].totVal < 16) {
        this.players[1].cardHand.push(this.deck[i]);
        this.players[1].updateTotVal();
        i++;
    }

    console.log(this.players[1].name + " " + this.players[1].totVal);

    //deal the dealer if the player1 got less than 22;
    if (this.players[1].totVal < 22) {
        this.players[0].cardHand.push(this.deck[2]);
        this.players[0].cardHand.push(this.deck[3]);
        var j = this.lastCardIndex + 1;
        while (this.players[0].totVal < this.players[1].totVal) {
            this.players[0].cardHand.push(this.deck[j]);
            this.players[0].updateTotVal();
            j++;
        }

        console.log(this.players[0].name + " " + this.players[0].totVal);
        if (this.players[0].totVal < 22 && this.players[0].totVal > this.players[1].totVal) {
            console.log("Dealer won!");
        } else if (this.players[0].totVal < 22 && this.players[0].totVal === this.players[1].totVal) {
            console.log("It's a draw!");
        } else {
            console.log("You won!");
        }

        return result;

    } else {
        result = console.log("YOU GOT BUSTED!!");
    }

};

// Exports

module.exports = Game;
