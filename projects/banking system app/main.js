const depositInput = document.querySelector('#depositInput');
const withdrawInput = document.querySelector('#withdrawInput');
const depositBtn = document.querySelector('.depositBtn');
const withdrawBtn = document.querySelector('.withdrawBtn');
const balanceResult = document.querySelector('#balanceResult');
const errorMessage = document.querySelector('.errorMessage');
const activity = document.querySelector('.activity')

let balance = 0;
function deposit() {
    const depositvalue = Number(depositInput.value);
    balance += depositvalue;
    balanceResult.innerHTML = balance
    depositInput.value = ''
    activity.innerHTML = `You deposited ${depositvalue} <br> 
    You're new balance is ${balance}.
    `;
}
function withdraw() {
    const withdrawValue = Number(withdrawInput.value)
    if (balance < withdrawValue) {
       errorMessage.innerHTML = 'Insufficient Balance.' 
       activity.innerHTML = 'Transaction Error. Insufficient Balance'
    }else {
        balance -= withdrawValue
        errorMessage.innerHTML = ''
        activity.innerHTML = `You withdrawed ${withdrawValue} <br> 
        You're new balance is ${balance}.
         `;
    }
    balanceResult.innerHTML = balance
    withdrawInput.value = ''
    
}

depositBtn.addEventListener('click', deposit)
withdrawBtn.addEventListener('click', withdraw)

