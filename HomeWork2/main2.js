// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let obj = [
    "one",
    "two",
    true,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
]
console.log(obj[0]);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);
console.log(obj[4]);
console.log(obj[5]);
console.log(obj[6]);
console.log(obj[7]);
console.log(obj[8]);
console.log(obj[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title:"Djerelo",
    pageCount:567,
    genre: "detective",
}
console.log(book)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book2 ={
    title:"Kazka",
    pageCount:476,
    genre:"comedy",
    authors:[
        {name:"Vasia", age:32},
        {name: "Oleg", age: 43},
    ]
}
console.log(book2);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {name:"Anton",username:"anton123",password:"qwerty"},
    {name:"Oleg",username:"oleg34",password:"asdf"},
    {name:"Misha",username:"misha123",password:"zxcv"},
    {name:"Vasia",username:"vasia098",password:"afgads"},
    {name:"Olga",username:"olga4774",password:"ghdjj"},
    {name:"Vika",username:"vika1277",password:"dgnh"},
    {name:"Vita",username:"vita556",password:"rtyewe"},
    {name:"Max",username:"max737",password:"ghjfg"},
    {name:"Artem",username:"artem12",password:"aserfw"},
    {name:"Valeriy",username:"valeriy3485",password:"tyhtr"},
]
console.log(users[0].password,)
console.log(users[1].password,)
console.log(users[2].password,)
console.log(users[3].password,)
console.log(users[4].password,)
console.log(users[5].password,)
console.log(users[6].password,)
console.log(users[7].password,)
console.log(users[8].password,)
console.log(users[9].password,)

