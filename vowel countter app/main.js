const textboxInput = document.querySelector('#textboxInput')
const submitBtn = document.querySelector('.submitBtn')
const vowelResult = document.querySelector('.vowelResult')

function calculateVowels() {
    const textbox = textboxInput.value
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for (let i = 0; i < textbox.length; i++) {
        if (vowels.includes(textbox[i].toLowerCase())) {
            count++
        }
    }
     vowelResult.textContent = `You have ${count} vowel!`;
}

submitBtn.addEventListener('click', calculateVowels)