const regForm = document.querySelector('#regForm');
const email = document.querySelector('#email');


const validateText = (id) => {
    let input = document.querySelector(id);

    if(input.value === ''|| input.value.length < 2) {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        input.focus();
        return false;
    }
    else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;

    }
}

const validateEmail = (emailInput) => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(regEx.test(emailInput.value)) {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        return true;
    }
    else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
        emailInput.focus();
        return false;
    }
    
}

regForm.addEventListener('submit', e => {
    e.preventDefault();

    // validateText('#firstName') 
    // validateText('#lastName') 
    // validateEmail(email)

    for(let i = 0; i < e.currentTarget.Length; i++) {
        if(e.currentTarget[i].type === "text") {
        
        validateText('#' + e.currentTarget[i].id)
        }
        else if(e.currentTarget[i].type === "email") {
            validateEmail(email);
        }
    }

    if(
    validateText('#firstName') &&
    validateText('#lastName') &&
    validateEmail(email)
    ) {
        console.log('Success');
    }
    else {
        console.log('Nope försök igen')
    }
})