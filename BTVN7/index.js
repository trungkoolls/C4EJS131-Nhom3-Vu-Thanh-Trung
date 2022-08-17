// B1: Tạo 2 biến a, b có giá trị lần lượt là 10, 15. Kiểm tra nếu a lớn hơn b.
let a = 10;
let b = 15;

if (a > b) {
  console.log("a =", a, "lớn hơn b =", b);
} else {
  if (a < b) {
    console.log("a =", a, "nhỏ hơn b =", b);
  } else console.log("a = b =", a);
}

// B2: Kiểm tra a có giá trị bằng "10" hay ko và in ra kết quả.
if (a == "10") {
  console.log("a có giá trị bằng 10");
} else console.log("a không có giá trị bằng 10");

// B3: Kiểm tra a có giá trị bằng "10" hay ko (so sánh cả kiêu dữ liệu) và in ra kết quả.
if (a === "10") {
  console.log("a có giá trị bằng 10");
} else console.log("a không có giá trị bằng 10");

// B4: Cho x = "5" và y = 6, so sánh giá trị x !== y và cho ra kết quả.
let x = "5";
let y = 6;
console.log(x !== y);
