// DOM  Document Object Model

// console.log(window);

let p1 = document.getElementsByTagName('p');
// console.log(p1);

let p2 = document.getElementsByClassName('paragraph');
// console.log(p2)

let p3 = document.getElementById('para');
// console.log(p3)

// med query selector

let q1 = document.querySelector('p');
// console.log(q1);
let q2 = document.querySelectorAll('p');
// console.log(q2);

let q3 = document.querySelector('.paragraph');
// console.log(q3)
let q4 = document.querySelectorAll('.paragraph');
// console.log(q4)

let q5 = document.querySelector('#para');
// console.log(q5)

// q2.forEach(node => {
//     console.log(node)
// })



const list = document.querySelector('#list');

// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.children[0]);
// console.log(list.nextElementSibling);
// console.log(list.previousSibling);
// console.log(list.previousElementSibling);


const output = document.querySelector('#output');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
output.innerHTML = `
<div id="hej">one</div>
<div id="2">two</div>
<div id="3">three</div>
<div id="4">four</div>`

})

// btn2.addEventListener('click', () => {
//     output.children[0].innerText = 'Ny text'
// })


// output.children[0].innerText = 'Ny text'
// const one = document.querySelector('#1');

// one.innerText = 'ny text'