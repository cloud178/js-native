//globalLE {} --> null

// startEngine()

// LE - лексическое окружение - скоуп

let car = 'bmw' //globalLE {car: 'bmw'} --> null

// const startEngine = function () {
function startEngine() {
    //startEngineLE {} --> globalLE
    // const car = 'kia' // startEngineLE {car: 'kia'} --> globalLE
    console.log(`Start ${car}`)
    car = 'lada'

}

startEngine()
startEngine() //globalLE {startEngine: function} --> null

car = 'audi' //globalLE {startEngine: function, car: 'audi'} --> null

startEngine()
startEngine()

// создание своего лексического окружения
// if else, циклы, все эти блоки кода со скобками {} - это опять таки те же циклы иф элсы ф-ции, классы,
// методы у объектов имеют своё лексическое окружение, НЕ ОБЪЕКТ (ведь мы можем до него снаружи достучаться),

// хоистинг -всплытие - это когда ф-цию вызываем раньше чем она объявлена, но только если это было через фанкшн декларейшн


// задача с собеса
//     (function question3() {
//         try {
//             let x = 4;
//             if (true) {
//                 console.log("x_let:", x);
//                 let x = 5;
//             }
//         } catch (err) {
//             console.log("x_let:error", err);
//         }
//
//         try {
//             const y = 4;
//             if (true) {
//                 const y = 5;
//                 console.log("y_const_1:", y);
//             }
//             console.log("y_const_2:", y);
//         } catch (err) {
//             console.log("y_const_1:error");
//         }
//     })();


// task

//
//
// memoizedSqr = memoize(sqe);
//
//
// console.log(memoizedSqr(5)) //calculation
// console.log(memoizedSqr(5)) // from cache
// console.log(memoizedSqr(6)) calculation
// console.log(memoizedSqr(5)) // from cache


const sqe = (num) => {
    return num * 2
}


function memoize(func) {
    let memo = {};
    const newFunc = (num) => {
        if (!memo[num]) {
            memo[num] = func(num);
        }
        return memo[num];
    }
    return newFunc;
}


memoizedSqr = memoize(sqe);
memoizedSqr(5)
memoizedSqr(5)
memoizedSqr(5)
memoizedSqr(5)
memoizedSqr(5)


// решение Кости
// const sqe = (num) => {
//     return num * 2
// }
//
// memoizedSqr = memoize(sqe);
// function memoize(func) {
//     let memo = {};
//     const newFunc = (num) => {
//         if (!memo[num]) {
//             memo[num] = func(num);
//         }
//         return memo[num];
//     }
//     return newFunc;
// }
//
// console.log(memoizedSqr(5)) //calculation
// console.log(memoizedSqr(5)) // from cache
// console.log(memoizedSqr(6)) //calculation
// console.log(memoizedSqr(5)) // from cache


// вариант Егора
// const memorize = (sqe) => {
//     const cache = {}
//
//     return function(param) {
//         const result = sqe(param)
//         cache[param] = result
//         return result
//     }
// }


// вариант Димы
// const sqe = (num) => num * 2;
//
// const memoize = (func) => {
//     let lastResult = 1;
//     return (num) => {
//         const result = func(num) * lastResult;
//         lastResult = result;
//         return result;
//     };
// };
//
// const memoizedSqr = memoize(sqe);
//
// console.log(memoizedSqr(5));
// console.log(memoizedSqr(5));
// console.log(memoizedSqr(6));
// console.log(memoizedSqr(5));


const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}
// 2(4) === 2 * 2(3) === 2 * 2 * 2(2) === 2 * 2 * 2 * 2(1)


// const sqe = (num) => {
//     return num * 2
// }
//
//
// memoizedSqr = memoize(sqe);
//
//
// console.log(memoizedSqr(5)) //calculation
// console.log(memoizedSqr(5)) // from cache
// console.log(memoizedSqr(6)) calculation
// console.log(memoizedSqr(5)) // from cache


//-----------------
// написать функцию которая рекурсивно обойдет объект и выдаст массив результатов (примитивов) заданного ключа
const companyData = {
    name: "TechCorp",
    ceo: {
        name: "Alice Johnson",
        salary: 200000,
    },
    engineering: {
        head: {
            name: "Bob Smith",
            salary: 150000,
        },
        backend: {
            lead: {
                name: "Carol Taylor",
                salary: 140000,
            },
            developer: {
                name: "Dave Brown",
                salary: 120000,
            },
        },
        frontend: {
            lead: {
                name: "Eve Davis",
                salary: 135000,
            },
        },
    },
    hr: {
        head: {
            name: "Frank Wilson",
            salary: 130000,
        },
        specialist: {
            name: "Grace Lee",
        },
    },
};

//  const res = findKeyValues(companyData, 'salary')
// console.log(res) // [200000, 150000,140000, 120000,135000, 130000,85000]


const findAllValuesInObjectWithTheSameKey = (obj, key) => {
    const result = []

    const recursiveSearch = (obj, key) => {
        if (typeof obj !== 'object' || obj === null) return;
        for (let k in obj) {
            if (k === key) {
                result.push(obj[k])
            } else if (typeof obj[k] === 'object') {
                recursiveSearch(obj[k], key)
            }
        }
    }

    recursiveSearch(obj, key)
    return result
}

console.log(findAllValuesInObjectWithTheSameKey(companyData, 'salary'))