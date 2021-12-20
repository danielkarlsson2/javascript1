/* const printName = () => {
    console.log('Hello ' + name);
}

printName('Joakim');

for(let i = 0; i < 5; i++) {
    // printName('Joakim')
    console.log(i)
    printName('Joakim')
} */

// Lösning med switch--------

// const numberToColor = (nr) => {
//     let answer;
//     if(nr < 0) {
//         return 'black'
//         answer = 'black';
//     }
//     else {

//     switch(true) {
//         case nr < 13:
//             // return 'white'
//         answer = 'white'
//         case nr < 19:
//             // return 'green'
//             answer = 'green'
        
//         case nr < 26:
//             // return 'red'
//             answer = 'red'

//         case nr < 100:
//             // return 'blue'
//             answer = 'blue'
        
//         default:
//             // return black
//             answer = 'black'
//         }
//     }
// }

//  lösning med if sats-------------

/* const numberToColor = (nr) => {
    if(nr >= 0 && nr <=12) {
        console.log('white')
    }
    else if (nr >= 13 && nr <= 18) {
        console.log('green')
    }
    else if(nr >= 19 && nr <=25) {
        console.log('red')
    }
    else if(nr >= 26 && nr <= 99) {
        console.log('blue')
    }
    else {
        console.log('black')
    }
}
console.log(numberToColor(12)); */


// 4 - Skapa en array

const namesArray = ['Joakim', 'Hans', 'Tommy', 'Jeanette'];
// const namesDiv = document.querySelector('#names');

// namesArray.forEach(name => {
//     // += lägger till
//     namesDiv.innerHTML += `<p>${name}</p>`
// })

// let namesDiv = document.createElement('div');
// namesDiv.id = 'names';

// document.body.appendChild(namesDiv);

// namesArray.forEach(name => {
//     let p = document.createElement('p');
//     p.innerText = name;
//     namesDiv.appendChild(p);
// })

// 5 - Formulär
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const input = document.querySelector('#input');

// lösning 1
// form.addEventListener('submit', e => {
//     e.preventDefault()  //Förhindrar att den laddar om sidan
//     console.log(input.value);
//     input.value = '';
// })

// lösning 2

/* input.addEventListener('click', e => {
    e.preventDefault();
    console.log(input.value);
    input.value = '';

}) */

// 6 - 