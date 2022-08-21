// 4. Cho mảng E = [1,2,'a', 'b', 'c', 2,4,5], không sử dụng thêm mảng mới, đưa các số về đầu mảng và các chữ về cuối mảng, sử dụng các hàm pop, push, shift, unshift

let E = [1, 2, "a", "b", 2, "c", 4, 5];

function sort() {
  for (let i = 0; i < E.length; i++) {
    if (typeof E[i] === "number") {
      let temp = E[i];
      E.splice(i, 1);
      E.unshift(temp);
    }
  }
}

sort();
console.log(E);
