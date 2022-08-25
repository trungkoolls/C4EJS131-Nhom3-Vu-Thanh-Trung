// Write function to insert element at index of array.
// Input: ([21, 4, 5, -1] 3, 99) // (array, index, element)
// Output: [21 ,4 ,5 ,99, -1]

let input = [21, 4, 5, -1];

function insert(a, index, element) {
  let temp = [];
  temp = a;
  let tempA = [];
  let tempB = [];

  for (i = 0; i < index; i++) {
    tempA.push(a[i]);
  }

  tempB.unshift(element);

  for (i = index; i < a.length; i++) {
    tempB.push(a[i]);
  }

  a = [...tempA, ...tempB];
  input = a;
  console.log(input);
}

insert(input, 3, 99);
