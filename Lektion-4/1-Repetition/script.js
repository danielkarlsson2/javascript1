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