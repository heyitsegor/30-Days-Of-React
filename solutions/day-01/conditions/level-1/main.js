var prompt = require("prompt");

prompt.start();

console.log("Enter your age: ");

let myAge = 25

prompt.get(["usr_input"], function (err, res) {
    // console.log(`${res.usr_input >= 18}`)
    (res.usr_input >= 18) ? console.log('You are old enough to drive.') : console.log(`You are with ${18 - res.usr_input} years to drive.`);
    (res.usr_input >= myAge) ? console.log(`You are ${res.usr_input - myAge} years older than me.`) : console.log($`I'm ${myAge - res.usr_input} years older than you.`);
});

let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
}
else {
    console.log(`${a} is less than ${b}`);
}

(a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

let number_input = 11;

number_input % 2 != 1 ? console.log(`${number_input} is an even number.`) : console.log(`${number_input} is an odd number.`);
