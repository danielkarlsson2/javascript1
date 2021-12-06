/* OBJECT
   Innehåller ett eller flera värden 

    Skrivs som key:value par
    Vi kommer att arbeta med JSON (JavaScript Object Notation)

    person = {}
    var person = {}
    let person = {}
    const person = {}   (Använd så ofta vi kan)

    JS Objekt
    const person = {
        firstName: 'Daniel', 
        lastName: 'Karlsson',
    }

    const person = { firstName: 'Daniel, lastName: 'Karlsson:}

    JSON Objekt
    {
        "firstName": "Daniel"   (Dubbelcitat alla string)
        "lastName": "Karlsson"
    }

   */

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

    /* console.log(user);
    console.log(user.firstName);
    console.log(user.address.city); */

    // user = {
    //     email:'daniel@dkmusic.se'
    // }

    user.firstName = 'Darth';
    user.email = 'daniel@dkmusic.se';

    // console.log(user.firstName);

    let key = 'lastName';

    // console.log(user);
    // console.log(user['lastName']);
    // console.log(user[key]);