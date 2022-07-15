const dog = {}

console.log(dog)

dog.name = 'Doggy'
dog.legs = 4
dog.color = 'black and white'
dog.bark = function () {
    return 'woof woof'
}

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.bark())

dog.breed = 'Corgi'
dog.getDogInfo = function () {
    return `This ${this.breed} named ${this.name} has ${this.color} coat color `
}

console.log(dog.getDogInfo())
