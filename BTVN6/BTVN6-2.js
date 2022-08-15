// Cho 1 chuỗi: "Hôm nay ngày thứ 7"
// 1. --> "hôm nay Ngày thứ 7"
// 2. --> "hômnay ngày thứ 8"

let str = "Hôm nay ngày thứ 7";

// 1.
let str1 = str.charAt(0).toLowerCase(); // "h"
let str3 = str.charAt(8).toUpperCase(); // "N"
let str2 = str.slice(1, 8); // "ôm nay "
let str4 = str.slice(9, 18); // "gày thứ 7"

let result1 = str1.concat(str2, str3, str4);
console.log(result1);

// 2.
let str5 = str.slice(1, 3);
let str6 = str.slice(4, 17);

let result2 = str1.concat(str5, str6, "8");
console.log(result2);
