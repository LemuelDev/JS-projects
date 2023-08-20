let celsius = document.querySelector("#celsiusbox");
let fahrenheit = document.querySelector("#fahbox");
let kelvin = document.querySelector("#kelbox");
let convertcel = document.querySelector("#convert1");
let convertfah = document.querySelector("#convert2");
let convertkel = document.querySelector("#convert3");

convertcel.addEventListener('click', () => {
   
    if (!celsius) {
        alert('Please input your temperature.')
    }else {
         let fah = (celsius.value * 9/5) + 32;
         alert('Celsius to Fahrenheit: ' + fah+ ' F')
   
    }
})

convertfah.addEventListener('click', () => {
    if (!fahrenheit) {
        alert('Please input your temperature.')
    }else {
         let cel = (fahrenheit.value - 32) * 5 / 9;
         alert('Fahrenheit to Celsius  : ' + cel+ ' C')
         
    }

})

convertkel.addEventListener('click', () => {
    if (!kelvin) {
        alert('Please input your temperature.')
    }else {
         let kel = (kelvin.value - 273.15);
         alert('Kelvin to Celsius  : ' + kel + ' C')
         
    }

})