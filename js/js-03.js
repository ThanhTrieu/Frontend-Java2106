// dinh nghia object literal

// kieu du lieu la object

const car = {}; // object rong
let persons = {
    name: 'Teo',
    age: 20,
    email: 'teo@gmail.com',
    eat: function(food) {
        return food;
    },
    sleep: (time) => {
        return time;
    },
    getName: function() {
        console.log(this);
        // chinh la object dang thao tac
        return this.name; // goi vao thuoc tinh
    },
    getAge: () => {
        // do arrow function no lam lexical con tro this
        console.log(this);
        // doi tuong window
        return this.age; // goi vao thuoc tinh
        // tra ve undefined
    }
};

// name, age, email: eat ==> key
// 'Teo', 20: value
// console.log(typeof persons);
// bo sung thuoc tinh vao trong object
car.name = 'BMW';
car.color = 'white';
car.weight = 500;
console.log(car);

// truy cap vao thuoc tinh hay phuong thuc cua object
// nameObject.key || nameObject[key];
console.log(persons.name, persons['name']);
let time = persons.sleep(23);
console.log(time);

let myName = persons.getName();
let age = persons.getAge();
console.log(myName, age);

// duyet qua object
// for ... in
for(let i in car) {
    console.log(car[i]); // value
    console.log(i); // key
}

// ket hop array vs object
let students = [
    {
        id: 1,
        name: 'A',
        age: 22,
        address: 'HN',
        money: 1000
    },
    {
        id: 2,
        name: 'B',
        age: 20,
        address: 'BN',
        money: 1500
    },
    {
        id: 3,
        name: 'C',
        age: 21,
        address: 'HD',
        money: 2000
    }
]; // chua nhieu thong tin cua nhieu ban sinh vien

// hien thi tat ca ten cua cac ban sinh vien ???
/*
for(let i = 0; i < students.length; i++) {
    console.log(students[i]['name']);
}
*/

// map chi ranh cho array
students.map((item, index) => {
    console.log(item.name);// A,B,C
    console.log(index); // 0,1,2
});

// lay ra toan bo thong tin cua sinh vien co id = 2;
//let info = students.map( item => item.id === 2);
//console.log(info);

let info = students.find(item => item.id === 2);
console.log(info);
// find : tra ve ket qua tim kiem dau tien (tra ve duy nhat 1 thong)

// lay ra toan bo thong tin cua sinh vien co id lon hon hoac bang 2
let info2 = students.filter( item => item.id >= 2);
console.log(info2);

let { x, y} = { x: 10, y: 20 };
console.log(x,y);

let [a,b,c] = [10,20,30]; // Name[a]
console.log(a,b,c);