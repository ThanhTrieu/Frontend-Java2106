// phan biet tu khoa var + let + const

// const khai bao hang so : gia tri hang so khong duoc phep thay doi
// var + let dung khai bao bien
// tu khoa let tu phien ES6 tro len moi dc ho tro
// tu khoa var cac phien ban deu ho tro nhung tu phien ban ES6 tro len khuyen khich
// khong dung tu khoa var nua
// phien ban Javascript(ES) thi phai tuong thich voi trinh duyet va duoc trinh duyet ho tro thi moi dung

// su khac biet giua var + let
var name = 'Teo';
var name = 'Ty'; // duoc phep dinh nghia lai bien da ton tai
console.log(name); // Ty

let age = 20; // toan cuc

// let age = 30; // khong duoc phep dinh nghia la bien da ton tai
// console.log(age); // ???

// tu khoa let : pham vi hoat dong phu thuoc vao cap ngoac nhon gan nhat bao lay no (chua xet den viec su dung ham)
if(true){
  // dieu kien luon luon dung
  let age = 40; // bien moi hoan toan - khong phai la bien age = 20 o ben tren
  if(age < 50){
    let age = 60; // bien moi
    console.log(age); // 60
  }
  console.log(age); // 40
}
console.log(age); // 20

// tu khoa var co pham vi hoat dong phu thuoc vao ham bao lay no
// vi khong co function(ham) nen bien la toan cuc va da bi dinh nghia lai
var year = 20;
if(true){
  var year = 10;
  if( year > 5){
    var year = 5;
    console.log(year); // 5
  }
  console.log(year); // 5
}
console.log(year); // 5
// trong fuction (ham) : tu khoa var co khai niem hositing
// trong ham : khi khai bao bien voi tu khoa var - hay khai bao no o dau ham


// cac bieu thuc dieu kien co ban !
if(year == 9) {
  console.log('Yes');
} else {
  console.log('No');
}

if(year == 1) {
  // do something
} else if(year == 2) {
  // do something
} else if(year == 3) {
  // do some thing
} else if(year == 5) {
  // do some thing
} else {
  // do something
}
// khong dung if...else if ... : long nhau qua ba 3 lan
// nen dung switch ... case
switch(year) {
  case 1:
    // do something
  break;
  case 2:
    // do something
  break;
  default:
    // do something
  break;
}

// cac vong lap
// 1 - for
for(let i = 1; i < 10; i++){
  console.log(i); //
}

// 2 - while
let j = 1;
// luon luon kiem tra dieu kien truoc - truoc khi thuc thi vong lap
// 0 - n
while( j < 31) {
  // dieu kien sai : thoi vong lap
  console.log(j);
  j++;
}

// 3 - do ... while
// kiem tra dieu kien sau - luon luon thuc thi it nhat 1 vong lap
// 1 - n
let k = 1;
do {
  console.log(k);
  k++; // tang len 1 don vi
} while( k < 20);

// lam quen cac toan tu
let  n1 = 10; // number
let n2 = '10'; // string (number string - trong chuoi chi chua so)
let n3 = n2 + n1; // phep cong toan hoc hay la phep ghep chuoi

let n4 = n2 - n1; // phep tru toan hoc ko ???
console.log(n3, typeof n3); // ?
console.log(n4, typeof n4); // ?
// trong thuc the : dam bao la number het thi moi tinh toan so hoc

let checking = false; // boolean
// == so sanh tuong doi , chi so sanh ve gia tri
// === so sanh tuyet doi, so sanh ve gia tri va kieu du lieu
// ve mat gia tri false == '' == 0
let checking2 = true;
// ve mat gia tri true == 1
if(checking2 == 1) {
  console.log('AAAA'); //ok
} else {
  console.log('BBBB');
}

// toan tu dieu kien
let u = 10;
let v = 9;
let t = ((u-v)/(v-u) > u+v) ? (u-v) : ( v-u > u ? v : u);
console.log(t); // ???
// DK ? A : B
// DK true thi nhan A nguoc lai (DK false) nhan B
let t2;
if ((u-v)/(v-u) > u+v) {
  t2 = u - v;
} else {
  t2 = v- u;
}
console.log(t2);

let c1 = 9;
let c2 = 10;

let c3 = (++c1) + (c2++) - (++c2) + (--c1) + (c1++) - (--c2);
//     =   10   +   10   -   12   +   9    + 9    -  11
console.log(c3);
// a++ : tang sau khi tac dong vao a
// ++a : tang truoc khi tac dong vao a