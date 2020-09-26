const playerHand = document.getElementById('player-cards')
const playerTotal = document.getElementById('player-total')
const bankerhand = document.getElementById('banker-cards')
const bankerTotal = document.getElementById('banker-total')
const betPlayerButton = document.getElementById('bet-player')
const betBankerButton = document.getElementById('bet-banker')
const playerScore = document.getElementById('player-score')
const bankerScore = document.getElementById('banker-score')

let limit = 10
let playerCards = [];
let bankerCards = [];
let newPlayerCards = [];
let newBankerCards = [];
let playerTotalSum = 0;
let bankerTotalSum = 0;
let scoreOfPlayer = 0;
let scoreOfBanker = 0;

betPlayerButton.addEventListener('click' , function(){
    newPlayerHand()
    newBankerHand()
    console.log('Player has a total of: ' + playerTotalSum)
    console.log('Banker has a total of: ' + bankerTotalSum)
    if(playerTotalSum == bankerTotalSum){
        console.log('Tie!') //Scores remain the same
        alert('It is a tie!')
    }
    else if(playerTotalSum > bankerTotalSum){
        console.log('Player has higher hand')   //We are betting on player so increment player score by 1
        scoreOfPlayer++
        playerScore.innerText = scoreOfPlayer
        console.log('You have won! Players score is: ' + scoreOfPlayer)
    } else {
        console.log('Banker has higher hand!')  //We are betting on player so increment banker score by 1
        scoreOfBanker++
        bankerScore.innerText = scoreOfBanker
        console.log('You have lost! Bankers score is: ' + scoreOfBanker)
    }
})

betBankerButton.addEventListener('click', function(){
    newBankerHand()
    newPlayerHand()
    console.log('Player has a total of: ' + playerTotalSum)
    console.log('Banker has a total of: ' + bankerTotalSum)
    if(playerTotalSum == bankerTotalSum){
        console.log('Tie!') //Scores remain the same
        alert('It is a tie!')
    }
    else if(bankerTotalSum > playerTotalSum){
        console.log('Banker has the higher hand!')
        scoreOfPlayer++ 
        playerScore.innerText = scoreOfPlayer
        console.log('You have bet on the right side! Player score  + 1')
    } else {
        console.log('player has the higher hand') 
        scoreOfBanker++
        bankerScore.innerText = scoreOfBanker
    }
})

function newPlayerHand(){
    playerCards = [];
    newPlayerCards = [];
    playerTotalSum = 0;

    const pElement = document.querySelectorAll('.player-card') 
    for(let i = 0; i < pElement.length; i++){
        pElement[i].parentNode.removeChild(pElement[i])
    }
    pHand()
}

function newBankerHand(){
    bankerCards = [];
    newBankerCards = [];
    bankerTotalSum = 0;

    const bElement = document.querySelectorAll('.banker-card')
    for(let i = 0; i < bElement.length; i++){
        bElement[i].parentNode.removeChild(bElement[i])
    }
    bHand()
}

function pHand() {
    // let playerCards = [];
    // let newPlayerCards = [];

    for(let i = 0; i < 2; i++){
        playerCards.push(Math.floor(Math.random() * 10) + 1)
    }

    let playerSum = playerCards.reduce(function(a,b){
        return a + b;
    }, 0)

    if( (playerSum === 7) ||
        (playerSum === 8) ||
        (playerSum === 9) )
    {
        playerTotal.innerText = playerSum
        playerTotalSum = playerSum
    }

    if(playerSum >= 10){ 
        let pNum = playerSum.toString().split('').pop();
        let parsedNum = parseInt(pNum, 10)
        newPlayerCards.push(parsedNum)
        playerTotal.innerText = parsedNum
        playerTotalSum = parsedNum 
        if(parsedNum <= 6){
            let newCard = Math.floor(Math.random() * 10) + 1
            newPlayerCards.push(newCard)
            playerCards.push(newCard)
            let cardSum = newPlayerCards.reduce( (a,b) => a + b, 0)
            let pCardSum = cardSum.toString().split('').pop();
            let pCard = parseInt(pCardSum, 10)
            playerTotal.innerText = pCard
            playerTotalSum = pCard
        }
    }

    if(playerSum <= 6){
        let newCard = Math.floor(Math.random() * 10) + 1 
        playerCards.push(newCard)
        let sumOfTwoCards = playerSum + newCard
        sumOfTwoCards = sumOfTwoCards.toString().split('').pop();
        sumOfTwoCards = parseInt(sumOfTwoCards, 10)
        playerTotal.innerText = sumOfTwoCards
        playerTotalSum = sumOfTwoCards
    }

    for(let i = 0; i < playerCards.length; i++){
        let playerCardElement = document.createElement('div')
        let playerCard = document.createElement('p')
        playerCard.textContent = playerCards[i]
        playerCard.classList.add('play-card')
        playerCardElement.classList.add('player-card')
        playerCardElement.appendChild(playerCard)
        // playerCardElement.textContent = playerCards[i]
        playerHand.append(playerCardElement)
    }
}

function bHand() {
    // let bankerCards = []
    // let newBankerCards = []

    for(let i = 0; i < 2; i++){
        bankerCards.push(Math.floor(Math.random() * 10) + 1)
    }
    
    let bankerSum = bankerCards.reduce(function(a,b){
        return a + b
    }, 0)

    if( (bankerSum === 7) ||
        (bankerSum === 8) || 
        (bankerSum === 9) ) 
    {
        bankerTotal.innerText = bankerSum
        bankerTotalSum = bankerSum
    }

    if(bankerSum >=10){
        let bSum = bankerSum.toString().split('').pop()
        let parsedBankerSum = parseInt(bSum, 10)
        newBankerCards.push(parsedBankerSum)
        bankerTotal.innerText = parsedBankerSum
        bankerTotalSum = parsedBankerSum
        if(parsedBankerSum <= 6){
            let newCard = Math.floor(Math.random() * 10) + 1
            bankerCards.push(newCard)
            newBankerCards.push(newCard)
            let sumOfNewCards = newBankerCards.reduce( (a,b) => a + b, 0)
            let parsedSum = sumOfNewCards.toString().split('').pop()
            let pSum = parseInt(parsedSum, 10)
            bankerTotal.innerText = pSum
            bankerTotalSum = pSum
        }
    }

    if(bankerSum <= 6){
        let ranNum = Math.floor(Math.random() * 10) + 1
        bankerCards.push(ranNum)
        let newSum = bankerSum + ranNum
        if(newSum >= limit){
            let nSum = newSum.toString().split('').pop()
            let parsedNSum = parseInt(nSum, 10)
            bankerTotalSum = parsedNSum
            bankerTotal.innerText = parsedNSum
        } else {
            bankerTotal.innerText = newSum
        }
    }

    for(let i = 0; i < bankerCards.length; i++){
        let bankerCardElement = document.createElement('div')
        let bankerCard = document.createElement('p')
        bankerCard.textContent = bankerCards[i]
        bankerCard.classList.add('bank-card')
        bankerCardElement.classList.add('banker-card')
        bankerCardElement.appendChild(bankerCard)
        // bankerCardElement.textContent = bankerCards[i]
        bankerhand.append(bankerCardElement)
    }
}
