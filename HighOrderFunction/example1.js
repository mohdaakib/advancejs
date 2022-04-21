// Q: why in javascript fuction are first class citizen?
// Ans:
// 1-function can be assign to variable or property of object

const { isFunctionExpression } = require("typescript");

var a= function(){};

// 2-We can pass a function as a parameter to another function

function a(){
    fx();
}
a(function(){console.log('hii there')});

// 3-We can return a function as a value from another function

function b(){
    return function(){
        console.log(bye);
    }
}
b()();