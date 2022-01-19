import UserService from './UserService.js'
import User from './User.js'

UserService.signIn('asdf@mail.com', 'byt123')

const user1 = new User('Joakim', 'Wahlström')

console.log(user1)