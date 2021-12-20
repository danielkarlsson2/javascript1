// inputText.addEventlistener('submit', (e) => {
    // e.preventDefault();
// })



const randomNumb = Math.floor(Math.random() * 100) + 1;
console.log(randomNumb);
let count = 1;

document.getElementById("guessSubmit") = function() {

    let guess = document.getElementById("inputText").value

    if(guess == randomNumb) {
        result.textContent = 'Grattis du gissade rätt!'
    }
}

const guess = document.querySelector('.guess');
const result = document.querySelector('.result');
const highLow = document.querySelector('.highLow');

const guessSubmit = document.querySelector('.guessSubmit');
const inputText = document.querySelector('.inputText');

let resetbutton;

// function gissaSiffra() {
//     // const userNumb = number(inputText.value);
//     // if (count === 1) {}

//     const userNumb = Number(inputText.value);
//     if (userNumb === randomNumb) {
//         result.textContent = 'Grattis du gissade rätt!';
//     }
//     else if (userNumb < randomNumb) {
//         result.textContent = 'Too low, gissa igen.'
//     }
    
//     else (userNumb > randomNumb) 
//         highLow.textContent = 'Too high, gissa igen.'
    
// }

// guessSubmit.addEventListener('click', gissaSiffra);




// document.getElementById("inputText").value()

// function guess (num) {
//     switch (num){
//         case num > numb:
//             document.getElementById("result").innerHTML = 'To low, try again.'
//             break;
//             // console.log(object)

//     }
// }

