const nameInput = document.querySelector('#nameInput');
const submitNameBtn = document.querySelector('.submitNameBtn');
const gridContent = document.querySelector('#grid-content');
const nameResult = document.querySelector('#nameResult');
const closemark = document.querySelector('.closemark');



submitNameBtn.addEventListener('click', function() {
    const nameValue = nameInput.value;
    let html = `
    <div class="grid-boxes">
        <div class="closemark">
            <button class="removeBtn" onclick="removeBox(this)">X</button>
        </div>
        <div class="top">
            <h4>Hello</h4>
            <p class="p"> My name is </p>
        </div>
        <div class="bottom">
            <p id="nameResult">${nameValue}</p>
        </div>
    </div>`;

    gridContent.innerHTML += html;
});

function removeBox(btn) {
    const box = btn.closest('.grid-boxes');
    if (box) {
        box.remove();
    }
}



