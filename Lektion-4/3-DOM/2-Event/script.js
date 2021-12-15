const btn = document.querySelector('#btn-alert');
const square = document.querySelector('#square');
const loginForm = document.querySelector('#loginForm');
const firstName = document.querySelector('#firstName');

// const alert1 = () => {
//     alert('Warning')
// }

// btn.addEventListener('click', () => {
    
//     btn.addEventListener('click', () => {
//     console.log('Klickade på knappen')
// })

// btn.removeEventListener('click', () => {
    //     console.log('Klickade på knappen')
    // }) 

// btn.addEventListener('dblclick', () => {
//      console.log('Eventet kördes')
// })
// btn.addEventListener('mousedown', () => {
//      console.log('Eventet kördes')
// })
// btn.addEventListener('mouseup', () => {
//      console.log('Eventet kördes')
// })
// btn.addEventListener('mouseenter', () => {
//      console.log('Eventet kördes')
// })
// btn.addEventListener('mouseleave', () => {
//      console.log('Eventet kördes')
// })
// btn.addEventListener('mouseleave', () => {
//      console.log('Eventet kördes')
// })
btn.addEventListener('mouseover', (event) => {
     console.log('Eventet kördes')
})

// square.addEventListener('mouseover', event => {
//     console.log(event)
// })
square.addEventListener('mousemove', event => {
    console.log(event.offsetX, event.offsetY)
    square.style.background = `rgb(${event.offsetX},${event.offsetX}, 0)`
})


// firstName.addEventListener('keyup', (e) => {
//     console.log(e)
// // })
// firstName.addEventListener('keydown', (e) => {
//     console.log(e.key)
// })
// firstName.addEventListener('focus', (e) => {
//     firstName.classList.add('focus-red')
// })
// firstName.addEventListener('blur', (e) => {
//     firstName.classList.add('focus-red')
// })
// firstName.addEventListener('blur', function (e) {
//     console.log(this)
//     this.classList.remove('focus-red')
// })

const test = function() {
    console.log(this)
}
const test2 = () => {
    console.log(this)
}

firstName.addEventListener('focus', test)

// btn.addEventListener()

// firstName.addEventListener('focus', (e) => {
//     firstName.classList.add('focus-red')
// })

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(firstName.value)
    if(firstName.value.trim() === '')
    return;

    console.log(firstName.value)
    console.log('validerar formulär')
    console.log('validering klar! skickar till databasen')
})