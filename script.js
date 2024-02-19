let pass1Value = '';
let pass2Value = '';

let pass1 = document.getElementById('password');
pass1.addEventListener('input', function(event) {
    pass1Value = event.target.value;
    passwordCompare();
})

let pass2 = document.getElementById('passwordConfirm');
pass2.addEventListener('input', function(event) {
    pass2Value = event.target.value;
    passwordCompare();
})

let passError = document.getElementById('passError');
let passFields = document.querySelectorAll('input[type="password"]')

function passwordCompare() {
    if (pass1Value !== pass2Value) {
        passError.textContent = 'passwords dont match';
        passError.style.color = "rgb(174, 0, 0)";
        passFields.forEach(function(passField) {
            passField.style.border = "2px solid rgb(174, 0, 0)"
        });
    } else if (pass1Value === pass2Value && pass1Value !== '' && pass2Value !== '') {
        passError.textContent = 'looks good';
        passError.style.color = "#537c37";
        passFields.forEach(function(passField) {
            passField.style.border = "2px solid #537c37"
        })
    } else if (pass1Value === '' && pass2Value === '') {
        passFields.forEach(function(passField) {
            passError.textContent = '';
            passField.style.border = "";
        })   
    }
}
