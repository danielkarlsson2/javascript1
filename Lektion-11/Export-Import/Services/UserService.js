import User from '../Models/User.js'

export default class UserService {
    // constructor() {}

    static signUp(userObj) {
        const newUser = new User(userObj.firstName, userObj.lastname, userObj.email, userObj.password)
        newUser.lastName = 'wahlström3'
        console.log('Sending user to db');
        console.log(newUser);
    }

    static signIn(email, password) {
        console.log('Signing in user');
        console.log(email, password);
    }
}