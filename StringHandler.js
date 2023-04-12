// declare string and check length
let myName = "Cu Ti ";
let myFistName = "Nguyen "
console.log(myName);
let myNameLength = myName.length;
console.log(myNameLength);

// declare another string, then chain this with myName
let intro = "My name is: ";
// myName = intro.concat(myName);
// console.log(myName);

// trim
myName = intro.concat(myFistName).concat(myName);
console.log(myName);
console.log(myName.length);
console.log(myName.trim().length);

// split
let splitMyName = myName.split(); // split 
console.log(splitMyName);
console.log(typeof(splitMyName));

let splitMyNameWithEmpty = myName.split("");
console.log(splitMyNameWithEmpty);
console.log(typeof(splitMyNameWithEmpty));

let splitMyNameWithChar = myName.split("a");
console.log(splitMyNameWithChar);
console.log(typeof(splitMyNameWithChar));

