const expenseName = document.querySelector('#expenseName')
const dateInput = document.querySelector('#dateInput')
const amountInput = document.querySelector('#amountInput')
const submitExpense = document.querySelector('.submitExpense')
const mainTable = document.querySelector('.mainTable')
const errorMsg = document.querySelector('.errormsg')



function getInputs() {
    const expenses = expenseName.value
    const date = dateInput.value
    const amount = amountInput.value

    if (!expenseName.value || !dateInput.value || !amountInput.value  ){
        errorMsg.textContent = 'Please input the name , date , and amount.'
    }else {
        errorMsg.textContent = ''
        const expenseList = document.createElement('tr')
        expenseList.innerHTML = `
        <td><li>${expenses}</li> </td>
        <td><li>${date}</li></td>
        <td><li> ${amount}</li></td>
        <td><button onclick = "removeList(this)">delete</button></td>`
        
        mainTable.appendChild(expenseList)
    }  
}

function removeList(button) {
   button.parentElement.parentElement.remove()
}


submitExpense.addEventListener('click', getInputs)