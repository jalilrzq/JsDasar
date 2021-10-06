// Matrux Generator
//
// Description
// 1. Matrix Generator merupakan sebuah fungsi yang menerima input berupa string
// 2. Fungsi akan mengembalikan sebuah array multidimensi

function matrixGenerator(str) {
  // your code here
  let result = [];
  let jumlahArr = 1;
  for (let h = 1; h < str.length; h++) {
    if (h * h >= str.length) {
      jumlahArr = h;
      break;
    }
  }

  let selisih = jumlahArr * jumlahArr - str.length;
  let indexStr = 0;
  for (let i = 1; i <= jumlahArr; i++) {
    let tempArr = [];
    for (let j = 1; j <= jumlahArr; j++) {
      if (tempArr.length + 1 < jumlahArr) {
        if (selisih > 0) {
          tempArr.push('*');
          selisih--;
        } else {
          tempArr.push(str[indexStr]);
          indexStr++;
        }
      } else {
        result.push(tempArr);
        if (selisih > 0) {
          tempArr.push('*');
          selisih--;
        } else {
          tempArr.push(str[indexStr]);
          indexStr++;
        }
      }
    }
  }
  return result;
}

// Driven Code

console.log(matrixGenerator('abcdefghi')); 
// [ [ '*', 'a', 'b' ], [ 'c', 'd', 'e' ], [ 'f', 'g', 'h' ] ]

console.log(matrixGenerator('pq98d327b5c3v'));
// [
//   [ '*', '*', '*', 'p' ],
//   [ 'q', '9', '8', 'd' ],
//   [ '3', '2', '7', 'b' ],
//   [ '5', 'c', '3', 'v' ] 
// ]

console.log(matrixGenerator('q289c370bcq2f98fdg89'));
// [
//   [ '*', '*', '*', '*', '*' ],
//   [ 'q', '2', '8', '9', 'c' ],
//   [ '3', '7', '0', 'b', 'c' ],
//   [ 'q', '2', 'f', '9', '8' ],
//   [ 'f', 'd', 'g', '8', '9' ]
// ]

console.log(matrixGenerator('p23f4793847f9834jd983274t0'));
// [
//   [ '*', '*', '*', '*', '*', '*' ],
//   [ '*', '*', '*', '*', 'p', '2' ],
//   [ '3', 'f', '4', '7', '9', '3' ],
//   [ '8', '4', '7', 'f', '9', '8' ],
//   [ '3', '4', 'j', 'd', '9', '8' ],
//   [ '3', '2', '7', '4', 't', '0' ]
// ]