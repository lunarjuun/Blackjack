var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0; // dette trengs pga ess som har enten verdi 11 eller 1

var hidden;
var deck;

var canHit = true; // lar spilleren ta kort om din sum er mindre eller samme som 21

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"]
    deck = []

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) { //korresponderer med "cards" mappen
            deck.push(values[j] + "-" + types[i]); // A-C, K-C, A-D, K-D.. osv, løkken går gjennom alle kort kombinasjonene
        }
    }
    // console.log(deck)
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length) // math.random gir et tilfeldig nummer mellom 0-1. (0-1 * 52 => (0-51.9999) og math.floor fjerner desimalene
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop() //fjerner et kort fra slutten av array
    dealerSum += getValue(hidden);
}

function getValue(card) {
    
}