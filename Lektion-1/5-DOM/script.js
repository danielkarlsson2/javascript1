// DOM - Document Object Model

// document.body.innerText = '<h1>Detta är en rubrik</h1>';
// GÖR INTE SÅHÄR
// result.innerHTML += '<h1>Detta är en rubrik</h1>';


// document

// window.document.body

// const result = document.getElementsById('result');
// const test = document.getElementsByClassName('entilldiv');
const test = document.querySelector('.entilldiv');
const result = document.querySelector('#result');

const user = {
    firstName: 'Daniel',
    lastName: 'Karlsson',
    age: 35,
    address: {
        street: 'Sigfridsbo',
        nr: 11,
        postalCode: '72593',
        city: 'Västerås'
    },
    isActive: true,
    phoneNumbers: ['073-0520147',]
}

const div = document.createElement('div')
div.innerText = 'En ny div'
result.appendChild(div)

// document.getElementById('result').innerHTML += '<h1>Detta är en rubrik</h1>';
// document.getElementById('result').innerHTML += '<p>' + user.firstName + '</p>';
// document.getElementById('result').innerHTML += `<p>Hej jag heter ${user.firstName}</p>`;

results.innerHTML += '<h1>Detta är en rubrik</h1>';
results.innerHTML += '<p>' + user.firstName + '</p>';
results.innerHTML += `<p>Hej jag heter ${user.firstName}</p>`;

test[0].innerHTML = '<h2>test</h2>';
test[0].style = 'color: green; background.color:grey;';

console.log(result);