let emptyArray = Array()
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log('Array length: ', array.length)
console.log('The first element of array is ', array[0])
console.log('The last element of array is ', array[array.length - 1])
console.log('The middle element of array is ', array[(array.length / 2) - 1])

let mixedDataTypes = [1, 'String', true, [1, 2], { 'key': 'value' }, 2]
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length - 1])
console.log(itCompanies[(itCompanies.length - 1) / 2])

console.log('\n--10--')
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

console.log('\n--11--')
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

console.log('\n--12--')
console.log(itCompanies.join(', '), ' are big IT companies')

console.log('\n--13--')
console.log(itCompanies.includes('Netflix'))
console.log(itCompanies.includes('Apple'))

console.log('\n--14--')
itCompanies.forEach((company, i) => {
    stringAsChars = company.toLowerCase().split('').sort()
    index = stringAsChars.lastIndexOf('o')
    if (index != -1) {
        stringAsChars.slice(0, index).indexOf('o') != -1 ? console.log(company, 'has more than 1 \'o\' in the name') : console.log('')
    }
})

console.log('\n--15--')
console.log(itCompanies.sort())

console.log('\n--16--')
console.log(itCompanies.reverse())

console.log('\n--17--')
console.log(itCompanies.sort().slice(0, 3))

console.log('\n--18--')
console.log(itCompanies.sort().slice(itCompanies.length - 4, itCompanies.length - 1))

console.log('\n--19--')
console.log(itCompanies.sort().slice(1, itCompanies.length - 3))

console.log('\n-20--')
itCompanies.shift()
console.log(itCompanies)

console.log('\n--21--')
let midIndex = itCompanies.length / 2
let firstHalf = itCompanies.splice(0, midIndex)
let secondHalf = itCompanies.splice(-midIndex)

firstHalf.pop()
itCompanies = itCompanies.concat(firstHalf, secondHalf)
console.log(itCompanies)

console.log('\n--22--')
itCompanies.pop()
console.log(itCompanies)

console.log('\n--23--')
console.log(itCompanies.splice())