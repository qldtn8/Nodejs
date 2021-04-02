const { setupMaster } = require("cluster");

console.log(Math.round(1.6));   //반올림
console.log(Math.round(1.4));

function sum(a, b) { //매개변수, parameter
    console.log(a + b);
}

sum(2, 4);  //인자, argument

function sum2(a, b) {
    return a + b;   //반환값 존재
}

console.log(sum2(2, 4));