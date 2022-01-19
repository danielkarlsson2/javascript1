class UserService {
    constructor(uri) {
        this.baseUri = uri
    }

    static signUp(user) {
        console.log('Registrerar användaren');
        console.log(user);
    }
    static signIn(email, password) {
        console.log(`Loggar in användaren med ${email} och ${password}.`);
    }
}

// const userService = new UserService('http://localhost')

// userService.signUp({firstName: 'Joakim', lastname: 'Wahlström'})
// userService.signIn('asdf@mail.com', 'asdf123')

UserService.signUp({firstName: 'Joakim', lastname: 'Wahlström'})
UserService.signIn('asdf@mail.com', 'asdf123')