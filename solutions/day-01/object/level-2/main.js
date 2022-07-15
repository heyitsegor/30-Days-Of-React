const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let users_keys = Object.keys(users)

let greatest_skill_length = 0

for (user of users_keys) {
    if (users[user].skills.length > greatest_skill_length) {
        greatest_skill_length = users[user].skills.length
        greatest_user = user
    }
}

console.log(greatest_user)

let loggedin_users = 0
let users_point = 0

for (user of users_keys) {
    if (users[user].isLoggedIn) {
        loggedin_users += 1
    }
    if (users[user].points >= 50) {
        users_point += 1
    }
}

console.log(`Logged-in users count: ${loggedin_users}, users having greater than or equal to 50 points count: ${users_point}`)

//MERN stands for MongoDB, Express, React, Node.

for (user of users_keys) {
    if (users[user].skills.includes('MongoDB') && users[user].skills.includes('Express') && users[user].skills.includes('React') && users[user].skills.includes('Node')) {
        console.log(user)
    }
}

users.Egor = {
    email: 'hey.egor@icloud.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 19,
    isLoggedIn: true,
    points: 50
}

let users_values = Object.values(users)

console.log(users_keys)
console.log(users_values)

