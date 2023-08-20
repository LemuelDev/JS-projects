const nameInput = document.querySelector('#nameInput');
const submitBtn = document.querySelector('#submitBtn');
const resultofName = document.querySelector('#resultofName');
const lengthofName = document.querySelector('#lengthofName');

function renderitems () {
    let name = nameInput.value
    resultofName.innerHTML = name
    lengthofName.innerText = `Length: ${name.length}`;

}

submitBtn.addEventListener('click', renderitems);

nameInput.addEventListener('input', renderitems);