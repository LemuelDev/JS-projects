const billTotalInput = document.querySelector('#billTotalInput');
const tipInput = document.querySelector('#tipInput');
const totalPeople = document.querySelector ('#totalPeople')
const totalPerPerson = document.querySelector('#totalPerPerson');

function forTipOnly () {
  const billInput = Number(billTotalInput.value);
  const tipAmount = Number(tipInput.value);
  const totaltip = billInput * (tipAmount / 100);
  const totalHTML = billInput + totaltip;
  totalPerPerson.innerHTML = totalHTML.toFixed(2);
}
tipInput.addEventListener('input', function() { 
  forTipOnly();
  });
  billTotalInput.addEventListener('input', function() {
    const billInput = Number(billTotalInput.value);
    totalPerPerson.innerHTML = billInput.toFixed(2);
  });

  let count = 1
  function add() {
    count++
    totalPeople.innerHTML = count
    calculate();
  }
  function calculate() {
    const billInput = Number(billTotalInput.value);
    const tipAmount = Number(tipInput.value);
    const totaltip = billInput * (tipAmount / 100);
    const totalHTML = (billInput + totaltip) / count;
    totalPerPerson.innerHTML = totalHTML.toFixed(2);
  }

  function minus(){
    count--;
    if (count <= 1){
        count = 1
    }
    totalPeople.innerHTML = count;
    calculate();
  }
