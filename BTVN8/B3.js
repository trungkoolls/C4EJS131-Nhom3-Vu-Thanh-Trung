// 3. Cho mảng D = [1,4,10,100,50,69, 96], output -> số lớn nhất trong mảng, số nhỏ nhất trong mảng

let D = [1, 4, 10, 100, 50, 69, 96];

let min = 0;
let max = 0;

function findMin(value) {
  if (value < min || !D.includes(min)) {
    min = value;
  }
}

function findMax(value) {
  if (value > max || !D.includes(max)) {
    max = value;
  }
}

D.forEach(findMin);
D.forEach(findMax);

console.log("Số nhỏ nhất =", min, "| Số lớn nhất =", max);
