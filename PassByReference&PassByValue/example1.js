var a=5;          
var b=a;         // pass by value means we copy the value and create the value somewhere in the memory
b++;
console.log(b);   //6
console.log(a);   //5


let obj1={
    name:'Aakib',
    password:1234
}
let obj2=obj1;
obj2.password=4321;

console.log(obj2);   //{ name: 'Aakib', password: 4321 }
console.log(obj1);   //{ name: 'Aakib', password: 4321 }
