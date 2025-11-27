const form = document.getElementById('myForm');
const nameInput = document.getElementById('name') ; 
const emailInput = document.getElementById('email') ;
const passInput = document.getElementById('password') ;
const cpassInput = document.getElementById('cpassword') ;

form.addEventListener('submit' , function(e) {
    e.preventDefault() ;

    let valid = true ;

    if (nameInput.value.trim().length < 3) {
        document.getElementById('nameError').innerText = "Name too short" ;
        valid = false;
    }  else {
        document.getElementById('nameError').innerText = "" ;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById('emailError').innerText = "Invalid email" ;
        valid = false ;
    }  else {
        document.getElementById('emailError').innerText = "" ;
    } 

    if (passInput.value.length < 6) {
        document.getElementById('passError').innerText = "Password to short" ;
        valid = false;
    } else {
        document.getElementById('passError').innerText = "" ;
    }

    if (cpassInput.value !== passInput.value) {
        document.getElementById('cpassError').innerText = "Passwords do not match ! " ;
        valid = false ;
    } else {
        document.getElementById('cpassError').innerText = "" ;
    }

    if (valid) {
        document.getElementById('successMsg').innerText = "Regestration Hogayaaa !" ;
    }


})