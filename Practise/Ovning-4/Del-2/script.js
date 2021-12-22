// -----Variablar
const form = document.querySelector('#form');

const submit = document.getElementById('submit');
const tac = document.getElementById('tac');

// ----- Validate-----

const validateFirstName = () => {
    const firstName = document.querySelector('#firstName');
    const feedback = document.querySelector('#feedback');

    if(firstName.value === '') {
        feedback.innerText = 'Du måste ange ett förnamn';        
    }
    else {
        feedback.innerText = '';
    }
}

const validateLastName = () => {
    const lastName = document.querySelector('#lastName');
    const feedback2 = document.querySelector('#feedback2');

    if(lastName.value === '') {
        feedback2.innerText = 'Du måste ange ett efternamn';        
    }
    else {
        feedback2.innerText = '';
    }
}
const validateEmail = () => {
    const email = document.querySelector('#email');
    const feedback3 = document.querySelector('#feedback3');

    if(email.value === '') {
        feedback3.innerText = 'Du måste ange en mailadress';        
    }
    else {
        feedback3.innerText = '';
    }
}

// -----END-----


// ----Validate checkbox
function terms_changed(termsCheckBox) {
    if(termsCheckBox.checked){
        document.getElementById("submit").disabled = false;
    }
    else{
        document.getElementById("submit").disabled = true;
    }
}
// ----End





form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const user = {
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        email: e.currentTarget.email.value,
    }
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    console.log(user);
    
})