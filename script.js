1

// Какие циклы есть в javaScript?

// for
// while
// do/ while



// 2 Создайте объект Student, добавьте ему поля на
// усмотрение удалите одно любое поле и сделайте объект неизменяемым.

// const student = {
//    name: "Ivan",
//    age: 30,
// }
// // student.address = "Bishkek"
// // student.age = 25

// const student = {
//    name: "Ivan",
//    age: 30,
// }
// delete user.age

// const student = {
//    name: "Ivan",
//    age: 30,
// }
// Object.freeze(student)



// 3

// Что такое Хоистинг и как его избежать при создании переменной
// Это процесс когда, переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.



// / 4

// В чем различие между slice, substr, substring и зачем они нужны

// slice берет первым и вторым  параметром  индекс 
// substr тоже берет  первым параметром индекс а вторым длину 



// 5

// Как мы можем получить reference error

// можем получить если не объявили переменную 



// 6

// В чем разница между методом и функцией приведите примеры

// функция всегда возвращает что-то и он полноценный код.

// const  arr = () =>{
//     return
// }
//  arr ()



// 7

// return внутри функций зачем он  нужен? Что вернет функция если нет return

// return возвращает то-что мы запрашиваем и результат операции , если его нет, то не выполнится наша функция. так как функция всегда что-то возвращает 

// undefined вернет функция если нет return



// 1

// напишите функцию которая принимает в себя строку состоящую из нескольких слов

// (например «lorem ipsum dolor»), а на выходе

// возвращает строку состоящую из длин каждого слова



// БЫЛО: “Ну здравствуй дивный мир”

// СТАЛО: “2  10  6  3”



// const getLenght = (str) =>{
//     let arr = str.split (" ")
//     let newStr = " "
//     for (let i = 0; i< arr.length; i++){
//         newStr = newStr + " " + arr[i].length
//     }
//    return newStr
// }

// console.log(getLenght("lorem ipsum dolor"))


// 2

// напишите функцию которая принимает в себя имя, возраст, пол и на их основе возвращает

// объект. При этом необходимо провести валидацию (проверку), если возраст менее

// 18 лет, то вместо объекта вернуть строку «Не подходит по возрасту»

// Для решения надо отправить github репозиторий


// const objStr = (obj) => {
//     let arr = Object.values(obj)
//     arr.forEach((el) => {
//         if ( obj[el] > 18) {
//             return 'Не подходит по возрасту'
//         }
//     })
//     return obj
// }
// console.log(objStr({ name: 'Baha', age: 25, sex: 'female' }))

// const getObj = (name, age, gender) =>{
//     let newObj = {}
//     newObj.age = age
//     newObj.name = name
//     newObj.gender = gender
//     if(newObj.age < 18){
//         return "Не подходит по возрасту"
//     }else{
//         return newObj
//     }
// }

// console.log(getObj('Baha', 25, 'female'))
