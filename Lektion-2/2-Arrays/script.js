// ARRAYS   -   En lista med ett eller flera värden

// names = [];
// var names = [];
// let names = [];
// const names = [];


// Vi vill hålla samma datatyp inuti en array
const array = [0, 1, 2, 3, 4, 5, 6, 7];

// GÖR INTE SÅHÄR
// const multiArray = ['12', 12, true, {firstName: 'Daniel'}];


// Det här är ocksp samma
// I det här fallet är datatypen objekt, objekten i sig kan innehålla flera datatyper men man vill hålla strukturen likadant
const users = [
    {firstName: 'Daniel', lastName: 'Karlsson', age: 35, isActive: true},
    {firstName: 'Hanna', lastName: 'Gelin', age: 30, isActive: false},
    {firstName: 'Alice', lastName: 'Gumman', age: 4, isActive: true},
]

const names = ['Daniel', 'Alice', 'Ines', 'Hanna'];

// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// Lägga till i början av en array
names.unshift('Colin');
console.log('Med unshift ' + names);

// Ta bort i början av en array
names.shift();
console.log('Med shift: ' + names);

// Lägga till i slutet av en array
names.push('Colin');
console.log('Med push: ' + names);

// Ta bort i slutet av en array
names.pop();
console.log('Med pop: ' + names);

// Ändra ett specifik värde i en array
names[1] = 'Nytt namn';
console.log('Ändrat: ' + names);

// names = ['Tommy', 'Annika']; //Går inte när det är en const

console.log(names.indexOf('Nytt namn'));    //get -1 om det inte finns

// const i = names.indexOf('Nytt namn');
// names[i] = 'hej';
names[names.indexOf('Nytt namn')] = 'Hej!';
console.log(names);