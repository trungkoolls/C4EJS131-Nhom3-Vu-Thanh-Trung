let result = document.getElementById("result");
let arr = [];

function laySoTrongKhoangAB() {
  result.innerHTML = "";
  arr = [];
  let a = document.getElementById("numA").value;
  let b = document.getElementById("numB").value;

  if (a < b) {
    for (i = parseInt(a); i < b; i++) {
      if (i > a && i > 1) {
        arr.push(i);
      }
    }
  }

  if (b < a) {
    for (i = parseInt(b); i < a; i++) {
      if (i > b && i > 1) {
        arr.push(i);
      }
    }
  }

  timSoNguyenTo();
}

function timSoNguyenTo() {
  for (i = 0; i < arr.length; i++) {
    for (j = 2; j < arr[i]; j++) {
      if (arr[i] % j == 0) {
        arr.splice(i, 1);
        i--;
        j = 2;
      }
    }
  }

  for (i = 0; i < arr.length; i++) {
    let span = document.createElement("span");
    span.innerText = arr[i] + ", ";
    result.appendChild(span);
  }
}
