const numbers = [1, 2, 9, 4, 5, 6, 7]

// возвращает 1-й найденный элемент, который удовл условию в колбэк функции
function itFind(array, callback) {
    let result = undefined
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result = array[i]
            break
        }
    }
    return result
}

const checkDivideToThree = num => !(num % 3)
console.log(itFind(numbers, checkDivideToThree))


// немутироующий метод
function itFilter(array, callback) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i])
        }
    }

    return result
}

const checkDivideToTwo = num => !(num % 2)
console.log(itFilter(numbers, checkDivideToTwo))


function itMap(array, callback) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]))
    }

    return result
}

const getSqrts = num => Math.sqrt(num)
console.log(itMap(numbers, getSqrts))


// раньше до спреда также активно использовался для поверхностной копии массива
function itSlice(array, startIndex = 0, endIndex = array.length) {
    const result = []
    const start = startIndex >= 0 ? startIndex : array.length + startIndex
    const end = endIndex < 0 ? array.length + endIndex : endIndex
    for (let i = start; i < end; i++) {
        result.push(array[i])
    }

    return result
}

console.log(itSlice(numbers, 0, 3))

console.log(itSlice(numbers, -2))
console.log(numbers.slice(-2))


console.log(itSlice(numbers, 2, -1))
console.log(numbers.slice(2, -1))

console.log(itSlice(numbers, -3, -1))
console.log(numbers.slice(-3, -1))


//reduce
// например найти макс
console.log(numbers.reduce((acc, el) => {
    const maxOfPair = acc > el ? acc : el
    return maxOfPair
}, 0)) // acc = 0 на первом шаге

// пробуем реализовать фильтр через редьюс
console.log(
    numbers.reduce((acc, el) => {
        if (!(el % 2)) {
            acc.push(el)
        }
        return acc
    }, [])
)


// пробуем реализовать мап через редьюс
console.log(
    numbers.reduce((acc, el) => {
        const sqrt = Math.sqrt(el)
        acc.push(sqrt)
        return acc
    }, [])
)


// reduce ещё также хорош, если мы хотим переупаковать массив в объект
const numbers2 = [1, 2, 9, 4, 5, 6, 7, 1, 3, 6, 7, 9, 3, 2, 4, 5, 6, 22, 22, 22, 22, 22]
// сдеалть объект чтобы посмотреть сколько элементы повторяются
// {
//     1: 6,
//     2: 7
// }

console.log(
    numbers2.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1
        return acc
    }, {})
)


function itReduce(array, callback, startValue) {
    let acc = startValue

    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i]);
    }
    return acc
}

console.log(itReduce(numbers, (acc, el) => acc > el ? acc : el, 0))


console.log(itReduce(numbers,
    (acc, el) => {
        if (!(el % 2)) {
            acc.push(el)
        }
        return acc
    },
    []
))

console.log(
    itReduce(
        numbers,
        (acc, el) => {
            acc += el
            return acc
        },
        0
    )
)

