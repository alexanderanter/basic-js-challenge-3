"use strict";
/*
 @author: alexanderanter;
 */
/*
var Cards = require("./src/Cards");
var Player = require("./src/Player");

var firstDeck = new Cards();
firstDeck.newDeck();
firstDeck.shuffle();
console.log(firstDeck.deck);

*/


var Game = require("./src/Game");

var firstGame = new Game();
firstGame.newGame(1);
firstGame.newDeal();

/*console.log(firstGame);*/
/*var newGame = new Game();*/
