import { countries } from '/Users/egor/Documents/Coding/30-Days-Of-React/solutions/day-01/arrays/level-2/countries.js'


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let agesSorted = ages.sort()

let minAge = agesSorted[0]
let maxAge = agesSorted[ages.length - 1]

console.log(minAge, '\n', maxAge, '\n', agesSorted)

let medianAge = 0

if (ages.length % 2 == 1) {
    medianAge = agesStored[(ages.length - 1) / 2]
}
else {
    medianAge = (agesSorted[(ages.length) / 2] + agesSorted[(ages.length / 2) - 1]) / 2
}
console.log(medianAge)

let sumAges = 0
for (let i = 0; i < ages.length; i++) {
    sumAges += ages[i]
}

let averageAge = sumAges / ages.length

console.log(averageAge)

console.log(Math.abs(minAge - averageAge), Math.abs(maxAge - averageAge))

let countries1 = countries.slice(0, 10)


console.log(countries1[(countries1.length) / 2], countries1[(countries1.length / 2) - 1])

let firstHalf = 0
let secondHalf = 0

if (countries.length % 2 == 1) {
    firstHalf = countries.slice(0, (countries.length + 1) / 2)
    secondHalf = countries.slice(((countries.length + 1) / 2), countries.length)
}
else {
    firstHalf = countries1.slice(0, (countries1.length / 2))
    secondHalf = countries1.slice((countries1.length / 2), countries1.length)
}

console.log(countries)
console.log(firstHalf, secondHalf)

