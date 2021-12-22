const form = document.querySelector('#form');
const input = document.querySelector('#input');
const feedback = document.querySelector('#feedback');
// const listGuess = document.querySelector('#listGuess');
const gissning = document.querySelector('#gissning');

const randomNr = Math.floor(Math.random() * 100);
let counter = 0;
console.log(randomNr);


const printFeedbackToDOM = (string, correct) => {
    if(!correct)
    return feedback.innerText = string;
    else
    feedback.innerText = string + ' Number of guesses ' + counter
}





const checkGuess = (value) => {
    if(randomNr > input.value) {
        // printFeedbackToDOM('To Low');
        printFeedbackToDOM('To low.', false);
        // feedback.innerText = 'To low';
    }
    else if(randomNr < input.value) {
        printFeedbackToDOM('To High.', false);        
        // feedback.innerText = 'To high'
    }
    else {
        printFeedbackToDOM('You guessed the number! ', true);        
        // feedback.innerText = 'You guessed the number'
    }
}

// -------- Skapa list item
const listCount = document.createElement('li');


form.addEventListener('submit', e => {

    // övning 4.1
    if(input.value === '') {
        feedback.innerText = 'Please write a number';
        e.preventDefault();
    }
    else {
        // END
    e.preventDefault(); 
    counter ++;
    checkGuess(input.value);    
    console.log(counter);
    // addList(counter.value);
    gissning.appendChild(document.createTextNode(input.value + '. '));
    }
})

    // const lista = () => {
    //     const gissning = document.querySelector('#gissning');
    //     let li = document.createElement('li');
    //     gissning.appendChild('li');
    //     li.innerText(counter);
    



// for (i = 0; i < counter.length; i++) {
//     let li = document.createElement('li');
//     gissning.appendChild(li);
//     li.innerHTML = counter;
// }

// forEach(counter++)















// ---------------

// let counter = 0;
// console.log(randomNr);




// const printFeedbackToDOM = (string, correct) => {
//     if(!correct)
//     return feedback.innerText = string;

//     feedback.innertext = string + ' Number of guesses: ' + counter
// }




// const checkGuess = (value) => {
//     if(randomNr > value) {
//         printFeedbackToDOM('To Low', false);
//         // feedback.innertext = 'To low'
//     }
//     else if(randomNr < value) {
//         printFeedbackToDOM('To High', false);
//         // feedback.innertext = 'To high'
//     }
//     else {
//         printFeedbackToDOM('You guessed the number!', true);
//         // feedback.innertext = 'You guessed the number'
//     }
// }


