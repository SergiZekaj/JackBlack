let person = {
    name: "Sergi",
    chips: 1423
}
let text1 = document.getElementById("message-el")
let text2 = document.getElementById("cards-el")
let text3 = document.getElementById("sum-el")
let message = ""
let firstCard = randomNum()
let secondCard = randomNum()
let cards = [firstCard, secondCard]
let sum = 0
let isAlive = false
let hasJackblack = false
let text4 = document.getElementById("player-el")
text4.textContent = person.name + ": $" + person.chips

function randomNum(){
    let random = Math.floor(Math.random() * 13 + 1)
    if(random === 1){
        return 11
    }else if(random > 10){
        return 10
    }else{
        return random
    }
}

function startGame(){
    isAlive = true
    text2.textContent = "Cards: " + cards[0] + " " + cards[1]
    sum = cards[0] + cards[1]
    text3.textContent = "Sum: " + sum
    renderGame()
}

function renderGame(){
    if (sum < 21) {
        message = "You are still on the game. Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got a Blackjack. Congrats!!!"
        hasJackblack = true
    } else if (sum > 21) {
        message = "You are out of the game. Please try again."
        isAlive = false
    }
    return text1.textContent = message
}

function newCard() {
    if (isAlive === true && hasJackblack === false) {
        let nextCard = randomNum()
        cards.push = nextCard
        sum += nextCard
        text2.textContent += " " + nextCard
        text3.textContent = "Sum: " + sum
        renderGame()
    } else {

    }
}






