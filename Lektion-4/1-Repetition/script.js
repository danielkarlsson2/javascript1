// IF Satser

/* 
    == Jämför inte datatyp      1 == '1' ser den som samma
    === Jämför även datatyp     (rekommenderad)
*/
const notLoggedIn = document.querySelector('#notLoggedIn');
const loggedIn = document.querySelector('#loggedIn');

const signedIn = true;

const toggleLogin = () => {
    if(signedIn) {
        notLoggedIn.classList.add('d-none');
        loggedIn.classList.remoce('d-none');
    }
    else {
        loggedIn.classList.add('d-none');
        notLoggedIn.classList.remove('d-none');
    }

}
let value = 1;
if(value === 1) {}
else if(value === 2) {}
else {}

// SWITCH       är som en ===
switch(value) {
    case 1:
        // Do Something
        break;
    case 2:
        // Do Something
        break;
    case 3:
        // Do Something
        break;
    case 4:
        // Do Something
        break;
    case 5:
        // Do Something
        break;
    case 6:
        // Do Something
        break;
    default:

}

const array = [11, 22, 33, 44, 55];

for(let i = 0; i < array.length; i++) {
    // console.log(i)
    // console.log(array[i])
}

const foodItemsUL = document.querySelector('#foodItems');

const items = ['pannkakor', 'köttbullar', 'julskinka'];

for(let item of items) {
    foodItemsUL.innerHTML += `<li>${item}</li>`
}

items.forEach(item => {
    let li = document.createElement('li')
    li.innerHTML = `<a href="#">${item}</a>`

    foodItemsUL.appendChild(li)
})

const users = [
    {id:1, name: 'Joakim', value: false},
    {id:2, name: 'Hans', value: false},
    {id:3, name: 'Daniel', value: false},
    {id:4, name: 'Tommy', value: false},
]

users.forEach(user => {
    // foodItemsUL.innerHTML += `<li>${user.name}</li>`
})

const newUsers = users.map(user => {
    if(user.id === 3) {
        user.value = true;
        return user
    }

    return user
})

// console.log(newUsers)

const filteredUsers = newUsers.filter(user => {
    // return user.id !==2
    // return user.value == true
})

// console.log(filteredUsers)

// WHILE / DO WHILE

// let index = 0;

// while(index < 20) {
//     console.log('.')
//     index++;
// }

// do {
//     console.log('dowhile')
//     index++;
// }
// while(index < 0);

// FUNCTIONS

// function displayFoodItems() {
//     for(let item of items) {
//         foodItemsUL.innerHTML += `<li>${item}</li>`
//     }
// }

// const displayFoodItems = () => {
//     for(let item of items) {
//     foodItemsUL.innerHTML += `<li>${item}</li>`
// }
// }
// displayFoodItems()


const printToDOM = (array) => {
        array.forEach(item => {
        document.body.innerHTML += `<div>${item}</div>`
    })
}

printToDOM(['hej', 'test'])

// METODER  Funcktion som är hopkopplat med ett objekt

const person1 = {
    firstName: 'Joakim',
    lastName: 'Wahlström',

    fullName() {
        return `${this.firstName} ${person1.lastName}`
    }
}
const person2 = {
    firstName: 'Hans',
    lastName: 'Mattin',

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// console.log(person1.fullName())
// console.log(person2.fullName())



// BAD PRACTISE
const calculateTemperature = (temp) => {
    // calculate celcius
    // calculate farenheit
    // calculate kelvin
}


// Good Practise
const calculateCelsius = (temp) => {
    
}
const calculateFarenheit = (temp) => {
    
}
const calculateKelvin = (temp) => {
    
}


// BAD
function register() {
    // Validate inputs
    // Register user
    // Login user
}

// GOOD
function validateInputs() {}
function registerUser() {}
function loginUser() {}



const checkUserEmailExists = (email) => {
    // kollar på databasen om mailen är ledig
    return true;
}

function registerUser() {
    if(checkUserEmailExists(email)) {
        // Throw new error(
            return false
        }
        else {
            // register user
            return true
        }
    }


function onSignUp() {
    if(validateInputs()) {
        if(registerUser()){
            if(loginUser()) {

            }
        }
    }
    if(!validateInputs())   //Behövs inga måsvingar om man gör en grej
    return;

    if(!registerUser())
    return
}



// Callback Functions

const powerOf = (nr1, nr2, cb) => {
    let sum = nr1 ** nr2;

    cb(sum)
}

powerOf(2, 3, (result) => {
    console.log(result)
})