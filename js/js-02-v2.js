// lam quen doi tuong number
// kieu du lieu la Number
//let n1 = prompt('nhap so thu nhat');
//n1 = Number.parseInt(n1); // ep ve so nguyen

//let n2 = prompt('nhap so thu hai');
//n2 = Number.parseFloat(n2); // ep ve so thuc

//let sum = n2 + n1; // phep noi - chuoi
// console.log(typeof(n1), typeof(n2));
// alert(`Tong 2 so ${n1} va ${n2} = ${sum}`);

let n3 = ''; // string
if(Number.isInteger(n3)){
    // kiem tra so nguyen:
    // kieu du lieu la Number va gia tri la so nguyen
    console.log('Y');
} else {
    console.log('N');
}

if(!isNaN(n3) && n3 !== ''){
    // kiem tra chuoi so
    console.log('A');
} else {
    console.log('B');
}