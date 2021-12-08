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
