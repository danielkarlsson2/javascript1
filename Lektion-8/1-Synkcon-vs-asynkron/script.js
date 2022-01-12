const timer = (time, cb) => {
    setTimeout(() => {
        cb()
    },2000)
}


console.log(1);
console.log(2);

//  Synkron kod. Blockerar så koden kör inte nästa rad innan det är klart
for(let i = 0; i < 3; i++) {
    console.log('blocking' + i)
}


// Asynkron kod. Blockerar inte utan den körs när den är klar.
timer(2000, () => {
    console.log('timer klar')
})

console.log(3);
console.log(4);

// Asynkron kod, 