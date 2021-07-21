// ham (function) trong js
// 1 - declare function
// module

function sumNumber(a, b = 2) {
  // function : tu khoa bat buoc
  // sumNumber: ten ham (bat buoc)
  // a, b : tham truyen vao ham (khong bat buoc)(khong can tu khoa khai bao)
  return a + b;
  // return : tra ket qua ve cho ham - thoat khoi ham luon
  // luu y dat tu khoa return cho hop voi logic cua ham
  // khong bat buoc phai co return
}

// su dung ham
// 1,2 : tham so thuc - tham so that (gia tri thuc truyen vao)
let result = sumNumber(1, 5);
console.log(result);