// Booleans tru/false

let email = 'daniel@dkmusic.se';

/* console.log(email.includes('@')); //true
console.log(email.includes('12')); //false */


// COMPARE STATEMENTS

let number = 13;
let string = '13';

// Påstår att number är samma som 13
/* console.log(number == 13);  //true
console.log(number == 20); //false */

// Påstår att number INTE är samma som 13
/* console.log(number != 13);  // false
console.log(number != 20);  // false */

/* 
// Större än 
console.log(number > 10);   //true
// Större eller lika med
console.log(number >= 13);   //true
// Mindre än 
console.log(number < 10);   //false
// Mindre eller lika med
console.log(number <= 13);   //true */

/* 
// Två = tecken jämför bara värdet
console.log(number == string);  //true
// Tre = tecken jämför värdet och datatyp
console.log(number === string); //false

console.log(string != number); 
console.log(string !== number);  */

// IF SATSER
if(true) {
    // gör någonting här
    // console.log('true')
}
if(false) {
    // Hoppa över det här
    console.log(false)
}

// let isLoggedin = false;

// isLoggedin = true;
/* 
if(isLoggedin) {
    console.log('användaren är inloggad');
    // visa "mina sidor" i navbaren
}
if(!isLoggedin) {
    console.log('användaren är INTE inloggad');
    // dölja "mina sidor" i navbaren
} */

const names = [];
// names.push('Joakim');

/* if(names.length) {
    console.log('arrayen names är längre än 0');
}

if(string == number) {
    console.log('påståendet är sant: string === number');
}
if(string === number) {
    console.log('påståendet är falskt: string === number');
} */

/* 
    == lika med (utan att jämföra datatyp)
    === lika med (jämför datatyp)
    <   mindre än
    >   större än
    <=  Mindre eller lika med
    >= Större eller lika med
    !   Inte

    &&  och
    ||  eller

*/


let st = '15';
let nr = 13;

// console.log(st > nr);
/* if(st > nr) {
    console.log('st är större än nr');
}
if(typeof st == typeof nr) {
    console.log('dom har samma datatyp');
}
if(typeof st != typeof nr) {
    console.log('st är INTE samma typ som nr');
} */

/* if(st > nr) {
    if(typeof st == typeof nr) {
        console.log('st är större än nr och dom har samma datatyp');
    }
}
if(st > nr && typeof st == typeof nr) {
    console.log('st är större än nr och dom har samma datatyp');
}

if(st > nr || typeof st == typeof nr) {
    console.log('st är större än nr ELLER dom har samma datatyp');
} */



// if, else if, else

// BAD Practise
let isLoggedin = true;

// if(isLoggedin) {
//     console.log('användaren är inloggad');
//     // visa "mina sidor" i navbaren
// }
// if(!isLoggedin) {
//     console.log('användaren är INTE inloggad');
//     // dölja "mina sidor" i navbaren


// GOOD Practise
/* if(isLoggedin) {
    //DO something
    console.log('Vi är inloggade')
}   else {
    //Do something else
    console.log('Vi är inte inloggade')
} */

let name = 'Daniel';

/* if(name == 'Daniel') {
    console.log('Namnet är Daniel');
}
if(name == 'Hans') {
    console.log('Namnet är Hans')
} */

if(name == 'Daniel') {
    console.log('Namnet är Daniel');
}   
else if (name == 'Hans') {
    console.log('Namnet är Hans');
}
else {
    console.log('Okänt namn');
}



let value = 5;
if(value === 1) {console.log('Värdet är 1') }
else if(value === 2) {console.log('Värdet är 2') }
else if(value === 3) {console.log('Värdet är 3') }
else if(value === 4) {console.log('Värdet är 4') }
else if(value === 5) {console.log('Värdet är 5') }
else if(value === 6) {console.log('Värdet är 6') }
else {console.log('Värdet finns inte i if satsen')}


// Ternary operator

let age = 17;

let drink = age >= 18 ? 'Beer' : 'Coke';
// Samma sak som
/* let drink;
if(age >= 18) {
    drink = 'Beer'
}
else {
    drink = 'Coke'
} */
console.log(drink);

// T ex
{/* <div class={loggedIn? 'd-flex' : 'd-none'}>

</div> */}