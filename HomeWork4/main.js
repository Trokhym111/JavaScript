// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calc(a , b){
//     let area=a*b
//     return (area)
// }
// console.log(calc(5,4))
//

// - створити функцію яка обчислює та повертає площу кола з радіусом r (s=pr2)

// function calc(r) {
//     let radius = r*r
//     let p=3.14
//     let area=p*radius
//     return (area)
// }
// console.log(calc(6))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r(Sцил = 2πRH + 2πR2 = 2πR(H + R),)
// function calc(r,h){
//     let p=3.14
//     let a=2*p*(r*r);
//     let b=h+r;
//     let area=a*b;
//     return(area);
// }
// console.log(calc(2,4))

// - створити функцію яка приймає масив та виводить кожен його елемент
// function view(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// let array1=[
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true}
// ]
// view(array1)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createP(text){
//     document.write(`<p>${text}</p>`)
// }
// createP(`vasia,olga`,)
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createLi(text){
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// createLi(`object1`)

//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createLi(text){
//     for (let i = 0; i < 3; i++) {
//         document.write(`<ul><li>${text}</li></ul>`)
//     }
// }
// createLi(`text`)
// createLi(`vasia`)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(array){
//     for (const arrayElement of array) {
//         document.write(`<ul><li>${arrayElement}</li></ul>`)
//     }
// }
// list([true,56,"vasia"])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.



