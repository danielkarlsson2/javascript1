/* 
    JavaScript Datatyper
    -------------------------------------------------------

    String      =   Text, 'abc', '123'
    Number      =   Heltal, decimaltal
    Boolean     =   Sant eller falskt, True/False
    null        =   Tomt, (manuellt)
    undefined   =   Odefinierat, tomt (automatiskt)
    Object      =   ett objekt/klass innehåller ett eller flera värden
    Array       =   En lista med värden, Array är av datattypen OBJECT


*/
let datatype;

console.log(typeof datatype);
datatype = 'en text';
console.log(typeof datatype);
datatype = 3;
console.log(typeof datatype);
datatype = true;
console.log(typeof datatype);
datatype = {}
console.log(typeof datatype);
datatype =[]
console.log(typeof datatype);
datatype = null;
console.log(typeof datatype);
/* let name;

console.log(name) */

/*  
    Strings

    let name = "Daniel";    (inte vanligast)
    let name = 'Daniel';    (Vanligast)
    let name = `Daniel`;    Använd denna när du ska göra en template literal (Placeholders) (shift + `, tryck mellanslag)
    
*/

// let text = "Jag är \"bäst"\ i 'hela' världen";
text = 'Jag är "bäst" i \'hela\' världen';
text = `Jag är "bäst" \'i\' hela världen`;

let name = 'Daniel';
let age ="35";

text = 'Jag heter ' + name + `och jag är `+ age + `år gammal`;
text = 'Jag heter ' + name + `och jag är `+ age + `år gammal`;
// text = 'Jag heter ${name} och är ${age} år gammal.` ;

let myName = 'Daniel Karlsson';
/* console.log(text.length);
console.log(text[1]);
console.log(text.indexOf('e'); */

text.length;
text[1]
text.indexOf('e');

// console.log(myName.toUpperCase());
// console.log(myName.toLocaleLowerCase());

// console.log(myName.split(' '))

let names = myName.split(' ');
// console.log(names)
let firstName = names[0];
let lastName = names[1];

// console.log(`Mitt förnamn är ${firstName} och efternamnet är ${lastName}.`)
let text2 = (`   Mitt förnamn är ${firstName} och efternamnet är ${lastName}.`)
// console.log(text2)
document.body.innerText = `Hej ${firstName}, välkommen tillbaka!`;

// console.log(text2.trim())

