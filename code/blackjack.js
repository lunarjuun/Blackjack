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
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);

    while (dealerSum < 17) {
        //<img>
        let cardImg = document.createElement("img"); //lager img tag
        let card = deck.pop() //får kort fra bunken
        cardImg.src = "/cards/" + card + ".png" //skaffer bilder fra folderen
        dealerSum += getValue(card); 
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }

    console.log(dealerSum)

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img"); //lager img tag
        let card = deck.pop() //får kort fra bunken
        cardImg.src = "/cards/" + card + ".png" //skaffer bilder fra folderen
        yourSum += getValue(card); 
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }

    console.log(yourSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
}

function hit() {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img"); //lager img tag
    let card = deck.pop() //får kort fra bunken
    cardImg.src = "/cards/" + card + ".png" //skaffer bilder fra folderen
    yourSum += getValue(card); 
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) { // A, J, K -> 11 + 10 + 10 
        canHit = false;
    }
}

function stay() {
    
}

function getValue(card) {
    let data = card.split("-"); // 4(value) C(type). så "split" på "-" betyr at koden deler opp i to så vi får en array som ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { // J Q K har samme Value -- sjekker om Value har nummer, hvis ikke er det A (ess)
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {  //card er en String, hvis første nummer er "A", return 1
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}