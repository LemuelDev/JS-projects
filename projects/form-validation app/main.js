
function login() {
    let email = document.getElementById('email')
    let pass = document.getElementById('pass')
    if (email.value === "johnlemuelencina30@gmail.com" && pass.value === "jlencina30" ){
       alert("Login Succesfull");
       window.location.href = 'loginsuccess.html';
       
    } else {
       alert("Wrong email or password. Try Again.");
       email.value = ""
       pass.value = ""
    }
 }