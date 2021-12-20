const regForm = document.querySelector('#regForm');

regForm.addEventListener('submit', function(e) {
    e.preventDefault();


    // let firstName = e.currentTarget[0].value;
    // let lastName = e.currentTarget.lastName.value;
    // let adress = e.currentTarget['adress'].value;

    // console.log(firstName, lastName);

    // for(let i = 0; i<e.currentTarget.length; i++) {
    //     console.log(e.currentTarget[i])
    // }

    let user = {
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        adress: e.currentTarget.adress.value,
        role: e.currentTarget.role.value,
    }

}) 
