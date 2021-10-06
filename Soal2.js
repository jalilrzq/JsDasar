// Slice and Dice
// 
// Diberikan sebuah function bernama slice dimana function 
// 
// RULES: 
// Dilarang menggunakan built in function selain .push
// 

function slice(data, index) {
  // Your code here
  let result = [];
  let indexAwal = index[0];
  let indexAkhir = !index[1] ? data.length : index[1];
  if (!indexAwal) {
    return data;
  }
  for (let i = 0; i < data.length; i++) {
    if (i >= indexAwal && i < indexAkhir) {
      result.push(data[i]);
    }
  }
  return result;
}

// Driver Code
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [2])); // ['camel', 'duck', 'elephant']
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [2, 4])); // ['camel', 'duck']
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [1, 5])); // ['bison', 'camel', 'duck', 'elephant']
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [])); // ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [20])); // []