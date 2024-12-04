const bob = {
    name: "Bob",
    age: 35,
}

// const mike = bob
// console.log(mike === bob) // true
// console.log(mike[0] === bob[0]) // true
// mike.name = "Mike"
// console.log(mike.name, bob.name) // Mike, Mike

const variable = {}

// console.log(bob === variable) // false - разные объекты, разные ячейки в памяти

// copy object
// way 1 поверхностное копирование
for (const key in bob) {
    variable[key] = bob[key];
}
// console.log(variable.name === bob.name); // true
// Если мы для variable изменим свойство name и придадим ему другое значение,
// то для variable оно изменится, а для bob не изменится, чем и можно подтвердить что объект мы именно что скопировали
// variable["name"] = 1;
// console.log(bob.name) // Bob
// console.log(variable.name) // 1




//way 2 поверхностное копирование
//деструктуризация // spread размазать распределить
const newObj = {...bob}
// console.log(newObj === bob) // false
// console.log(newObj[0] === bob[0]) true
// newObj.age = 45;
// console.log(newObj.age, bob.age) // 35, 45

// const newObj = {
//     name: "Bob",
//     age: 35,
//     age: 45
// }
// const newObj = {...bob, age: 45}


const names = ["Alex", "Bob", "Donald"]
// const copyNames = [...names]
// console.log(names[0] === copyNames[0]) // true
// names[0] = "Egor"
// console.log(names[0], copyNames[0]) // Egor, Alex

// copyNames.push("Egor")

// const copyNames = [...names, "Egor"]
// const copyNames = ["Egor", ...names]
// console.log(copyNames)


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

// поверхностная копия surface copy
const surfaceCopyOfUsers = [...users]

// console.log(surfaceCopyOfUsers)
// console.log(surfaceCopyOfUsers === users) // false
// console.log(surfaceCopyOfUsers[0] === users[0]) // true
// surfaceCopyOfUsers[0].name = 'Dylan'
// console.log(users[0].name) // Dylan

// пробуем сделать полную копию
const fullCopyOfUsers = structuredClone(users)
// console.log(fullCopyOfUsers)
// console.log(fullCopyOfUsers === users) // false
// console.log(fullCopyOfUsers[0] === users[0]) // false


// CRUD

// Create
const newUser = {
    id: 1,
    name: 'Helga',
    isStudent: true,
}

const newData = [...users, newUser]


// Delete
// id === 2
// const newData2 = []
// for (let i = 0; i < users.length; i++) {
//     if (users[i].id !== 2) {
//         newData2.push(users[i])
//     }
// }
// console.log(users === newData2) // false
// console.log(users[0], newData2[0])
// console.log(users[0] === newData2[0]) // true
// newData2[0] = 12; // тут по сути обрываем ссылку на объект, и уже в массиве получается совершенно новое значеие
// console.log(newData2[0]) // 12
// console.log(users[0]) // {...}
// // а вот сделай мы так, то:
// newData2[0].name = 'Changed'; // Изменение свойства объекта
// console.log(users[0].name); // 'Changed' — объект общий



const newData2 = users.filter(u => u.id !== 2) // фильтр возвращает новый массив, т.е. не изменяет текущий массив
// console.log(users === newData2) // false
// console.log(users, newData2)
// console.log(users[0] === newData2[0]) // true
// newData2[0].name = 'Changed'; // Изменение свойства объекта
// console.log(users[0].name); // 'Changed' — объект общий

// пуш поп шифт аншифт  reverse splice изменяют текущий массив

// slice filter reduce toReversed toSorted toSpliced не меняют текущий массив


// update
// id === 4 -> isStudent: false
// мап позволяет сделать выборочное или условное копирование. Map в этом плане преобразовать
// map - создаёт новый массив
const newData3 = users.map(u => u.id === 4 ? {...u, isStudent: false} : u)

console.log(users)
console.log(newData3)
console.log(users[0] === newData3[0]) // true
console.log(users[3] === newData3[3]) // false
