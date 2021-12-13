// ARRAYS
// En lista med ett eller flera värden

// Deklarerar oftast med const

const array = [
    {firstName: 'Daniel', lastName: 'Karlsson', age: 35},
    {firstName: 'Joakim', lastName: 'Wahlström', age: 34},
    {firstName: 'Alice', lastName: 'Karlsson', age: 4},
];

// const family = ['Joakim', 'Jeanette', 'Liam', 'Wille', 'Jack', ]

// Hämta ut information från en array
// console.log(array[2]);
// console.log(array[2].firstName);

// Lägg till i början
// array.unshift({firstName: 'Hanna', lastName: 'Gelin', age: 30})
const hanna = {
    firstName: 'Hanna',
    lastName: 'Gelin',
    age: 30
};
array.unshift(hanna);

// Tar bort i början
array.shift();

// Lägg till i slutet
array.push(hanna);

// Ta bort i slutet
// array.pop();

// console.log(array)

// console.log(family.indexOf('Liam'));
// console.log(array.indexOf(hanna));


// Hitta ett objekt i en array
// == Jämför någonting.

const indexOfHanna = array.findIndex(person => {
    return person.firstName == 'Alice';
})

// console.log(indexOfHanna);


// Hitta ett specifikt objekt
const person = array.find((p) => {
    return p.firstName == 'Nisse';
})

// person.firstName = 'Nisse';
// console.log(person)

// -----------------------------------Övningsuppgift 2 ----------------------------

const family = ['Kjell', 'Gun-britt', 'Andreas', 'Daniel', 'Hanna', 'Ines'];

family.sort();

// console.log(family);

// console.log(family.indexOf('Daniel'));

family.splice(family.indexOf('Daniel')+1, 0, 'Hans', 'Tommy');

// console.log(family);

family.pop();
family.unshift('Kjell');

// console.log(family);



let counter = 0;
family.forEach(() => {
    counter++;
    // console.log(counter);
})

// console.log(family.length);

const greetings = family.map(name => {
    return 'Hejsan ' + name;
})

greetings.forEach(greet => {
    // console.log(greet);
})

// --------------END------------------


// let selected = array.map(person=> {
//     return person.lastName == 'Karlsson';
// })

// FILTER tar bort det som inte matchar
// let selected = array.filter(person => {
//     return person.lastName == 'Karlsson';
// })

// Gör man bara en enda sak kan man skriva på samma rad, då blir => samma som return
// let selected = array.filter(person => {
//     return person.lastName == 'Karlsson';
// })
// .map(person => {
//     return person.firstName
// })
// .sort();

// console.log(selected);

// const shoppingList = ['mjölk', 'ägg', 'bröd'];

// console.log(shoppingList.includes('smör'));

// SET

const shoppingList = new Set();
shoppingList.add('mjölk');
shoppingList.add('ägg');
shoppingList.add('smör');
shoppingList.add('ägg');
shoppingList.add('ägg');
shoppingList.add('ägg');
shoppingList.add('bröd');


console.log(shoppingList);

// const list = [];
shoppingList.forEach(item => {
    // console.log(item);
    // list.push(item);
})

// let list = Array.from(shoppingList);
// const list = [...shoppingList];
const list = [...shoppingList];

console.log(list)