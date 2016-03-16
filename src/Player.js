"use strict";

function Player(playerName, cardHand, totVal) {
    this.name = playerName || "player";
    this.cardHand = cardHand || [];
    this.totVal = totVal || 0;
}

Player.prototype.getTotVal = function(cardHand) {
    var copiedArray = cardHand.slice();
    var total = 0;

    if (copiedArray.length > 0) {
        total = copiedArray.reduce(function(a, b) {
            return a + b;
        });
    }

    return total;
};

// Exports

module.exports = Player;
