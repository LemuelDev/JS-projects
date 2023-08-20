const cardOne = document.querySelector('.cardOne')
const cardTwo = document.querySelector('.cardTwo')
const cardThree = document.querySelector('.cardThree')
const rollDice = document.querySelector('.rollDice')
const maximum = document.querySelector('.maximum')
const choicesColor = document.querySelectorAll('.choices')
const errorMsg = document.querySelector('.errorMsg')
const score = document.querySelector('.score')
const colors = ['red', 'blue', 'yellow', 'green', 'white', 'pink']

let count = 3;
let colorPicks = []
const scoreboard = {
    win: 0,
    lose: 0
}
let win = 0
let lose = 0


function playGame() {
    let randomColors = []
    const randomNumber = Math.floor(Math.random() * 12);
    if (randomNumber == 1) {
        cardOne.style.backgroundColor = `${colors[0]}`
        cardTwo.style.backgroundColor = `${colors[1]}`
        cardThree.style.backgroundColor = `${colors[2]}`
        randomColors.push(colors[0], colors[1], colors[2])
    }else if (randomNumber == 2) {
        cardOne.style.backgroundColor = `${colors[0]}`
        cardTwo.style.backgroundColor = `${colors[3]}`
        cardThree.style.backgroundColor = `${colors[4]}`
        randomColors.push(colors[0], colors[3], colors[4])
    }else if (randomNumber == 3) {
        cardOne.style.backgroundColor = `${colors[5]}`
        cardTwo.style.backgroundColor = `${colors[3]}`
        cardThree.style.backgroundColor = `${colors[1]}`
        randomColors.push(colors[5], colors[1], colors[3])
    }else if (randomNumber == 4) {
        cardOne.style.backgroundColor = `${colors[0]}`
        cardTwo.style.backgroundColor = `${colors[0]}`
        cardThree.style.backgroundColor = `${colors[0]}`
        randomColors.push(colors[0])
    }else if (randomNumber == 5) {
        cardOne.style.backgroundColor = `${colors[5]}`
        cardTwo.style.backgroundColor = `${colors[2]}`
        cardThree.style.backgroundColor = `${colors[3]}`
        randomColors.push(colors[5], colors[3], colors[2])
    }else if (randomNumber == 6) {
        cardOne.style.backgroundColor = `${colors[1]}`
        cardTwo.style.backgroundColor = `${colors[4]}`
        cardThree.style.backgroundColor = `${colors[5]}`
        randomColors.push(colors[5], colors[1], colors[4])
    }else if (randomNumber == 7) {
        cardOne.style.backgroundColor = `${colors[3]}`
        cardTwo.style.backgroundColor = `${colors[2]}`
        cardThree.style.backgroundColor = `${colors[1]}`
        randomColors.push(colors[3], colors[1], colors[2])
    }else if (randomNumber == 8) {
        cardOne.style.backgroundColor = `${colors[1]}`
        cardTwo.style.backgroundColor = `${colors[1]}`
        cardThree.style.backgroundColor = `${colors[1]}`
        randomColors.push(colors[1])
    }else if (randomNumber == 9) {
        cardOne.style.backgroundColor = `${colors[3]}`
        cardTwo.style.backgroundColor = `${colors[3]}`
        cardThree.style.backgroundColor = `${colors[5]}`
        randomColors.push( colors[5], colors[3])
    }else if (randomNumber == 10) {
        cardOne.style.backgroundColor = `${colors[4]}`
        cardTwo.style.backgroundColor = `${colors[3]}`
        cardThree.style.backgroundColor = `${colors[5]}`
        randomColors.push(colors[3], colors[4], colors[5])
    }else if (randomNumber == 11) {
        cardOne.style.backgroundColor = `${colors[2]}`
        cardTwo.style.backgroundColor = `${colors[3]}`
        cardThree.style.backgroundColor = `${colors[1]}`
        randomColors.push(colors[3], colors[2], colors[1])
    }else if (randomNumber == 12) {
        cardOne.style.backgroundColor = `${colors[4]}`
        cardTwo.style.backgroundColor = `${colors[5]}`
        cardThree.style.backgroundColor = `${colors[4]}`
        randomColors.push(colors[4], colors[5])
    }

    if (colorPicks.length == 0) {
        errorMsg.innerHTML = 'Please pick a color first before rolling the dice'
        cardOne.style.backgroundColor = `${colors[4]}`
        cardTwo.style.backgroundColor = `${colors[4]}`
        cardThree.style.backgroundColor = `${colors[4]}`
    }else {
        for (let i = 0; i < colorPicks.length; i++) {
            if (colorPicks[i].includes(randomColors)) {
                win++
            }else {
                lose++
            }
        }
        score.innerHTML = `Win: ${win}, Lose: ${lose}`
        colorPicks = []
        randomColors = []
        console.log(colorPicks);
        console.log(randomColors);
    }

    
}

rollDice.addEventListener('click', playGame)

choicesColor.forEach(click => {
    click.addEventListener('click', () => {
            count--
            maximum.innerHTML = `Max : ${count}`

            if (count <= 0){
                maximum.innerHTML = 'max is reached'
                count = 3
                
            }
            const pick = click.innerHTML
            colorPicks.push(pick)
            console.log(colorPicks);
            errorMsg.innerHTML = ''

            
           
    })
})