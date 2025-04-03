var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0; // dette trengs pga ess som har enten verdi 11 eller 1

var hidden;
var deck;

var canHit = true; // lar spilleren ta kort om din sum er mindre eller samme som 21

window.onload = function() {
    buildDeck();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"]
    deck = []
}

