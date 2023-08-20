const answerbox = document.querySelector('#answerbox');
const submit = document.querySelector('.submit');
const result = document.querySelector('.result');
const message = document.querySelector('.msgquiz');
const score = document.querySelector('.score')
const numquestions = ['7 * 10?', '6 * 7 ?', '31 + 14 ?', '7 * 8 ?', '6 * 9 ?', '88 / 22 ?']
const numanswers = [70, 42, 45, 56, 54, 4];


// first code, 2 errors, wrong logic flow

// function thequiz() {
//     let answer = answerbox.value;
//     result.innerHTML = ''
//     for (let i = 1; i < numquestions.length; i++) {
//         message.innerHTML = numquestions[i];
//         if (answer === numanswers[i]) {
//             result.innerHTML = 'Correct!'
//             answerbox.value = ''
//         }else {
//             result.innerHTML = 'Incorrect!'
//             answerbox.value = ''
//         }
//     }
// }


let quizscore = 0
let currentQuestionIndex = 0; 
message.innerHTML = numquestions[currentQuestionIndex];

submit.addEventListener('click', () => {
    const answer = answerbox.value;
    result.innerHTML = '';

    if (answer === numanswers[currentQuestionIndex].toString()) {
        result.innerHTML = 'Correct!';
        quizscore++
    } else {
        result.innerHTML = 'Incorrect!';
        quizscore--
    }

    answerbox.value = '';
    
    currentQuestionIndex++;
    if (currentQuestionIndex < numquestions.length) {
        message.innerHTML = numquestions[currentQuestionIndex];
    } else {
        message.innerHTML = 'Quiz Completed!';
        score.innerHTML = `Your score is ${quizscore}`;
    }

});
