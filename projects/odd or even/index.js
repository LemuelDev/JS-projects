const textbox = document.getElementById('textbox');
const deleteButton = document.getElementById('deleteButton');
const enter = document.getElementById('enter');

enter.addEventListener ('click', () => {
  const number = parseInt(textbox.value);
  if (number % 2 == 0) {
    alert(number + " is even");
  }else {
    alert(number + " is odd");
  }

});
 

  deleteButton.addEventListener('click', function() {
    let inputValue = textbox.value;
    inputValue = inputValue.replace(/\d+/g, ''); // remove all numbers
    textbox.value = inputValue; // set new value
  });