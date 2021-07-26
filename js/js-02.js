// tiep tuc ve function js

// hoi ham ra su dung
// let check = kiemTraChanLe(10);
// console.log(typeof check, check);

// function literals(Anonymous Function) 
// function expressions
let kiemTraChanLe = function(number) {
    if(number % 2 === 0) {
        return true;
    }
    return false;
}
// quy tac dat ten bien hay ten ham trong JS
// chu cai cua tu dau tien viet thuong, chu cai dau tien cua cac tu tiep theo viet hoa

// declare function
function kiemTraChanLeV2(n) {
    if(n % 2 === 0) {
        return true;
    }
    return false;
}


// arrow function
// cu phap ho tro cua arrow
let kiemTraChanLeV3 = (n) => n % 2 === 0;
let t = kiemTraChanLeV3(10);
console.log(typeof t, t);

// tu 1 - 100 co bao nhieu so nguyen to ==> viet ham xu ly
// cv : 1 - can viet ham kiem tra xem 1 so co phai la so nguyen to
// cv: loi dung cv 1 da xu ly xong de giai quyet viec dem co bao so nguyen to
let kiemTraSoNT = (n) => {
    // so nguyen to : la so chia het cho 1 va chinh no
    // so nguyen to thi tinh tu so 2 tro di
    // cac so nho hon bang 1 ko phai
    // kiem tra tu 2 cho toi can bac hai cua so can kiem tra , neu trong pham vi do so can kiem tra ko duoc phep chia het cho bat ky so nao =>> so Nguyen To
    if(n <= 1){
        return false;
    }

    if(n === 2) {
        return true;
    }

    for(let i = 2; i<= Math.sqrt(n); i++){
        if(n % i === 0){
            return false; // thoat luon vong lap for va thoat khoi ham luon
        }
    }

    return true;
}

function demSoNT(i = 1, j = 100) {
    // xu ly
    let count = 0;
    for(n = i; n <= j; n++) {
        if(kiemTraSoNT(n)){
            count++;
        }
    }
    return count;
}

function hienThiSoNT(i = 1, j = 100) {
    // tra ve chuoi cac so nguyen to, cac co cach nhau boi dau ,
    let result = '';
    for(let m = i; m <= j; m++) {
        if(kiemTraSoNT(m)) {
            result += result === '' ? m : `,${m}`; // ghep chuoi - noi chuoi
        }
    }
    return result;
}

let c = demSoNT(1, 10);
console.log(`tu 1 cho toi 10 co ${c} so nguyen to`);

let tt = hienThiSoNT(1,10);
console.log(`tu 1 toi 10 co nhung so sau la so nguyen to : ${tt}`);