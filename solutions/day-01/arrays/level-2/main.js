import { webTechs } from './web_techs.js'
import { countries } from './countries.js'

console.log(webTechs)
console.log(countries)

// level 2 exercise 2
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split('.').join('').split(',').join('').split(' ')
console.log(words)
console.log(words.length)

//level 2 exercise 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'GreenTea'

console.log(shoppingCart)

// level 2 exercise 4
if (countries.includes('Ethiopia')) {
    console.log('EHTIOPIA')
}
else {
    countries.push('Ethiopia')
}

// level 2 exercise 5
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
}
else {
    webTechs.push('Sass')
    console.log(webTechs)
}

// level 2 exercise 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)