// import {readFile} from 'node:fs'

// const promise = new Promise((resolve, reject) => {})
//
// console.log(promise)


// const executor = (resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     // resolve(3) - все последующие resolve reject игнорируются
//     reject(3)
//     // reject(5) - все последующие resolve reject игнорируются
// }


// const executor = (resolve, reject) => {
//     readFile('index.html', (eror, file) => {
//         if (error) {
//             reject(eror)
//         } else {
//             resolve(file)
//         }
//     })
// }


// const executor = (resolve, reject) => {
//     console.log(1)
//     setTimeout( () => {
//         resolve([{name: 'qwe'}])
//     }, 4000 )
// }
//
// const promise = new Promise(executor)
//
// const promise2 = promise.then( (data) => {
//     console.log(data)
//
//     return 5
// } )
//
// promise2.then( (data) => {
//     console.log(data)
//     console.log(promise)
// })
//
// // console.log(promise)
// console.log(3)
// console.log('promise2: ', promise2)


// const executor = (resolve, reject) => {
//     console.log(1)
//     setTimeout( () => {
//         resolve([{name: 'qwe'}])
//         reject(new Error('promise rejected'))
//     }, 1000 )
// }
//
// const promise = new Promise(executor)
//
// promise.then( (data) => {
//     console.log(data)
//
//     return 5
// } ).then( (data) => {
//     console.log(data)
//     // console.log(promise)
//     throw new Error('some error')
// }).then( (data) => {
//     console.log(345345)}, (err) => {
//     console.log('from second then')
// })
//     .catch( (reason) => {
//         console.log('from catch')
//         console.log(reason)
//         return 45
//     })
//     .then( (data) => {
//         console.log(data)
//         return 55
//     })
//     .finally(() => {
//         console.log('finaly')
//         return 68
//     })
//     .then((data) => {
//         console.log('done')
//         console.log(data)
//     })
//
// // console.log(promise)
// console.log(3)
// // console.log('promise2: ', promise2)


// const getData = () =>
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             res('some data');
//             // rej("some error");
//         }, 1000);
//     });
//
// getData()
//     .then((data) => {
//         console.log("then1", data);
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 // res("some data from request2");
//                 rej("some error");
//             }, 2000);
//         });
//     })
//     .then((data) => {
//         console.log("then2", data);
//         return 20;
//     })
//     .catch((data) => {
//         console.log("catch1", data);
//         // return;
//     })
//     .then((data) => {
//         console.log("then3", data);
//         return b;
//     })
//     .then((data) => {
//         console.log("then4", data);
//         return 40;
//     })
//     .catch((data) => {
//         console.log("catch2", data);
//         return 50;
//     })
//     .finally((data) => {
//         console.log("finally", data);
//         return 60;
//     })
//     .then((data) => {
//         console.log("then5", data);
//     });


//
// const getData2 = str =>
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             res(str)
//             // rej("some error");
//         }, 1000)
//     })
//
// getData2('string1')
//     .then(data => {
//         console.log('then', data)
//         // return promise1;
//         return 10
//     })
//     .finally(() => {
//         console.log('finally')
//         return getData2('string2')
//     })
//     .then(data => {
//         console.log('then 2', data)
//         return getData2('string3')
//     })
//     .then(data => {
//         console.log('then3', data)
//     })


// const delay = (del) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res()
//             // rej("some error");
//         }, del)
//     })
// }
//
// delay(1000).then(() => {
//     console.log('hello')
// })


// const fn = num => {
//     return num * 2
// }
//
// const memoize = (fun) => {
//     const memo = {}
//
//     const newFun = num => {
//         if (!memo[num]) {
//             memo[num] = fun(num)
//         }
//         return fun(num)
//     }
//
//     return newFun
// }
//
// memoizedFn = memoize(fn)
// console.log(memoizedFn(5))
// console.log(memoizedFn(5))
// console.log(memoizedFn(6))


// resolve | reject - спец ф-ция, которая переводит состояние нашего промиса в состояние resolve или reject
const executor = (resolve, reject) => {
    // setTimeout(() => {
    //     resolve({
    //         id: 1,
    //         name: 'Denis'
    //     })
    // }, 1000)
    resolve(true)
}

// const promise = new Promise(executor)
// console.log(promise)

// const promise2 = promise.then( users => {
//     // console.log(users)
//     return fetch(`http://${users[0].id}`)
// } )
//
// const promise3 = promise2.then( user => {
//     //fetch user posts
//     return result
// })


// promise
//     .then(users => {
//         // console.log(users)
//         // return fetch(`http://${users[0].id}`)
//         return 5
//     })
//     .then(user => {
//         //fetch user posts
//         return 4
//     })
//     .then(user => {
//         return 3
//     })


const promise = new Promise(executor)
    .then(users => {
        console.log(users)
        // return fetch(`http://${users[0].id}`)
        // return new Promise((res, rej) => {
            // setTimeout(()=>{res(22)}, 5000)
        //     rej('error1')
        // })
    })
    .then(user => {
        console.log(user)
        console.log(111)
        //fetch user posts
        return 4
    })
    .then(user => {
        console.log(12)
        return 3
    })
    .catch(err => {
        console.log(err)
    })
    .then(() => {
        return new Promise((res, rej) => {
            // setTimeout(()=>{res(22)}, 5000)
            rej('error2')
        })
    })
    .catch(() => {})


console.log(666)







const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("reject1");
        rej("reject1");
    }, 1000);
});


promise1
    .catch((t) => t + "catch1")
    .catch((t) => t + "catch2")
    .then((t) => t + "then1")
    .finally((t) => t + "finally")
    .then((t) => console.log(t)); /// ??