let pass1Value;
let pass2Value;

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

function passwordCompare() {
    if (pass1Value !== pass2Value) {
        console.log("FUCK")
    } else console.log("YAY")
    }

