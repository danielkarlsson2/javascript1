import { hasNumber } from "../Functions/Functions.js";

export default 
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        // this.lastName = lastName;
        this.email = email;
        this.password = password;
        this._id = Date.now().toString()
    }
    get id() {
        return this._id;   
        // return this.id
    }

    set id(_val) {
        console.log('Cant set id');
        return 
    }

    get fullName() {
        return this.firstName + ' ' + this._lastName
    }
    set lastName(_name) {
        if(!hasNumber(_name)) {
            this._lastName = _name
        }
        else {
            console.log('Errors name contains numbers');
        }
    }
}