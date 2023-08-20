const lifeBarUser = document.querySelector('.lifeBarUser');
const lifeBarComputer = document.querySelector('.lifeBarComputer');
const attackBtn = document.querySelector('.attack-btn');
const trashtalkText = document.querySelector('.trashtalk-text');
const score = document.querySelector('.scoreboard');

function playerMove () {
    const randomNumber = Math.floor(Math.random() * 50);
    const currentLife = lifeBarComputer.innerText
    let computerLife = Number( currentLife - randomNumber)
    if (computerLife <= 0) {
        alert(`You win the round. Please Okay for another round. \n You: ${lifeBarUser.innerText}, Computer: ${currentLife}`);
        computerLife = 100
        lifeBarUser.innerText = 100
        scoreboard.win++
        score.innerHTML = `Win: ${scoreboard.win}, Lose: ${scoreboard.lose}`
    }else {
        trashtalkText.innerHTML = `Your attack is ${randomNumber}` 
    }
        lifeBarComputer.innerText = computerLife;
       
}

function computerMove () {
    const randomNumber = Math.floor(Math.random() * 50);
    const currentLife = lifeBarUser.innerText
    let userLife = Number( currentLife - randomNumber)
    if (userLife <= 0) {      
         alert(`You lose the round. Please Okay for another round. \n You: ${currentLife}, Computer: ${lifeBarComputer.innerText}`);
        userLife = 100
        lifeBarComputer.innerText = 100
        scoreboard.lose++
        score.innerHTML = `Win: ${scoreboard.win}, Lose: ${scoreboard.lose}`

    } else {
        trashtalkText.innerHTML = `The computer attack is ${randomNumber}`
    }
        lifeBarUser.innerText = userLife;
      
}


function playGame () {
    playerMove()
    setTimeout(function () {                      
        computerMove()
      }, 1000); 
}
const scoreboard = {
    win: 0,
    lose: 0,
}

attackBtn.addEventListener('click', playGame)