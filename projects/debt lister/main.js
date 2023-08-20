const nameInput = document.querySelector('#nameInput');
const debtInput = document.querySelector('#debtInput');
const submitName = document.querySelector('.submitName');
const submitDebt = document.querySelector('.submitDebt');
let printResult = document.querySelector('.printResult');



function printdebt () {
    const names = nameInput.value;
    const debts = debtInput.value;
  
    const listItem = document.createElement('p');
    listItem.innerHTML= ` ${names}<span></span>${debts}<span></span>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerText = 'Delete';

    deleteBtn.addEventListener('click', () => {
        listItem.remove();
        deleteBtn.remove();
    })

    printResult.appendChild(listItem);
    printResult.appendChild(deleteBtn);
}


submitDebt.addEventListener('click', printdebt);



