// 2. Cho mảng B = [1,2,'a',{}, 'b', 'c', 2,4,5], output -> mảng C = [1,2,2,4,5]

let B = [1, 2, "a", {}, "b", "c", 2, 4, 5];
let C = [];

function sort(value) {
  if (typeof value === "number") {
    C.push(value);
  }
}

B.forEach(sort);

console.log(C);
