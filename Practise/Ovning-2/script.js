const family = ['Kjell', 'Gun-Britt', 'Andreas', 'Hanna', 'Ines', 'Daniel'];

family.sort();


// family.indexOf('Daniel')
console.log(family);
console.log(family.indexOf('Daniel'));


family.splice(2, 0, 'Joakim', 'Hans');
console.log(family);

delete family[7];
console.log(family);

// family.unshift('Kjell');
family.splice(0, 0, 'Kjell');
console.log(family);

// console.log(family);
// family.indexOf('Daniel');

const greetings = names.map;