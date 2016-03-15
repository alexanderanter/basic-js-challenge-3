"use strict";
/*
 @author: alexanderanter;
 */
var Cards = require("./src/Cards");
var firstDeck = new Cards();
firstDeck.newDeck();
firstDeck.shuffle();
console.log(firstDeck.deck);
