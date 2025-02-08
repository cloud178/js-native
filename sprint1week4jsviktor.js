const user = {
    name: 'Bob',
    age: 32,
    userName: 'Alex',
    '12years': true,
}

console.log(user["12years"])
console.log(user["age"])


function getObject(key, value) {
    // const obj = {}
    // obj[key] = value
    // return obj

    return {
        [key]: value
    }

}

console.log(getObject('name', 'Bob'))
console.log(getObject('car', 'BelGee'))

const toDoListId_1 = crypto.randomUUID()
const toDoListId_2 = crypto.randomUUID()


const toDoLists = [
    {
        id: toDoListId_1,
        title: 'What to learn',
    },
    {
        id: toDoListId_2,
        title: 'What to buy',
    },
]


const tasks = {
    [toDoListId_1]: [
        {id: 12, toDoListId: 1, title: 'dsfgdsfg'},
        {id: 13, toDoListId: 1, title: 'hgjghjgh'},
        {id: 14, toDoListId: 1, title: 'erewre'},
    ],
    [toDoListId_2]: [
        {id: 22, toDoListId: 3, title: 'dsfgdsfg'},
        {id: 23, toDoListId: 3, title: 'hgjghjgh'},
        {id: 24, toDoListId: 3, title: 'erewre'},
    ],
    [10 + 3]: [] // {'13': []}
}

// Object => объект      key => only string or symbol
// Map => коллекции / наборы     key => any type

const map = new Map() // только так можно создать коллекцию Map

// const obj = new Object()

map.set(true, 100)

console.log(map) // Map(1) { true => 100 }
console.log(map.get(true)) // 100

function myFunction(params) {

}

map.set(myFunction, [1, 2, 3])

console.log(map.get(myFunction)) // [1, 2, 3]
console.log(map.has(myFunction)) // true
// console.log(map.has(myFunction1)) // error

console.log(map.size) // 2
console.log(map) // Map(2) { true => 100, [Function: myFunction] => [ 1, 2, 3 ] }


const user2 = {
    name: 'Bob',
    age: 32,
    userName: 'Alex',
    '12years': true,
}

// Чекнуть сколько ключей у объекта
console.log(Object.keys(user2).length) // 4
// Получим массив ключей
console.log(Object.keys(user2)) // [ 'name', 'age', 'userName', '12years' ]
// Получим массив значений
console.log(Object.values(user2)) // [ 'Bob', 32, 'Alex', true ]
// Получим массив с массивами из ключа и значения
console.log(Object.entries(user2)) // [[ 'name', 'Bob' ], [ 'age', 32 ], [ 'userName', 'Alex' ], [ '12years', true ]]




