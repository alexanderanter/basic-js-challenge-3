"use strict";

function Player(playerName, cardHand, totVal) {
    this.name = playerName || "player";
    this.cardHand = cardHand || [];
    this.totVal = totVal || 0;
}

Player.prototype.updateTotVal = function() {
    var total = 0;

    var copiedArray = this.cardHand.slice();
    for (var i = 0; i < copiedArray.length; i++) {
        total += copiedArray[i].value;
    }

    this.totVal = total;
};

// Exports

module.exports = Player;
