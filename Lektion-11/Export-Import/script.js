// import User from "./Models/User.js"
import UserService from './Services/UserService.js'
import { validate as va, hasNumber } from './Functions/Functions.js'

// const user = new User('Joakim', 'Wahlström', 'joakim@mail.com', 'BytMig123')

const user = {
    firstName: '',
    lastName: 'Wahlström',
    email: 'joakim@mail.com',
    password: 'BytMig123'
}

if(va(user)){
    UserService.signUp(user)
}