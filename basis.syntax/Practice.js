let arr = [1,2,3,4,5,6];

let oddArr = [];
let evenArr = [];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
        evenArr.push(element);
    } else {
        oddArr.push(element);
    };
};

console.log(oddArr);
console.log(evenArr);