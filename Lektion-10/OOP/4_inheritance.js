function Animal(name) {
    this.name = name
}

Animal.prototype.makeSound = function() {
    return `${this.name} makes a generic sound!`
}

function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}
function Cat(name, age) {
    Animal.call(this, name)
    this.age = age
}

// inherit protoype
Dog.prototype = Object.create(Animal.prototype)
Cat.prototype = Object.create(Animal.prototype)

// Cat.prototype.constructor = Cat

Cat.prototype.spinning = function() {
    return `${this.name} is spinning!`
}

const dog = new Dog('Doggo', 4)
const cat = new Cat('Catti', 2)

console.log(dog)
console.log(cat)
