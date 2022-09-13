numberOneTriangle(5);

function numberOneTriangle(value) {
  let partTriangle = "";
  for (i = 0; i < value; i++) {
    partTriangle = partTriangle.concat("*");
    console.log(partTriangle);
  }
}
