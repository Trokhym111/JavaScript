// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let obj = [
//     "one",
//     "two",
//     true,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
// ]
// console.log(obj[0]);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj[3]);
// console.log(obj[4]);
// console.log(obj[5]);
// console.log(obj[6]);
// console.log(obj[7]);
// console.log(obj[8]);
// console.log(obj[9]);
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book = {
//     title:"Djerelo",
//     pageCount:567,
//     genre: "detective",
// }
// console.log(book)
//
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book2 ={
//     title:"Kazka",
//     pageCount:476,
//     genre:"comedy",
//     authors:[
//         {name:"Vasia", age:32},
//         {name: "Oleg", age: 43},
//     ]
// }
// console.log(book2);
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users=[
//     {name:"Anton",username:"anton123",password:"qwerty"},
//     {name:"Oleg",username:"oleg34",password:"asdf"},
//     {name:"Misha",username:"misha123",password:"zxcv"},
//     {name:"Vasia",username:"vasia098",password:"afgads"},
//     {name:"Olga",username:"olga4774",password:"ghdjj"},
//     {name:"Vika",username:"vika1277",password:"dgnh"},
//     {name:"Vita",username:"vita556",password:"rtyewe"},
//     {name:"Max",username:"max737",password:"ghjfg"},
//     {name:"Artem",username:"artem12",password:"aserfw"},
//     {name:"Valeriy",username:"valeriy3485",password:"tyhtr"},
// ]
// console.log(users[0].password,)
// console.log(users[1].password,)
// console.log(users[2].password,)
// console.log(users[3].password,)
// console.log(users[4].password,)
// console.log(users[5].password,)
// console.log(users[6].password,)
// console.log(users[7].password,)
// console.log(users[8].password,)
// console.log(users[9].password,)
//
// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let number=prompt("enter your number");
// if (number != 0){
//     console.log("Вірно");
// }else {
//     console.log("Невірно");
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt("Введіть частину години");
//
// if (time >= 0 && time <= 14) {
//     console.log("Перша частина години");
// } else if (time >= 15 && time <= 29) {
//     console.log("Друга частина години");
// } else if (time >= 30 && time <= 44) {
//     console.log("Третя частина години");
// } else if (time >= 45 && time <= 59) {
//     console.log("Четверта частина години");
// } else {
//     console.log("Невірне значення часу");
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day=prompt("Введіть число яке бажаєте перевірити");
// if (day>=1 && day<=9){
//     console.log("Перша декада")
// }else if (day>=10 && day<=19){
//     console.log("Друга декада")
// }else if (day>=20 && day<=31){
//     console.log("Третя декада")
// }else {
//     console.log("Спробуйте ще раз")
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let numberDay=prompt("Введіть номер дня")
// let day;
// switch (numberDay){
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday")
//         break;
//
//     case "3":
//         console.log("Wednesday")
//         break;
//
//     case "4":
//         console.log("Thursday")
//         break;
//
//     case "5":
//         console.log("Friday")
//         break;
//     case "6":
//         console.log("Saturday")
//         break;
//     case "7":
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Введіть значення від 1 до 7")
// }
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let first=prompt("Перше число");
let second=prompt("Друге число");
if (first>second){
    console.log("Перше число більше" +" "+ first)
}
else if (first<second){
    console.log("Друге число більше" +" "+ second)
}
else if (first===second){
    console.log("Значення рівні"+" "+first +"="+second)
}
else {
    console.log("введіть число")
}

