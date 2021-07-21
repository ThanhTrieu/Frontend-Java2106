// khai bao bien voi tu khao var
var myName = 'Van Teo';
// var : tu khoa khai bao bien
// myName: tien cua bien
// 'Van Teo' : gia tri gan cho bien
// '='  la toan tu gan gia tri

// khai bao bien bang tu khoa let
let myAge = 20;

// bat thong bao ra ngoai man hinh
// alert('Toi ten la ' + myName); // + toan tu noi chuoi

// hien thi ra ngoai tai lieu html
//document.write('<h2>Nam nay toi '+ myAge +' tuoi</h2>');

// hien thi man hinh console trinh duyet
// dung rat nhieu debug 
// console.log('Ten toi la ' + myName + ' Nam nay toi ' + myAge + ' tuoi');

// khai bao hang so voi tu khoa const
const PI = 3.14;
// hang so : khong duoc phep thay doi truc tiep gia tri cua no trong qua trinh thuc thi
//PI = 3.15; //Uncaught TypeError: Assignment to constant variable.
//console.log(PI);

// di lam quen mot so kieu du lieu co ban
// 1 - Number
let n = 10;
let m = 20;
let c = n + m;
let d = 3.14; // float
// kiem tra kieu du lieu : xem bien co kieu du lieu la gi
console.log(typeof(n), typeof(m), typeof(c));
console.log(typeof d);
// JS khong chia chinh xac thanh cac kieu du lieu ve so nhu cac ngon ngu khac
// tat ca deu hieu chung la number
let e = 10/0; // van la kieu Number
console.log(e, typeof e);

let u = 100 - 'abc10';// NaN : not a number - van la kieu du lieu number
console.log(u, typeof u);

// 2 - string: dung dau nhay don hay nhay kep hay dau `
let str = 'Dang hoc js';
let number = "1000";
let str2 = `dang hoc js toi phan ${number}`; // duoc phep truyen bien vao chuoi
console.log(typeof str, typeof number);
console.log(str2);

// 3 - boolean // chi co 2 gia tri true or false
let check = true;
let check2 = false;
console.log(typeof(check, check2));

// 4 - undefined - khi chua gan gia tri
let myEmail;
console.log(myEmail, typeof myEmail);

// 5 - null - object
let address = null;
console.log(address, typeof address);

// con 3 kieu nua object - bigInt - Symbol
// tong cong 8 kieu du lieu trong js

