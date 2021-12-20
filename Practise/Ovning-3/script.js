// -------1-------

function myFunction(name) {
    return 'Hello' + name
} 

let name1 = myFunction('.')

// console.log(name1)

// --------2------
for(let i = 0; i < 5; i++) {
    console.log(i + '.', name1)
}


// ------3-----


// function numFunction(num) {
//     if(num <= 12 ) {        
//         console.log('White')
//     }
//     else if(num >= 13 <=18) {
//         console.log('Green');
//     }
//     else if(num >= 19 <=25) {
//         console.log('Red');
//     }
//     else if(num >= 26 <= 99) {
//         console.log('Blue');
//     }
//     else { 
//         console.log('Black');
//     }    
// }

let number = 100

function numFunction(num) {
    switch(true) {
        case (num >=0) && (num <= 12): 
        console.log('White')
        break;

        case  (num >=13) && (num <= 18): 
        console.log('Green')
        break;

        case  (num >=19) && (num <= 25): 
        console.log('Red')
        break;

        case  (num >=26) && (num <= 99): 
        console.log('Blue')
        break;

        default:
            console.log("black")
    }
}

// numFunction(number);

// ---------------- 4 ---------------

/* const names = ['Daniel', 'Alice', 'Ines', 'Hanna']

console.log(names.indexOf('Hanna'));


document.getElementById("name1").innerHTML = names[0];
document.getElementById("name2").innerHTML = names[1];
document.getElementById("name3").innerHTML = names[2];
document.getElementById("name4").innerHTML = names[3];
 */

// -------------- 5 -----------------

/* 

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(firstName.value)
    if(inputText.value.trim() === '')
    return;

    console.log(inputText.value)
    
})
 */


// -------------- 6 ------------------
//  SPEL


