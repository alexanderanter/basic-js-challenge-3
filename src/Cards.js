"use strict";

function Card(suit, value) {
    this.suit = suit;
    this.value = value;
}

function Cards() {
    this.deck = [];
}

Cards.prototype.newDeck = function() {
    var suits = ["h", "s", "c", "d"];

    for (var i = 0; i < 4; i++) {
        for (var j = 1; j <  14; j++) {
            var generatedCard = new Card(suits[i], j);
            this.deck.push(generatedCard);
        }
    }
};

Cards.prototype.shuffle = function() {
    var deck = this.deck;
    var currentIndex = deck.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }

    return deck;
};

// Exports
module.exports = Cards;
