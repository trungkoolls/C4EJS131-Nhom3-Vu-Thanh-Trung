// Create delete button and append to each list item
let listItems = document.getElementsByTagName("li");
for (item of listItems) {
  createDeleteBtn(item);
}

// Function to create delete button and append to list item
function createDeleteBtn(item) {
  let span = document.createElement("SPAN");
  span.innerText = "delete";
  span.className = "deleteBtn";
  item.appendChild(span);

  let deleteBtn = document.getElementsByClassName("deleteBtn");
  for (i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
    };
  }
}

// Click on add button to add a list item
function addAnListItem() {
  let addInput = document.getElementById("addInput");
  if (addInput.value === "") {
    alert("Xin hãy nhập tên sách");
  } else {
    let myUL = document.querySelector("ul");
    let newBook = document.createElement("li");
    newBook.innerText = addInput.value;
    myUL.appendChild(newBook);
    createDeleteBtn(newBook);
  }
}

// Search the list when an value is type to search Input
function searchList(value) {
  for (item of listItems) {
    let itemTxt = removeVietnameseTones(item.innerText.toLowerCase());
    let valueTxt = removeVietnameseTones(value.toLowerCase());

    if (!itemTxt.includes(valueTxt)) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  }
}

// Function to remove Vietnamese tones
function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");

  return str;
}
