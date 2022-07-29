// const personAccount = {
//     firstName: '',
//     lastName: '',
//     incomes: [
//         {
//             amount: 100000,
//             description: 'Lottery win'
//         },
//     ],
//     expenses: [
//         {
//             amount: 100,
//             description: 'grocery',
//         },
//     ],
//     totalIncome: function () {
//         grandTotal = 0
//         for (income of this.incomes) {
//             grandTotal += income.amount
//         }
//         return `This person's total income is ${grandTotal}`
//     },
//     totalExpense: function () {
//         grandTotal = 0
//         for (expence of this.expenses) {
//             grandTotal += expence.amount
//         }
//         return `This person's total expenses is ${grandTotal}`
//     },
//     accountInfo: function () {
//         return `This account belongs to ${this.firstName} ${this.lastName}`
//     },
//     addIncome: function (amount, description) {
//         this.incomes.push({ amount: amount, description: description })
//     },
//     addExpenses: function (amount, description) {
//         this.expenses.push({ amount: amount, description: description })
//     },
//     accountBallance: function () {
//         return `Balance is ${this.totalIncome() - this.totalExpense()}`
//     }
// }

// personAccount.addIncome(123, 'whatever')
// personAccount.addIncome(456, 'whatever')
// personAccount.addIncome(789, 'whatever')

// console.log(personAccount.totalIncome())

// personAccount.addExpenses(123, 'tax')

// console.log(personAccount)


const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]


const signUp = function (userName, email, password) {
    registered_emails = []
    for (user of users) {
        registered_emails.push(user.email)
    }
    if (registered_emails.includes(email)) {
        console.log('Email already registered')
    }
    else {
        users.push({
            _id: (Math.random() + 1).toString(36).substring(2, 8),
            username: userName,
            email: email,
            password: password,
            createdAt: "07/15/2022 10:30 AM",
            isLoggedIn: false
        })
    }
}

const signIn = function (email, password) {
    for (user of users) {
        if (user.email == email && user.password == password) {
            user.isLoggedIn = true
        }
        else {
            console.log('Email / password is incorrect.')
        }
    }
}

signUp("John Done", "example@domen.com", "12345")
signUp("123", "martha@martha.com", "123")
signIn("example@domen.com", "12345")

const rateProduct = function (user, productName, rating) {
    for (product of products) {
        if (product.name == productName) {
            product.ratings.push({ userId: user, rate: rating })
        }
    }
}

let avg_rating = 0
let i = 0
let j = 0

const averageRating = function (productName) {
    for (product of products) {
        if (product.name == productName && product.ratings.length != 0) {
            for (rating of product.ratings) {
                avg_rating += rating.rate
            }

            avg_rating /= product.ratings.length
            return avg_rating
        }
    }
}

rateProduct('ghderc', 'Laptop', '5')
console.log(averageRating('Laptop'))

const likeProduct = function (user, productName) {
    products.forEach((product, index) => {
        if (product.name == productName && !product.likes.includes(user)) {
            products[index].likes.push(user)

        }
        if (product.name == productName && product.likes.includes(user)) {
            products[index].likes = products[index].likes.filter(item => item !== user)
        }
        products[index].push()
    })
}

likeProduct('test', 'TV')
// console.log(products)