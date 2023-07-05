let player = {
    name: "Hamza",
    chips: 145
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function randomCard() {
    cardGenerated = Math.floor(Math.random() * 13) + 1
    if (cardGenerated === 1) {
        console.log(cardGenerated)
        return 11
    } else if (cardGenerated > 10) {
        console.log(cardGenerated)
        return 10
    } else {
        console.log(cardGenerated)
        return cardGenerated
    }
}

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum == 21) {
        message = "Woohoo! You got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}