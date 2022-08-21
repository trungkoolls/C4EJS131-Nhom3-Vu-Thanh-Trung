// 1. Cho mảng A = [5,4,7,8,10,20,1], output -> [1,4,5,7,8,10,20] (hint: sử dụng hàm Array.sort)

let A = [5, 4, 7, 8, 10, 20, 1];

A.sort(function (a, b) {
  return a - b;
});

console.log(A);
