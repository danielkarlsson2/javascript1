// CONSOLE
//Vanligast att felsöka med konsolen. 
//Felsöknings om någonting går fel
// let app;
// let app;

// (Kommer använda konsolloggen hela tiden.)

// console.log('vanligt meddelande');
// console.warn('varningsmeddelande');
// console.error('felmeddelande');

// DOM
// document.body.innerText = '<h1>Hejsan</h1>';
// document.body.innerHTML = '<h1>Hejsan</h1>';
// document.body.createElement('div').innerText = 'hej';    //ger ett felmeddelande
// document.body.appendChild(document.createElement('div'));

const results = document.querySelector('#results');
// const input = document.querySelector('.input-class');
// const input = document.getElementsByName('input-name')[0];
// const input = document.getElementsById('input-id');

// let res = document.querySelector('#input-id').value;

// res = input.value;
// results.innerText = res;


// console.log(input);
// console.log(res)


// VARIABLES

// name = 'Daniel';        //Deklarerar någonting globalt. GÖR INTE SÅ
// var name = 'Daniel';    //Deklarerar någonting globalt. UNDVIKA DET HÄR
// let name = 'Daniel'     // Deklarerar någonting lokalt i ett scope. GÖR DET HÄR
// const name = 'Daniel'      // Deklarerar någonting skrivskyddat lokalt. GÖR DET HÄR

// name = 'DanyK'

// console.log(name);

//DATATYPER

/* 
    string  -   text
    number  -   siffror, heltal, decimaltal
    boolean -   true/false
    null    -   tomt, (manuellt)
    undefined - tomt / odefinierat (automatiskt)
    object  -   innehåller ett eller flera andra värden som key:value pairs
    array   -   en lista på ett eller flera värden
*/

// String   -   text

// let name = 'Daniel';
// let age = '35';

// let name = "Daniel";
let name = 'Daniel';
// let name = `Daniel`;    // när vi vill använda placeholders till variabler (template literal)

// let text = "Använder \"citat\" och enkel 'fnutt' och variabeln " + name ;
// let text = 'Använder "citat" och enkel \'fnutt\' och variabeln ' + name";
// let text = `Använder "citat" och enkel 'fnuttar' och variabeln ${name}`;

// results.innerText = text;
// console.log(text);

let email = 'daniel@dkmusic.se';
let number = 3;
let num1 = '23';

// console.log(text.length);
// console.log(text.indexOf('och'));
// console.log(text.lastIndexOf('och'));
// console.log(text.replaceAll('och', '&'));
// console.log(text.toUpperCase())
// console.log(text.toLocaleUpperCase());
// console.log(text.toLowerCase());
// console.log(text.concat(name));
// console.log(text.concat(' Hej'));
// console.log(text.trim());
// console.log(text.split(' '))
// console.log(email.split('@'));

// console.log(number);
// console.log(number.toString());

// console.log(num1);
// console.log(parseInt(num1));
// console.log(+num1);



// NUMBER   -   till för nummer av olika slag. Heltal och decimaltal

// let value = 1;
// value = 'hej';
// console.log(value);

//  JS (.js)    let value = 1;      DET GÅR ATT GÖRA value = 'hej';
//  C# (.cs)    int value = 1;      DET GÅR DÅ INTE ATT GÖRA value = 'hej';
// TS (.ts)     value: number = 1;  DET GÅR DÅ INTE ATT GÖRA value = 'hej';



// console.log(1+' 5');
// console.log(2 + 5 * 3) ;

// console.log(11 % 2);

// console.log(1e+6);
// console.log(1e-6);

// console.log(Number(true));
// console.log(Number(false));

// let value = 5;

// value += 2;
// value++;

// console.log(value += 2);    // Manipulerar ursprungsvärdet
// console.log(value)


// console.log(Number(10));
// console.log(Number('10'));
// console.log(Number('10.23'));
// console.log(Number('10,23'));
// console.log(Number('Daniel'));
// console.log(Number('    10.23'));
// console.log(Number('10 23'));


// console.log(Math.PI)
// console.log(Math.sqrt(4));
// console.log(Math.random() * 100);

// function random(min, max) {
//     const num = Math.floor(Math.random() * (max - min +1)) +min ;
//     return num;
// }
// console.log(random(3, 7));

// OBJECT   Talar om att det är ett objekt med{}

const user = {
    firstName: 'Daniel',
    account: {
        email: 'daniel@dkmusic.se',
        password: '1234',
    }
};
user.lastName = 'Karlsson';
user.account.password = '12345';

// let q = new URLSearchParams(window.location.search).get('q')

// console.log(q)
// console.log(user.firstName);
// console.log(user[q]);


// JSON JavaScript Object Notation
// json = '{"firstName": "Daniel", "lastName": "Karlsson"}'

const json = JSON.stringify(user);
const js = JSON.parse('{"firstName": "Daniel", "lastName": "Karlsson"}');

// console.log(user);
// console.log(json);
// console.log(js)

// delete user.account;
// console.log(user;



// DESTRUCTURE

const {firstName, lastName} = user;
const {firstName: fName, lastName: lName} = js;

let text = `Hej jag heter ${firstName} ${lastName}`;
// let text2 = `Hej jag heter ${firstName} ${lastName}`;
let text3 = `Hej jag heter ${fName} ${lName}`;

console.log(text);
// console.log(text2);
console.log(text3);