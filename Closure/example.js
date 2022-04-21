/* Closure is the combination of a function together with reference to its lexical envirnoment.
In other words closure give you the access to an outer function scope from inner function.
Closure are created every time a fuction is created,at a function creation time.*/

function a(){
    let granpa='granpa';
    return function b(){
        let father="father";
        return function c(){
            let son='son';
            return console.log(`${granpa}>${father}>${son}`);
        }
    }
}
a()()();

/* In that example first we invoke a() the execution context is created in the stack and for a() function
 the variable environment is created in the execution context so when a() pop from the stack then the variable
 environment variable goes into the closure so that why we access those variable which is not present in the 
 c() function scope  */