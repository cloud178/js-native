// function itPush(p1, p2, ...params) {
//     console.log(params)
// }
//
//
// // спрэд - раскукоживает, размазывает массив, а рест - типа остальные (выглядят одинаково, зависят от контекста использования), оставшиеся (...params) - rest оператор собирает все оставшиеся необязательные параметры в массив
//
//
// itPush(1, 2, 3, 4, 22, 33, 1) // здесь 3, 4, 33, 1 - упакуются в массив
//
//
// function itPush1(...params) {
//     console.log(params)
// } //

// делаем аналог метода push
// function itPush(array, ...params) { // rest
//     for (let i = 0; i < params.length; i++) {
//         const lastIndex = array.length
//         array[lastIndex] = params[i]
//     }
//
//     return array.length
// }


const array = [3,4,5,6,7,8,9]

// console.log(itPush(array, 1,2,3,4,54,5,6))
// console.log(array)

// про методы массивов надо знать думать, мутируют ли они, что возвращают и что принимают



// пробуем переписать метод pop
// function itPop(array) {
//     if(!array.length) return undefined
//
//     const lastElement = array[array.length - 1]
//     array.length = array.length - 1
//     return lastElement
// }
// либо так
// function itPop(array) {
//     if(array.length) {
//         const lastElement = array[array.length - 1]
//         array.length = array.length - 1
//         return lastElement
//     }
//     return undefined
// }

// console.log(itPop([]))




function itShift(array) {
    if (!array.length) return undefined

    const firstElement = array[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i+1]
    }
    array.length = array.length - 1
    return firstElement
}
//
// console.log(itShift(array))
// console.log(array)





// function itUnshift(array, ...params) {
//
//     for(let i = array.length-1; i >= 0; i--) {
//         array[i + params.length] = array[i]
//     }
//     for (let j = 0; j < params.length; j++) {
//         array[j] = params[j]
//     }
//
//     return array.length
// }
//
//
// console.log(itUnshift(array, 1,2,3,4,5,6,7,8,9,10))
// console.log(array)


// function itReverse(array) {
//     const copy = [...array];
//     for (let i = array.length - 1; i >= 0; i--) {
//         array[copy.length - 1 - i] = copy[i]
//     }
//
//     return array
// }

// function itReverse(array) {
//     for (let i = 0; i < array.length/2; i++) {
//         const temp = array[i]
//         array[i] = array[array.length - 1 - i]
//         array[array.length - 1 - i] = temp
//     }
//     return array
// }
//
//
// console.log(itReverse(array))
// console.log(array)




function itIndexOf(array, el, startIndex = 0) {
    for (let i = startIndex; i < array.length; i++) {
        if (array[i] === el) {
            return i
        }
    }
    return -1
}

console.log(itIndexOf(array, 5, 2))
console.log(array[2])



function fullIndexOf(array, el) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (el === array[i]) {
            result.push(i)
        }
    }
    return result

}
