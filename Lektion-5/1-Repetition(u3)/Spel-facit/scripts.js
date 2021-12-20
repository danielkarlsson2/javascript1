const form = document.querySelector('#form');
const input = document.querySelector('#input');
const feedback = document.querySelector('#feedback');

const randomNr = Math.floor(Math.random() * 100);

let counter = 0;
console.log(randomNr);




const printFeedbackToDOM = (string, correct) => {
    if(!correct)
    return feedback.innerText = string;

    feedback.innertext = string + ' Number of guesses: ' + counter
}




const checkGuess = (value) => {
    if(randomNr > value) {
        printFeedbackToDOM('To Low', false);
        // feedback.innertext = 'To low'
    }
    else if(randomNr < value) {
        printFeedbackToDOM('To High', false);
        // feedback.innertext = 'To high'
    }
    else {
        printFeedbackToDOM('You guessed the number!', true);
        // feedback.innertext = 'You guessed the number'
    }
}




form.addEventListener('submit', e => {
    e.preventDefault();
    counter ++;
    // if(randomNr > input.value) {
    //     printFeedbackToDOM('To Low');
    //     // feedback.innertext = 'To low'
    // }
    // else if(randomNr < input.value) {
    //     printFeedbackToDOM('To High');
    //     // feedback.innertext = 'To high'
    // }
    // else {
    //     printFeedbackToDOM('You guessed the number');
    //     // feedback.innertext = 'You guessed the number'
    // }

    checkGuess(input.value)
    
})
