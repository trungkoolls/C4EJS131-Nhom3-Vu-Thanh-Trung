// B1: Use for...in loop and recursive to get all key of object

const user = {
  name: "hieu",
  age: 18,
  appearence: {
    hairColor: "black",
    skinColor: "yeallow",
    height: 1700,
    weight: 68,
  },
};

function recursive(Object) {
  for (key in Object) {
    if (typeof key !== "object") {
      console.log(key);
    } else {
      recursive(key);
    }
  }
}

recursive(user);

// Sur thôi, khó quá ko làm được, đợi chữa bài xong học theo vậy :'(
