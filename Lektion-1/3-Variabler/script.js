/*
    Variabler

    variabel = någonting vi lagrar information i

    camelCase   =   JavaScript, Java, C, C++
    Pascal      =   C#, Pascal
    _private    =   en variabel som bara lever inom en viss del.


    ex. firstName, lastName, email, postalCode, city01
    Kan ej börja på en siffra!

    _firstName = 'Daniel'
*/


firstName = 'Daniel';   //En global deklarering (gör inte så här)
var firstName = 'Daniel'; // global deklarering (gör inte såhär)

let lastName = 'Karlsson'; //Lokal deklarering (gör såhär!) (lokalt scope)
lastName = 'Gelin';

const pi = 3.14;

// pi = 5;

console.log(firstName);
console.log(lastName);
console.log(pi)

/* 
    Deklarera variabler
    ------------------

    var = global variabel - accessbar överallt i koden
    let = lokal variabel - accessbar inom det angivna området
    const = konstant - kan inte skrivas över (undantag finns)

    C# exempel.
        string name = "Daniel";
        int age = 35;
    JS exempel
        let name = 'Daniel';
        let age = 35;
*/