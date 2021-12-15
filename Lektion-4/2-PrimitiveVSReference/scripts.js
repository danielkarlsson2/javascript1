let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score one: ${scoreOne}, score two: ${scoreTwo}`);

scoreOne = 100;

console.log(`Score one: ${scoreOne}, score two: ${scoreTwo}`);

const userOne = {name: 'Joakim', age: 34};
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.name = 'Hans';
userOne.age = 50;

console.log(userOne, userTwo);

const users = [
    {id: 1, name: 'Joakim', age: 34},
    {id: 1, name: 'Hans', age: 50},
    {id: 1, name: 'Jeanette', age: 30},
]

console.log(users);

// const hans = users.find(user => userOne.name ==='Hans');
// console.log(hans)

// hans.age = 100;

// console.log(users);
// console.log(hans);

// users.map(user => {
//     if(user.id === 1){
//         user.age = 2000000
//     }
// })

const users2 = [...users]
const users3 = users

console.log(users, users2, users3)

users[0] = {id: 7, name: 'Hejsan'}