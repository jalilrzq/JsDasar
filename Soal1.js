// Deret Prima
// 
// Contoh Case
// ===========
// input: 10
// output: [ 2, 3, 4, 5, 7]

function prime(num) {
  // your code here
  let result = [];
  for (let i = 2; i <= num; i++) {
    let isPrima = true;
    for (let j = 2; j <= i; j++) {
      if (j !== i && i % j === 0) {
        isPrima = false;
        break;
      }
    }
    if (isPrima) {
      result.push(i);
    }
  }
  return result;
}

// Test Case
console.log(prime(10)); // [ 2, 3, 5, 7 ]
console.log(prime(27)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(prime(30)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]
console.log(prime(41)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41 ]