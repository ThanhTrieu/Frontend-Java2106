// tim hieu mang trong js
// mang: 1 bien don co the luu tru nhieu gia tri khac nhau
// kieu du lieu: object ==> luu y :khong co kieu du lieu array

// cu phap khai bao mang
let numbers = new Array(1,2,3,4,5,6,7,8,9);
let myNumbers = [1,2,3,4,5,6,7,8,9]; // hay dc dung - short syntax
// key - vi tri cua phan tu trong mang : luon luon bat dau tu 0 (tu dong dong tao ra va sap xep theo thu tu)
// element: gia tri cua phan tu trong mang

// truy cap vao 1 phan tu trong mang
// cu phap : nameArray[key];
console.log(myNumbers[3]); // ???

let numbers2 = [1,2,3,['cam', 'quyt', 'mit'],9,10];
// in ra man hinh console tu mit ???
// cu phap : nameArray[key];
console.log(numbers2[3][2]);
console.log(numbers2.length); // dem so luong phan tu : 6

// duyet mang
let myNumbers2 = [1,2,3,4,5,6,7,8,9];
// 1 - for
for(let i = 0; i < myNumbers2.length; i++) {
    // bien i - bien chay dai dien cho vi tri phan tu trong mang
    console.log(myNumbers2[i]);
}
// 2 - forEach
myNumbers2.forEach(function(e,i,a) {
    // tham so truyen vao forEach la 1 ham : callback function
    // e: gia tri phan tu
    // i: vi tri cua phan tu trong mang (tham so ko bat buoc)
    // a: mang ban dau (tham so khong bat buoc)
    console.log(`gia tri : ${e} - vi tri : ${i}`);
});

// 3 - for ...of : danh cho array
for(let j of myNumbers2) {
    console.log(j);
    // gia tri phan tu
    // khong quan tam den key cua mang
}

// cac phuong thuc (ham) co san lam viec voi mang

let myArray = [1,2,3,4,5,6,7,8,9];
// them gia tri 10 vao cuoi mang
myArray.push(10);
console.log(myArray);

// xoa phan tu cuoi cung cua mang va lay ra phan tu do
let lastEl = myArray.pop();
console.log(lastEl);
console.log(myArray);

// them phan tu vao dau mang
myArray.unshift(lastEl);
console.log(myArray);

// xoa phan tu dau tien cua mang va lay ra phan tu do
let firstEl = myArray.shift();
console.log(firstEl);
console.log(myArray);

let search = myArray.indexOf(5,3); // tim phan tu co gia tri la so 5 co nam trong mang ko?
console.log(search);// 4 ??? vi tri ; tra ve -1 ko tim thay

let search2 = myArray.lastIndexOf(5,3); // tim phan tu co gia tri la so 5 co nam trong mang ko?
console.log(search2);//

let myArray2 = [1,2,3,4,5,6,7,8,9];
// tach mang
let childArr = myArray2.slice(2,6); // [??????]
console.log(childArr);
console.log(myArray2);

// thay the phan tu trong mang
myArray2.splice(4,3,100,200,300);
console.log(myArray2);

// chuyen mang ve chuoi
let str1 = myArray2.join('-');
let str2 = myArray2.toString(); // tra ve mac dinh, cac phan tu cach nhau dau phay
console.log(str1, str2);

// kiem tra array
if(Array.isArray(myArray2)){
    console.log('OK');
} else {
    console.log('NO');
}

// sap xep mang
let randomArr = [100,1,99,10,3,6,5,98];
// sap xep theo trat tu tang dan gia tri cac phan tu
randomArr.sort(function(b, a){
    // tham so truyen vao ham sort la 1 ham : callback function
    return b - a;
    // b : so bi tru
    // a : so tru
});
console.log(randomArr);

let randomArr2 = [100,1,99,10,3,6,5,98,81,25,16,9]; // input
// viet ham tra ve 1 mang chua toan cac so chinh phuong ???

// viet ham kiem tra so chinh phuong
let kiemTraSoCP = (n) => Number.isInteger(Math.sqrt(n));

function layRaMangSoCP(arrNumber = []) {
    let result = [];
    arrNumber.forEach(function(e) {
        if(kiemTraSoCP(e)){
            result.push(e) 
        }
    });
    return result;
}
console.log(layRaMangSoCP(randomArr2));

let randomArr3 = [100,1,3,99,10,6,5,98,81,25,16,9];
// kiem tra so 3 co nam trong mang ko ?
// neu co cat mang con tu vi tri cua so 3 do cho den het  mang
// neu khong co thi them chinh no vao cuoi mang va thay the 3 phan tu truoc no bang cac gia tri khong ton tai trong mang
// viet ham xu ly
function xuLyMang(arr, n){
    let s = arr.indexOf(n);
    if(s === -1){
        // ko tim thay
        arr.push(n);
        let s1 = arr.lastIndexOf(n);
        arr.splice((s1-3),3,11,33,22);
        return arr;
    } else {
        // tim thay
        let child = arr.slice(s, arr.length);
        return child;
    }
}
console.log(xuLyMang(randomArr3, 3));