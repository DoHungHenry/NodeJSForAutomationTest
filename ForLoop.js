let arr = [1, 2, 3, 4, 5];

let evenArr= [];
let oddArr= [];


for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2 == 0) {
        evenArr.push(arr[index]);
    } else {
        oddArr.push(arr[index]);
    }
}

console.log("so chan", evenArr);
console.log("so le", oddArr);