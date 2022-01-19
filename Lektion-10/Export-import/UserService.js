export default
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