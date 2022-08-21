// 5. Cho mảng F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0], tìm ra vị trí thứ 4 của số 1 trong mảng (hint: dùng findIndex)

let F = [1, 23, 41, 5, 6, 1, 14, 66, 1124, 1, 1, 55, 15, 0];

let count = 0;
let index = 0;
for (let i = 0; i < F.length; i++) {
  if (F[i] == 1) {
    count++;
    if (count == 4) {
      index = i;
      break;
    }
  }
}

if (count == 4) {
  console.log("Vị trí thứ 4 của số 1 nằm tại vị trí: F [", index, "]");
} else {
  console.log("Mảng F có ít hơn 4 số 1");
}
