const height = document.getElementById('height');
const weight = document.getElementById('weight');
const bmiresult = document.getElementById('bmi-result');
const calculate = document.getElementById('calculate');
const message = document.getElementById('message');



calculate.addEventListener('click', () => {
    let answer = weight.value / Math.pow(height.value / 100, 2)
    bmiresult.value = answer.toFixed(3);

    if (answer < 18.5){
        message.innerHTML = 'UNDERWEIGHT';
    }
    else if (answer > 18.5 && answer < 24.9){
        message.innerHTML = 'NORMAL WEIGHT';
    }
    else if (answer > 25 && answer < 29.9){
        message.innerHTML = 'OVERWEIGHT';
    }
    else if (answer > 30) {
        message.innerHTML = 'OBESE';
    }
})
