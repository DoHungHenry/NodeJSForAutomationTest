let arr = [1, 2, 3, 4];
let arrStr = ["a", "b", "c"];

arr.push("d"); // add a value into arr.index + 1 
console.log(arr);

arr.pop(); // delete value at last index
console.log(arr);

arr.splice(1, 2); // delete value from index to index
console.log(arr);