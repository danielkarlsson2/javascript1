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
// console.log('Med unshift ' + names);

// Ta bort i början av en array
names.shift();
// console.log('Med shift: ' + names);

// Lägga till i slutet av en array
names.push('Colin');
// console.log('Med push: ' + names);

// Ta bort i slutet av en array
names.pop();
// console.log('Med pop: ' + names);

// Ändra ett specifik värde i en array
names[1] = 'Nytt namn';
// console.log('Ändrat: ' + names);

// names = ['Tommy', 'Annika']; //Går inte när det är en const

// Hämta ut vilken indexplats någonting har i en array.
names.indexOf('Nytt namn');    //ger -1 om det inte finns

// const i = names.indexOf('Nytt namn');
// names[i] = 'hej';
names[names.indexOf('Nytt namn')] = 'Hej!';
// console.log(names);

// Delete - tar bort värdet på en specifik plats i en array men inte platsen
// delete names[1];
// delete names[names.indexOf('Hej')];

// console.log(names);

// .splice()    -   Tar bort och / eller lägger till ett värde från en specifik position
names.splice(1, 1); //Tar bort 1 från indexplats 1
names.splice(1, 0, 'Colin', 'Alice');   //Tar bort 0 och lägger till Colin & Alice
names.splice(1, 2, 'Jack');     //Tar bort 2 från indexplats 1 och lägger till Jack
names.splice(names.indexOf('Jack'), 1, 'Tommy', 'Pippi');

// console.log(names);

// Hur lång är en array
// console.log(names.length);

// const arrayToAdd = ['Colin', 'Vince']

// LÄgg ihop två arrayer
// console.log(names.concat(['Colin', 'Vince']));  //Görs bara i consolen (modifierar inte det ursprungliga värdet)
// const newNames = names.concat(['Colin', 'Vince'])    //Returnerar en ny kombinerad array

// Spread operator

// names.splice(names.length -1, 0, ...arrayToAdd);
// names.splice(0, names.length, ...arrayToAdd);
// console.log(names)



const obj = {
    fName: 'Daniel',
    lName: 'Karlsson'
}

const obj2 = {
    email: 'daniel@dkmusic.se',
    obj: {
        fName: 'Daniel',
        lName: 'Karlsson'
    }
}

const obj3 = {
    ...obj,
    email: 'daniel@dkmusic.se'
}

// const arr = [...gamla, nåtnytt]

// console.log(obj2);
// console.log(obj3);

// console.log(names);
// names.sort();   //Sortera i bokstasordning

const newNames = ['Aa', 'Bb', '1a', '2a', 'aa', 'bb']
// const numbers = [1, 2, 3, 4, 5];


// console.log(names);
// names.reverse(); //Vänder på arrayen så först blir sist osv.
// console.log(names);

// names.sort().reverse(); // Sortera i bokstavsordning baklänges
// console.log(names)

// newNames.sort();
// console.log(newNames);

// numbers.sort();
// console.log(numbers);


// ------------------------------------------------------------

// High Order Array Methods
// En high order method tar antingen emot eller returnerar en funktion



// const sum = numbers.reduce(function(acc, current) {
//     // console.log('acc: ' + acc, 'current: ' + current);
//     return acc + current
// })

// console.log(sum);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredArray = numbers.filter(num => {
//     return num < 3
// })
// console.log(filteredArray);


// const mappedArray = numbers.map((num, index) => {
//     return `index: ${index} - nummer: ${num}`
// })
// console.log(mappedArray);


// const test = [];
// numbers.forEach(num => {
//     test.push(num);
//     console.log(num)
// })

// console.log(numbers);
// console.log(test)
